#!/usr/bin/env node

/**
 * GLAD Studio — IndexNow Submission CLI
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs           # Performs live submission to IndexNow
 *   node scripts/submit-indexnow.mjs --dry-run # Validates and displays payload without sending
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const INDEXNOW_KEY = '6207c46ad5e84f97c3963b6d79da7b0f';
const INDEXNOW_HOST = 'gladstudio.net';
const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

const isDryRun = process.argv.includes('--dry-run');

console.log('====================================================');
console.log('  GLAD Studio — IndexNow URL Submission');
console.log('====================================================');
console.log(`Host:         ${INDEXNOW_HOST}`);
console.log(`Key:          ${INDEXNOW_KEY}`);
console.log(`Key Location: ${INDEXNOW_KEY_LOCATION}`);
console.log(`Endpoint:     ${INDEXNOW_ENDPOINT}`);
console.log(`Mode:         ${isDryRun ? 'DRY RUN (no network request)' : 'LIVE SUBMISSION'}`);
console.log('----------------------------------------------------');

// 1. Verify key file exists in public directory
const keyFilePath = path.join(projectRoot, 'public', `${INDEXNOW_KEY}.txt`);
if (!fs.existsSync(keyFilePath)) {
  console.error(`ERROR: Key file not found at ${keyFilePath}`);
  process.exit(1);
}

const keyFileContent = fs.readFileSync(keyFilePath, 'utf8').trim();
if (keyFileContent !== INDEXNOW_KEY) {
  console.error(`ERROR: Key file content mismatch! Expected '${INDEXNOW_KEY}', found '${keyFileContent}'`);
  process.exit(1);
}
console.log(`✓ Verification key file confirmed at public/${INDEXNOW_KEY}.txt (${fs.statSync(keyFilePath).size} bytes)`);

// 2. Extract canonical URLs from sitemap
function getCanonicalUrls() {
  // Option A: Check built sitemap output
  const sitemapBodyPath = path.join(projectRoot, '.next', 'server', 'app', 'sitemap.xml.body');
  if (fs.existsSync(sitemapBodyPath)) {
    try {
      const xml = fs.readFileSync(sitemapBodyPath, 'utf8');
      const locRegex = /<loc>(https:\/\/gladstudio\.net[^<]*)<\/loc>/g;
      const urls = [];
      let match;
      while ((match = locRegex.exec(xml)) !== null) {
        urls.push(match[1]);
      }
      if (urls.length > 0) {
        return [...new Set(urls)];
      }
    } catch {
      // Fall through to file parsing
    }
  }

  // Option B: Extract from source data files
  function extractSlugs(relPath) {
    const filePath = path.join(projectRoot, relPath);
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf8');
    const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
    const slugs = [];
    let match;
    while ((match = slugRegex.exec(content)) !== null) {
      slugs.push(match[1]);
    }
    return [...new Set(slugs)];
  }

  const staticRoutes = [
    '',
    '/work',
    '/services',
    '/products',
    '/process',
    '/about',
    '/insights',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const workSlugs = extractSlugs('src/data/work.ts');
  const serviceSlugs = extractSlugs('src/data/services.ts');
  const productSlugs = extractSlugs('src/data/products.ts');
  const insightSlugs = extractSlugs('src/data/insights.ts');

  const urls = [
    ...staticRoutes.map((r) => `https://${INDEXNOW_HOST}${r}`),
    ...workSlugs.map((s) => `https://${INDEXNOW_HOST}/work/${s}`),
    ...serviceSlugs.map((s) => `https://${INDEXNOW_HOST}/services/${s}`),
    ...productSlugs.map((s) => `https://${INDEXNOW_HOST}/products/${s}`),
    ...insightSlugs.map((s) => `https://${INDEXNOW_HOST}/insights/${s}`),
  ];

  return [...new Set(urls)];
}

const canonicalUrls = getCanonicalUrls();

// 3. Strict validation: Apex HTTPS domain only
const validatedUrls = canonicalUrls.filter((url) => {
  if (!url.startsWith(`https://${INDEXNOW_HOST}`)) return false;
  if (url.includes('www.')) return false;
  if (url.includes('http://')) return false;
  if (url.includes('/api/')) return false;
  return true;
});

console.log(`\nDiscovered ${validatedUrls.length} canonical URLs for submission:`);
validatedUrls.forEach((url, i) => {
  console.log(`  ${String(i + 1).padStart(2, ' ')}. ${url}`);
});

const payload = {
  host: INDEXNOW_HOST,
  key: INDEXNOW_KEY,
  keyLocation: INDEXNOW_KEY_LOCATION,
  urlList: validatedUrls,
};

if (isDryRun) {
  console.log('\n[DRY RUN] Payload prepared:');
  console.log(JSON.stringify(payload, null, 2));
  console.log('\nDry run complete. No network requests sent.');
  process.exit(0);
}

// 4. Perform live submission
console.log(`\nSubmitting ${validatedUrls.length} URLs to IndexNow...`);

try {
  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();

  console.log('\n====================================================');
  console.log(`  IndexNow Response: HTTP ${response.status} ${response.statusText}`);
  console.log('====================================================');

  if (response.status === 200) {
    console.log('✓ Success: URLs submitted successfully (HTTP 200 OK).');
  } else if (response.status === 202) {
    console.log('✓ Accepted: URLs received and queued for indexing (HTTP 202 Accepted).');
    console.log('  IndexNow will verify ownership via:');
    console.log(`  ${INDEXNOW_KEY_LOCATION}`);
  } else if (response.status === 403) {
    console.log('! HTTP 403 Forbidden:');
    console.log('  Key could not be verified at keyLocation, or key file is not yet deployed.');
    console.log(`  Once the key file is deployed to ${INDEXNOW_KEY_LOCATION}, IndexNow will verify.`);
  } else if (response.status === 422) {
    console.log('! HTTP 422 Unprocessable Entity: URLs do not belong to host or key format invalid.');
  } else {
    console.log(`! Response status: ${response.status} ${response.statusText}`);
  }

  if (responseText && responseText.trim().length > 0) {
    console.log(`Response body:\n${responseText.trim()}`);
  }
} catch (error) {
  console.error('\n! Network submission error:', error.message);
}
