const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SITE_URL = 'https://www.smartafiliate.com';
const BRAND = 'smartafiliate';
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/seo-card.png`;
const GENERATED_COVERS_DIR = 'assets/generated-covers';
const EXCLUDE_FROM_SITEMAP = new Set(['404.html', 'thanks.html']);
const HTML_DIRS = ['', 'posts-ai', 'articles'];
const ARTICLE_IMAGE_MAP = {
  'posts-ai/google-ai-content-acceptance.html': '/assets/google-ai-content-acceptance.png',
  'posts-ai/future-arab-websites-ai.html': '/assets/future-arab-websites-ai.png',
  'posts-ai/ai-content-google-opportunity-risk.html': '/assets/ai-content-google-opportunity-risk.png',
  'posts-ai/google-penalty-ai-content-truth.html': '/assets/google-penalty-ai-content-truth.png',
  'posts-ai/ai-seo-content-success.html': '/assets/ai-seo-content-success.png',
  'posts-ai/ai-save-or-bury-arab-websites.html': '/assets/ai-save-or-bury-arab-websites.png',
  'posts-ai/arab-websites-ai-who-survives.html': '/assets/arab-websites-ai-who-survives.png',
  'posts-ai/ai-knocks-arab-websites-door.html': '/assets/ai-knocks-arab-websites-door.png',
  'posts-ai/build-website-with-ai-in-minutes.html': '/assets/build-website-with-ai-in-minutes.png',
  'posts-ai/latest-ai-news-2026.html': '/assets/latest-ai-news-2026.png',
  'posts-ai/30-best-ai-writing-tools.html': '/assets/ai-writing-tools.png',
  'posts-ai/90-day-ai-plan.html': '/assets/90-day-ai-plan.png',
  'posts-ai/30-day-ai-plan.html': '/assets/30-day-action-plan.png',
  'posts-ai/ai-affiliate-tools.html': '/assets/ai-affiliate-tools.png',
  'posts-ai/ai-content-sales-system.html': '/assets/ai-tools-content-sales.png',
  'posts-ai/affiliate-funnel-guide.html': '/assets/affiliate-conversion-funnel.png',
  'posts-ai/affiliate-growth-strategy.html': '/assets/generated-covers/affiliate-growth-strategy.svg',
  'posts-ai/what-is-affiliate-marketing.html': '/assets/what-is-affiliate.svg',
  'posts-ai/affiliate-mistakes.html': '/assets/affiliate-mistakes.svg',
  'posts-ai/arab-affiliate-programs.html': '/assets/arab-affiliate-programs.svg',
  'posts-ai/complete-ai-learning-path.html': '/assets/complete-ai-learning-path.png',
  'posts-ai/content-structure-seo.html': '/assets/best-content-structure.svg',
  'articles/what-is-affiliate-marketing.html': '/assets/what-is-affiliate.svg',
  'articles/affiliate-marketing-mistakes.html': '/assets/affiliate-mistakes.svg',
  'articles/seo-for-affiliate-sites.html': '/assets/images/seo-affiliate.svg',
  'articles/ai-tools-for-affiliate-marketing.html': '/assets/ai-affiliate-tools.png',
  'articles/best-content-structure.html': '/assets/best-content-structure.svg',
  'articles/best-affiliate-programs-arab-world.html': '/assets/arab-affiliate-programs.svg'
};

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

function ensureDir(relPath) {
  const abs = path.join(ROOT, relPath);
  if (!fs.existsSync(abs)) fs.mkdirSync(abs, { recursive: true });
}

function readFile(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), 'utf8');
}

function writeFile(relPath, content) {
  ensureDir(path.dirname(relPath));
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

function slugFromPath(filePath) {
  return filePath.replace(/\.html$/, '').replace(/[^a-zA-Z0-9/_-]+/g, '-').replace(/[\/]+/g, '-');
}

function toAbsoluteUrl(rawUrl, filePath) {
  if (!rawUrl) return DEFAULT_IMAGE;
  if (/^https?:\/\//i.test(rawUrl)) return rawUrl.replace('https://smartafiliate.com', SITE_URL);
  const normalized = rawUrl.replace(/^\.\//, '');
  if (normalized.startsWith('/')) return `${SITE_URL}${normalized}`;
  const baseDir = filePath.includes('/') ? filePath.split('/').slice(0, -1).join('/') : '';
  const joined = baseDir ? `${baseDir}/${normalized}` : normalized;
  const clean = joined.replace(/\/\/+/g, '/').replace(/^\.\.\//, '');
  return `${SITE_URL}/${clean}`;
}

function toSiteRelativeUrl(absoluteUrl) {
  return absoluteUrl.replace(SITE_URL, '').replace('https://smartafiliate.com', '');
}

function replaceOrInsert(head, regex, replacement) {
  return regex.test(head) ? head.replace(regex, replacement) : `${head}  ${replacement}\n`;
}

function wrapTitle(title, maxLineLength = 18, maxLines = 3) {
  const words = title.split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxLineLength) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
      if (lines.length === maxLines - 1) break;
    }
  }
  if (current && lines.length < maxLines) lines.push(current);
  if (lines.length < words.length && lines.length > 0) {
    lines[lines.length - 1] = truncate(lines[lines.length - 1], maxLineLength);
  }
  return lines.slice(0, maxLines);
}

function buildGeneratedCover(filePath, headline, sectionLabel) {
  const slug = slugFromPath(filePath);
  const relCoverPath = `${GENERATED_COVERS_DIR}/${slug}.svg`;
  const absCoverPath = path.join(ROOT, relCoverPath);
  const lines = wrapTitle(headline || 'مقال جديد');
  const lineYs = [250, 330, 410];
  const textLines = lines
    .map((line, index) => `<text x="1140" y="${lineYs[index]}" text-anchor="end" font-size="56" font-weight="800" fill="#ffffff">${escapeHtml(line)}</text>`)
    .join('');
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop stop-color="#111827"/>
      <stop offset="0.55" stop-color="#1F2937"/>
      <stop offset="1" stop-color="#EA580C"/>
    </linearGradient>
    <linearGradient id="accent" x1="120" y1="110" x2="520" y2="520" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F59E0B" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#EA580C" stop-opacity="0.15"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" rx="0" fill="url(#bg)"/>
  <circle cx="180" cy="150" r="220" fill="url(#accent)"/>
  <circle cx="1030" cy="560" r="180" fill="#ffffff" fill-opacity="0.08"/>
  <rect x="68" y="68" width="1064" height="494" rx="34" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.12"/>
  <text x="1140" y="120" text-anchor="end" font-size="28" font-weight="700" fill="#FDBA74">${escapeHtml(sectionLabel)}</text>
  ${textLines}
  <text x="1140" y="540" text-anchor="end" font-size="32" font-weight="700" fill="#ffffff" fill-opacity="0.92">${BRAND}</text>
</svg>`;
  ensureDir(path.dirname(relCoverPath));
  fs.writeFileSync(absCoverPath, svg, 'utf8');
  return `${SITE_URL}/${relCoverPath}`;
}

