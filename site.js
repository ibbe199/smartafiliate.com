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

  if (!document.getElementById('smart-images-css')) {
    var imageCss = document.createElement('link');
    imageCss.id = 'smart-images-css';
    imageCss.rel = 'stylesheet';
    imageCss.href = resolveSiteAssetPath('smart-images.css');
    document.head.appendChild(imageCss);
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
    'posts-ai/affiliate-growth-strategy.html': 'assets/images/image_17.jpg',
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
    'posts-ai/canva-ai-review.html': 'assets/images/image_28.jpg'
  };

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

  function resolveSiteAssetPath(assetPath) {
    var parts = window.location.pathname.split('/').filter(Boolean);
    var currentFile = parts[parts.length - 1] || '';
    var isFile = currentFile.indexOf('.') !== -1;
    var depth = isFile ? Math.max(0, parts.length - 1) : parts.length;
    return (depth ? '../'.repeat(depth) : '') + assetPath;
  }

  function normalizeUrl(url) {
    var a = document.createElement('a');
    a.href = url || '';
    var path = a.pathname.replace(/^\//, '');
    path = path.replace(/^smartafiliate\.com\//, '');
    return path.replace(/^\.\//, '').split('#')[0].split('?')[0];
  }

  function findBestArticleLink(card) {
    var links = Array.prototype.slice.call(card.querySelectorAll('a[href]'));
    for (var i = 0; i < links.length; i += 1) {
      var href = normalizeUrl(links[i].getAttribute('href'));
      if (ARTICLE_IMAGE_MAP[href]) return { href: href, link: links[i] };
    }
    return null;
  }

  function ensureImageInsideBox(box, href, title, imagePath) {
    if (!box) return null;
    var img = box.querySelector('img');
    if (!img) {
      box.innerHTML = '';
      var a = document.createElement('a');
      a.className = 'smart-article-image-link';
      a.href = href;
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

    if (img.parentElement && img.parentElement.tagName !== 'A') {
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
    var selectors = [
      '.article-card', '.post-card', '.blog-card', '.tool-card', '.review-card', '.decision-card', '.quick-card', '.card', 'article'
    ].join(',');

    document.querySelectorAll(selectors).forEach(function (card) {
      var match = findBestArticleLink(card);
      if (!match) return;
      var imagePath = resolveSiteAssetPath(ARTICLE_IMAGE_MAP[match.href]);
      var title = (match.link.textContent || '').trim() || match.link.getAttribute('aria-label') || 'اقرأ المقال';
      var box = card.querySelector('.article-image, .post-image, .blog-image, .card-image, .tool-preview');
      var img = card.querySelector('img');

      if (box) {
        ensureImageInsideBox(box, match.href, title, imagePath);
      } else if (img) {
        img.src = imagePath;
        img.dataset.fallback = imagePath;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.alt = title;
        img.classList.add('smart-image-loaded');
      }
    });
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
    if (!document.getElementById('smartafiliate-logo-fix')) {
      var logoFix = document.createElement('style');
      logoFix.id = 'smartafiliate-logo-fix';
      logoFix.textContent = '.logo{direction:ltr!important;unicode-bidi:isolate!important}.logo-text{direction:ltr!important;unicode-bidi:isolate!important}.logo-text-light{text-transform:capitalize!important}.site-header .logo{display:inline-flex!important;flex-direction:row!important}.smart-article-image-link{display:block;color:inherit;text-decoration:none;width:100%;height:100%}.smart-article-image-link img{display:block;width:100%;height:100%;object-fit:cover}';
      document.head.appendChild(logoFix);
    }

    normalizeLogoText();
    applyArticleImagesEverywhere();
    applyGlobalImageFallbacks();

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
  if (nav.classList.contains('active') && !nav.contains(event.target) && !button.contains(event.target)) {
    closeMenu();
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 900) closeMenu();
});

window.addEventListener('scroll', function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  if (window.scrollY > 50) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});
