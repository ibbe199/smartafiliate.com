function copyPageLink(url) {
  const message = document.getElementById('shareMessage');
  navigator.clipboard.writeText(url).then(function () {
    if (message) message.textContent = 'تم نسخ رابط الصفحة ✅';
  }).catch(function () {
    if (message) message.textContent = 'تعذر نسخ الرابط. انسخ الرابط يدويًا: ' + url;
  });
}

function escapeSvgText(value) {
  return String(value || '').replace(/[&<>"]/g, function (char) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char];
  });
}

function cleanArticleTitle(title) {
  return String(title || 'مقال من Smartafiliate')
    .replace(/\s*\|\s*Smartafiliate/gi, '')
    .replace(/\s*\|\s*smartafiliate/gi, '')
    .replace(/\s+/g, ' ')
    .replace(/\s+([،؛:.؟])/g, '$1')
    .replace(/([،؛:.؟])([^\s])/g, '$1 $2')
    .replace(/[:؟?]+$/g, '')
    .trim();
}

function splitTitleForCover(title) {
  const words = cleanArticleTitle(title).split(/\s+/).filter(Boolean);
  if (words.length <= 3) return [words.join(' ')];
  const targetLines = words.join('').length > 36 || words.length > 7 ? 3 : 2;
  const targetLength = Math.ceil(words.join(' ').length / targetLines);
  const lines = [];
  let current = '';

  words.forEach(function (word) {
    const next = current ? current + ' ' + word : word;
    if (next.length > targetLength && current && lines.length < targetLines - 1) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });
  if (current) lines.push(current);

  return lines.slice(0, 3).map(function (line) {
    return line.length > 34 ? line.slice(0, 33).trim() + '…' : line;
  });
}

