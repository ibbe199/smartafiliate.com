function copyPageLink(url) {
  const message = document.getElementById('shareMessage');
  navigator.clipboard.writeText(url).then(function () {
    if (message) message.textContent = 'تم نسخ رابط الصفحة ✅';
  }).catch(function () {
    if (message) message.textContent = 'تعذر نسخ الرابط، انسخه يدويًا: ' + url;
  });
}

const DEFAULT_ARTICLE_IMAGE = 'assets/images/seo-card.png';
const ARTICLE_IMAGE_MAP = new Proxy({}, {
  get: function () { return DEFAULT_ARTICLE_IMAGE; }
});

const CONVERSION_PRIORITY = {
  'posts-ai/chatgpt-review.html': 100,
  'posts-ai/jasper-ai-review.html': 98,
  'posts-ai/writesonic-review.html': 96,
  'posts-ai/canva-ai-review.html': 94,
  'posts-ai/midjourney-guide.html': 92,
  'posts-ai/dalle3-review.html': 90,
  'posts-ai/30-best-ai-writing-tools.html': 88,
  'posts-ai/ai-affiliate-tools.html': 86,
  'posts-ai/affiliate-funnel-guide.html': 82,
  'posts-ai/affiliate-growth-strategy.html': 80,
  'posts-ai/ai-content-sales-system.html': 78,
  'posts-ai/arab-affiliate-programs.html': 76,
  'posts-ai/what-is-affiliate-marketing.html': 72,
  'posts-ai/affiliate-mistakes.html': 70,
  'posts-ai/content-structure-seo.html': 68,
  'posts-ai/90-day-ai-plan.html': 66,
  'posts-ai/30-day-ai-plan.html': 64,
  'posts-ai/build-website-with-ai-in-minutes.html': 58,
  'posts-ai/ai-seo-content-success.html': 56,
  'posts-ai/google-ai-content-acceptance.html': 54,
  'posts-ai/google-penalty-ai-content-truth.html': 52,
  'posts-ai/ai-content-google-opportunity-risk.html': 50,
  'posts-ai/complete-ai-learning-path.html': 48,
  'posts-ai/latest-ai-news-2026.html': 46,
  'posts-ai/future-arab-websites-ai.html': 44,
  'posts-ai/ai-save-or-bury-arab-websites.html': 42,
  'posts-ai/arab-websites-ai-who-survives.html': 40,
  'posts-ai/ai-knocks-arab-websites-door.html': 38
};

