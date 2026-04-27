(function () {
  const BRAND = 'Smartafiliate';
  const AFFILIATE_LINK = 'https://9e507bq9nsow4n57d9tap0ohpd.hop.clickbank.net';
  const AFFILIATE_LINK_EXTRA = 'https://f21555c3kvj-1zc-zxjkslrl96.hop.clickbank.net';

  function loadScriptOnce(src, id, delay) {
    if (document.getElementById(id)) return;
    const run = function () {
      if (document.getElementById(id)) return;
      const script = document.createElement('script');
      script.id = id;
      script.src = src;
      script.defer = true;
      document.head.appendChild(script);
    };
    if (delay) setTimeout(run, delay);
    else run();
  }

  function loadStyleOnce(href, id) {
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
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

  function cleanText(value) {
    return String(value || '')
      .replace(/\s*\|\s*Smartafiliate/gi, '')
      .replace(/\s*\|\s*smartafiliate/gi, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function getCardTitle(card) {
    const titleEl = card.querySelector('h3 a, h3, .post-title a, .post-title, .tool-title');
    return titleEl ? cleanText(titleEl.textContent) : 'Smartafiliate';
  }

  function prepareLightCards() {
    document.querySelectorAll('.article-card, .post-card').forEach(function (card) {
      const title = getCardTitle(card);
      const box = card.querySelector('.article-image, .post-image');
      if (box) {
        box.setAttribute('data-title', title);
        box.querySelectorAll('img').forEach(function (img) {
          img.loading = 'lazy';
          img.decoding = 'async';
          img.setAttribute('fetchpriority', 'low');
        });
      }
    });
  }

  function getProfitLinks(title) {
    const t = String(title || '').toLowerCase();
    if (['midjourney', 'dall-e', 'dalle', 'canva', 'leonardo', 'تصميم'].some(function (k) { return t.includes(k); })) {
      return { primary: AFFILIATE_LINK_EXTRA, secondary: AFFILIATE_LINK, primaryText: 'جرّب أداة التصميم →', secondaryText: 'عرض إضافي →' };
    }
    if (['ollama', 'llama', 'mistral', 'falcon'].some(function (k) { return t.includes(k); })) {
      return { primary: AFFILIATE_LINK_EXTRA, secondary: AFFILIATE_LINK, primaryText: 'عرض تعلّم AI →', secondaryText: 'أداة بديلة →' };
    }
    return { primary: AFFILIATE_LINK, secondary: AFFILIATE_LINK_EXTRA, primaryText: 'جرّب الأداة →', secondaryText: 'عرض إضافي →' };
  }

  function applyAffiliateLinks() {
    document.querySelectorAll('.tool-card').forEach(function (card) {
      const mainLink = card.querySelector('.tool-link');
      if (!mainLink) return;
      const links = getProfitLinks(getCardTitle(card));
      mainLink.href = links.primary;
      mainLink.textContent = links.primaryText;
      mainLink.target = '_blank';
      mainLink.rel = 'nofollow sponsored noopener noreferrer';
      let extra = card.querySelector('.extra-affiliate-link');
      if (!extra) {
        extra = mainLink.cloneNode(true);
        extra.classList.add('extra-affiliate-link');
        mainLink.insertAdjacentElement('afterend', extra);
      }
      extra.href = links.secondary;
      extra.textContent = links.secondaryText;
      extra.target = '_blank';
      extra.rel = 'nofollow sponsored noopener noreferrer';
    });
  }

  function fixImages() {
    document.querySelectorAll('img').forEach(function (img, index) {
      if (!img.hasAttribute('width')) img.setAttribute('width', '1200');
      if (!img.hasAttribute('height')) img.setAttribute('height', '630');
      img.decoding = 'async';
      if (index > 0) {
        img.loading = 'lazy';
        img.setAttribute('fetchpriority', 'low');
      }
    });
  }

  function loadSupportScripts() {
    const path = location.pathname.replace(/\/$/, '').toLowerCase();
    const isArticle = path.includes('/posts-ai/');
    const isLibrary = path.endsWith('/ai-articles.html') || path.endsWith('/posts-ai.html') || path.endsWith('/articles.html');

    if (isLibrary) loadScriptOnce('/publish-all-posts-fix.js', 'publish-all-posts-fix-loader', 1200);
    if (isArticle || isLibrary) loadScriptOnce('/seo-internal-links.js', 'seo-internal-links-loader', 1500);
    if (isArticle) loadScriptOnce('/profit-tracker.js', 'profit-tracker-loader', 2200);
  }

  function initFast() {
    loadStyleOnce('/site-cleanup.css', 'site-cleanup-css');
    normalizeBranding();
    prepareLightCards();
    applyAffiliateLinks();
    fixImages();
    loadSupportScripts();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initFast, { once: true });
  else initFast();
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
  const open = nav.classList.toggle('active');
  button.setAttribute('aria-expanded', open ? 'true' : 'false');
  document.body.classList.toggle('menu-open', open);
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
  if (header) header.classList.toggle('header-scrolled', window.scrollY > 50);
}, { passive: true });
