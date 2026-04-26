(function () {
  const BRAND = 'Smartafiliate';

  function injectSingleImageCss() {
    if (document.getElementById('single-tool-image-fix')) return;
    const style = document.createElement('style');
    style.id = 'single-tool-image-fix';
    style.textContent = '.tool-card .tool-preview,.tool-card .tool-icon{display:none!important}.tool-card>.article-image{display:block!important;margin-bottom:1rem;border-radius:18px;overflow:hidden}.tool-card>.article-image img{width:100%!important;height:200px!important;object-fit:cover!important;display:block!important}';
    document.head.appendChild(style);
  }

  function escapeSvgText(value) {
    return String(value || '').replace(/[&<>"]/g, function (char) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char];
    });
  }

  function cleanCardTitle(title) {
    return String(title || 'مقال من Smartafiliate')
      .replace(/\s*\|\s*Smartafiliate/gi, '')
      .replace(/\s*\|\s*smartafiliate/gi, '')
      .replace(/\s+/g, ' ')
      .replace(/\s+([،؛:.؟])/g, '$1')
      .replace(/([،؛:.؟])([^\s])/g, '$1 $2')
      .replace(/[:؟?]+$/g, '')
      .trim();
  }

  function splitTitleForCover(title) {
    const words = cleanCardTitle(title).split(/\s+/).filter(Boolean);
    if (words.length <= 3) return [words.join(' ')];
    const targetLines = words.join('').length > 36 || words.length > 7 ? 3 : 2;
    const targetLength = Math.ceil(words.join(' ').length / targetLines);
    const lines = [];
    let current = '';
    words.forEach(function (word) {
      const next = current ? current + ' ' + word : word;
      if (next.length > targetLength && current && lines.length < targetLines - 1) {
        lines.push(current);
        current = word;
      } else {
        current = next;
      }
    });
    if (current) lines.push(current);
    return lines.slice(0, 3).map(function (line) {
      return line.length > 34 ? line.slice(0, 33).trim() + '…' : line;
    });
  }

  function createArticleCover(title, category) {
    const lines = splitTitleForCover(title);
    const fontSize = lines.length === 1 ? 64 : lines.length === 2 ? 58 : 52;
    const lineGap = lines.length === 3 ? 66 : 74;
    const yStart = lines.length === 1 ? 320 : lines.length === 2 ? 292 : 252;
    const titleLines = lines.map(function (line, index) {
      return '<tspan x="600" y="' + (yStart + index * lineGap) + '">' + escapeSvgText(line) + '</tspan>';
    }).join('');

    const svg = '<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630"><stop stop-color="#071426"/><stop offset="0.52" stop-color="#12305a"/><stop offset="1" stop-color="#ea580c"/></linearGradient><linearGradient id="accent" x1="110" y1="80" x2="520" y2="520"><stop stop-color="#f59e0b" stop-opacity="0.98"/><stop offset="1" stop-color="#ea580c" stop-opacity="0.12"/></linearGradient><linearGradient id="glass" x1="210" y1="140" x2="990" y2="510"><stop stop-color="#ffffff" stop-opacity="0.10"/><stop offset="1" stop-color="#ffffff" stop-opacity="0.035"/></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000" flood-opacity="0.30"/></filter></defs>' +
      '<rect width="1200" height="630" fill="url(#bg)"/><circle cx="160" cy="130" r="225" fill="url(#accent)"/><circle cx="1040" cy="540" r="205" fill="#ffffff" fill-opacity="0.075"/><rect x="92" y="74" width="1016" height="482" rx="42" fill="url(#glass)" stroke="#ffffff" stroke-opacity="0.15"/><rect x="398" y="94" width="404" height="56" rx="28" fill="#071426" fill-opacity="0.48"/>' +
      '<text x="600" y="131" text-anchor="middle" direction="rtl" unicode-bidi="plaintext" font-family="Tahoma, Arial, sans-serif" font-size="26" font-weight="800" fill="#FDBA74">' + escapeSvgText(category || 'Smartafiliate') + '</text>' +
      '<text text-anchor="middle" direction="rtl" unicode-bidi="plaintext" font-family="Tahoma, Arial, sans-serif" font-size="' + fontSize + '" font-weight="900" fill="#ffffff" filter="url(#shadow)">' + titleLines + '</text>' +
      '<text x="600" y="530" text-anchor="middle" direction="ltr" font-family="Tahoma, Arial, sans-serif" font-size="32" font-weight="900" fill="#fff" fill-opacity="0.92">Smartafiliate</text></svg>';
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  }

  function normalizeBranding() {
    document.title = (document.title || '').replace(/smartafiliate/gi, BRAND);
    document.querySelectorAll('meta[content]').forEach(function (meta) {
      const value = meta.getAttribute('content') || '';
      const next = value.replace(/smartafiliate/gi, BRAND);
      if (next !== value) meta.setAttribute('content', next);
    });
    document.querySelectorAll('.logo').forEach(function (logo) {
      const light = logo.querySelector('.logo-text-light');
      const accent = logo.querySelector('.logo-text-accent');
      if (light && accent) { light.textContent = 'Smart'; accent.textContent = 'afiliate'; }
    });
  }

  function getCardTitle(card) {
    const titleEl = card.querySelector('h3 a, .post-title a, .tool-card h3, .tool-card h3 a, h3, .post-title, .tool-title');
    return titleEl ? cleanCardTitle(titleEl.textContent) : 'Smartafiliate';
  }

  function getCardCategory(card) {
    const categoryEl = card.querySelector('.article-category, .post-category, .tool-preview span, .tool-card p, .card p');
    if (card.classList.contains('tool-card')) return 'أداة ذكاء اصطناعي';
    return categoryEl ? cleanCardTitle(categoryEl.textContent) : 'مقال من Smartafiliate';
  }

  function applyPerCardCovers() {
    injectSingleImageCss();
    document.querySelectorAll('.article-card, .post-card, .tool-card').forEach(function (card) {
      const title = getCardTitle(card);
      const category = getCardCategory(card);
      const isToolCard = card.classList.contains('tool-card');

      if (isToolCard) {
        card.querySelectorAll('.tool-preview, .tool-icon').forEach(function (duplicateBox) {
          duplicateBox.remove();
        });
      }

      const imageClass = card.classList.contains('post-card') ? 'post-image' : 'article-image';
      let imageBox = card.querySelector('.article-image, .post-image, .tool-image');
      if (!imageBox) {
        imageBox = document.createElement('div');
        imageBox.className = imageClass;
        card.insertBefore(imageBox, card.firstChild);
      }
      imageBox.innerHTML = '<img src="' + createArticleCover(title, category) + '" alt="' + escapeSvgText(title) + '" loading="lazy" decoding="async" width="1200" height="630">';
    });
  }

  function fixImages() {
    document.querySelectorAll('img').forEach(function (img, index) {
      if (!img.hasAttribute('width')) img.setAttribute('width', '1200');
      if (!img.hasAttribute('height')) img.setAttribute('height', '630');
      if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
      if (index === 0 || img.hasAttribute('fetchpriority')) {
        img.setAttribute('fetchpriority', img.getAttribute('fetchpriority') || 'high');
        img.removeAttribute('loading');
      } else if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }

  function init() {
    normalizeBranding();
    applyPerCardCovers();
    fixImages();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();

function closeMenu() {
  const nav = document.getElementById('mainNav');
  const button = document.querySelector('.menu-toggle');
  if (!nav || !button) return;
  nav.classList.remove('active');
  button.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

function toggleMenu() {
  const nav = document.getElementById('mainNav');
  const button = document.querySelector('.menu-toggle');
  if (!nav || !button) return;
  const isOpen = nav.classList.toggle('active');
  button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  document.body.classList.toggle('menu-open', isOpen);
}

document.addEventListener('click', function (event) {
  const nav = document.getElementById('mainNav');
  const button = document.querySelector('.menu-toggle');
  if (!nav || !button) return;
  if (nav.classList.contains('active') && !nav.contains(event.target) && !button.contains(event.target)) closeMenu();
}, { passive: true });

window.addEventListener('resize', function () { if (window.innerWidth > 900) closeMenu(); }, { passive: true });
window.addEventListener('scroll', function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  header.classList.toggle('header-scrolled', window.scrollY > 50);
}, { passive: true });
