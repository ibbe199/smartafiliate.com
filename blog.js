function copyPageLink(url) {
  const message = document.getElementById('shareMessage');
  navigator.clipboard.writeText(url).then(function () {
    if (message) message.textContent = 'تم نسخ رابط الصفحة ✅';
  }).catch(function () {
    if (message) message.textContent = 'تعذر نسخ الرابط، انسخه يدويًا: ' + url;
  });
}

function removeEmptyBlogImages() {
  const articleImages = document.querySelectorAll('.article-image');

  articleImages.forEach(function (imageBox) {
    imageBox.remove();
  });
}

document.addEventListener('DOMContentLoaded', removeEmptyBlogImages);
