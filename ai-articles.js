function copyPageLink(url) {
  const message = document.getElementById('shareMessage');
  navigator.clipboard.writeText(url).then(function () {
    if (message) message.textContent = 'تم نسخ رابط الصفحة ✅';
  }).catch(function () {
    if (message) message.textContent = 'تعذر نسخ الرابط، انسخه يدويًا: ' + url;
  });
}

const FALLBACK_ARTICLE_IMAGE_MAP = {
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
  'posts-ai/canva-ai-review.html': 'assets/images/image_28.jpg',
  'posts-ai/27-ai-and-personal-brand.html': 'assets/images/01-ai-personal-brand.png',
  'posts-ai/28-ai-newsletters.html': 'assets/images/02-ai-newsletters.png',
  'posts-ai/ai-automation-productivity.html': 'assets/images/03-ai-automation-productivity.png',
  'posts-ai/ai-design-for-social-media.html': 'assets/images/04-ai-design-social-media.png',
  'posts-ai/ai-learning-communities.html': 'assets/images/05-ai-learning-communities.png',
  'posts-ai/ai-logo-design-guide.html': 'assets/images/06-ai-logo-design.png',
  'posts-ai/ai-projects-for-beginners.html': 'assets/images/07-ai-projects-beginners.png',
  'posts-ai/best-ai-design-tools.html': 'assets/images/08-best-ai-design-tools.png',
  'posts-ai/best-books-to-learn-ai.html': 'assets/images/09-best-ai-books.png',
  'posts-ai/copyai-review.html': 'assets/images/10-copyai-review.png',
  'posts-ai/falcon-guide.html': 'assets/images/11-falcon-guide.png',
  'posts-ai/free-ai-courses-arabic.html': 'assets/images/12-free-ai-courses-arabic.png',
  'posts-ai/future-of-ai-automation.html': 'assets/images/13-future-ai-automation.png',
  'posts-ai/latest-ai-automation-uses.html': 'assets/images/14-latest-ai-automation-uses.png',
  'posts-ai/learning-tips-for-ai.html': 'assets/images/15-ai-learning-tips.png',
  'posts-ai/llama3-guide.html': 'assets/images/16-llama3-guide.png',
  'posts-ai/math-for-ai-beginners.html': 'assets/images/17-math-for-ai-beginners.png',
  'posts-ai/mistral-guide.html': 'assets/images/18-mistral-guide.png',
  'posts-ai/ollama-guide.html': 'assets/images/19-ollama-guide.png',
  'posts-ai/python-for-ai-beginners.html': 'assets/images/20-python-for-ai-beginners.png',
  'posts-ai/tiktok-growth-engineering.html': 'assets/images/21-tiktok-growth-engineering.png',
  'posts-ai/what-is-ai-beginners.html': 'assets/images/22-what-is-ai-beginners.png',
  'articles/paid-vs-free-vs-open-source-ai.html': 'assets/images/23-paid-free-open-source-ai.png'
};

const ARTICLE_IMAGE_MAP = Object.assign({}, FALLBACK_ARTICLE_IMAGE_MAP, window.ARTICLE_IMAGE_MAP || {});

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
  return a.pathname
    .replace(/^\//, '')
    .replace(/^smartafiliate\.com\//, '')
    .replace(/^\.\//, '')
    .split('#')[0]
    .split('?')[0];
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

function ensureImageTitle(imageBox, title) {
  if (!imageBox || !title) return;
  let titleEl = imageBox.querySelector('.smart-image-title');
  if (!titleEl) {
    titleEl = document.createElement('span');
    titleEl.className = 'smart-image-title';
    imageBox.appendChild(titleEl);
  }
  titleEl.textContent = title;
}

function applyNewArticleImages() {
  document.querySelectorAll('.article-card').forEach(function (card) {
    const articleUrl = getCardArticleUrl(card);
    const imageBox = card.querySelector('.article-image, .post-image, .blog-image, .card-image');
    const img = imageBox ? imageBox.querySelector('img') : card.querySelector('img');
    if (!articleUrl || !img) return;

    const newImage = ARTICLE_IMAGE_MAP[articleUrl];
    const title = getCardTitle(card) || img.alt || 'صورة المقال';

    if (newImage) {
      const resolvedImage = resolveAsset(newImage);
      img.src = resolvedImage;
      img.dataset.fallback = resolvedImage;
    } else if (!img.dataset.fallback) {
      img.dataset.fallback = resolveAsset('assets/images/seo-card.png');
    }

    img.loading = 'lazy';
    img.decoding = 'async';
    img.alt = title;
    img.classList.add('smart-image-loaded');

    ensureImageLink(imageBox, img, articleUrl, title);
    ensureImageTitle(imageBox, title);
  });
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

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'article_card_click', eventPayload);
  }

  try {
    const key = 'smartafiliate_article_clicks';
    const current = JSON.parse(localStorage.getItem(key) || '[]');
    current.push(Object.assign({ clicked_at: new Date().toISOString() }, eventPayload));
    localStorage.setItem(key, JSON.stringify(current.slice(-100)));
  } catch (error) {
    // تجاهل الخطأ إذا كان المتصفح يمنع localStorage.
  }
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
      img.src = img.dataset.fallback || resolveAsset('assets/images/seo-card.png');
    });
  });
}

sortArticlesByConversionPriority();
applyNewArticleImages();
addArticleClickTracking();
applyCardImageFallbacks();
