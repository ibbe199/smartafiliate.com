function copyPageLink(url) {
  const message = document.getElementById('shareMessage');
  navigator.clipboard.writeText(url).then(function () {
    if (message) message.textContent = 'تم نسخ رابط الصفحة ✅';
  }).catch(function () {
    if (message) message.textContent = 'تعذر نسخ الرابط، انسخه يدويًا: ' + url;
  });
}

function escapeSvgText(value) {
  return String(value).replace(/[&<>"]/g, function (char) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char];
  });
}

function cleanArticleTitle(title) {
  return String(title || 'مقال من Smartafiliate')
    .replace(/\s*\|\s*Smartafiliate/gi, '')
    .replace(/\s*\|\s*smartafiliate/gi, '')
    .replace(/[:؟?]+$/g, '')
    .trim();
}

function splitTitleForCover(title) {
  const words = cleanArticleTitle(title).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';

  words.forEach(function (word) {
    const next = current ? current + ' ' + word : word;
    if (next.length > 23 && current && lines.length < 2) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) lines.push(current);
  if (lines.length > 3) {
    lines[2] = lines.slice(2).join(' ');
    lines.length = 3;
  }

  return lines.map(function (line) {
    return line.length > 31 ? line.slice(0, 30).trim() + '…' : line;
  });
}

function createOrganizedDefaultCover(title, category) {
  const lines = splitTitleForCover(title);
  const yStart = lines.length === 1 ? 326 : lines.length === 2 ? 292 : 258;
  const titleLines = lines.map(function (line, index) {
    return '<tspan x="1040" y="' + (yStart + index * 70) + '">' + escapeSvgText(line) + '</tspan>';
  }).join('');

  const svg = '<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">' +
    '<defs>' +
      '<linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630"><stop stop-color="#081426"/><stop offset="0.56" stop-color="#12305a"/><stop offset="1" stop-color="#ea580c"/></linearGradient>' +
      '<linearGradient id="accent" x1="90" y1="80" x2="500" y2="500"><stop stop-color="#f59e0b" stop-opacity="0.96"/><stop offset="1" stop-color="#ea580c" stop-opacity="0.10"/></linearGradient>' +
      '<filter id="shadow"><feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.25"/></filter>' +
    '</defs>' +
    '<rect width="1200" height="630" fill="url(#bg)"/>' +
    '<circle cx="150" cy="135" r="215" fill="url(#accent)"/>' +
    '<circle cx="1030" cy="548" r="190" fill="#ffffff" fill-opacity="0.08"/>' +
    '<rect x="70" y="70" width="1060" height="490" rx="38" fill="#ffffff" fill-opacity="0.055" stroke="#ffffff" stroke-opacity="0.13"/>' +
    '<rect x="760" y="95" width="290" height="52" rx="26" fill="#111827" fill-opacity="0.44"/>' +
    '<text x="1040" y="131" text-anchor="end" direction="rtl" unicode-bidi="plaintext" font-family="Tahoma, Arial, sans-serif" font-size="27" font-weight="800" fill="#FDBA74">' + escapeSvgText(category || 'مقال من Smartafiliate') + '</text>' +
    '<text text-anchor="end" direction="rtl" unicode-bidi="plaintext" font-family="Tahoma, Arial, sans-serif" font-size="54" font-weight="900" fill="#ffffff" filter="url(#shadow)">' + titleLines + '</text>' +
    '<text x="1040" y="535" text-anchor="end" direction="rtl" unicode-bidi="plaintext" font-family="Tahoma, Arial, sans-serif" font-size="32" font-weight="800" fill="#fff" fill-opacity="0.92">Smartafiliate</text>' +
    '</svg>';

  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function applyCardImageFallbacks() {
  document.querySelectorAll('.article-card').forEach(function (card) {
    const link = card.querySelector('h3 a[href]');
    const img = card.querySelector('.article-image img');
    const category = card.querySelector('.article-category');
    if (!img || !link) return;

    const current = img.getAttribute('src') || '';
    const isRealUploadedImage = current.indexOf('assets/images/') !== -1 || current.indexOf('/assets/images/') !== -1;
    const isAlreadyGenerated = current.indexOf('data:image/svg+xml') === 0;

    if (!isRealUploadedImage && !isAlreadyGenerated) {
      img.src = createOrganizedDefaultCover(link.textContent.trim(), category ? category.textContent.trim() : 'مقال من Smartafiliate');
      img.alt = cleanArticleTitle(link.textContent.trim());
    }

    img.addEventListener('error', function () {
      if (img.dataset.fallbackApplied === 'true') return;
      img.dataset.fallbackApplied = 'true';
      img.src = createOrganizedDefaultCover(link.textContent.trim(), category ? category.textContent.trim() : 'مقال من Smartafiliate');
    });
  });
}

function appendAdditionalPublishedArticles() {
  const articlesGrid = document.querySelector('.articles-grid');
  if (!articlesGrid || document.getElementById('additional-published-ai-articles')) return;

  const extraArticles = [
    ['posts-ai/ollama-guide.html', 'دليل Ollama: تشغيل نماذج الذكاء الاصطناعي محليًا', 'نماذج مفتوحة المصدر'],
    ['posts-ai/llama3-guide.html', 'دليل Llama 3 للمبتدئين', 'نماذج مفتوحة المصدر'],
    ['posts-ai/mistral-guide.html', 'دليل Mistral AI للمبتدئين', 'نماذج مفتوحة المصدر'],
    ['posts-ai/falcon-guide.html', 'دليل Falcon AI', 'نماذج مفتوحة المصدر'],
    ['posts-ai/best-books-to-learn-ai.html', 'أفضل كتب لتعلم الذكاء الاصطناعي', 'تعلم AI'],
    ['posts-ai/ai-learning-communities.html', 'أفضل مجتمعات تعلم الذكاء الاصطناعي', 'تعلم AI'],
    ['posts-ai/learning-tips-for-ai.html', 'نصائح عملية لتعلم الذكاء الاصطناعي', 'تعلم AI'],
    ['posts-ai/free-ai-courses-arabic.html', 'كورسات ذكاء اصطناعي مجانية بالعربية', 'تعلم AI'],
    ['posts-ai/ai-projects-for-beginners.html', 'مشاريع ذكاء اصطناعي للمبتدئين', 'تعلم AI'],
    ['posts-ai/math-for-ai-beginners.html', 'الرياضيات المطلوبة لتعلم الذكاء الاصطناعي', 'تعلم AI'],
    ['posts-ai/python-for-ai-beginners.html', 'Python للمبتدئين في الذكاء الاصطناعي', 'تعلم AI'],
    ['posts-ai/what-is-ai-beginners.html', 'ما هو الذكاء الاصطناعي؟ شرح مبسط للمبتدئين', 'تعلم AI'],
    ['posts-ai/ai-logo-design-guide.html', 'دليل تصميم شعار بالذكاء الاصطناعي', 'تصميم AI'],
    ['posts-ai/ai-design-for-social-media.html', 'تصميم السوشيال ميديا بالذكاء الاصطناعي', 'تصميم AI'],
    ['posts-ai/27-ai-and-personal-brand.html', 'الذكاء الاصطناعي وبناء البراند الشخصي', 'تطبيقات AI'],
    ['posts-ai/28-ai-newsletters.html', 'النشرات البريدية بالذكاء الاصطناعي', 'تطبيقات AI'],
    ['posts-ai/29-90-day-ai-plan.html', 'خطة 90 يوم لتعلم واستثمار الذكاء الاصطناعي', 'خطط عملية'],
    ['posts-ai/tiktok-growth-engineering.html', 'هندسة نمو TikTok باستخدام الذكاء الاصطناعي', 'نمو وتسويق'],
    ['posts-ai/latest-ai-automation-uses.html', 'أحدث استخدامات أتمتة الذكاء الاصطناعي', 'أتمتة AI'],
    ['posts-ai/future-of-ai-automation.html', 'مستقبل الأتمتة بالذكاء الاصطناعي', 'أتمتة AI']
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
    const cover = createOrganizedDefaultCover(item[1], item[2]);
    article.innerHTML = '<div class="article-image"><img src="' + cover + '" alt="' + cleanArticleTitle(item[1]) + '" loading="lazy" decoding="async"></div>' +
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