function normalizeUrl(url) {
  const a = document.createElement('a');
  a.href = url || '';
  return a.pathname.replace(/^\//, '').replace(/^smartafiliate\.com\//, '').replace(/^\.\//, '').split('#')[0].split('?')[0];
}

function resolveAsset(assetPath) {
  if (!assetPath) return '';
  if (/^https?:\/\//i.test(assetPath) || assetPath.startsWith('data:')) return assetPath;
  const parts = window.location.pathname.split('/').filter(Boolean);
  const currentFile = parts[parts.length - 1] || '';
  const isFile = currentFile.indexOf('.') !== -1;
  const depth = isFile ? Math.max(0, parts.length - 1) : parts.length;
  return (depth ? '../'.repeat(depth) : '') + assetPath.replace(/^\//, '');
}

function getCardArticleUrl(card) {
  const titleLink = card.querySelector('.article-content h3 a, .post-title a, h3 a, a.read-more');
  return titleLink ? normalizeUrl(titleLink.getAttribute('href')) : '';
}

function getCardTitle(card) {
  const titleLink = card.querySelector('.article-content h3 a, .post-title a, h3 a');
  return titleLink ? titleLink.textContent.replace(/\s+/g, ' ').trim() : '';
}

function removeImageTitles(scope) {
  (scope || document).querySelectorAll('.smart-image-title').forEach(function (el) {
    el.remove();
  });
}

function installImageTitleBlocker() {
  if (document.getElementById('ai-articles-no-image-titles')) return;
  const style = document.createElement('style');
  style.id = 'ai-articles-no-image-titles';
  style.textContent = '.smart-image-title{display:none!important;visibility:hidden!important;opacity:0!important}';
  document.head.appendChild(style);
}

function sortArticlesByConversionPriority() {
  const grid = document.querySelector('.articles-grid');
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('.article-card'));
  cards
    .map(function (card, index) {
      const url = getCardArticleUrl(card);
      return { card: card, index: index, priority: CONVERSION_PRIORITY[url] || 10 };
    })
    .sort(function (a, b) {
      if (b.priority !== a.priority) return b.priority - a.priority;
      return a.index - b.index;
    })
    .forEach(function (item, index) {
      item.card.dataset.conversionRank = String(index + 1);
      item.card.dataset.conversionPriority = String(item.priority);
      grid.appendChild(item.card);
    });
}

function ensureImageLink(imageBox, img, articleUrl, title) {
  if (!imageBox || !img || !articleUrl) return;
  const existingLink = img.closest('a');
  if (existingLink) {
    existingLink.href = articleUrl;
    existingLink.setAttribute('aria-label', title || 'اقرأ المقال');
    existingLink.dataset.trackArea = 'image';
    return;
  }
  const imageLink = document.createElement('a');
  imageLink.href = articleUrl;
  imageLink.className = 'smart-article-image-link';
  imageLink.setAttribute('aria-label', title || 'اقرأ المقال');
  imageLink.dataset.trackArea = 'image';
  img.parentNode.insertBefore(imageLink, img);
  imageLink.appendChild(img);
}

function applyNewArticleImages() {
  installImageTitleBlocker();
  document.querySelectorAll('.article-card').forEach(function (card) {
    const articleUrl = getCardArticleUrl(card);
    const imageBox = card.querySelector('.article-image, .post-image, .blog-image, .card-image');
    const img = imageBox ? imageBox.querySelector('img') : card.querySelector('img');
    if (!articleUrl || !img) return;

    const resolvedImage = resolveAsset(DEFAULT_ARTICLE_IMAGE);
    const title = getCardTitle(card) || img.alt || 'صورة افتراضية للمقال';

    img.src = resolvedImage;
    img.dataset.fallback = resolvedImage;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.alt = title;
    img.classList.add('smart-image-loaded');

    ensureImageLink(imageBox, img, articleUrl, title);
    removeImageTitles(card);
  });
  removeImageTitles(document);
}

function trackArticleClick(articleUrl, articleTitle, clickArea, rank, priority) {
  const eventPayload = {
    article_url: articleUrl,
    article_title: articleTitle,
    click_area: clickArea,
    conversion_rank: rank,
    conversion_priority: priority,
    page_path: window.location.pathname
  };
  if (typeof window.gtag === 'function') window.gtag('event', 'article_card_click', eventPayload);
}

function addArticleClickTracking() {
  document.querySelectorAll('.article-card').forEach(function (card) {
    const articleUrl = getCardArticleUrl(card);
    if (!articleUrl) return;
    const articleTitle = getCardTitle(card);
    const rank = card.dataset.conversionRank || '';
    const priority = card.dataset.conversionPriority || '';
    card.querySelectorAll('a[href]').forEach(function (link) {
      const linkUrl = normalizeUrl(link.getAttribute('href'));
      if (linkUrl !== articleUrl) return;
      if (link.dataset.smartTrackingReady === 'true') return;
      link.dataset.smartTrackingReady = 'true';
      link.addEventListener('click', function () {
        const clickArea = link.dataset.trackArea || (link.classList.contains('read-more') ? 'read_more' : 'title');
        trackArticleClick(articleUrl, articleTitle, clickArea, rank, priority);
      });
    });
  });
}

function applyCardImageFallbacks() {
  document.querySelectorAll('.article-image img, .post-image img, .blog-image img, .card-image img').forEach(function (img) {
    if (img.dataset.smartFallbackReady === 'true') return;
    img.dataset.smartFallbackReady = 'true';
    img.addEventListener('error', function () {
      if (img.dataset.fallbackApplied === 'true') return;
      img.dataset.fallbackApplied = 'true';
      img.src = img.dataset.fallback || resolveAsset(DEFAULT_ARTICLE_IMAGE);
    });
  });
}

installImageTitleBlocker();
sortArticlesByConversionPriority();
applyNewArticleImages();
addArticleClickTracking();
applyCardImageFallbacks();
removeImageTitles(document);
