(function () {
  var GTM_ID = 'GTM-P96QVPT3';

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  if (!document.querySelector('script[src*="googletagmanager.com/gtm.js?id=' + GTM_ID + '"]')) {
    var firstScript = document.getElementsByTagName('script')[0];
    var gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    firstScript.parentNode.insertBefore(gtmScript, firstScript);
  }

  var ARTICLE_IMAGE_MAP = {
    'posts-ai/google-ai-content-acceptance.html': 'assets/images/image_01.jpg',
    'posts-ai/future-arab-websites-ai.html': 'assets/images/image_02.jpg',
    'posts-ai/ai-content-google-opportunity-risk.html': 'assets/images/image_03.jpg',
    'posts-ai/google-penalty-ai-content-truth.html': 'assets/images/image_04.jpg',
    'posts-ai/ai-seo-content-success.html': 'assets/images/image_05.jpg',
    'posts-ai/ai-save-or-bury-arab-websites.html': 'assets/images/image_06.jpg',
    'posts-ai/arab-websites-ai-who-survives.html': 'assets/images/image_07.jpg',
    'posts-ai/ai-knocks-arab-websites-door.html': 'assets/images/image_08.jpg',
    'posts-ai/build-website-with-ai-in-minutes.html': 'assets/images/image_09.jpg',
    'posts-ai/latest-ai-news-2026.html': 'assets/images/image_10.jpg',
    'posts-ai/30-best-ai-writing-tools.html': 'assets/images/image_11.jpg',
    'posts-ai/90-day-ai-plan.html': 'assets/images/image_12.jpg',
    'posts-ai/29-90-day-ai-plan.html': 'assets/images/image_12.jpg',
    'posts-ai/30-day-ai-plan.html': 'assets/images/image_13.jpg',
    'posts-ai/ai-affiliate-tools.html': 'assets/images/image_14.jpg',
    'articles/ai-tools-for-affiliate-marketing.html': 'assets/images/image_14.jpg',
    'articles/ai-tools-for-afiliate-marketing.html': 'assets/images/image_14.jpg',
    'posts-ai/ai-content-sales-system.html': 'assets/images/image_15.jpg',
    'posts-ai/affiliate-funnel-guide.html': 'assets/images/image_16.jpg',
    'posts-ai/affiliate-growth-strategy.html': 'assets/images/file_00000000c704720c89048bb85ea9bad6.png',
    'posts-ai/what-is-affiliate-marketing.html': 'assets/images/image_18.jpg',
    'articles/what-is-affiliate-marketing.html': 'assets/images/image_18.jpg',
    'posts-ai/affiliate-mistakes.html': 'assets/images/image_19.jpg',
    'articles/affiliate-marketing-mistakes.html': 'assets/images/image_19.jpg',
    'posts-ai/arab-affiliate-programs.html': 'assets/images/image_20.jpg',
    'articles/best-affiliate-programs-arab-world.html': 'assets/images/image_20.jpg',
    'posts-ai/complete-ai-learning-path.html': 'assets/images/image_21.jpg',
    'posts-ai/content-structure-seo.html': 'assets/images/image_22.jpg',
    'articles/best-content-structure.html': 'assets/images/image_22.jpg',
    'articles/seo-for-affiliate-sites.html': 'assets/images/image_22.jpg',
    'posts-ai/chatgpt-review.html': 'assets/images/image_23.jpg',
    'posts-ai/jasper-ai-review.html': 'assets/images/image_24.jpg',
    'posts-ai/writesonic-review.html': 'assets/images/image_25.jpg',
    'posts-ai/midjourney-guide.html': 'assets/images/image_26.jpg',
    'posts-ai/dalle3-review.html': 'assets/images/image_27.jpg',
    'posts-ai/canva-ai-review.html': 'assets/images/image_28.jpg',
    'posts-ai/27-ai-and-personal-brand.html': 'assets/images/01-ai-personal-brand.png',
    'posts-ai/28-ai-newsletters.html': 'assets/images/02-ai-newsletters.png',
    'posts-ai/ai-automation-productivity.html': 'assets/images/03-ai-automation-productivity.png',
    'posts-ai/ai-design-for-social-media.html': 'assets/images/04-ai-design-social-media.png',
    'posts-ai/ai-learning-communities.html': 'assets/images/05-ai-learning-communities.png',
    'posts-ai/ai-logo-design-guide.html': 'assets/images/06-ai-logo-design.png',
    'posts-ai/ai-projects-for-beginners.html': 'assets/07-ai-projects-beginners.png',
    'posts-ai/best-ai-design-tools.html': 'assets/08-best-ai-design-tools.png',
    'posts-ai/best-books-to-learn-ai.html': 'assets/09-best-ai-books.png',
    'posts-ai/copyai-review.html': 'assets/images/10-copyai-review.png',
    'posts-ai/falcon-guide.html': 'assets/images/11-falcon-guide.png',
    'posts-ai/free-ai-courses-arabic.html': 'assets/images/12-free-ai-courses-arabic.png',
    'posts-ai/future-of-ai-automation.html': 'assets/13-future-ai-automation.png',
    'posts-ai/latest-ai-automation-uses.html': 'assets/14-latest-ai-automation-uses.png',
    'posts-ai/learning-tips-for-ai.html': 'assets/15-ai-learning-tips.png',
    'posts-ai/llama3-guide.html': 'assets/16-llama3-guide.png',
    'posts-ai/math-for-ai-beginners.html': 'assets/17-math-for-ai-beginners.png',
    'posts-ai/mistral-guide.html': 'assets/18-mistral-guide.png',
    'posts-ai/ollama-guide.html': 'assets/19-ollama-guide.png',
    'posts-ai/python-for-ai-beginners.html': 'assets/20-python-for-ai-beginners.png',
    'posts-ai/tiktok-growth-engineering.html': 'assets/21-tiktok-growth-engineering.png',
    'posts-ai/what-is-ai-beginners.html': 'assets/22-what-is-ai-beginners.png',
    'articles/paid-vs-free-vs-open-source-ai.html': 'assets/23-paid-free-open-source-ai.png'
  };

  window.ARTICLE_IMAGE_MAP = ARTICLE_IMAGE_MAP;

  function normalizeUrl(url) {
    var a = document.createElement('a');
    a.href = url || '';
    return a.pathname.replace(/^\//, '').replace(/^smartafiliate\.com\//, '').replace(/^\.\//, '').split('#')[0].split('?')[0];
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

  function installGlobalFixes() {
    if (document.getElementById('smartafiliate-global-fixes')) return;
    var style = document.createElement('style');
    style.id = 'smartafiliate-global-fixes';
    style.textContent = '.logo{direction:ltr!important;unicode-bidi:isolate!important}.logo-text{direction:ltr!important;unicode-bidi:isolate!important}.logo-text-light{text-transform:capitalize!important}.site-header .logo{display:inline-flex!important;flex-direction:row!important}.smart-image-title,.article-image .smart-image-title,.post-image .smart-image-title,.blog-image .smart-image-title,.card-image .smart-image-title,.tool-preview .smart-image-title{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important}';
    document.head.appendChild(style);
  }

  function pageHasArticleImages() {
    return !!document.querySelector('.article-card, .post-card, .blog-card, .article-image, .post-image, .blog-image, .card-image, .article-container, .article-body');
  }

  function loadSmartImagesCss() {
    if (!pageHasArticleImages() || document.getElementById('smart-images-css')) return;
    var imageCss = document.createElement('link');
    imageCss.id = 'smart-images-css';
    imageCss.rel = 'stylesheet';
    imageCss.href = resolveSiteAssetPath('smart-images.css?v=20260424-13');
    document.head.appendChild(imageCss);
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
      if (ARTICLE_IMAGE_MAP[href]) return { href: href, link: links[i] };
    }
    return null;
  }

  function removeGeneratedImageTitles(scope) {
    (scope || document).querySelectorAll('.smart-image-title').forEach(function (el) {
      el.remove();
    });
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
      a.setAttribute('aria-label', title || 'اقرأ المقال');
      img = document.createElement('img');
      a.appendChild(img);
      box.appendChild(a);
    }
    img.src = imagePath;
    img.dataset.fallback = imagePath;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.alt = title || 'صورة المقال';
    img.classList.add('smart-image-loaded');

    if (href && img.parentElement && img.parentElement.tagName !== 'A') {
      var link = document.createElement('a');
      link.href = href;
      link.className = 'smart-article-image-link';
      link.setAttribute('aria-label', title || 'اقرأ المقال');
      img.parentElement.insertBefore(link, img);
      link.appendChild(img);
    }
    return img;
  }

  function applyArticleImagesEverywhere() {
    if (!pageHasArticleImages()) return;
    var selectors = '.article-card,.post-card,.blog-card,.review-card,.decision-card,.quick-card,.card,article';
    document.querySelectorAll(selectors).forEach(function (card) {
      var match = findBestArticleLink(card);
      if (!match) return;
      var imagePath = resolveSiteAssetPath(ARTICLE_IMAGE_MAP[match.href]);
      var heading = card.querySelector('h1, h2, h3, .post-title, .article-title');
      var title = (heading && heading.textContent || match.link.textContent || match.link.getAttribute('aria-label') || 'صورة المقال').replace(/\s+/g, ' ').trim();
      var box = card.querySelector('.article-image,.post-image,.blog-image,.card-image');
      var img = card.querySelector('img');
      if (box) ensureImageInsideBox(box, match.href, title, imagePath);
      else if (img) {
        img.src = imagePath;
        img.dataset.fallback = imagePath;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.alt = title;
        img.classList.add('smart-image-loaded');
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

  function applyCurrentArticleBackgroundAndMeta() {
    var currentPath = normalizeUrl(window.location.href);
    var asset = ARTICLE_IMAGE_MAP[currentPath];
    if (!asset) return;
    var localImage = resolveSiteAssetPath(asset);
    var absoluteImage = absoluteAssetUrl(asset);
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
      featured.setAttribute('aria-label', pageTitle || 'صورة المقال');
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
    applyArticleImagesEverywhere();
    applyCurrentArticleBackgroundAndMeta();
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
