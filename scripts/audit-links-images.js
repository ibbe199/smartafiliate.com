const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const HTML_DIRS = ['', 'articles', 'posts-ai'];
const IGNORE_PROTOCOLS = /^(https?:|mailto:|tel:|data:|javascript:|#)/i;
const ASSET_ATTRS = ['src', 'href'];
const IMAGE_EXT = /\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i;

function walk(dir) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return [];
  return fs.readdirSync(abs, { withFileTypes: true }).flatMap((entry) => {
    const rel = path.posix.join(dir, entry.name).replace(/^\//, '');
    if (entry.isDirectory()) return walk(rel);
    return entry.isFile() && entry.name.endsWith('.html') ? [rel] : [];
  });
}

function stripQuery(value) {
  return (value || '').split('#')[0].split('?')[0];
}

function resolveLocal(target, fromFile) {
  const clean = stripQuery(target).trim();
  if (!clean || IGNORE_PROTOCOLS.test(clean)) return null;
  const baseDir = path.posix.dirname(fromFile);
  const rel = clean.startsWith('/') ? clean.slice(1) : path.posix.normalize(path.posix.join(baseDir === '.' ? '' : baseDir, clean));
  return rel.replace(/^\.\//, '');
}

function getAttrs(html, attr) {
  const regex = new RegExp(`${attr}=["']([^"']+)["']`, 'gi');
  const values = [];
  let match;
  while ((match = regex.exec(html))) values.push(match[1]);
  return values;
}

function getTags(html, tag) {
  const regex = new RegExp(`<${tag}\\b[^>]*>`, 'gi');
  return html.match(regex) || [];
}

function fileExists(rel) {
  if (!rel) return true;
  if (fs.existsSync(path.join(ROOT, rel))) return true;
  if (!path.extname(rel) && fs.existsSync(path.join(ROOT, rel + '.html'))) return true;
  return false;
}

function auditFile(filePath) {
  const html = fs.readFileSync(path.join(ROOT, filePath), 'utf8');
  const issues = [];

  for (const attr of ASSET_ATTRS) {
    for (const value of getAttrs(html, attr)) {
      const local = resolveLocal(value, filePath);
      if (!local) continue;
      if (!fileExists(local)) {
        issues.push({ type: attr === 'src' || IMAGE_EXT.test(value) ? 'missing_asset' : 'missing_link', value, resolved: local });
      }
    }
  }

  for (const tag of getTags(html, 'img')) {
    if (!/\salt=["'][^"']*["']/i.test(tag)) {
      issues.push({ type: 'missing_alt', value: tag.slice(0, 140) + (tag.length > 140 ? '…' : ''), resolved: '' });
    }
    if (!/\sloading=["']lazy["']/i.test(tag)) {
      issues.push({ type: 'missing_lazy_loading', value: tag.slice(0, 140) + (tag.length > 140 ? '…' : ''), resolved: '' });
    }
  }

  const articleCards = getTags(html, 'article').filter((tag) => /article-card/.test(tag));
  if (/articles-grid/.test(html) && articleCards.length === 0) {
    issues.push({ type: 'articles_grid_without_cards', value: 'articles-grid موجودة بدون article-card', resolved: '' });
  }

  return issues;
}

function main() {
  const htmlFiles = HTML_DIRS.flatMap(walk).filter((value, index, arr) => arr.indexOf(value) === index).sort();
  const allIssues = [];

  for (const file of htmlFiles) {
    const issues = auditFile(file);
    for (const issue of issues) allIssues.push({ file, ...issue });
  }

  if (!allIssues.length) {
    console.log('✅ Link/image audit passed. No local broken links or image issues found.');
    return;
  }

  console.log(`❌ Link/image audit found ${allIssues.length} issue(s):`);
  for (const issue of allIssues) {
    console.log(`- [${issue.type}] ${issue.file}`);
    console.log(`  value: ${issue.value}`);
    if (issue.resolved) console.log(`  resolved: ${issue.resolved}`);
  }
  process.exitCode = 1;
}

main();
