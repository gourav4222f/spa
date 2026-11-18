// Converts source JPGs in /src-images into optimized WebP + JPG fallbacks in /public/images.
import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'node:fs';
import { join, parse } from 'node:path';
const src = 'src-images', out = 'public/images';
mkdirSync(out, { recursive: true });
for (const f of readdirSync(src)) {
  const { name } = parse(f);
  const img = sharp(join(src, f)).resize({ width: 1920, withoutEnlargement: true });
  await img.clone().webp({ quality: 78 }).toFile(join(out, `${name}.webp`));
  await img.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(join(out, `${name}.jpg`));
  console.log('optimized', name);
}
