(function () {
  var GTM_ID = 'GTM-P96QVPT3';
  var DEFAULT_ARTICLE_IMAGE = 'assets/images/seo-card.png';

  window.ARTICLE_IMAGE_MAP = new Proxy({}, {
    get: function () { return DEFAULT_ARTICLE_IMAGE; }
  });

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  if (!document.querySelector('script[src*="googletagmanager.com/gtm.js?id=' + GTM_ID + '"]')) {
    var firstScript = document.getElementsByTagName('script')[0];
    var gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    firstScript.parentNode.insertBefore(gtmScript, firstScript);
  }

  function normalizeUrl(url) {
    var a = document.createElement('a');
    a.href = url || '';
    return a.pathname.replace(/^\//, '').replace(/^smartafiliate\.com\//, '').replace(/^\.\//, '').split('#')[0].split('?')[0];
  }

  function isArticlePath(path) {
    return /^(posts-ai|articles)\/.+\.html$/i.test(path || '');
  }

  function resolveSiteAssetPath(assetPath) {
    var parts = window.location.pathname.split('/').filter(Boolean);
    var currentFile = parts[parts.length - 1] || '';
    var isFile = currentFile.indexOf('.') !== -1;
    var depth = isFile ? Math.max(0, parts.length - 1) : parts.length;
    return (depth ? '../'.repeat(depth) : '') + assetPath;
  }

  function absoluteAssetUrl(assetPath) {
    return window.location.origin + '/' + assetPath.replace(/^\.\.\//g, '').replace(/^\//, '');
  }

  function loadCssOnce(id, href) {
    if (document.getElementById(id)) return;
    var link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = resolveSiteAssetPath(href);
    document.head.appendChild(link);
  }

  function installGlobalFixes() {
    if (document.getElementById('smartafiliate-global-fixes')) return;
    var style = document.createElement('style');
    style.id = 'smartafiliate-global-fixes';
    style.textContent = '.logo{direction:ltr!important;unicode-bidi:isolate!important}.logo-text{direction:ltr!important;unicode-bidi:isolate!important}.logo-text-light{text-transform:capitalize!important}.site-header .logo{display:inline-flex!important;flex-direction:row!important}.smart-image-title{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important}';
    document.head.appendChild(style);
  }

  function pageHasArticleImages() {
    return !!document.querySelector('.article-card, .post-card, .blog-card, .article-image, .post-image, .blog-image, .card-image, .article-container, .article-body, .tool-card');
  }

  function loadSmartImagesCss() {
    if (!pageHasArticleImages()) return;
    loadCssOnce('smart-images-css', 'smart-images.css?v=20260424-title-2');
    loadCssOnce('title-fix-css', 'title-fix.css?v=20260424-1');
  }

  function normalizeLogoText() {
    document.querySelectorAll('.logo').forEach(function (logo) {
      var light = logo.querySelector('.logo-text-light');
      var accent = logo.querySelector('.logo-text-accent');
      if (light) light.textContent = 'Smart';
      if (accent) accent.textContent = 'afiliate';
      logo.setAttribute('dir', 'ltr');
      logo.setAttribute('aria-label', 'Smartafiliate');
    });
  }

  function findBestArticleLink(card) {
    var links = Array.prototype.slice.call(card.querySelectorAll('a[href]'));
    for (var i = 0; i < links.length; i += 1) {
      var href = normalizeUrl(links[i].getAttribute('href'));
      if (isArticlePath(href)) return { href: href, link: links[i] };
    }
    return null;
  }

  function removeGeneratedImageTitles(scope) {
    (scope || document).querySelectorAll('.smart-image-title').forEach(function (el) { el.remove(); });
  }

  function ensureImageInsideBox(box, href, title, imagePath) {
    if (!box) return null;
    removeGeneratedImageTitles(box);
    var img = box.querySelector('img');
    if (!img) {
      box.innerHTML = '';
      var a = document.createElement('a');
      a.className = 'smart-article-image-link';
      a.href = href || '#';
      img = document.createElement('img');
      a.appendChild(img);
      box.appendChild(a);
    }
    img.src = imagePath;
    img.dataset.fallback = imagePath;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.alt = title || 'صورة افتراضية للمقال';
    img.classList.add('smart-image-loaded');

    if (href && img.parentElement && img.parentElement.tagName !== 'A') {
      var link = document.createElement('a');
      link.href = href;
      link.className = 'smart-article-image-link';
      img.parentElement.insertBefore(link, img);
      link.appendChild(img);
    }
    return img;
  }

  function applyDefaultArticleImagesEverywhere() {
    var selectors = '.article-card,.post-card,.blog-card,.review-card,.decision-card,.quick-card,.card,article,.tool-card';
    document.querySelectorAll(selectors).forEach(function (card) {
      var match = findBestArticleLink(card);
      if (!match) return;
      var imagePath = resolveSiteAssetPath(DEFAULT_ARTICLE_IMAGE);
      var heading = card.querySelector('h1, h2, h3, .post-title, .article-title');
      var title = (heading && heading.textContent || match.link.textContent || 'صورة افتراضية للمقال').replace(/\s+/g, ' ').trim();
      var box = card.querySelector('.article-image,.post-image,.blog-image,.card-image,.tool-preview');
      var img = card.querySelector('img');
      if (box) ensureImageInsideBox(box, match.href, title, imagePath);
      else if (img) {
        img.src = imagePath;
        img.dataset.fallback = imagePath;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.alt = title;
      }
    });
    removeGeneratedImageTitles(document);
  }

  function upsertMeta(selector, attrName, attrValue, content) {
    var meta = document.querySelector(selector);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attrName, attrValue);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }

  function applyCurrentArticleMeta() {
    var currentPath = normalizeUrl(window.location.href);
    if (!isArticlePath(currentPath)) return;
    var localImage = resolveSiteAssetPath(DEFAULT_ARTICLE_IMAGE);
    var absoluteImage = absoluteAssetUrl(DEFAULT_ARTICLE_IMAGE);
    var heading = document.querySelector('h1');
    var pageTitle = (heading && heading.textContent.trim()) || document.title;
    var featured = document.querySelector('.article-featured-image');
    var articleBody = document.querySelector('.article-body, .article-container');
    if (!featured && articleBody) {
      featured = document.createElement('div');
      featured.className = 'article-featured-image';
      featured.setAttribute('role', 'img');
      articleBody.insertBefore(featured, articleBody.firstChild);
    }
    if (featured) {
      featured.style.backgroundImage = 'linear-gradient(180deg, rgba(2,6,23,.05), rgba(2,6,23,.35)), url("' + localImage + '")';
      featured.setAttribute('aria-label', pageTitle || 'صورة افتراضية للمقال');
    }
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', absoluteImage);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', absoluteImage);
  }

  function applyGlobalImageFallbacks() {
    document.querySelectorAll('img[data-fallback]').forEach(function (img) {
      img.addEventListener('error', function () {
        if (img.dataset.fallbackApplied === 'true') return;
        img.dataset.fallbackApplied = 'true';
        img.src = img.dataset.fallback;
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    installGlobalFixes();
    normalizeLogoText();
    loadSmartImagesCss();
    applyDefaultArticleImagesEverywhere();
    applyCurrentArticleMeta();
    applyGlobalImageFallbacks();
    removeGeneratedImageTitles(document);
    if (!document.body || document.getElementById('gtm-noscript-fallback')) return;
    var wrapper = document.createElement('div');
    wrapper.id = 'gtm-noscript-fallback';
    wrapper.innerHTML = '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' + GTM_ID + '" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
    document.body.insertBefore(wrapper, document.body.firstChild);
  });
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
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 900) closeMenu();
});

window.addEventListener('scroll', function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  if (window.scrollY > 50) header.classList.add('header-scrolled');
  else header.classList.remove('header-scrolled');
});
