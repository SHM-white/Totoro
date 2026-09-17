[CmdletBinding()]
param(
    [ValidateRange(1, 65535)]
    [int]$Port = 3000,

    [switch]$SkipBrowser,

    [switch]$SkipDebugger
)

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
Set-Location -LiteralPath $PSScriptRoot
$debuggerProcess = $null
$workerProcess = $null
$dockerCommand = $null
$redisContainerName = 'totoro-local-redis'
$redisStartedHere = $false
$toolsRoot = Join-Path $PSScriptRoot '.local-tools'

# Node.js and Docker Desktop must be installed manually (see README.md);
# everything below only reports them. pnpm is installed or upgraded when needed.
# pnpm 11 is the first release that reads 'allowBuilds' from pnpm-workspace.yaml.
$minimumPnpmVersion = [version]'11.0.0'
# Pinned so '--frozen-lockfile' keeps working; verified against lockfileVersion 9.0.
$pnpmInstallVersion = '12.4.2'
$fallbackNpmRegistry = 'https://registry.npmmirror.com'

function Stop-LocalServices {
    if (($null -ne $workerProcess) -and (-not $workerProcess.HasExited)) {
        Stop-Process -Id $workerProcess.Id -ErrorAction SilentlyContinue
    }
    if ($redisStartedHere -and ($null -ne $dockerCommand)) {
        & $dockerCommand.Source stop --time 5 $redisContainerName 2>$null | Out-Null
    }
}

function Invoke-DockerProbe([string[]]$Arguments) {
    $savedPreference = $ErrorActionPreference
    $ErrorActionPreference = 'Continue'
    try {
        $output = & $dockerCommand.Source @Arguments 2>$null
        return @{ ExitCode = $LASTEXITCODE; Output = $output }
    } finally {
        $ErrorActionPreference = $savedPreference
    }
}

function Get-PnpmVersion([string]$PnpmPath) {
    $savedPreference = $ErrorActionPreference
    $ErrorActionPreference = 'Continue'
    try {
        $raw = & $PnpmPath --version 2>$null | Select-Object -First 1
    } finally {
        $ErrorActionPreference = $savedPreference
    }
    if ([string]::IsNullOrWhiteSpace($raw)) {
        return $null
    }
    $parsed = $null
    if (-not [version]::TryParse(([string]$raw).Trim(), [ref]$parsed)) {
        return $null
    }
    return $parsed
}

# Installs the pinned pnpm with npm. The default registry is tried first; the
# npmmirror fallback keeps the one-click script working where registry.npmjs.org
# is unreachable.
function Install-PnpmPackage([string]$NpmPath) {
    foreach ($registry in @($null, $fallbackNpmRegistry)) {
        $arguments = @('install', '--global', '--no-fund', '--no-audit', "pnpm@$pnpmInstallVersion")
        if ($null -eq $registry) {
            Write-Host "[Totoro] Installing pnpm $pnpmInstallVersion with npm..."
        } else {
            Write-Host "[Totoro] npm could not reach the default registry; retrying with $registry..." -ForegroundColor Yellow
            $arguments += "--registry=$registry"
        }
        $savedPreference = $ErrorActionPreference
        $ErrorActionPreference = 'Continue'
        try {
            & $NpmPath @arguments
            $exitCode = $LASTEXITCODE
        } finally {
            $ErrorActionPreference = $savedPreference
        }
        if ($exitCode -eq 0) {
            return $true
        }
    }
    return $false
}

