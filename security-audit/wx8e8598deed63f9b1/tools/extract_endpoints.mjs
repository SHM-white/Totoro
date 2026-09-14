import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const [rootArg] = process.argv.slice(2);
if (!rootArg) process.exit(2);
const root = path.resolve(rootArg);
const results = new Map();

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (entry.isFile() && /\.(?:js|json|html)$/i.test(entry.name)) scan(fullPath);
  }
}

function scan(file) {
  const text = readFileSync(file, 'utf8');
  const relativeFile = path.relative(root, file);
  const literalPattern = /["']((?:https?:\/\/[^"']+)|(?:\/(?:wxapi|wxxcx|app|api)\/[^"']+))["']/gi;
  for (const match of text.matchAll(literalPattern)) {
    const value = match[1];
    if (value.length > 300 || /[{}<>\s]/.test(value)) continue;
    const files = results.get(value) ?? new Set();
    files.add(relativeFile);
    results.set(value, files);
  }
}

walk(root);
const output = [...results.entries()]
  .map(([endpoint, files]) => ({ endpoint, files: [...files].sort() }))
  .sort((a, b) => a.endpoint.localeCompare(b.endpoint));
console.log(JSON.stringify(output, null, 2));
