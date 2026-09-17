import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

test('one-click local startup provisions the delayed queue and starts its worker', async () => {
  const script = await readFile(new URL('../start-local.ps1', import.meta.url), 'utf8');

  assert.match(script, /REDIS_URL/);
  assert.match(script, /docker(?:\.exe)?[^\r\n]+(?:run|start)/i);
  assert.match(script, /--publish\s+127\.0\.0\.1::6379/);
  assert.match(script, /scripts[\\/]run-worker\.js/i);
});

test('Ctrl+C targets the real Next server and leaves no active batch wrapper', async () => {
  const powershell = await readFile(new URL('../start-local.ps1', import.meta.url), 'utf8');
  const batch = await readFile(new URL('../start-local.cmd', import.meta.url), 'utf8');

  assert.doesNotMatch(powershell, /pnpmCommand\.Source start/);
  assert.match(powershell, /node_modules[\\/]next[\\/]dist[\\/]bin[\\/]next/);
  assert.match(batch, /start\s+""\s+powershell\.exe/i);
  assert.doesNotMatch(batch, /start\s+""\s+\/wait/i);
});
