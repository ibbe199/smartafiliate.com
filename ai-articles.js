function copyPageLink(url) {
  const message = document.getElementById('shareMessage');
  navigator.clipboard.writeText(url).then(function () {
    if (message) message.textContent = 'تم نسخ رابط الصفحة ✅';
  }).catch(function () {
    if (message) message.textContent = 'تعذر نسخ الرابط. انسخ الرابط يدويًا: ' + url;
  });
}

// تم إيقاف إعادة بناء مكتبة AI من هذا الملف.
// التوزيع والربط والصور تُدار الآن مركزيًا من site.js حتى لا يحدث تعارض بين الصفحات.
