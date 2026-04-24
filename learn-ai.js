function applyCardImageFallbacks() {
  document.querySelectorAll('.article-image img').forEach(function (img) {
    img.addEventListener('error', function () {
      if (img.dataset.fallbackApplied === 'true') return;
      img.dataset.fallbackApplied = 'true';
      img.src = img.dataset.fallback || 'assets/images/21-complete-ai-learning-path.png';
    });
  });
}

function fixLearnAiImages() {
  const imageMap = {
    'posts-ai/what-is-ai-beginners.html': 'assets/images/22-what-is-ai-beginners.png',
    'posts-ai/python-for-ai-beginners.html': 'assets/images/20-python-for-ai-beginners.png',
    'posts-ai/math-for-ai-beginners.html': 'assets/images/17-math-for-ai-beginners.png',
    'posts-ai/complete-ai-learning-path.html': 'assets/images/image_21.jpg',
    'posts-ai/free-ai-courses-arabic.html': 'assets/images/12-free-ai-courses-arabic.png',
    'posts-ai/ai-projects-for-beginners.html': 'assets/images/07-ai-projects-beginners.png',
    'posts-ai/learning-tips-for-ai.html': 'assets/images/15-ai-learning-tips.png',
    'posts-ai/best-books-to-learn-ai.html': 'assets/images/09-best-ai-books.png',
    'posts-ai/ai-learning-communities.html': 'assets/images/05-ai-learning-communities.png'
  };

  document.querySelectorAll('.article-card').forEach(function (card) {
    const link = card.querySelector('h3 a[href], .article-meta a[href], a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    const src = imageMap[href];
    if (!src) return;

    const box = card.querySelector('.article-image');
    if (!box) return;

    box.innerHTML = '<a class="smart-article-image-link" href="' + href + '"><img src="' + src + '" data-fallback="' + src + '" alt="' + (link.textContent || 'صورة المقال').trim() + '" loading="lazy" decoding="async"><span class="smart-image-shine"></span></a>';
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fixLearnAiImages();
  applyCardImageFallbacks();
});

fixLearnAiImages();
applyCardImageFallbacks();
