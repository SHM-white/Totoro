[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [ValidateScript({ Test-Path -LiteralPath $_ -PathType Leaf })]
    [string]$BrowserPath,

    [Parameter(Mandatory)]
    [ValidatePattern('^devtools://')]
    [string]$DevToolsUrl,

    [Parameter(Mandatory)]
    [string]$ToolsRoot
)

$ErrorActionPreference = 'Stop'
$remotePort = 9229
$portAvailable = $false
while ($remotePort -le 9239) {
    $listener = [System.Net.Sockets.TcpListener]::new(
        [System.Net.IPAddress]::Loopback,
        $remotePort
    )
    try {
        $listener.Start()
        $portAvailable = $true
        break
    } catch [System.Net.Sockets.SocketException] {
        $remotePort++
    } finally {
        $listener.Stop()
    }
}

if (-not $portAvailable) {
    throw 'No free Edge debugging port found between 9229 and 9239.'
}

$profilePath = Join-Path $ToolsRoot "edge-devtools-$remotePort"
New-Item -ItemType Directory -Path $profilePath -Force | Out-Null
$browserArguments = @(
    '--no-first-run'
    '--disable-sync'
    "--remote-debugging-port=$remotePort"
    "--user-data-dir=`"$profilePath`""
    '--new-window'
    'about:blank'
)
$browserProcess = Start-Process `
    -FilePath $BrowserPath `
    -ArgumentList $browserArguments `
    -PassThru

$debuggingOrigin = "http://127.0.0.1:$remotePort"
try {
    $browserReady = $false
    for ($attempt = 0; $attempt -lt 100; $attempt++) {
        if ($browserProcess.HasExited) {
            throw 'The DevTools browser exited before its debugging API was ready.'
        }
        try {
            Invoke-RestMethod -Uri "$debuggingOrigin/json/version" -TimeoutSec 1 | Out-Null
            $browserReady = $true
            break
        } catch [System.Net.WebException] {
            Start-Sleep -Milliseconds 100
        }
    }

    if (-not $browserReady) {
        throw 'The DevTools browser debugging API did not become ready.'
    }

    $encodedUrl = [System.Uri]::EscapeDataString($DevToolsUrl)
    $target = Invoke-RestMethod `
        -Method Put `
        -Uri "$debuggingOrigin/json/new?$encodedUrl" `
        -TimeoutSec 5
    if ([string]::IsNullOrWhiteSpace($target.id)) {
        throw 'The browser did not return a DevTools target ID.'
    }

    Invoke-RestMethod `
        -Uri "$debuggingOrigin/json/activate/$($target.id)" `
        -TimeoutSec 5 | Out-Null
    Write-Host "Mini-program DevTools opened at $DevToolsUrl" -ForegroundColor Green
} catch {
    if (-not $browserProcess.HasExited) {
        Stop-Process -Id $browserProcess.Id -Force -ErrorAction SilentlyContinue
    }
    throw
}
