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
            Write-Host "[Totoro] 正在用 npm 安装 pnpm $pnpmInstallVersion..."
        } else {
            Write-Host "[Totoro] npm 无法访问默认源，改用 $registry 重试..." -ForegroundColor Yellow
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
            Write-Host "[Totoro] 已检测到 pnpm $version。" -ForegroundColor Green
            return $candidate
        }
        if ($null -eq $version) {
            Write-Host '[Totoro] 已安装的 pnpm 无法报告版本，正在重新安装。' -ForegroundColor Yellow
        } else {
            Write-Host "[Totoro] pnpm $version 低于要求的 $minimumPnpmVersion，正在升级。" -ForegroundColor Yellow
        }
    } else {
        Write-Host '[Totoro] 未找到 pnpm，正在安装。' -ForegroundColor Yellow
    }

    if ([string]::IsNullOrWhiteSpace($NpmPath)) {
        throw @"
需要 pnpm $minimumPnpmVersion 或更高版本，且需要 npm 来自动安装。
请从 https://nodejs.org/ 重新安装 Node.js（自带 npm，参见 README.md），然后重新运行本脚本。
"@
    }

    if (-not (Install-PnpmPackage -NpmPath $NpmPath)) {
        throw @"
自动安装 pnpm $pnpmInstallVersion 失败。
请手动执行 'npm install --global pnpm@$pnpmInstallVersion'，
或参考 https://pnpm.io/installation，然后重新运行本脚本。
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
pnpm 已安装，但仍无法在 PATH 中找到 $minimumPnpmVersion 或更高版本。
请手动执行 'npm install --global pnpm@$pnpmInstallVersion'，然后重新运行本脚本。
"@
    }
    Write-Host "[Totoro] pnpm $resolvedVersion 安装完成。" -ForegroundColor Green
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
            Write-Host "[WMPF] 正在下载 frida 原生绑定（第 $attempt/3 次尝试，约 40 MB）..."
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
                Write-Host '[WMPF] frida 原生绑定已就绪。' -ForegroundColor Green
                return
            }
            if ($attempt -lt 3) {
                Write-Host '[WMPF] 下载未完成，正在重试...' -ForegroundColor Yellow
                Start-Sleep -Seconds 2
            }
        }
    } finally {
        $env:PATH = $savedPath
        $env:npm_config_loglevel = $savedLogLevel
    }

    throw @"
frida 原生绑定安装失败，缺少它 WMPFDebugger 无法启动。
缺失文件：$BindingPath
请下载 $downloadUrl
解出其中的 'build/frida_binding.node' 放到上述路径，然后重新运行本脚本。
需要能访问 GitHub Releases，可能需要代理或 VPN。
"@
}

trap {
    Stop-LocalServices
    if (($null -ne $debuggerProcess) -and (-not $debuggerProcess.HasExited)) {
        Stop-Process -Id $debuggerProcess.Id -ErrorAction SilentlyContinue
    }
    throw $_
}

Write-Host '[Totoro] 正在检查本地环境...'
try {
    $nodeCommand = Get-Command node -ErrorAction Stop
} catch [System.Management.Automation.CommandNotFoundException] {
    Write-Host '需要安装 Node.js。' -ForegroundColor Red
    Write-Host '请从 https://nodejs.org/ 安装（参见 README.md），然后重新运行本脚本。'
    Read-Host '按回车键关闭窗口'
    exit 1
}

$nodeVersion = [version]((& $nodeCommand.Source --version).TrimStart('v'))
$minimumNodeVersion = if ($SkipDebugger) { [version]'20.9.0' } else { [version]'22.0.0' }
if ($nodeVersion -lt $minimumNodeVersion) {
    Write-Host "需要 Node.js $minimumNodeVersion 或更高版本；当前为 $nodeVersion。" -ForegroundColor Red
    Write-Host '请从 https://nodejs.org/ 升级 Node.js（参见 README.md），然后重新运行本脚本。'
    Read-Host '按回车键关闭窗口'
    exit 1
}

