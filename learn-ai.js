function applyCardImageFallbacks() {
  document.querySelectorAll('.article-image img').forEach(function (img) {
    img.addEventListener('error', function () {
      if (img.dataset.fallbackApplied === 'true') return;
      img.dataset.fallbackApplied = 'true';
      img.src = img.dataset.fallback || 'assets/complete-ai-learning-path.svg';
    });
  });
}

applyCardImageFallbacks();
