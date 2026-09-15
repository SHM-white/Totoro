[CmdletBinding()]
param(
    [ValidateRange(1, 65535)]
    [int]$Port = 3000,

    [switch]$SkipBrowser,

    [switch]$SkipDebugger
)

$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$debuggerProcess = $null

trap {
    if (($null -ne $debuggerProcess) -and (-not $debuggerProcess.HasExited)) {
        Stop-Process -Id $debuggerProcess.Id -ErrorAction SilentlyContinue
    }
    throw $_
}

try {
    $nodeCommand = Get-Command node -ErrorAction Stop
    $pnpmCommand = Get-Command pnpm -ErrorAction Stop
} catch [System.Management.Automation.CommandNotFoundException] {
    Write-Host 'Node.js and pnpm are required.' -ForegroundColor Red
    Write-Host 'Install Node.js 20.9+ and pnpm, then run this file again.'
    Read-Host 'Press Enter to close'
    exit 1
}

$nodeVersion = [version]((& $nodeCommand.Source --version).TrimStart('v'))
$minimumNodeVersion = if ($SkipDebugger) { [version]'20.9.0' } else { [version]'22.0.0' }
if ($nodeVersion -lt $minimumNodeVersion) {
    Write-Host "Node.js $minimumNodeVersion or newer is required; found $nodeVersion." -ForegroundColor Red
    Read-Host 'Press Enter to close'
    exit 1
}

if (-not $SkipDebugger) {
    $gitCommand = Get-Command git -ErrorAction Stop
    $npxCommand = Get-Command npx -ErrorAction Stop
    $toolsRoot = Join-Path $PSScriptRoot '.local-tools'
    $debuggerRoot = Join-Path $toolsRoot 'WMPFDebugger'
    $debuggerEntry = Join-Path $debuggerRoot 'src\index.ts'
    $tsNodeEntry = Join-Path $debuggerRoot 'node_modules\ts-node\dist\bin.js'
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

    if (-not (Test-Path -LiteralPath $tsNodeEntry)) {
        Write-Host '[WMPF] Installing WMPFDebugger with its Yarn lockfile...'
        Push-Location -LiteralPath $debuggerRoot
        try {
            & $npxCommand.Source --yes yarn@1.22.22 install --frozen-lockfile
            if ($LASTEXITCODE -ne 0) {
                throw "WMPFDebugger dependency installation failed with exit code $LASTEXITCODE."
            }
        } finally {
            Pop-Location
        }
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

Write-Host '[Totoro] Building the production application...'
& $pnpmCommand.Source build
if ($LASTEXITCODE -ne 0) {
    throw "Production build failed with exit code $LASTEXITCODE."
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
    & $pnpmCommand.Source start -- --hostname 127.0.0.1 --port $selectedPort
    if ($LASTEXITCODE -ne 0) {
        throw "The server exited with code $LASTEXITCODE."
    }
} finally {
    if ($null -ne $browserJob) {
        Stop-Job -Job $browserJob -ErrorAction SilentlyContinue
        Remove-Job -Job $browserJob -Force -ErrorAction SilentlyContinue
    }
    if (($null -ne $debuggerProcess) -and (-not $debuggerProcess.HasExited)) {
        Stop-Process -Id $debuggerProcess.Id -ErrorAction SilentlyContinue
    }
}
