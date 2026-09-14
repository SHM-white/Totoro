import { createDecipheriv, pbkdf2Sync } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const [inputPath, outputPath, appId] = process.argv.slice(2);

if (!inputPath || !outputPath || !/^wx[0-9a-f]{16}$/i.test(appId ?? '')) {
  console.error('Usage: node decrypt_v1mmwx.mjs <input> <output> <wx-app-id>');
  process.exit(2);
}

const encrypted = readFileSync(inputPath);
const magic = encrypted.subarray(0, 6).toString('ascii');

if (magic !== 'V1MMWX') {
  throw new Error(`Unexpected package header: ${JSON.stringify(magic)}`);
}

if (encrypted.length <= 1030) {
  throw new Error('Package is too small to contain a V1MMWX payload');
}

const key = pbkdf2Sync(appId, 'saltiest', 1000, 32, 'sha1');
const decipher = createDecipheriv('aes-256-cbc', key, Buffer.from('the iv: 16 bytes'));
decipher.setAutoPadding(false);

const aesBlock = Buffer.concat([
  decipher.update(encrypted.subarray(6, 1030)),
  decipher.final(),
]).subarray(0, 1023);

const xorKey = appId.charCodeAt(appId.length - 2);
const remainder = Buffer.from(encrypted.subarray(1030));
for (let i = 0; i < remainder.length; i += 1) {
  remainder[i] ^= xorKey;
}

const decrypted = Buffer.concat([aesBlock, remainder]);
if (decrypted[0] !== 0xbe) {
  throw new Error(`Decryption validation failed: first byte is 0x${decrypted[0].toString(16)}`);
}

writeFileSync(outputPath, decrypted, { flag: 'wx' });
console.log(JSON.stringify({ outputPath, bytes: decrypted.length, firstByte: '0xbe' }));
