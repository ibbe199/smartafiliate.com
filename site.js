(function () {
  const BRAND = 'Smartafiliate';

  function normalizeBranding() {
    document.title = (document.title || '').replace(/smartafiliate/gi, BRAND);
    document.querySelectorAll('meta[content]').forEach(function (meta) {
      const value = meta.getAttribute('content') || '';
      const next = value
        .replace(/smartafiliate/gi, BRAND)
        .replace(/homepage-ai-tools-reviews\.png/g, 'homepage-ai-tools-reviews.webp')
        .replace(/homepage-ai-tools-guide\.png/g, 'homepage-ai-tools-guide.webp');
      if (next !== value) meta.setAttribute('content', next);
    });
    document.querySelectorAll('.logo').forEach(function (logo) {
      const light = logo.querySelector('.logo-text-light');
      const accent = logo.querySelector('.logo-text-accent');
      if (light && accent) { light.textContent = 'Smart'; accent.textContent = 'afiliate'; }
    });
  }

  function fixImages() {
    const replacements = {
      '/assets/images/homepage-ai-tools-reviews.png': '/assets/images/homepage-ai-tools-reviews.webp',
      '/assets/images/homepage-ai-tools-guide.png': '/assets/images/homepage-ai-tools-guide.webp',
      'assets/images/homepage-ai-tools-reviews.png': '/assets/images/homepage-ai-tools-reviews.webp',
      'assets/images/homepage-ai-tools-guide.png': '/assets/images/homepage-ai-tools-guide.webp'
    };
    document.querySelectorAll('img').forEach(function (img) {
      const src = img.getAttribute('src') || '';
      if (replacements[src]) img.setAttribute('src', replacements[src]);
      else if (src.indexOf('homepage-ai-tools-reviews.png') !== -1) img.setAttribute('src', '/assets/images/homepage-ai-tools-reviews.webp');
      else if (src.indexOf('homepage-ai-tools-guide.png') !== -1) img.setAttribute('src', '/assets/images/homepage-ai-tools-guide.webp');
      if (!img.hasAttribute('loading') && !img.hasAttribute('fetchpriority')) img.setAttribute('loading', 'lazy');
      if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
    });
  }

  function cleanHomepageDirectory() {
    document.querySelectorAll('.home-page .article-directory img.link-thumb').forEach(function (img) { img.remove(); });
  }

  function init() {
    normalizeBranding();
    fixImages();
    cleanHomepageDirectory();
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
