const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SITE_URL = 'https://smartafiliate.com';
const BRAND = 'smartafiliate';
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/seo-card.png`;
const EXCLUDE_FROM_SITEMAP = new Set(['404.html', 'thanks.html']);
const HTML_DIRS = ['', 'posts-ai', 'articles'];

function listHtmlFiles() {
  const files = [];
  for (const dir of HTML_DIRS) {
    const absDir = path.join(ROOT, dir);
    if (!fs.existsSync(absDir)) continue;
    for (const entry of fs.readdirSync(absDir, { withFileTypes: true })) {
      if (!entry.isFile() || !entry.name.endsWith('.html')) continue;
      const rel = path.posix.join(dir, entry.name).replace(/^\//, '');
      files.push(rel);
    }
  }
  return files.sort((a, b) => a.localeCompare(b, 'en'));
}

function readFile(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), 'utf8');
}

function writeFile(relPath, content) {
  fs.writeFileSync(path.join(ROOT, relPath), content, 'utf8');
}

function stripHtml(text = '') {
  return text
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeHtml(text = '') {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function truncate(text = '', max = 160) {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + '…';
}

function matchFirst(content, regex) {
  const m = content.match(regex);
  return m ? m[1].trim() : '';
}

function toAbsoluteUrl(rawUrl, filePath) {
  if (!rawUrl) return DEFAULT_IMAGE;
  if (/^https?:\/\//i.test(rawUrl)) return rawUrl;
  const normalized = rawUrl.replace(/^\.\//, '');
  if (normalized.startsWith('/')) return `${SITE_URL}${normalized}`;
  const baseDir = filePath.includes('/') ? filePath.split('/').slice(0, -1).join('/') : '';
  const joined = baseDir ? `${baseDir}/${normalized}` : normalized;
  const clean = joined.replace(/\/\/+/g, '/').replace(/^\.\.\//, '');
  return `${SITE_URL}/${clean}`;
}

function replaceOrInsert(head, regex, replacement) {
  return regex.test(head) ? head.replace(regex, replacement) : `${head}  ${replacement}\n`;
}

function buildMetadata(filePath, html) {
  const titleTag = stripHtml(matchFirst(html, /<title>([\s\S]*?)<\/title>/i)).replace(/\s*\|\s*smartafiliate\s*$/i, '').trim();
  const h1 = stripHtml(matchFirst(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i));
  const firstParagraph = stripHtml(matchFirst(html, /<p[^>]*>([\s\S]*?)<\/p>/i));
  const descriptionTag = stripHtml(matchFirst(html, /<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']\s*\/?>/i));
  const firstImage = matchFirst(html, /<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  const baseTitle = h1 || titleTag || BRAND;
  const title = baseTitle.includes(BRAND) ? baseTitle : `${baseTitle} | ${BRAND}`;
  const description = truncate(descriptionTag || firstParagraph || baseTitle, 160);
  const canonical = `${SITE_URL}/${filePath}`.replace('/index.html', '/');
  const type = filePath.startsWith('posts-ai/') || filePath.startsWith('articles/') ? 'article' : 'website';
  const image = toAbsoluteUrl(firstImage, filePath);

  return { title, description, canonical, type, image, headline: h1 || baseTitle };
}

function updateHtml(filePath) {
  const original = readFile(filePath);
  const headMatch = original.match(/<head>([\s\S]*?)<\/head>/i);
  if (!headMatch) return false;

  const meta = buildMetadata(filePath, original);
  let head = headMatch[1];

  head = replaceOrInsert(head, /<title>[\s\S]*?<\/title>/i, `  <title>${escapeHtml(meta.title)}</title>`);
  head = replaceOrInsert(head, /<meta\s+name=["']description["'][^>]*>/i, `  <meta name="description" content="${escapeHtml(meta.description)}" />`);
  head = replaceOrInsert(head, /<link\s+rel=["']canonical["'][^>]*>/i, `  <link rel="canonical" href="${meta.canonical}" />`);
  head = replaceOrInsert(head, /<meta\s+property=["']og:type["'][^>]*>/i, `  <meta property="og:type" content="${meta.type}" />`);
  head = replaceOrInsert(head, /<meta\s+property=["']og:title["'][^>]*>/i, `  <meta property="og:title" content="${escapeHtml(meta.title)}" />`);
  head = replaceOrInsert(head, /<meta\s+property=["']og:description["'][^>]*>/i, `  <meta property="og:description" content="${escapeHtml(meta.description)}" />`);
  head = replaceOrInsert(head, /<meta\s+property=["']og:url["'][^>]*>/i, `  <meta property="og:url" content="${meta.canonical}" />`);
  head = replaceOrInsert(head, /<meta\s+property=["']og:image["'][^>]*>/i, `  <meta property="og:image" content="${meta.image}" />`);
  head = replaceOrInsert(head, /<meta\s+name=["']twitter:card["'][^>]*>/i, `  <meta name="twitter:card" content="summary_large_image" />`);
  head = replaceOrInsert(head, /<meta\s+name=["']twitter:title["'][^>]*>/i, `  <meta name="twitter:title" content="${escapeHtml(meta.title)}" />`);
  head = replaceOrInsert(head, /<meta\s+name=["']twitter:description["'][^>]*>/i, `  <meta name="twitter:description" content="${escapeHtml(meta.description)}" />`);
  head = replaceOrInsert(head, /<meta\s+name=["']twitter:image["'][^>]*>/i, `  <meta name="twitter:image" content="${meta.image}" />`);

  if (meta.type === 'article') {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: meta.headline,
      description: meta.description,
      mainEntityOfPage: meta.canonical,
      image: [meta.image],
      author: { '@type': 'Organization', name: BRAND },
      publisher: { '@type': 'Organization', name: BRAND },
      inLanguage: 'ar'
    };
    head = replaceOrInsert(
      head,
      /<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i,
      `  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
    );
  }

  const updated = original.replace(/<head>[\s\S]*?<\/head>/i, `<head>\n${head.trim()}\n</head>`);
  if (updated !== original) {
    writeFile(filePath, updated);
    return true;
  }
  return false;
}

function buildSitemap(files) {
  const urls = files
    .filter((filePath) => !EXCLUDE_FROM_SITEMAP.has(filePath))
    .map((filePath) => {
      const loc = `${SITE_URL}/${filePath}`.replace('/index.html', '/');
      return `  <url><loc>${loc}</loc></url>`;
    });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    ''
  ].join('\n');
}

function main() {
  const files = listHtmlFiles();
  let changedCount = 0;
  for (const filePath of files) {
    if (updateHtml(filePath)) changedCount += 1;
  }
  writeFile('sitemap.xml', buildSitemap(files));
  console.log(`SEO sync finished. Updated ${changedCount} HTML files and rebuilt sitemap.`);
}

main();
