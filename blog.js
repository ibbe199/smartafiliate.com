function copyPageLink(url) {
  const message = document.getElementById('shareMessage');
  navigator.clipboard.writeText(url).then(function () {
    if (message) message.textContent = 'تم نسخ رابط الصفحة ✅';
  }).catch(function () {
    if (message) message.textContent = 'تعذر نسخ الرابط، انسخه يدويًا: ' + url;
  });
}

function optimizeBlogImages() {
  const fallbackImage = 'assets/images/affiliate-card.png';
  const articleImages = document.querySelectorAll('.article-image img');

  articleImages.forEach(function (image) {
    image.setAttribute('width', '600');
    image.setAttribute('height', '400');
    image.loading = 'lazy';
    image.decoding = 'async';

    image.addEventListener('error', function () {
      if (image.src.indexOf(fallbackImage) === -1) {
        image.src = fallbackImage;
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', optimizeBlogImages);
