function copyPageLink(url) {
  const message = document.getElementById('shareMessage');
  navigator.clipboard.writeText(url).then(function () {
    if (message) message.textContent = 'تم نسخ رابط الصفحة ✅';
  }).catch(function () {
    if (message) message.textContent = 'تعذر نسخ الرابط، انسخه يدويًا: ' + url;
  });
}

(function () {
  const missingPublishedArticles = [
    { title: 'كيف تبني علامتك الشخصية بالذكاء الاصطناعي', url: 'posts-ai/27-ai-and-personal-brand.html', image: 'assets/images/01-ai-personal-brand.png', category: 'learn-ai ai-tools', label: '🧑‍💼 براند شخصي', excerpt: 'تعلم كيف تستخدم أدوات الذكاء الاصطناعي لبناء حضور رقمي واضح، محتوى منتظم، وصورة شخصية أقوى.' },
    { title: 'كيف تنشئ Newsletter احترافية بمساعدة الذكاء الاصطناعي', url: 'posts-ai/28-ai-newsletters.html', image: 'assets/images/02-ai-newsletters.png', category: 'ai-tools', label: '📧 نشرات بريدية', excerpt: 'دليل عملي لاستخدام AI في أفكار النشرات، الكتابة، الجدولة، وتحسين التفاعل مع القراء.' },
    { title: 'نظم يومك بالذكاء الاصطناعي', url: 'posts-ai/ai-automation-productivity.html', image: 'assets/images/03-ai-automation-productivity.png', category: 'ai-tools', label: '⚙️ إنتاجية وأتمتة', excerpt: 'أفكار عملية لتحويل المهام المتكررة إلى نظام ذكي يوفر الوقت ويرفع الإنتاجية.' },
    { title: 'تصاميم احترافية بمساعدة الذكاء الاصطناعي', url: 'posts-ai/ai-design-for-social-media.html', image: 'assets/images/04-ai-design-social-media.png', category: 'ai-tools', label: '🎨 تصميم وسوشيال', excerpt: 'كيف تستخدم AI لتجهيز أفكار وتصاميم ومنشورات أكثر جاذبية لمنصات التواصل.' },
    { title: 'أفضل مجتمعات تعلم الذكاء الاصطناعي', url: 'posts-ai/ai-learning-communities.html', image: 'assets/images/05-ai-learning-communities.png', category: 'learn-ai', label: '👥 تعلم ومجتمع', excerpt: 'مجتمعات ومصادر تساعدك على التعلم والممارسة ومتابعة جديد الذكاء الاصطناعي.' },
    { title: 'تصميم شعارات احترافية بالذكاء الاصطناعي', url: 'posts-ai/ai-logo-design-guide.html', image: 'assets/images/06-ai-logo-design.png', category: 'ai-tools', label: '🏷️ تصميم شعارات', excerpt: 'دليل يساعدك على إنتاج أفكار شعارات وهوية بصرية باستخدام أدوات AI.' },
    { title: 'أفكار مشاريع ذكاء اصطناعي للمبتدئين', url: 'posts-ai/ai-projects-for-beginners.html', image: 'assets/images/07-ai-projects-beginners.png', category: 'learn-ai ai-tools', label: '🚀 مشاريع AI', excerpt: 'مشاريع بسيطة تساعدك على التطبيق العملي وبناء خبرة حقيقية في الذكاء الاصطناعي.' },
    { title: 'أفضل أدوات التصميم بالذكاء الاصطناعي', url: 'posts-ai/best-ai-design-tools.html', image: 'assets/images/08-best-ai-design-tools.png', category: 'ai-tools', label: '🎨 أدوات تصميم', excerpt: 'قائمة أدوات تساعدك في الصور، الشعارات، العروض، وتصميم محتوى أسرع.' },
    { title: 'أفضل كتب الذكاء الاصطناعي لتتعلم أسرع', url: 'posts-ai/best-books-to-learn-ai.html', image: 'assets/images/09-best-ai-books.png', category: 'learn-ai', label: '📚 كتب AI', excerpt: 'كتب مناسبة لفهم الأساسيات والتوسع في التعلم والتطبيق العملي.' },
    { title: 'مراجعة Copy.ai: هل تستحق؟', url: 'posts-ai/copyai-review.html', image: 'assets/images/10-copyai-review.png', category: 'reviews ai-tools', label: '✍️ مراجعة أداة', excerpt: 'مراجعة عملية لأداة Copy.ai في كتابة النصوص التسويقية والإعلانات القصيرة.' },
    { title: 'دليل Falcon AI للمبتدئين', url: 'posts-ai/falcon-guide.html', image: 'assets/images/11-falcon-guide.png', category: 'open-source learn-ai', label: '🦅 نموذج مفتوح', excerpt: 'كل ما تحتاج معرفته عن Falcon AI واستخداماته كنموذج مفتوح المصدر.' },
    { title: 'أفضل كورسات الذكاء الاصطناعي المجانية بالعربية', url: 'posts-ai/free-ai-courses-arabic.html', image: 'assets/images/12-free-ai-courses-arabic.png', category: 'learn-ai', label: '🎓 كورسات مجانية', excerpt: 'مصادر ودورات عربية تساعدك على بدء تعلم الذكاء الاصطناعي بدون تكلفة.' },
    { title: 'مستقبل الذكاء الاصطناعي والأتمتة', url: 'posts-ai/future-of-ai-automation.html', image: 'assets/images/13-future-ai-automation.png', category: 'ai-tools', label: '🤖 مستقبل الأتمتة', excerpt: 'كيف تغير الأتمتة والذكاء الاصطناعي شكل العمل، الإنتاجية، والفرص القادمة.' },
    { title: 'أحدث استخدامات الذكاء الاصطناعي في الأتمتة', url: 'posts-ai/latest-ai-automation-uses.html', image: 'assets/images/14-latest-ai-automation-uses.png', category: 'ai-tools', label: '⚡ استخدامات حديثة', excerpt: 'أمثلة عملية لأحدث استخدامات AI في الأعمال، التسويق، التعليم، والتحليل.' },
    { title: 'نصائح لتعلم الذكاء الاصطناعي بسرعة', url: 'posts-ai/learning-tips-for-ai.html', image: 'assets/images/15-ai-learning-tips.png', category: 'learn-ai', label: '💡 نصائح تعلم', excerpt: 'خطوات ونصائح تساعدك على التعلم بتركيز وتجنب التشتت بين الأدوات والمصادر.' },
    { title: 'دليل شامل لنموذج Llama 3', url: 'posts-ai/llama3-guide.html', image: 'assets/images/16-llama3-guide.png', category: 'open-source learn-ai', label: '🦙 نموذج مفتوح', excerpt: 'تعرف على Llama 3 واستخداماته ومكانته بين النماذج مفتوحة المصدر.' },
    { title: 'الرياضيات الأساسية للذكاء الاصطناعي', url: 'posts-ai/math-for-ai-beginners.html', image: 'assets/images/17-math-for-ai-beginners.png', category: 'learn-ai', label: '➗ أساسيات AI', excerpt: 'المفاهيم الرياضية التي تساعدك على فهم الذكاء الاصطناعي بدون تعقيد.' },
    { title: 'دليل Mistral AI الشامل', url: 'posts-ai/mistral-guide.html', image: 'assets/images/18-mistral-guide.png', category: 'open-source learn-ai', label: '🌬️ نموذج Mistral', excerpt: 'تعرف على Mistral AI ومميزاته واستخداماته في التطبيقات والمشاريع.' },
    { title: 'دليل Ollama لتشغيل النماذج محليًا', url: 'posts-ai/ollama-guide.html', image: 'assets/images/19-ollama-guide.png', category: 'open-source learn-ai', label: '🧩 تشغيل محلي', excerpt: 'كيف تستخدم Ollama لتشغيل النماذج على جهازك مع خصوصية وتحكم أكبر.' },
    { title: 'تعلم Python للذكاء الاصطناعي من الصفر', url: 'posts-ai/python-for-ai-beginners.html', image: 'assets/images/20-python-for-ai-beginners.png', category: 'learn-ai', label: '🐍 Python وAI', excerpt: 'مسار مبسط لتعلم بايثون والمكتبات الأساسية التي تحتاجها في مشاريع AI.' },
    { title: 'هندسة النمو على TikTok', url: 'posts-ai/tiktok-growth-engineering.html', image: 'assets/images/21-tiktok-growth-engineering.png', category: 'affiliate', label: '📱 نمو تيك توك', excerpt: 'استراتيجية عملية لتحليل المحتوى والنمو السريع على تيك توك بطريقة منظمة.' },
    { title: 'ما هو الذكاء الاصطناعي؟ دليل مبسط للمبتدئين', url: 'posts-ai/what-is-ai-beginners.html', image: 'assets/images/22-what-is-ai-beginners.png', category: 'learn-ai', label: '🧠 أساسيات AI', excerpt: 'شرح مبسط لمفهوم الذكاء الاصطناعي وكيف يعمل وأين نراه في حياتنا اليومية.' },
    { title: 'الذكاء الاصطناعي المدفوع أم المجاني أم مفتوح المصدر؟', url: 'articles/paid-vs-free-vs-open-source-ai.html', image: 'assets/images/23-paid-free-open-source-ai.png', category: 'open-source ai-tools', label: '⚖️ مقارنة AI', excerpt: 'مقارنة عملية بين الأدوات المدفوعة والمجانية ومفتوحة المصدر لاختيار الأنسب لك.' }
  ];

  function appendMissingPublishedArticles() {
    const grid = document.getElementById('postsGrid');
    if (!grid) return;
    const existing = new Set(Array.from(grid.querySelectorAll('a[href]')).map(function (a) { return a.getAttribute('href'); }));

    missingPublishedArticles.forEach(function (post) {
      if (existing.has(post.url)) return;
      const article = document.createElement('article');
      article.className = 'post-card';
      article.dataset.category = post.category;
      article.innerHTML = `
        <div class="post-image"><img src="${post.image}" alt="${post.title}" loading="lazy" decoding="async"></div>
        <div class="post-content">
          <span class="post-category">${post.label}</span>
          <h3 class="post-title"><a href="${post.url}">${post.title}</a></h3>
          <p class="post-excerpt">${post.excerpt}</p>
          <div class="post-meta"><span>📅 منشور</span><a href="${post.url}" class="read-more-btn">اقرأ المقال →</a></div>
        </div>`;
      grid.appendChild(article);
    });
  }

  function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const postsCount = document.getElementById('postsCount');
    if (!filterButtons.length || !postsCount) return;

    function getPosts() {
      return document.querySelectorAll('.post-card');
    }

    function updatePostsCount(visibleCount) {
      postsCount.textContent = `📄 ${visibleCount} مقال منشور`;
    }

    function filterPosts(category) {
      let visibleCount = 0;
      getPosts().forEach(function (post) {
        const categories = post.dataset.category || '';
        if (category === 'all' || categories.includes(category)) {
          post.style.display = 'flex';
          visibleCount++;
        } else {
          post.style.display = 'none';
        }
      });
      updatePostsCount(visibleCount);
    }

    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        filterPosts(btn.dataset.filter);
      });
    });

    filterPosts('all');
  }

  appendMissingPublishedArticles();
  initFilters();
})();
