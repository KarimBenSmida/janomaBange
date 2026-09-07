import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
// Usage: npm run images -- /path/to/photo.jpg output-name
const [source, name] = process.argv.slice(2);
if (!source || !name || !/^[a-z0-9-]+$/.test(name)) {
  console.error('Usage: npm run images -- /path/to/photo.jpg output-name');
  process.exit(1);
}
await mkdir('public/images', { recursive: true });
for (const width of [480, 960]) {
  const target = path.join('public/images', `${name}-${width}.webp`);
  const result = await sharp(source).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 79, effort: 6 }).toFile(target);
  console.log(`${target}: ${Math.round(result.size / 1024)} KB`);
}
