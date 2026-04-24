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

function normalizeUrl(url) {
  return (url || '').replace(/^\.\//, '').split('#')[0].split('?')[0];
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
      img.parentNode.insertBefore(imageLink, img);
      imageLink.appendChild(img);
    }
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

applyNewArticleImages();
applyCardImageFallbacks();
