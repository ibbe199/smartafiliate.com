function copyPageLink(url) {
  const message = document.getElementById('shareMessage');
  navigator.clipboard.writeText(url).then(function () {
    if (message) message.textContent = 'تم نسخ رابط الصفحة ✅';
  }).catch(function () {
    if (message) message.textContent = 'تعذر نسخ الرابط، انسخه يدويًا: ' + url;
  });
}

function applyDefaultImages() {
  const map = {
    'جوجل وAI': 'assets/images/default/google-ai.png',
    'AI وSEO': 'assets/images/default/seo-ai.png',
    'المواقع العربية': 'assets/images/default/arab-websites.png',
    'استراتيجيات AI': 'assets/images/default/strategy.png',
    'خطة تنفيذ': 'assets/images/default/strategy.png',
    'بقاء المواقع': 'assets/images/default/arab-websites.png'
  };

  document.querySelectorAll('.article-card').forEach(function(card){
    const category = card.querySelector('.article-category')?.textContent.trim();
    const imgSrc = map[category] || 'assets/images/default/general.png';

    const div = document.createElement('div');
    div.className = 'article-image';
    div.innerHTML = `<img src="${imgSrc}" alt="${category}" loading="lazy" decoding="async">`;

    card.insertBefore(div, card.firstChild);
  });
}

document.addEventListener('DOMContentLoaded', applyDefaultImages);
