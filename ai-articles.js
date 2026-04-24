function copyPageLink(url) {
  const message = document.getElementById('shareMessage');
  navigator.clipboard.writeText(url).then(function () {
    if (message) message.textContent = 'تم نسخ رابط الصفحة ✅';
  }).catch(function () {
    if (message) message.textContent = 'تعذر نسخ الرابط، انسخه يدويًا: ' + url;
  });
}

const ARTICLE_IMAGE_MAP = {
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
  'posts-ai/30-day-ai-plan.html': 'assets/images/image_13.jpg',
  'posts-ai/ai-affiliate-tools.html': 'assets/images/image_14.jpg',
  'posts-ai/ai-content-sales-system.html': 'assets/images/image_15.jpg',
  'posts-ai/affiliate-funnel-guide.html': 'assets/images/image_16.jpg',
  'posts-ai/affiliate-growth-strategy.html': 'assets/images/image_17.jpg',
  'posts-ai/what-is-affiliate-marketing.html': 'assets/images/image_18.jpg',
  'posts-ai/affiliate-mistakes.html': 'assets/images/image_19.jpg',
  'posts-ai/arab-affiliate-programs.html': 'assets/images/image_20.jpg',
  'posts-ai/complete-ai-learning-path.html': 'assets/images/image_21.jpg',
  'posts-ai/content-structure-seo.html': 'assets/images/image_22.jpg',
  'posts-ai/chatgpt-review.html': 'assets/images/image_23.jpg',
  'posts-ai/jasper-ai-review.html': 'assets/images/image_24.jpg',
  'posts-ai/writesonic-review.html': 'assets/images/image_25.jpg',
  'posts-ai/midjourney-guide.html': 'assets/images/image_26.jpg',
  'posts-ai/dalle3-review.html': 'assets/images/image_27.jpg',
  'posts-ai/canva-ai-review.html': 'assets/images/image_28.jpg'
};

const CONVERSION_PRIORITY = {
  // أعلى نية شراء/اشتراك: مراجعات أدوات مباشرة
  'posts-ai/chatgpt-review.html': 100,
  'posts-ai/jasper-ai-review.html': 98,
  'posts-ai/writesonic-review.html': 96,
  'posts-ai/canva-ai-review.html': 94,
  'posts-ai/midjourney-guide.html': 92,
  'posts-ai/dalle3-review.html': 90,
  'posts-ai/30-best-ai-writing-tools.html': 88,
  'posts-ai/ai-affiliate-tools.html': 86,

  // نية تحويل متوسطة: أفلييت، مسارات، أنظمة، خطط
  'posts-ai/affiliate-funnel-guide.html': 82,
  'posts-ai/affiliate-growth-strategy.html': 80,
  'posts-ai/ai-content-sales-system.html': 78,
  'posts-ai/arab-affiliate-programs.html': 76,
  'posts-ai/what-is-affiliate-marketing.html': 72,
  'posts-ai/affiliate-mistakes.html': 70,
  'posts-ai/content-structure-seo.html': 68,
  'posts-ai/90-day-ai-plan.html': 66,
  'posts-ai/30-day-ai-plan.html': 64,

  // نية تعليمية/معلوماتية: جيدة للترافيك وبناء الثقة
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
  return (url || '').replace(/^\.\//, '').split('#')[0].split('?')[0];
}

function getCardArticleUrl(card) {
  const titleLink = card.querySelector('.article-content h3 a, h3 a, a.read-more');
  return titleLink ? normalizeUrl(titleLink.getAttribute('href')) : '';
}

function getCardTitle(card) {
  const titleLink = card.querySelector('.article-content h3 a, h3 a');
  return titleLink ? titleLink.textContent.trim() : '';
}

function sortArticlesByConversionPriority() {
  const grid = document.querySelector('.articles-grid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.article-card'));
  cards
    .map(function (card, index) {
      const url = getCardArticleUrl(card);
      return {
        card: card,
        index: index,
        priority: CONVERSION_PRIORITY[url] || 10
      };
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

function applyNewArticleImages() {
  document.querySelectorAll('.article-card').forEach(function (card) {
    const titleLink = card.querySelector('.article-content h3 a, h3 a, a.read-more');
    const img = card.querySelector('.article-image img');
    if (!titleLink || !img) return;

    const articleUrl = normalizeUrl(titleLink.getAttribute('href'));
    const newImage = ARTICLE_IMAGE_MAP[articleUrl];
    if (!newImage) return;

    img.src = newImage;
    img.dataset.fallback = newImage;
    img.loading = 'lazy';
    img.decoding = 'async';

    const title = titleLink.textContent.trim();
    if (title) img.alt = title;

    const imageBox = img.closest('.article-image');
    if (imageBox && imageBox.tagName !== 'A' && !imageBox.querySelector('a')) {
      const imageLink = document.createElement('a');
      imageLink.href = articleUrl;
      imageLink.setAttribute('aria-label', title || 'اقرأ المقال');
      imageLink.dataset.trackArea = 'image';
      img.parentNode.insertBefore(imageLink, img);
      imageLink.appendChild(img);
    }
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

  // GA4 event إذا كان gtag مركبًا في الموقع.
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'article_card_click', eventPayload);
  }

  // نسخة محلية بسيطة للتأكد من أن التتبع يعمل حتى قبل تركيب GA4.
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

      link.addEventListener('click', function () {
        const clickArea = link.dataset.trackArea || (link.classList.contains('read-more') ? 'read_more' : 'title');
        trackArticleClick(articleUrl, articleTitle, clickArea, rank, priority);
      });
    });
  });
}

function applyCardImageFallbacks() {
  document.querySelectorAll('.article-image img').forEach(function (img) {
    img.addEventListener('error', function () {
      if (img.dataset.fallbackApplied === 'true') return;
      img.dataset.fallbackApplied = 'true';
      img.src = img.dataset.fallback || 'assets/ai-writing-tools.svg';
    });
  });
}

sortArticlesByConversionPriority();
applyNewArticleImages();
addArticleClickTracking();
applyCardImageFallbacks();
