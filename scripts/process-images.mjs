import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const TARGET_WIDTHS = [480, 960, 1440];
const SEARCH_DIR = path.resolve('src/routes/images');

function getSourceImages(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const f of list) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      getSourceImages(p, files);
    } else {
      const ext = path.extname(f).toLowerCase();
      // Only process original png/jpg/jpeg, ignore already generated variants
      if (['.png', '.jpg', '.jpeg'].includes(ext) && !f.includes('-480w.') && !f.includes('-960w.') && !f.includes('-1440w.')) {
        files.push(p);
      }
    }
  }
  return files;
}

async function processImages() {
  const images = getSourceImages(SEARCH_DIR);
  console.log(`Found ${images.length} source image(s) in ${SEARCH_DIR}`);

  let processedCount = 0;

  for (const imgPath of images) {
    const parsed = path.parse(imgPath);
    console.log(`Processing: ${parsed.base}...`);

    try {
      const metadata = await sharp(imgPath).metadata();
      const origWidth = metadata.width || 1440;

      for (const w of TARGET_WIDTHS) {
        const resizeWidth = Math.min(w, origWidth);

        // 1. Generate AVIF
        const avifTarget = path.join(parsed.dir, `${parsed.name}-${w}w.avif`);
        await sharp(imgPath)
          .resize({ width: resizeWidth, withoutEnlargement: false })
          .avif({ quality: 80, effort: 4 })
          .toFile(avifTarget);

        // 2. Generate WebP
        const webpTarget = path.join(parsed.dir, `${parsed.name}-${w}w.webp`);
        await sharp(imgPath)
          .resize({ width: resizeWidth, withoutEnlargement: false })
          .webp({ quality: 82, effort: 4 })
          .toFile(webpTarget);

        processedCount += 2;
      }
    } catch (err) {
      console.error(`Error processing ${imgPath}:`, err.message);
    }
  }

  console.log(`\nSuccessfully generated ${processedCount} optimized responsive image variants!`);
}

processImages().catch(console.error);