# Returns the pnpm command to use, installing or upgrading it when it is missing
# or older than $minimumPnpmVersion.
function Resolve-PnpmCommand([string]$NpmPath) {
    $candidate = Get-Command pnpm -ErrorAction SilentlyContinue
    if ($null -ne $candidate) {
        $version = Get-PnpmVersion $candidate.Source
        if (($null -ne $version) -and ($version -ge $minimumPnpmVersion)) {
            Write-Host "[Totoro] pnpm $version detected." -ForegroundColor Green
            return $candidate
        }
        if ($null -eq $version) {
            Write-Host '[Totoro] The installed pnpm did not report a version; reinstalling it.' -ForegroundColor Yellow
        } else {
            Write-Host "[Totoro] pnpm $version is older than the required $minimumPnpmVersion; upgrading it." -ForegroundColor Yellow
        }
    } else {
        Write-Host '[Totoro] pnpm was not found; installing it.' -ForegroundColor Yellow
    }

    if ([string]::IsNullOrWhiteSpace($NpmPath)) {
        throw @"
pnpm $minimumPnpmVersion or newer is required, and npm is needed to install it automatically.
Reinstall Node.js from https://nodejs.org/ (it bundles npm; see README.md), then run this script again.
"@
    }

    if (-not (Install-PnpmPackage -NpmPath $NpmPath)) {
        throw @"
Installing pnpm $pnpmInstallVersion automatically failed.
Install it manually with 'npm install --global pnpm@$pnpmInstallVersion',
or follow https://pnpm.io/installation, then run this script again.
"@
    }

    # npm writes the shim into its global prefix. Put that directory first so a
    # stale pnpm.exe elsewhere on PATH cannot shadow the fresh install.
    $globalBinOutput = & $NpmPath prefix --global 2>$null | Select-Object -First 1
    $globalBin = if ($null -ne $globalBinOutput) { ([string]$globalBinOutput).Trim() } else { '' }
    if (-not [string]::IsNullOrWhiteSpace($globalBin)) {
        if (($env:PATH -split ';') -notcontains $globalBin) {
            $env:PATH = "$globalBin;$env:PATH"
        }
    }

    $resolved = Get-Command pnpm -ErrorAction SilentlyContinue
    $resolvedVersion = if ($null -ne $resolved) { Get-PnpmVersion $resolved.Source } else { $null }
    if (($null -eq $resolvedVersion) -or ($resolvedVersion -lt $minimumPnpmVersion)) {
        throw @"
pnpm was installed, but version $minimumPnpmVersion or newer still cannot be found on PATH.
Install it manually with 'npm install --global pnpm@$pnpmInstallVersion', then run this script again.
"@
    }
    Write-Host "[Totoro] pnpm $resolvedVersion installed." -ForegroundColor Green
    return $resolved
}

# frida ships its native addon as a prebuilt binary that 'frida/scripts/install.js'
# downloads from GitHub Releases and extracts to 'build/frida_binding.node'.
# Yarn only runs that install script while adding the package, so a first install
# that fails (offline GitHub, interrupted 40 MB download) leaves a node_modules
# tree that yarn considers complete, but that crashes WMPFDebugger at startup with
# 'Could not locate the bindings file'. Re-running the installer repairs it.
function Install-FridaNativeBinding {
    param(
        [string]$BindingPath,
        [string]$InstallerPath,
        [string]$FridaRoot,
        [string]$BinRoot,
        [string]$NodePath
    )

    $fridaPackage = Get-Content -LiteralPath (Join-Path $FridaRoot 'package.json') -Raw | ConvertFrom-Json
    $napiVersion = if ($fridaPackage.binary.napi_versions) { $fridaPackage.binary.napi_versions[0] } else { 8 }
    $architecture = switch ($env:PROCESSOR_ARCHITECTURE) {
        'ARM64' { 'win32-arm64' }
        'x86' { 'win32-ia32' }
        default { 'win32-x64' }
    }
    $downloadUrl = "https://github.com/frida/frida/releases/download/$($fridaPackage.version)/frida-v$($fridaPackage.version)-napi-v$napiVersion-$architecture.tar.gz"

    $savedPath = $env:PATH
    $savedLogLevel = $env:npm_config_loglevel
    $env:PATH = "$BinRoot;$env:PATH"
    # prebuild-install reports download progress only at the info level.
    $env:npm_config_loglevel = 'info'
    try {
        for ($attempt = 1; $attempt -le 3; $attempt++) {
            Write-Host "[WMPF] Downloading the frida native binding (attempt $attempt of 3, about 40 MB)..."
            # frida's installer exits non-zero when the download fails, so keep the error
            # preference relaxed here and let the file check below decide the outcome.
            # prebuild-install resolves the package to install from the working directory,
            # so run it exactly like Yarn's lifecycle script does: inside the frida package.
            $nativePreference = $ErrorActionPreference
            $ErrorActionPreference = 'Continue'
            Push-Location -LiteralPath $FridaRoot
            try {
                & $NodePath $InstallerPath
            } finally {
                Pop-Location
                $ErrorActionPreference = $nativePreference
            }
            if (Test-Path -LiteralPath $BindingPath) {
                Write-Host '[WMPF] The frida native binding is ready.' -ForegroundColor Green
                return
            }
            if ($attempt -lt 3) {
                Write-Host '[WMPF] The download did not complete; retrying...' -ForegroundColor Yellow
                Start-Sleep -Seconds 2
            }
        }
    } finally {
        $env:PATH = $savedPath
        $env:npm_config_loglevel = $savedLogLevel
    }

    throw @"
The frida native binding could not be installed, and WMPFDebugger cannot start without it.
Missing file: $BindingPath
Download $downloadUrl
then extract 'build/frida_binding.node' from that archive to the path above and run this script again.
GitHub Releases must be reachable; a proxy or VPN may be required.
"@
}

