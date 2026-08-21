import fs from 'fs';
import path from 'path';
import https from 'https';

const fontDir = path.resolve('public/fonts');
if (!fs.existsSync(fontDir)) {
  fs.mkdirSync(fontDir, { recursive: true });
}

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function fetchCss(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    });
  });
}

function parseBlocks(css) {
  const blocks = [];
  const parts = css.split(/\/\*\s*([^*]+)\s*\*\//g);
  for (let i = 1; i < parts.length; i += 2) {
    const subset = parts[i].trim();
    const content = parts[i + 1] || '';
    const weightMatch = content.match(/font-weight:\s*(\d+)/);
    const weight = weightMatch ? weightMatch[1] : '400';
    const urlMatch = content.match(/url\((https:\/\/[^)]+\.woff2)\)/);
    const rangeMatch = content.match(/unicode-range:\s*([^;]+);/);
    if (urlMatch) {
      blocks.push({
        subset,
        weight,
        url: urlMatch[1],
        range: rangeMatch ? rangeMatch[1].trim() : ''
      });
    }
  }
  return blocks;
}

async function run() {
  const spaceCss = await fetchCss('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');
  const interCss = await fetchCss('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
  const jbCss = await fetchCss('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

  const spaceBlocks = parseBlocks(spaceCss).filter(b => b.subset === 'latin');
  const interBlocks = parseBlocks(interCss).filter(b => b.subset === 'latin');
  const jbBlocks = parseBlocks(jbCss).filter(b => b.subset === 'latin');

  console.log('Space Grotesk latin:', spaceBlocks);
  console.log('Inter latin:', interBlocks);
  console.log('JetBrains Mono latin:', jbBlocks);

  const targets = [
    { file: 'space-grotesk-400.woff2', block: spaceBlocks.find(b => b.weight === '400') },
    { file: 'space-grotesk-500.woff2', block: spaceBlocks.find(b => b.weight === '500') },
    { file: 'space-grotesk-700.woff2', block: spaceBlocks.find(b => b.weight === '700') },
    { file: 'inter-400.woff2', block: interBlocks.find(b => b.weight === '400') },
    { file: 'inter-500.woff2', block: interBlocks.find(b => b.weight === '500') },
    { file: 'jetbrains-mono-400.woff2', block: jbBlocks.find(b => b.weight === '400') },
    { file: 'jetbrains-mono-500.woff2', block: jbBlocks.find(b => b.weight === '500') },
  ];

  let totalSize = 0;
  for (const t of targets) {
    if (!t.block) continue;
    const dest = path.join(fontDir, t.file);
    await downloadFile(t.block.url, dest);
    const sz = fs.statSync(dest).size;
    totalSize += sz;
    console.log(`Saved ${t.file} (${(sz/1024).toFixed(2)} kB)`);
  }

  console.log(`Total self-hosted fonts size: ${(totalSize/1024).toFixed(2)} kB`);
}

run().catch(console.error);
