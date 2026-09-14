import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const [inputPath, outputDir] = process.argv.slice(2);
if (!inputPath || !outputDir) {
  console.error('Usage: node unpack_wxapkg.mjs <input> <output-dir>');
  process.exit(2);
}

const pkg = readFileSync(inputPath);
if (pkg[0] !== 0xbe || pkg[13] !== 0xed) {
  throw new Error('Invalid wxapkg header');
}

const indexLength = pkg.readUInt32BE(5);
const bodyLength = pkg.readUInt32BE(9);
const fileCount = pkg.readUInt32BE(14);
let cursor = 18;
const entries = [];

for (let i = 0; i < fileCount; i += 1) {
  if (cursor + 4 > pkg.length) throw new Error(`Truncated index at entry ${i}`);
  const nameLength = pkg.readUInt32BE(cursor);
  cursor += 4;
  if (cursor + nameLength + 8 > pkg.length) throw new Error(`Invalid entry ${i}`);

  const rawName = pkg.subarray(cursor, cursor + nameLength).toString('utf8');
  cursor += nameLength;
  const offset = pkg.readUInt32BE(cursor);
  const length = pkg.readUInt32BE(cursor + 4);
  cursor += 8;

  if (offset + length > pkg.length) throw new Error(`Out-of-range entry: ${rawName}`);
  entries.push({ rawName, offset, length });
}

const root = path.resolve(outputDir);
mkdirSync(root, { recursive: true });

for (const entry of entries) {
  const relativeName = entry.rawName.replace(/^[/\\]+/, '');
  const destination = path.resolve(root, relativeName);
  if (destination !== root && !destination.startsWith(`${root}${path.sep}`)) {
    throw new Error(`Unsafe package path: ${entry.rawName}`);
  }
  mkdirSync(path.dirname(destination), { recursive: true });
  writeFileSync(destination, pkg.subarray(entry.offset, entry.offset + entry.length), { flag: 'wx' });
}

console.log(JSON.stringify({ fileCount, indexLength, bodyLength, outputDir: root }));