trap {
    Stop-LocalServices
    if (($null -ne $debuggerProcess) -and (-not $debuggerProcess.HasExited)) {
        Stop-Process -Id $debuggerProcess.Id -ErrorAction SilentlyContinue
    }
    throw $_
}

Write-Host '[Totoro] Checking the local environment...'
try {
    $nodeCommand = Get-Command node -ErrorAction Stop
} catch [System.Management.Automation.CommandNotFoundException] {
    Write-Host 'Node.js is required.' -ForegroundColor Red
    Write-Host 'Install Node.js from https://nodejs.org/ (see README.md), then run this file again.'
    Read-Host 'Press Enter to close'
    exit 1
}

$nodeVersion = [version]((& $nodeCommand.Source --version).TrimStart('v'))
$minimumNodeVersion = if ($SkipDebugger) { [version]'20.9.0' } else { [version]'22.0.0' }
if ($nodeVersion -lt $minimumNodeVersion) {
    Write-Host "Node.js $minimumNodeVersion or newer is required; found $nodeVersion." -ForegroundColor Red
    Write-Host 'Upgrade Node.js from https://nodejs.org/ (see README.md), then run this file again.'
    Read-Host 'Press Enter to close'
    exit 1
}

$npmCommand = Get-Command npm -ErrorAction SilentlyContinue
$pnpmCommand = Resolve-PnpmCommand -NpmPath $(if ($null -ne $npmCommand) { $npmCommand.Source } else { $null })

