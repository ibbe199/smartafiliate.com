const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SITE_URL = 'https://smartafiliate.com';
const BRAND = 'smartafiliate';
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/seo-card.png`;
const EXCLUDE_FROM_SITEMAP = new Set(['404.html', 'thanks.html']);
const HTML_DIRS = ['', 'posts-ai', 'articles'];

// الصور الجديدة المرفوعة داخل assets/images
const ARTICLE_IMAGE_MAP = {
  'posts-ai/27-ai-and-personal-brand.html': '/assets/images/01-ai-personal-brand.png',
  'posts-ai/28-ai-newsletters.html': '/assets/images/02-ai-newsletters.png',
  'posts-ai/ai-automation-productivity.html': '/assets/images/03-ai-automation-productivity.png',
  'posts-ai/ai-design-for-social-media.html': '/assets/images/04-ai-design-social-media.png',
  'posts-ai/ai-learning-communities.html': '/assets/images/05-ai-learning-communities.png',
  'posts-ai/ai-logo-design-guide.html': '/assets/images/06-ai-logo-design.png',
  'posts-ai/ai-projects-for-beginners.html': '/assets/images/07-ai-projects-beginners.png',
  'posts-ai/best-ai-design-tools.html': '/assets/images/08-best-ai-design-tools.png',
  'posts-ai/best-books-to-learn-ai.html': '/assets/images/09-best-ai-books.png',
  'posts-ai/copyai-review.html': '/assets/images/10-copyai-review.png',
  'posts-ai/falcon-guide.html': '/assets/images/11-falcon-guide.png',
  'posts-ai/free-ai-courses-arabic.html': '/assets/images/12-free-ai-courses-arabic.png',
  'posts-ai/future-of-ai-automation.html': '/assets/images/13-future-ai-automation.png',
  'posts-ai/latest-ai-automation-uses.html': '/assets/images/14-latest-ai-automation-uses.png',
  'posts-ai/learning-tips-for-ai.html': '/assets/images/15-ai-learning-tips.png',
  'posts-ai/llama3-guide.html': '/assets/images/16-llama3-guide.png',
  'posts-ai/math-for-ai-beginners.html': '/assets/images/17-math-for-ai-beginners.png',
  'posts-ai/mistral-guide.html': '/assets/images/18-mistral-guide.png',
  'posts-ai/ollama-guide.html': '/assets/images/19-ollama-guide.png',
  'posts-ai/python-for-ai-beginners.html': '/assets/images/20-python-for-ai-beginners.png',
  'posts-ai/tiktok-growth-engineering.html': '/assets/images/21-tiktok-growth-engineering.png',
  'posts-ai/what-is-ai-beginners.html': '/assets/images/22-what-is-ai-beginners.png',
  'articles/paid-vs-free-vs-open-source-ai.html': '/assets/images/23-paid-free-open-source-ai.png',

  // صور المقالات الأساسية القديمة الموجودة داخل assets/images
  'posts-ai/google-ai-content-acceptance.html': '/assets/images/image_01.jpg',
  'posts-ai/future-arab-websites-ai.html': '/assets/images/image_02.jpg',
  'posts-ai/ai-content-google-opportunity-risk.html': '/assets/images/image_03.jpg',
  'posts-ai/google-penalty-ai-content-truth.html': '/assets/images/image_04.jpg',
  'posts-ai/ai-seo-content-success.html': '/assets/images/image_05.jpg',
  'posts-ai/ai-save-or-bury-arab-websites.html': '/assets/images/image_06.jpg',
  'posts-ai/arab-websites-ai-who-survives.html': '/assets/images/image_07.jpg',
  'posts-ai/ai-knocks-arab-websites-door.html': '/assets/images/image_08.jpg',
  'posts-ai/build-website-with-ai-in-minutes.html': '/assets/images/image_09.jpg',
  'posts-ai/latest-ai-news-2026.html': '/assets/images/image_10.jpg',
  'posts-ai/30-best-ai-writing-tools.html': '/assets/images/image_11.jpg',
  'posts-ai/90-day-ai-plan.html': '/assets/images/image_12.jpg',
  'posts-ai/29-90-day-ai-plan.html': '/assets/images/image_12.jpg',
  'posts-ai/30-day-ai-plan.html': '/assets/images/image_13.jpg',
  'posts-ai/ai-affiliate-tools.html': '/assets/images/image_14.jpg',
  'posts-ai/ai-content-sales-system.html': '/assets/images/image_15.jpg',
  'posts-ai/affiliate-funnel-guide.html': '/assets/images/image_16.jpg',
  'posts-ai/affiliate-growth-strategy.html': '/assets/images/image_17.jpg',
  'posts-ai/what-is-affiliate-marketing.html': '/assets/images/image_18.jpg',
  'posts-ai/affiliate-mistakes.html': '/assets/images/image_19.jpg',
  'posts-ai/arab-affiliate-programs.html': '/assets/images/image_20.jpg',
  'posts-ai/complete-ai-learning-path.html': '/assets/images/image_21.jpg',
  'posts-ai/content-structure-seo.html': '/assets/images/image_22.jpg',
  'posts-ai/chatgpt-review.html': '/assets/images/image_23.jpg',
  'posts-ai/jasper-ai-review.html': '/assets/images/image_24.jpg',
  'posts-ai/writesonic-review.html': '/assets/images/image_25.jpg',
  'posts-ai/midjourney-guide.html': '/assets/images/image_26.jpg',
  'posts-ai/dalle3-review.html': '/assets/images/image_27.jpg',
  'posts-ai/canva-ai-review.html': '/assets/images/image_28.jpg',

  'articles/ai-tools-for-affiliate-marketing.html': '/assets/images/image_14.jpg',
  'articles/ai-tools-for-afiliate-marketing.html': '/assets/images/image_14.jpg',
  'articles/what-is-affiliate-marketing.html': '/assets/images/image_18.jpg',
  'articles/affiliate-marketing-mistakes.html': '/assets/images/image_19.jpg',
  'articles/best-affiliate-programs-arab-world.html': '/assets/images/image_20.jpg',
  'articles/best-content-structure.html': '/assets/images/image_22.jpg',
  'articles/seo-for-affiliate-sites.html': '/assets/images/image_22.jpg'
};

function ensureDir(relPath) {
  const abs = path.join(ROOT, relPath);
  if (!fs.existsSync(abs)) fs.mkdirSync(abs, { recursive: true });
}

function listHtmlFiles() {
  const files = [];
  for (const dir of HTML_DIRS) {
    const absDir = path.join(ROOT, dir);
    if (!fs.existsSync(absDir)) continue;
    for (const entry of fs.readdirSync(absDir, { withFileTypes: true })) {
      if (entry.isFile() && entry.name.endsWith('.html')) {
        files.push(path.posix.join(dir, entry.name).replace(/^\//, ''));
      }
    }
  }
  return files.sort();
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
  return text.length <= max ? text : text.slice(0, max - 1).trimEnd() + '…';
}

function matchFirst(content, regex) {
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}

function toAbsoluteUrl(rawUrl, filePath) {
  if (!rawUrl) return DEFAULT_IMAGE;
  if (/^https?:\/\//i.test(rawUrl)) return rawUrl;
  const clean = rawUrl.replace(/^\.\//, '').split('#')[0].split('?')[0];
  if (clean.startsWith('/')) return `${SITE_URL}${clean}`;
  const baseDir = filePath.includes('/') ? filePath.split('/').slice(0, -1).join('/') : '';
  return `${SITE_URL}/${path.posix.normalize(path.posix.join(baseDir, clean))}`;
}

function preferredImage(filePath, html) {
  if (ARTICLE_IMAGE_MAP[filePath]) return `${SITE_URL}${ARTICLE_IMAGE_MAP[filePath]}`;
  const firstImage = matchFirst(html, /<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  return toAbsoluteUrl(firstImage, filePath);
}

function replaceOrInsert(head, regex, replacement) {
  return regex.test(head) ? head.replace(regex, replacement) : `${head.trim()}\n  ${replacement}\n`;
}

function syncArticleBodyImage(content, filePath, imageAbsolute) {
  if (!(filePath.startsWith('posts-ai/') || filePath.startsWith('articles/'))) return content;
  const imageRelative = imageAbsolute.replace(SITE_URL, '');
  if (!imageRelative || imageRelative === DEFAULT_IMAGE.replace(SITE_URL, '')) return content;
  if (/<img[^>]+src=["'][^"']+["'][^>]*>/i.test(content)) {
    return content.replace(/<img([^>]+)src=["']([^"']+)["']([^>]*)>/i, `<img$1src="${imageRelative}"$3>`);
  }
  return content;
}

function updateHtml(filePath) {
  const original = readFile(filePath);
  const headMatch = original.match(/<head>([\s\S]*?)<\/head>/i);
  if (!headMatch) return false;

  const titleTag = stripHtml(matchFirst(original, /<title>([\s\S]*?)<\/title>/i)).replace(/\s*\|\s*smartafiliate\s*$/i, '').trim();
  const h1 = stripHtml(matchFirst(original, /<h1[^>]*>([\s\S]*?)<\/h1>/i));
  const firstParagraph = stripHtml(matchFirst(original, /<p[^>]*>([\s\S]*?)<\/p>/i));
  const descriptionTag = stripHtml(matchFirst(original, /<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']\s*\/?>/i));
  const baseTitle = h1 || titleTag || BRAND;
  const title = baseTitle.includes(BRAND) ? baseTitle : `${baseTitle} | ${BRAND}`;
  const description = truncate(descriptionTag || firstParagraph || baseTitle, 160);
  const canonical = `${SITE_URL}/${filePath}`.replace('/index.html', '/');
  const type = filePath.startsWith('posts-ai/') || filePath.startsWith('articles/') ? 'article' : 'website';
  const image = preferredImage(filePath, original);

  let content = syncArticleBodyImage(original, filePath, image);
  let head = content.match(/<head>([\s\S]*?)<\/head>/i)[1];

  head = replaceOrInsert(head, /<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  head = replaceOrInsert(head, /<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeHtml(description)}" />`);
  head = replaceOrInsert(head, /<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${canonical}" />`);
  head = replaceOrInsert(head, /<meta\s+property=["']og:type["'][^>]*>/i, `<meta property="og:type" content="${type}" />`);
  head = replaceOrInsert(head, /<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escapeHtml(title)}" />`);
  head = replaceOrInsert(head, /<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${escapeHtml(description)}" />`);
  head = replaceOrInsert(head, /<meta\s+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${canonical}" />`);
  head = replaceOrInsert(head, /<meta\s+property=["']og:image["'][^>]*>/i, `<meta property="og:image" content="${image}" />`);
  head = replaceOrInsert(head, /<meta\s+name=["']twitter:card["'][^>]*>/i, `<meta name="twitter:card" content="summary_large_image" />`);
  head = replaceOrInsert(head, /<meta\s+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(title)}" />`);
  head = replaceOrInsert(head, /<meta\s+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${escapeHtml(description)}" />`);
  head = replaceOrInsert(head, /<meta\s+name=["']twitter:image["'][^>]*>/i, `<meta name="twitter:image" content="${image}" />`);

  if (type === 'article') {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: h1 || baseTitle,
      description,
      mainEntityOfPage: canonical,
      image: [image],
      author: { '@type': 'Organization', name: BRAND },
      publisher: { '@type': 'Organization', name: BRAND },
      inLanguage: 'ar'
    };
    head = replaceOrInsert(head, /<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i, `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`);
  }

  content = content.replace(/<head>[\s\S]*?<\/head>/i, `<head>\n${head.trim()}\n</head>`);
  if (content !== original) {
    writeFile(filePath, content);
    return true;
  }
  return false;
}

function buildSitemap(files) {
  const urls = files
    .filter((filePath) => !EXCLUDE_FROM_SITEMAP.has(filePath))
    .map((filePath) => `  <url><loc>${`${SITE_URL}/${filePath}`.replace('/index.html', '/')}</loc></url>`);
  return ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', ...urls, '</urlset>', ''].join('\n');
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
