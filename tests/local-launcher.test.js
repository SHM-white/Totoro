import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const launcherPath = new URL('../start-local.ps1', import.meta.url);
const devToolsLauncherPath = new URL('../ops/open-wmpf-devtools.ps1', import.meta.url);
const wmpfConfigPath = new URL('../ops/wmpf/addresses.25560.json', import.meta.url);

test('launcher installs the reviewed WMPF 25560 configuration', async () => {
  const launcher = await readFile(launcherPath, 'utf8');
  const config = JSON.parse(await readFile(wmpfConfigPath, 'utf8'));

  assert.deepEqual(config, {
    Version: 25560,
    LoadStartHookOffset: '0x2ce7cf0',
    CDPFilterHookOffset: '0x39789d0',
    SceneOffsets: [64, 1536, 8, 1472, 16, 456],
  });
  assert.match(launcher, /ops\\wmpf\\addresses\.25560\.json/);
  assert.doesNotMatch(launcher, /-ArgumentList\s+@\([^)]*'--auto-detect'/s);
});

test('launcher creates the privileged DevTools target through the browser debugging API', async () => {
  const launcher = await readFile(launcherPath, 'utf8');
  const devToolsLauncher = await readFile(devToolsLauncherPath, 'utf8');

  assert.match(launcher, /open-wmpf-devtools\.ps1/);
  assert.match(devToolsLauncher, /-Method Put/);
  assert.match(devToolsLauncher, /\/json\/new\?/);
  assert.match(devToolsLauncher, /\/json\/activate\//);
});

test('launcher repairs a missing frida native binding before starting WMPFDebugger', async () => {
  const launcher = await readFile(launcherPath, 'utf8');

  // A failed first install leaves node_modules behind without frida's native addon,
  // so ts-node alone must never be treated as "already installed".
  assert.doesNotMatch(launcher, /\(Test-Path -LiteralPath \$tsNodeEntry\)\) \{/);
  assert.match(launcher, /-not \(Test-Path -LiteralPath \$fridaInstallerEntry\)/);
  assert.match(launcher, /Join-Path \$fridaRoot 'build\\frida_binding\.node'/);
  assert.match(launcher, /Join-Path \$fridaRoot 'scripts\\install\.js'/);
  assert.match(launcher, /Install-FridaNativeBinding/);
  // prebuild-install reads the package to install from the working directory.
  assert.match(launcher, /Push-Location -LiteralPath \$FridaRoot/);
  assert.match(launcher, /npm_config_loglevel/);
});

test('launcher validates the environment and provisions pnpm automatically', async () => {
  const launcher = await readFile(launcherPath, 'utf8');

  // pnpm 11 is the first release that reads 'allowBuilds' from pnpm-workspace.yaml.
  assert.match(launcher, /\$minimumPnpmVersion\s*=\s*\[version\]'11\.0\.0'/);
  assert.match(launcher, /\$pnpmInstallVersion\s*=\s*'12\.4\.2'/);
  assert.match(launcher, /'install', '--global'[^\r\n]*pnpm@\$pnpmInstallVersion/);
  assert.match(launcher, /registry\.npmmirror\.com/);
  // A stale pnpm earlier on PATH must not shadow the fresh install.
  assert.match(launcher, /\$env:PATH = "\$globalBin;\$env:PATH"/);
  assert.match(launcher, /Resolve-PnpmCommand/);
});

test('launcher requires git for the WMPFDebugger checkout', async () => {
  const launcher = await readFile(launcherPath, 'utf8');

  // Git is a documented prerequisite, so the launcher fails fast with install
  // instructions instead of carrying an archive-based fallback.
  assert.match(launcher, /Get-Command git -ErrorAction Stop/);
  assert.match(launcher, /git-scm\.com\/download\/win/);
  assert.doesNotMatch(launcher, /codeload\.github\.com/);
  assert.doesNotMatch(launcher, /--strip-components/);
});

test('README documents the prerequisites the launcher does not install', async () => {
  const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');

  assert.match(readme, /## 环境要求/);
  assert.match(readme, /Node\.js\s*\|\s*22\+/);
  assert.match(readme, /Docker Desktop/);
  assert.match(readme, /Git\s*\|\s*任意近期版本/);
  assert.doesNotMatch(readme, /Git\s*\|\s*可选/);
});