if (-not $SkipDebugger) {
    # Git is a documented prerequisite (see README.md); WMPFDebugger is cloned with it.
    try {
        $gitCommand = Get-Command git -ErrorAction Stop
    } catch [System.Management.Automation.CommandNotFoundException] {
        Write-Host 'Git is required to download WMPFDebugger.' -ForegroundColor Red
        Write-Host 'Install Git from https://git-scm.com/download/win (see README.md), then run this file again.'
        Read-Host 'Press Enter to close'
        exit 1
    }
    try {
        $npxCommand = Get-Command npx -ErrorAction Stop
    } catch [System.Management.Automation.CommandNotFoundException] {
        throw 'npx was not found. Reinstall Node.js (it bundles npx); see README.md.'
    }
    $debuggerRoot = Join-Path $toolsRoot 'WMPFDebugger'
    $debuggerEntry = Join-Path $debuggerRoot 'src\index.ts'
    $tsNodeEntry = Join-Path $debuggerRoot 'node_modules\ts-node\dist\bin.js'
    $debuggerBinRoot = Join-Path $debuggerRoot 'node_modules\.bin'
    $prebuildInstallEntry = Join-Path $debuggerRoot 'node_modules\prebuild-install\bin.js'
    $fridaRoot = Join-Path $debuggerRoot 'node_modules\frida'
    $fridaInstallerEntry = Join-Path $fridaRoot 'scripts\install.js'
    $fridaBindingPath = Join-Path $fridaRoot 'build\frida_binding.node'
    $bundledWmpfConfig = Join-Path $PSScriptRoot 'ops\wmpf\addresses.25560.json'
    $wmpfConfigPath = Join-Path $debuggerRoot 'frida\config\win32\addresses.25560.json'

    New-Item -ItemType Directory -Path $toolsRoot -Force | Out-Null
    if (-not (Test-Path -LiteralPath $debuggerEntry)) {
        Write-Host '[WMPF] Downloading WMPFDebugger...'
        & $gitCommand.Source clone --depth 1 https://github.com/evi0s/WMPFDebugger.git $debuggerRoot
        if ($LASTEXITCODE -ne 0) {
            throw "WMPFDebugger download failed with exit code $LASTEXITCODE."
        }
    }

    if (-not (Test-Path -LiteralPath $wmpfConfigPath)) {
        Write-Host '[WMPF] Installing the WMPF 25560 configuration from PR #279...'
        Copy-Item -LiteralPath $bundledWmpfConfig -Destination $wmpfConfigPath
    }

    $installFailure = $null
    if ((-not (Test-Path -LiteralPath $tsNodeEntry)) -or
        (-not (Test-Path -LiteralPath $fridaInstallerEntry)) -or
        (-not (Test-Path -LiteralPath $prebuildInstallEntry))) {
        Write-Host '[WMPF] Installing WMPFDebugger with its Yarn lockfile...'
        Push-Location -LiteralPath $debuggerRoot
        try {
            & $npxCommand.Source --yes yarn@1.22.22 install --frozen-lockfile
            if ($LASTEXITCODE -ne 0) {
                $installFailure = "WMPFDebugger dependency installation failed with exit code $LASTEXITCODE."
            }
        } finally {
            Pop-Location
        }
    }

    if ($null -ne $installFailure) {
        if ((-not (Test-Path -LiteralPath $tsNodeEntry)) -or
            (-not (Test-Path -LiteralPath $fridaInstallerEntry))) {
            throw $installFailure
        }
        Write-Host "[WMPF] $installFailure The debugger files are present, so the missing frida binding is repaired below." -ForegroundColor Yellow
    }

    if (-not (Test-Path -LiteralPath $fridaBindingPath)) {
        Install-FridaNativeBinding `
            -BindingPath $fridaBindingPath `
            -InstallerPath $fridaInstallerEntry `
            -FridaRoot $fridaRoot `
            -BinRoot $debuggerBinRoot `
            -NodePath $nodeCommand.Source
    }

    $logStamp = Get-Date -Format 'yyyyMMdd-HHmmss'
    $debuggerOutput = Join-Path $toolsRoot "wmpf-debugger-$logStamp.log"
    $debuggerErrors = Join-Path $toolsRoot "wmpf-debugger-$logStamp.error.log"
    Write-Host '[WMPF] Starting WMPFDebugger (README step 2)...'
    $debuggerProcess = Start-Process `
        -FilePath $nodeCommand.Source `
        -ArgumentList @("`"$tsNodeEntry`"", 'src/index.ts') `
        -WorkingDirectory $debuggerRoot `
        -RedirectStandardOutput $debuggerOutput `
        -RedirectStandardError $debuggerErrors `
        -NoNewWindow `
        -PassThru

    $debuggerReady = $false
    for ($attempt = 0; $attempt -lt 150; $attempt++) {
        if ($debuggerProcess.HasExited) {
            $failureDetails = @(
                Get-Content -LiteralPath $debuggerOutput -ErrorAction SilentlyContinue
                Get-Content -LiteralPath $debuggerErrors -ErrorAction SilentlyContinue
            ) -join [Environment]::NewLine
            throw "WMPFDebugger stopped before it was ready.$([Environment]::NewLine)$failureDetails"
        }
        if ((Test-Path -LiteralPath $debuggerOutput) -and
            (Select-String -LiteralPath $debuggerOutput -SimpleMatch '[frida] script loaded' -Quiet)) {
            $debuggerReady = $true
            break
        }
        Start-Sleep -Milliseconds 200
    }

    if (-not $debuggerReady) {
        throw "WMPFDebugger did not become ready. See $debuggerOutput and $debuggerErrors."
    }

    Write-Host 'WMPFDebugger is ready. Now open the target mini program in WeChat.' -ForegroundColor Green
    Write-Host 'After the mini program is fully open, press any key here...'
    [void][Console]::ReadKey($true)

    $devToolsUrl = 'devtools://devtools/bundled/inspector.html?ws=127.0.0.1:62000'
    $browserCandidates = @(
        "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
        "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
        "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
        "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe"
        "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe"
    )
    $chromiumBrowser = $browserCandidates |
        Where-Object { Test-Path -LiteralPath $_ } |
        Select-Object -First 1
    if ($null -eq $chromiumBrowser) {
        throw 'Microsoft Edge or Google Chrome is required to open the mini-program DevTools.'
    }

    Write-Host '[WMPF] Opening the mini-program DevTools (README step 4)...'
    & (Join-Path $PSScriptRoot 'ops\open-wmpf-devtools.ps1') `
        -BrowserPath $chromiumBrowser `
        -DevToolsUrl $devToolsUrl `
        -ToolsRoot $toolsRoot
    Write-Host ''
    Write-Host 'WHERE TO FIND THE TOKEN' -ForegroundColor Cyan
    Write-Host '1. In DevTools, open the Network tab and keep recording enabled.'
    Write-Host '2. In the mini program, log in or refresh/open the home or running page.'
    Write-Host '3. Filter for GetStudentInfoByToken. If absent, try getSunrunPaper or wxxcx.'
    Write-Host '4. Open a request and check Payload for token, or Headers for Authorization.'
    Write-Host '5. Copy only the token value (remove the leading "Bearer ") into Totoro.'
    Write-Host 'Treat this token like a password: do not share, screenshot, or commit it.' -ForegroundColor Yellow
    Write-Host ''
}

$selectedPort = $Port
$portAvailable = $false
while ($selectedPort -le [Math]::Min($Port + 10, 65535)) {
    $listener = [System.Net.Sockets.TcpListener]::new(
        [System.Net.IPAddress]::Loopback,
        $selectedPort
    )
    try {
        $listener.Start()
        $portAvailable = $true
        break
    } catch [System.Net.Sockets.SocketException] {
        $selectedPort++
    } finally {
        $listener.Stop()
    }
}

if (-not $portAvailable) {
    Write-Host "No free port found between $Port and $($Port + 10)." -ForegroundColor Red
    Read-Host 'Press Enter to close'
    exit 1
}

Write-Host '[Totoro] Installing dependencies...'
& $pnpmCommand.Source install --frozen-lockfile --prefer-offline
if ($LASTEXITCODE -ne 0) {
    throw "Dependency installation failed with exit code $LASTEXITCODE."
}

New-Item -ItemType Directory -Path $toolsRoot -Force | Out-Null
if ([string]::IsNullOrWhiteSpace($env:REDIS_URL)) {
    $dockerCommand = Get-Command docker -ErrorAction SilentlyContinue
    if ($null -eq $dockerCommand) {
        throw 'Redis is required. Install Docker Desktop, or set REDIS_URL to an existing Redis server.'
    }
    $dockerInfo = Invoke-DockerProbe @('info', '--format', '{{.ServerVersion}}')
    if ($dockerInfo.ExitCode -ne 0) {
        $dockerDesktop = Join-Path $env:ProgramFiles 'Docker\Docker\Docker Desktop.exe'
        if (-not (Test-Path -LiteralPath $dockerDesktop)) {
            throw 'Docker Desktop is installed but not running. Start it, or set REDIS_URL to an existing Redis server.'
        }
        Write-Host '[Totoro] Starting Docker Desktop for the delayed queue...'
        Start-Process -FilePath $dockerDesktop -WindowStyle Hidden
        for ($attempt = 0; $attempt -lt 60; $attempt++) {
            Start-Sleep -Seconds 1
            $dockerInfo = Invoke-DockerProbe @('info', '--format', '{{.ServerVersion}}')
            if ($dockerInfo.ExitCode -eq 0) { break }
        }
        if ($dockerInfo.ExitCode -ne 0) { throw 'Docker Desktop did not become ready within 60 seconds.' }
    }
    $redisState = Invoke-DockerProbe @('container', 'inspect', '--format', '{{.State.Running}}', $redisContainerName)
    if (($redisState.ExitCode -eq 0) -and ($redisState.Output -ne 'true')) {
        $redisStart = Invoke-DockerProbe @('start', $redisContainerName)
        if ($redisStart.ExitCode -ne 0) {
            & $dockerCommand.Source rm --force $redisContainerName | Out-Null
            $redisState = @{ ExitCode = 1; Output = $null }
        }
    }
    if ($redisState.ExitCode -ne 0) {
        & $dockerCommand.Source run --detach --name $redisContainerName --publish 127.0.0.1::6379 --volume totoro-local-redis-data:/data redis:7-alpine redis-server --appendonly yes | Out-Null
        if ($LASTEXITCODE -ne 0) { throw 'Unable to start the local Redis container.' }
    }
    $redisStartedHere = $redisState.Output -ne 'true'
    $redisPort = Invoke-DockerProbe @('port', $redisContainerName, '6379/tcp')
    if (($redisPort.ExitCode -ne 0) -or ($redisPort.Output -notmatch ':(\d+)$')) {
        throw 'Unable to determine the local Redis port.'
    }
    $env:REDIS_URL = "redis://127.0.0.1:$($matches[1])"
}

Write-Host '[Totoro] Building the production application...'
& $pnpmCommand.Source build
if ($LASTEXITCODE -ne 0) {
    throw "Production build failed with exit code $LASTEXITCODE."
}

$logStamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$workerOutput = Join-Path $toolsRoot "totoro-worker-$logStamp.log"
$workerErrors = Join-Path $toolsRoot "totoro-worker-$logStamp.error.log"
$workerProcess = Start-Process `
    -FilePath $nodeCommand.Source `
    -ArgumentList @('scripts/run-worker.js') `
    -WorkingDirectory $PSScriptRoot `
    -RedirectStandardOutput $workerOutput `
    -RedirectStandardError $workerErrors `
    -WindowStyle Hidden `
    -PassThru
for ($attempt = 0; $attempt -lt 100; $attempt++) {
    if ($workerProcess.HasExited) { break }
    if ((Test-Path -LiteralPath $workerOutput) -and
        (Select-String -LiteralPath $workerOutput -SimpleMatch 'Redis' -Quiet)) { break }
    Start-Sleep -Milliseconds 200
}
if ($workerProcess.HasExited -or
    -not (Select-String -LiteralPath $workerOutput -SimpleMatch 'Redis' -Quiet)) {
    $workerFailure = @(Get-Content $workerOutput -ErrorAction SilentlyContinue; Get-Content $workerErrors -ErrorAction SilentlyContinue) -join [Environment]::NewLine
    throw "Delayed queue Worker failed to start.$([Environment]::NewLine)$workerFailure"
}

$url = "http://127.0.0.1:$selectedPort"
Write-Host "[Totoro] Starting at $url"
Write-Host 'Press Ctrl+C to stop the server.' -ForegroundColor Cyan

$browserJob = $null
if (-not $SkipBrowser) {
    $browserJob = Start-Job -ScriptBlock {
        param([string]$TargetUrl)

        for ($attempt = 0; $attempt -lt 60; $attempt++) {
            try {
                Invoke-WebRequest -Uri $TargetUrl -TimeoutSec 1 -UseBasicParsing | Out-Null
                Start-Process $TargetUrl
                return
            } catch [System.Net.WebException] {
                Start-Sleep -Milliseconds 500
            }
        }
    } -ArgumentList $url
}

try {
    $nextEntry = Join-Path $PSScriptRoot 'node_modules\next\dist\bin\next'
    & $nodeCommand.Source $nextEntry start --hostname 127.0.0.1 --port $selectedPort
    if ($LASTEXITCODE -ne 0) {
        throw "The server exited with code $LASTEXITCODE."
    }
} finally {
    Stop-LocalServices
    if ($null -ne $browserJob) {
        Stop-Job -Job $browserJob -ErrorAction SilentlyContinue
        Remove-Job -Job $browserJob -Force -ErrorAction SilentlyContinue
    }
    if (($null -ne $debuggerProcess) -and (-not $debuggerProcess.HasExited)) {
        Stop-Process -Id $debuggerProcess.Id -ErrorAction SilentlyContinue
    }
}
