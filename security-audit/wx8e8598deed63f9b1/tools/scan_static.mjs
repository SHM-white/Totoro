import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const [rootArg] = process.argv.slice(2);
if (!rootArg) {
  console.error('Usage: node scan_static.mjs <unpacked-dir>');
  process.exit(2);
}

const root = path.resolve(rootArg);
const textExtensions = new Set(['.js', '.json', '.html', '.wxml', '.wxss', '.wxs', '.txt', '.map']);
const files = [];

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (entry.isFile() && textExtensions.has(path.extname(entry.name).toLowerCase())) files.push(fullPath);
  }
}

walk(root);

const hosts = new Map();
const indicators = new Map([
  ['wx.login', /\bwx\.login\s*\(/g],
  ['wx.request', /\bwx\.request\s*\(/g],
  ['Authorization', /\bAuthorization\b/gi],
  ['token', /\btoken\b/gi],
  ['secret-like-name', /\b(?:app_?secret|client_?secret|private_?key|secret_?key)\b/gi],
  ['sign-like-name', /\b(?:signature|sign|hmac)\b/gi],
]);
const indicatorResults = Object.fromEntries([...indicators.keys()].map((key) => [key, { occurrences: 0, files: [] }]));

for (const file of files) {
  if (statSync(file).size > 8 * 1024 * 1024) continue;
  const text = readFileSync(file, 'utf8');
  const relativeFile = path.relative(root, file);

  for (const match of text.matchAll(/(?:https?|wss):\/\/[^\s"'<>\\)]+/gi)) {
    try {
      const url = new URL(match[0]);
      const record = hosts.get(url.host) ?? { occurrences: 0, files: new Set(), schemes: new Set() };
      record.occurrences += 1;
      record.files.add(relativeFile);
      record.schemes.add(url.protocol.slice(0, -1));
      hosts.set(url.host, record);
    } catch {
      // Ignore malformed strings and bundled source fragments.
    }
  }

  for (const [name, regex] of indicators) {
    regex.lastIndex = 0;
    const matches = [...text.matchAll(regex)];
    if (matches.length > 0) {
      indicatorResults[name].occurrences += matches.length;
      indicatorResults[name].files.push(relativeFile);
    }
  }
}

const hostResults = [...hosts.entries()]
  .map(([host, value]) => ({
    host,
    occurrences: value.occurrences,
    fileCount: value.files.size,
    schemes: [...value.schemes].sort(),
  }))
  .sort((a, b) => b.occurrences - a.occurrences || a.host.localeCompare(b.host));

for (const value of Object.values(indicatorResults)) {
  value.files = [...new Set(value.files)].slice(0, 20);
}

console.log(JSON.stringify({ scannedFiles: files.length, hosts: hostResults, indicators: indicatorResults }, null, 2));