$npmCommand = Get-Command npm -ErrorAction SilentlyContinue
$pnpmCommand = Resolve-PnpmCommand -NpmPath $(if ($null -ne $npmCommand) { $npmCommand.Source } else { $null })

if (-not $SkipDebugger) {
    # Git is a documented prerequisite (see README.md); WMPFDebugger is cloned with it.
    try {
        $gitCommand = Get-Command git -ErrorAction Stop
    } catch [System.Management.Automation.CommandNotFoundException] {
        Write-Host '需要 Git 才能下载 WMPFDebugger。' -ForegroundColor Red
        Write-Host '请从 https://git-scm.com/download/win 安装 Git（参见 README.md），然后重新运行本脚本。'
        Read-Host '按回车键关闭窗口'
        exit 1
    }
    try {
        $npxCommand = Get-Command npx -ErrorAction Stop
    } catch [System.Management.Automation.CommandNotFoundException] {
        throw '未找到 npx。请重新安装 Node.js（自带 npx）；参见 README.md。'
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
        Write-Host '[WMPF] 正在下载 WMPFDebugger...'
        & $gitCommand.Source clone --depth 1 https://github.com/evi0s/WMPFDebugger.git $debuggerRoot
        if ($LASTEXITCODE -ne 0) {
            throw "WMPFDebugger 下载失败，退出码 $LASTEXITCODE。"
        }
    }

    if (-not (Test-Path -LiteralPath $wmpfConfigPath)) {
        Write-Host '[WMPF] 正在安装 PR #279 中的 WMPF 25560 配置...'
        Copy-Item -LiteralPath $bundledWmpfConfig -Destination $wmpfConfigPath
    }

    $installFailure = $null
    if ((-not (Test-Path -LiteralPath $tsNodeEntry)) -or
        (-not (Test-Path -LiteralPath $fridaInstallerEntry)) -or
        (-not (Test-Path -LiteralPath $prebuildInstallEntry))) {
        Write-Host '[WMPF] 正在按 Yarn lockfile 安装 WMPFDebugger 依赖...'
        Push-Location -LiteralPath $debuggerRoot
        try {
            & $npxCommand.Source --yes yarn@1.22.22 install --frozen-lockfile
            if ($LASTEXITCODE -ne 0) {
                $installFailure = "WMPFDebugger 依赖安装失败，退出码 $LASTEXITCODE。"
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
        Write-Host "[WMPF] $installFailure 调试器文件已存在，稍后将自动修复缺失的 frida 绑定。" -ForegroundColor Yellow
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
    Write-Host '[WMPF] 正在启动 WMPFDebugger（README 第 2 步）...'
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
            throw "WMPFDebugger 未就绪就退出了。$([Environment]::NewLine)$failureDetails"
        }
        if ((Test-Path -LiteralPath $debuggerOutput) -and
            (Select-String -LiteralPath $debuggerOutput -SimpleMatch '[frida] script loaded' -Quiet)) {
            $debuggerReady = $true
            break
        }
        Start-Sleep -Milliseconds 200
    }

    if (-not $debuggerReady) {
        throw "WMPFDebugger 未能就绪。请查看 $debuggerOutput 与 $debuggerErrors。"
    }

    Write-Host 'WMPFDebugger 已就绪。现在请在微信中打开目标小程序。' -ForegroundColor Green
    Write-Host '小程序完全打开后，在此按任意键继续...'
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
        throw '打开小程序 DevTools 需要 Microsoft Edge 或 Google Chrome。'
    }

    Write-Host '[WMPF] 正在打开小程序 DevTools（README 第 4 步）...'
    & (Join-Path $PSScriptRoot 'ops\open-wmpf-devtools.ps1') `
        -BrowserPath $chromiumBrowser `
        -DevToolsUrl $devToolsUrl `
        -ToolsRoot $toolsRoot
    Write-Host ''
    Write-Host '在这里找到 TOKEN' -ForegroundColor Cyan
    Write-Host '1. 在 DevTools 中打开 Network（网络）面板，保持记录开启。'
    Write-Host '2. 在小程序里登录，或刷新/打开首页、跑步页。'
    Write-Host '3. 过滤 GetStudentInfoByToken；如果没有，试试 getSunrunPaper 或 wxxcx。'
    Write-Host '4. 打开一个请求，在 Payload 中查看 token，或在 Headers 中查看 Authorization。'
    Write-Host '5. 只复制 token 值（去掉开头的 "Bearer "）填入 Totoro。'
    Write-Host '请把 token 当作密码保管：不要分享、截图或提交到仓库。' -ForegroundColor Yellow
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
    Write-Host "在 $Port 到 $($Port + 10) 之间没有找到可用端口。" -ForegroundColor Red
    Read-Host '按回车键关闭窗口'
    exit 1
}

Write-Host '[Totoro] 正在安装依赖...'
& $pnpmCommand.Source install --frozen-lockfile --prefer-offline
if ($LASTEXITCODE -ne 0) {
    throw "依赖安装失败，退出码 $LASTEXITCODE。"
}

New-Item -ItemType Directory -Path $toolsRoot -Force | Out-Null
if ([string]::IsNullOrWhiteSpace($env:REDIS_URL)) {
    $dockerCommand = Get-Command docker -ErrorAction SilentlyContinue
    if ($null -eq $dockerCommand) {
        throw '需要 Redis。请安装 Docker Desktop，或设置 REDIS_URL 指向已有的 Redis 服务。'
    }
    $dockerInfo = Invoke-DockerProbe @('info', '--format', '{{.ServerVersion}}')
    if ($dockerInfo.ExitCode -ne 0) {
        $dockerDesktop = Join-Path $env:ProgramFiles 'Docker\Docker\Docker Desktop.exe'
        if (-not (Test-Path -LiteralPath $dockerDesktop)) {
            throw 'Docker Desktop 已安装但未运行。请启动它，或设置 REDIS_URL 指向已有的 Redis 服务。'
        }
        Write-Host '[Totoro] 正在为延迟队列启动 Docker Desktop...'
        Start-Process -FilePath $dockerDesktop -WindowStyle Hidden
        for ($attempt = 0; $attempt -lt 60; $attempt++) {
            Start-Sleep -Seconds 1
            $dockerInfo = Invoke-DockerProbe @('info', '--format', '{{.ServerVersion}}')
            if ($dockerInfo.ExitCode -eq 0) { break }
        }
        if ($dockerInfo.ExitCode -ne 0) { throw 'Docker Desktop 在 60 秒内未就绪。' }
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
        if ($LASTEXITCODE -ne 0) { throw '无法启动本地 Redis 容器。' }
    }
    $redisStartedHere = $redisState.Output -ne 'true'
    $redisPort = Invoke-DockerProbe @('port', $redisContainerName, '6379/tcp')
    if (($redisPort.ExitCode -ne 0) -or ($redisPort.Output -notmatch ':(\d+)$')) {
        throw '无法确定本地 Redis 端口。'
    }
    $env:REDIS_URL = "redis://127.0.0.1:$($matches[1])"
}

Write-Host '[Totoro] 正在构建生产版本...'
& $pnpmCommand.Source build
if ($LASTEXITCODE -ne 0) {
    throw "生产构建失败，退出码 $LASTEXITCODE。"
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
    throw "延迟队列 Worker 启动失败。$([Environment]::NewLine)$workerFailure"
}

$url = "http://127.0.0.1:$selectedPort"
Write-Host "[Totoro] 服务已启动：$url"
Write-Host '按 Ctrl+C 停止服务。' -ForegroundColor Cyan

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
        throw "服务已退出，退出码 $LASTEXITCODE。"
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
