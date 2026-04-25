function copyPageLink(url) {
  const message = document.getElementById('shareMessage');
  navigator.clipboard.writeText(url).then(function () {
    if (message) message.textContent = 'تم نسخ رابط الصفحة ✅';
  }).catch(function () {
    if (message) message.textContent = 'تعذر نسخ الرابط، انسخه يدويًا: ' + url;
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

function appendAdditionalPublishedArticles() {
  const articlesGrid = document.querySelector('.articles-grid');
  if (!articlesGrid || document.getElementById('additional-published-ai-articles')) return;

  const extraArticles = [
    ['posts-ai/ollama-guide.html', 'دليل Ollama: تشغيل نماذج الذكاء الاصطناعي محليًا', 'نماذج مفتوحة المصدر', 'assets/ai-writing-tools.svg'],
    ['posts-ai/llama3-guide.html', 'دليل Llama 3 للمبتدئين', 'نماذج مفتوحة المصدر', 'assets/ai-writing-tools.svg'],
    ['posts-ai/mistral-guide.html', 'دليل Mistral AI للمبتدئين', 'نماذج مفتوحة المصدر', 'assets/ai-writing-tools.svg'],
    ['posts-ai/falcon-guide.html', 'دليل Falcon AI', 'نماذج مفتوحة المصدر', 'assets/ai-writing-tools.svg'],
    ['posts-ai/best-books-to-learn-ai.html', 'أفضل كتب لتعلم الذكاء الاصطناعي', 'تعلم AI', 'assets/complete-ai-learning-path.svg'],
    ['posts-ai/ai-learning-communities.html', 'أفضل مجتمعات تعلم الذكاء الاصطناعي', 'تعلم AI', 'assets/complete-ai-learning-path.svg'],
    ['posts-ai/learning-tips-for-ai.html', 'نصائح عملية لتعلم الذكاء الاصطناعي', 'تعلم AI', 'assets/complete-ai-learning-path.svg'],
    ['posts-ai/free-ai-courses-arabic.html', 'كورسات ذكاء اصطناعي مجانية بالعربية', 'تعلم AI', 'assets/complete-ai-learning-path.svg'],
    ['posts-ai/ai-projects-for-beginners.html', 'مشاريع ذكاء اصطناعي للمبتدئين', 'تعلم AI', 'assets/complete-ai-learning-path.svg'],
    ['posts-ai/math-for-ai-beginners.html', 'الرياضيات المطلوبة لتعلم الذكاء الاصطناعي', 'تعلم AI', 'assets/complete-ai-learning-path.svg'],
    ['posts-ai/python-for-ai-beginners.html', 'Python للمبتدئين في الذكاء الاصطناعي', 'تعلم AI', 'assets/complete-ai-learning-path.svg'],
    ['posts-ai/what-is-ai-beginners.html', 'ما هو الذكاء الاصطناعي؟ شرح مبسط للمبتدئين', 'تعلم AI', 'assets/complete-ai-learning-path.svg'],
    ['posts-ai/ai-logo-design-guide.html', 'دليل تصميم شعار بالذكاء الاصطناعي', 'تصميم AI', 'assets/best-ai-design-tools.svg'],
    ['posts-ai/ai-design-for-social-media.html', 'تصميم السوشيال ميديا بالذكاء الاصطناعي', 'تصميم AI', 'assets/best-ai-design-tools.svg'],
    ['posts-ai/27-ai-and-personal-brand.html', 'الذكاء الاصطناعي وبناء البراند الشخصي', 'تطبيقات AI', 'assets/ai-writing-tools.svg'],
    ['posts-ai/28-ai-newsletters.html', 'النشرات البريدية بالذكاء الاصطناعي', 'تطبيقات AI', 'assets/ai-writing-tools.svg'],
    ['posts-ai/29-90-day-ai-plan.html', 'خطة 90 يوم لتعلم واستثمار الذكاء الاصطناعي', 'خطط عملية', 'assets/90-day-ai-plan.svg'],
    ['posts-ai/tiktok-growth-engineering.html', 'هندسة نمو TikTok باستخدام الذكاء الاصطناعي', 'نمو وتسويق', 'assets/ai-tools-content-sales.svg'],
    ['posts-ai/latest-ai-automation-uses.html', 'أحدث استخدامات أتمتة الذكاء الاصطناعي', 'أتمتة AI', 'assets/ai-automation-productivity.svg'],
    ['posts-ai/future-of-ai-automation.html', 'مستقبل الأتمتة بالذكاء الاصطناعي', 'أتمتة AI', 'assets/ai-automation-productivity.svg']
  ];

  const existingLinks = new Set(Array.from(document.querySelectorAll('a[href]')).map(function (a) {
    return a.getAttribute('href');
  }));

  const fragment = document.createDocumentFragment();
  extraArticles.forEach(function (item, index) {
    if (existingLinks.has(item[0])) return;
    const article = document.createElement('article');
    article.className = 'article-card additional-published-ai-article';
    if (index === 0) article.id = 'additional-published-ai-articles';
    article.innerHTML = '<div class="article-image"><img src="' + item[3] + '" alt="' + item[1] + '" loading="lazy" decoding="async"></div>' +
      '<div class="article-content"><span class="article-category">' + item[2] + '</span>' +
      '<h3><a href="' + item[0] + '">' + item[1] + '</a></h3>' +
      '<p class="article-excerpt">مقال منشور داخل المستودع وتم ربطه الآن داخل مكتبة الذكاء الاصطناعي ليظهر للزائر ومحركات البحث.</p>' +
      '<div class="article-meta"><span>منشور</span><a href="' + item[0] + '" class="read-more">اقرأ المقال →</a></div></div>';
    fragment.appendChild(article);
  });

  if (fragment.childNodes.length) articlesGrid.appendChild(fragment);
}

appendAdditionalPublishedArticles();
applyCardImageFallbacks();