function createOrganizedDefaultCover(title, category) {
  const lines = splitTitleForCover(title);
  const fontSize = lines.length === 1 ? 64 : lines.length === 2 ? 58 : 52;
  const lineGap = lines.length === 3 ? 66 : 74;
  const yStart = lines.length === 1 ? 320 : lines.length === 2 ? 292 : 252;
  const titleLines = lines.map(function (line, index) {
    return '<tspan x="600" y="' + (yStart + index * lineGap) + '">' + escapeSvgText(line) + '</tspan>';
  }).join('');

  const svg = '<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">' +
    '<defs><linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630"><stop stop-color="#071426"/><stop offset="0.55" stop-color="#12305a"/><stop offset="1" stop-color="#ea580c"/></linearGradient><linearGradient id="accent" x1="110" y1="80" x2="520" y2="520"><stop stop-color="#f59e0b" stop-opacity="0.98"/><stop offset="1" stop-color="#ea580c" stop-opacity="0.10"/></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000" flood-opacity="0.30"/></filter></defs>' +
    '<rect width="1200" height="630" fill="url(#bg)"/>' +
    '<circle cx="160" cy="130" r="225" fill="url(#accent)"/>' +
    '<circle cx="1040" cy="540" r="205" fill="#ffffff" fill-opacity="0.075"/>' +
    '<rect x="92" y="74" width="1016" height="482" rx="42" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-opacity="0.14"/>' +
    '<rect x="398" y="94" width="404" height="56" rx="28" fill="#071426" fill-opacity="0.48"/>' +
    '<text x="600" y="131" text-anchor="middle" direction="rtl" unicode-bidi="plaintext" font-family="Tahoma, Arial, sans-serif" font-size="26" font-weight="800" fill="#FDBA74">' + escapeSvgText(category || 'مقال من Smartafiliate') + '</text>' +
    '<text text-anchor="middle" direction="rtl" unicode-bidi="plaintext" font-family="Tahoma, Arial, sans-serif" font-size="' + fontSize + '" font-weight="900" fill="#ffffff" filter="url(#shadow)">' + titleLines + '</text>' +
    '<text x="600" y="530" text-anchor="middle" direction="ltr" font-family="Tahoma, Arial, sans-serif" font-size="32" font-weight="900" fill="#fff" fill-opacity="0.92">Smartafiliate</text>' +
    '</svg>';

  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

const ALL_PUBLISHED_ARTICLES = [
  ['posts-ai/google-ai-content-acceptance.html', 'هل تقبل جوجل محتوى الذكاء الاصطناعي؟', 'جوجل وAI', 'تحليل واضح لموقف جوجل من محتوى الذكاء الاصطناعي وعلاقة الجودة بالترتيب.'],
  ['posts-ai/future-arab-websites-ai.html', 'مستقبل المواقع العربية مع الذكاء الاصطناعي', 'المواقع العربية', 'فرصة تاريخية أم تهديد للمواقع العربية في عصر AI.'],
  ['posts-ai/ai-content-google-opportunity-risk.html', 'محتوى AI وجوجل: فرصة أم خطر؟', 'AI وSEO', 'متى يساعد المحتوى الآلي في الظهور ومتى يضر الثقة والترتيب.'],
  ['posts-ai/google-penalty-ai-content-truth.html', 'هل تعاقب جوجل محتوى الذكاء الاصطناعي؟', 'جوجل وAI', 'شرح عملي لفكرة العقوبة ومتى تكون المشكلة في جودة المحتوى.'],
  ['posts-ai/ai-seo-content-success.html', 'الذكاء الاصطناعي وSEO: هل ينجح المحتوى الآلي؟', 'AI وSEO', 'كيف يخدم محتوى AI نية البحث ويحقق نتائج أفضل.'],
  ['posts-ai/ai-save-or-bury-arab-websites.html', 'هل سينقذ الذكاء الاصطناعي المواقع العربية أم يدفنها؟', 'المواقع العربية', 'مقال عن الفرق بين استخدام AI للنمو أو لإنتاج محتوى مكرر.'],
  ['posts-ai/arab-websites-ai-who-survives.html', 'المواقع العربية في عصر AI: من سيصمد؟', 'بقاء المواقع', 'من يملك الرؤية والجودة والثقة سيصمد في المنافسة.'],
  ['posts-ai/ai-knocks-arab-websites-door.html', 'الذكاء الاصطناعي يطرق باب المواقع العربية', 'المواقع العربية', 'كيف يصبح AI رافعة للنمو أو اختبارًا للبقاء.'],
  ['posts-ai/build-website-with-ai-in-minutes.html', 'كيف تبني موقعًا كاملًا في دقائق بالذكاء الاصطناعي؟', 'بناء مواقع', 'طريقة عملية لاستخدام AI في بناء المواقع بسرعة.'],
  ['posts-ai/latest-ai-news-2026.html', 'جديد الذكاء الاصطناعي في 2026', 'جديد AI', 'أبرز التحولات الحالية في الذكاء الاصطناعي وتأثيرها العملي.'],
  ['posts-ai/30-best-ai-writing-tools.html', 'أفضل أدوات الكتابة بالذكاء الاصطناعي', 'أدوات الكتابة', 'مقارنة بين ChatGPT وJasper وCopy.ai وWritesonic.'],
  ['posts-ai/chatgpt-review.html', 'مراجعة ChatGPT', 'مراجعات أدوات', 'نظرة عملية على استخدام ChatGPT في الكتابة والتحليل والبرمجة.'],
  ['posts-ai/jasper-ai-review.html', 'مراجعة Jasper AI', 'مراجعات أدوات', 'متى يكون Jasper مناسبًا للمحتوى التسويقي والإعلانات.'],
  ['posts-ai/copyai-review.html', 'مراجعة Copy.ai', 'مراجعات أدوات', 'أداة للنصوص التسويقية والإعلانات السريعة.'],
  ['posts-ai/writesonic-review.html', 'مراجعة Writesonic', 'مراجعات أدوات', 'مناسب للمقالات الطويلة والمحتوى المتوافق مع SEO.'],
  ['posts-ai/canva-ai-review.html', 'مراجعة Canva AI', 'تصميم AI', 'تصميم سريع للسوشيال والعروض والبنرات.'],
  ['posts-ai/midjourney-guide.html', 'دليل Midjourney', 'تصميم AI', 'توليد صور إبداعية عالية الجودة باستخدام الذكاء الاصطناعي.'],
  ['posts-ai/dalle3-review.html', 'مراجعة DALL-E 3', 'تصميم AI', 'نتائج دقيقة من الوصف النصي وتكامل مع أدوات OpenAI.'],
  ['posts-ai/best-ai-design-tools.html', 'أفضل أدوات التصميم بالذكاء الاصطناعي', 'تصميم AI', 'دليل لاختيار أدوات التصميم المناسبة حسب المهمة.'],
  ['posts-ai/ai-design-for-social-media.html', 'تصميم السوشيال ميديا بالذكاء الاصطناعي', 'تصميم AI', 'إنشاء محتوى بصري أسرع للمنصات الاجتماعية.'],
  ['posts-ai/ai-logo-design-guide.html', 'دليل تصميم شعار بالذكاء الاصطناعي', 'تصميم AI', 'خطوات عملية لتوليد أفكار وشعارات مناسبة للبراند.'],
  ['posts-ai/complete-ai-learning-path.html', 'الطريق الكامل لتعلم الذكاء الاصطناعي', 'تعلم AI', 'مسار منظم من الأساسيات إلى التطبيق العملي.'],
  ['posts-ai/what-is-ai-beginners.html', 'ما هو الذكاء الاصطناعي؟ شرح للمبتدئين', 'تعلم AI', 'مدخل واضح للمفاهيم الأساسية بدون تعقيد.'],
  ['posts-ai/python-for-ai-beginners.html', 'Python للمبتدئين في الذكاء الاصطناعي', 'تعلم AI', 'لماذا تحتاج Python وكيف تبدأ بها في مشاريع AI.'],
  ['posts-ai/math-for-ai-beginners.html', 'الرياضيات المطلوبة لتعلم الذكاء الاصطناعي', 'تعلم AI', 'أهم المفاهيم الرياضية التي يحتاجها المبتدئ.'],
  ['posts-ai/free-ai-courses-arabic.html', 'كورسات ذكاء اصطناعي مجانية بالعربية', 'تعلم AI', 'مصادر مناسبة للبداية والتعلم المنظم.'],
  ['posts-ai/best-books-to-learn-ai.html', 'أفضل كتب لتعلم الذكاء الاصطناعي', 'تعلم AI', 'كتب ومراجع تساعدك على بناء فهم أعمق.'],
  ['posts-ai/fastest-way-to-learn-ai.html', 'أسرع طريقة لتعلم الذكاء الاصطناعي', 'تعلم AI', 'طريقة مختصرة لتقليل التشتت والبدء العملي.'],
  ['posts-ai/ai-learning-roadmap-30-days.html', 'خارطة تعلم AI خلال 30 يومًا', 'تعلم AI', 'خطة شهرية واضحة للمبتدئين.'],
  ['posts-ai/learning-tips-for-ai.html', 'نصائح عملية لتعلم الذكاء الاصطناعي', 'تعلم AI', 'إرشادات تمنع التشتت وتسرّع التعلم.'],
  ['posts-ai/ai-learning-communities.html', 'أفضل مجتمعات تعلم الذكاء الاصطناعي', 'تعلم AI', 'أماكن ومجتمعات تساعدك على التعلم والممارسة.'],
  ['posts-ai/ai-projects-for-beginners.html', 'مشاريع ذكاء اصطناعي للمبتدئين', 'تعلم AI', 'أفكار مشاريع بسيطة للتطبيق العملي.'],
  ['posts-ai/ollama-guide.html', 'دليل Ollama: تشغيل نماذج AI محليًا', 'نماذج مفتوحة المصدر', 'تشغيل النماذج محليًا على جهازك.'],
  ['posts-ai/llama3-guide.html', 'دليل Llama 3 للمبتدئين', 'نماذج مفتوحة المصدر', 'التعرف على Llama 3 واستخداماته العملية.'],
  ['posts-ai/mistral-guide.html', 'دليل Mistral AI للمبتدئين', 'نماذج مفتوحة المصدر', 'نموذج خفيف وقوي للاستخدامات المحلية.'],
  ['posts-ai/falcon-guide.html', 'دليل Falcon AI', 'نماذج مفتوحة المصدر', 'تعرف على Falcon ومتى يمكن استخدامه.'],
  ['posts-ai/90-day-ai-plan.html', 'خطة 90 يوم لبناء دخل من AI', 'خطط عملية', 'خطة طويلة لبناء أصل رقمي قابل للنمو.'],
  ['posts-ai/30-day-ai-plan.html', 'خطة 30 يوم لبناء مشروع بالذكاء الاصطناعي', 'خطط عملية', 'خطة قصيرة للوصول إلى أول نتيجة قابلة للقياس.'],
  ['posts-ai/29-90-day-ai-plan.html', 'خطة 90 يوم لتعلم واستثمار الذكاء الاصطناعي', 'خطط عملية', 'نسخة عملية لتنظيم التعلم والتطبيق.'],
  ['posts-ai/ai-affiliate-tools.html', 'أفضل أدوات AI للتسويق بالعمولة', 'الأفلييت', 'أدوات للمحتوى والتصميم والتحليل في مشاريع الأفلييت.'],
  ['posts-ai/what-is-affiliate-marketing.html', 'ما هو التسويق بالعمولة؟', 'الأفلييت', 'شرح واضح للمبتدئين مع خطوات البداية.'],
  ['posts-ai/arab-affiliate-programs.html', 'أفضل برامج الأفلييت العربية', 'الأفلييت', 'اختيار برامج مناسبة للسوق العربي.'],
  ['posts-ai/affiliate-funnel-guide.html', 'قمع التحويل في التسويق بالعمولة', 'الأفلييت', 'كيف تنقل الزائر من القراءة إلى القرار.'],
  ['posts-ai/affiliate-growth-strategy.html', 'استراتيجية نمو أرباح الأفلييت', 'الأفلييت', 'رفع الثقة وتحسين الصفحات الرابحة وزيادة النقرات.'],
  ['posts-ai/affiliate-mistakes.html', 'أخطاء قاتلة في التسويق بالعمولة', 'الأفلييت', 'أخطاء شائعة يجب تجنبها قبل ضياع الجهد.'],
  ['posts-ai/ai-content-sales-system.html', 'نظام ربط AI بالمحتوى والمبيعات', 'المحتوى والمبيعات', 'ربط الأدوات بالمحتوى والتحويل بدل استخدامها بشكل متفرق.'],
  ['posts-ai/content-structure-seo.html', 'أفضل هيكل محتوى يحقق نتائج SEO', 'SEO', 'بناء المقالات والصفحات بطريقة تساعد القراءة والتحويل.'],
  ['posts-ai/27-ai-and-personal-brand.html', 'الذكاء الاصطناعي وبناء البراند الشخصي', 'تطبيقات AI', 'استخدام AI لبناء حضور شخصي منظم.'],
  ['posts-ai/28-ai-newsletters.html', 'النشرات البريدية بالذكاء الاصطناعي', 'تطبيقات AI', 'بناء نشرات بريدية أسرع وأكثر انتظامًا.'],
  ['posts-ai/tiktok-growth-engineering.html', 'هندسة نمو TikTok باستخدام الذكاء الاصطناعي', 'نمو وتسويق', 'استخدام AI لتحليل وصناعة محتوى قصير قابل للنمو.']
];

function renderAllPublishedArticles() {
  const articlesGrid = document.querySelector('.articles-grid');
  if (!articlesGrid) return;

  const rendered = new Set();
  articlesGrid.innerHTML = '';

  ALL_PUBLISHED_ARTICLES.forEach(function (item) {
    if (rendered.has(item[0])) return;
    rendered.add(item[0]);
    const title = cleanArticleTitle(item[1]);
    const article = document.createElement('article');
    article.className = 'article-card';
    article.innerHTML = '<div class="article-image"><img src="' + createOrganizedDefaultCover(title, item[2]) + '" alt="' + escapeSvgText(title) + '" loading="lazy" decoding="async" width="1200" height="630"></div>' +
      '<div class="article-content"><span class="article-category">' + escapeSvgText(item[2]) + '</span>' +
      '<h3><a href="' + item[0] + '">' + escapeSvgText(title) + '</a></h3>' +
      '<p class="article-excerpt">' + escapeSvgText(item[3]) + '</p>' +
      '<div class="article-meta"><span>منشور</span><a href="' + item[0] + '" class="read-more">اقرأ المقال →</a></div></div>';
    articlesGrid.appendChild(article);
  });

  const countText = document.querySelector('.section-header p');
  if (countText) countText.textContent = 'تم تنظيم ونشر ' + rendered.size + ' مقالًا من المستودع في مكتبة واحدة خفيفة وسريعة.';
}

document.addEventListener('DOMContentLoaded', renderAllPublishedArticles);
