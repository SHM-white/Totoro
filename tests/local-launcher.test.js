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