function preferredImageAbsolute(filePath, fallbackHeadline, sectionLabel) {
  if (ARTICLE_IMAGE_MAP[filePath]) return `${SITE_URL}${ARTICLE_IMAGE_MAP[filePath]}`;
  return buildGeneratedCover(filePath, fallbackHeadline || 'مقال جديد', sectionLabel);
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
  const sectionLabel = filePath.startsWith('posts-ai/') ? 'مقال من smartafiliate' : filePath.startsWith('articles/') ? 'محتوى عربي عملي' : 'صفحة من smartafiliate';
  const absoluteFirstImage = toAbsoluteUrl(firstImage, filePath);
  const image = type === 'article'
    ? preferredImageAbsolute(filePath, h1 || titleTag || 'مقال جديد', sectionLabel)
    : absoluteFirstImage;

  return { title, description, canonical, type, image, headline: h1 || baseTitle };
}

function syncArticleBodyImage(content, filePath, imageAbsolute) {
  if (!(filePath.startsWith('posts-ai/') || filePath.startsWith('articles/'))) return content;
  const imageRelative = toSiteRelativeUrl(imageAbsolute);
  return content.replace(/<img([^>]+)src=["']([^"']+)["']([^>]*)>/i, `<img$1src="${imageRelative}"$3>`);
}

function updateHtml(filePath) {
  const original = readFile(filePath);
  const headMatch = original.match(/<head>([\s\S]*?)<\/head>/i);
  if (!headMatch) return false;

  const meta = buildMetadata(filePath, original);
  let content = syncArticleBodyImage(original, filePath, meta.image);
  let head = content.match(/<head>([\s\S]*?)<\/head>/i)[1];

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

  content = content.replace(/<head>[\s\S]*?<\/head>/i, `<head>\n${head.trim()}\n</head>`);
  content = content.replace(/https:\/\/smartafiliate\.com/g, SITE_URL);
  if (content !== original) {
    writeFile(filePath, content);
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
  ensureDir(GENERATED_COVERS_DIR);
  const files = listHtmlFiles();
  let changedCount = 0;
  for (const filePath of files) {
    if (updateHtml(filePath)) changedCount += 1;
  }
  writeFile('sitemap.xml', buildSitemap(files));
  console.log(`SEO sync finished. Updated ${changedCount} HTML files, synced article covers, and rebuilt sitemap.`);
}

main();
