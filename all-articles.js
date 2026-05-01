(function(){
  const IMG={
    ai:'assets/images/articles/ai-general.svg', affiliate:'assets/images/articles/affiliate.svg', seo:'assets/images/articles/seo.svg', design:'assets/images/articles/design.svg',
    learnBasics:'assets/images/learn-ai/what-is-ai.svg', learn30:'assets/images/learn-ai/roadmap-30.svg', learn90:'assets/images/learn-ai/roadmap-90.svg', python:'assets/images/learn-ai/python.svg', math:'assets/images/learn-ai/math.svg', courses:'assets/images/learn-ai/courses.svg', projects:'assets/images/learn-ai/projects.svg',
    ollama:'assets/images/open-source/ollama.svg', lmstudio:'assets/images/open-source/lmstudio.svg', hf:'assets/images/open-source/huggingface.svg', langchain:'assets/images/open-source/langchain.svg', n8n:'assets/images/open-source/n8n.svg', llama:'assets/images/open-source/llama3.svg', mistral:'assets/images/open-source/mistral.svg', falcon:'assets/images/open-source/falcon.svg', deepseek:'assets/images/open-source/deepseek.svg'
  };
  const posts=[
    ['posts-ai/google-ai-content-acceptance.html','هل تقبل جوجل المحتوى المكتوب بالذكاء الاصطناعي؟','جوجل وAI','تحليل عملي لموقف جوجل من محتوى AI والجودة والثقة.', '2026-04-21', IMG.seo],
    ['posts-ai/future-arab-websites-ai.html','مستقبل المواقع العربية مع الذكاء الاصطناعي','المواقع العربية','فرصة تاريخية أم تهديد صامت للمواقع العربية.', '2026-04-21', IMG.ai],
    ['posts-ai/ai-content-google-opportunity-risk.html','محتوى AI وجوجل: فرصة أم طريق إلى السقوط؟','AI وSEO','متى يساعد محتوى AI على الظهور ومتى يضر الموقع.', '2026-04-21', IMG.seo],
    ['posts-ai/google-penalty-ai-content-truth.html','هل تعاقب جوجل المحتوى المكتوب بالذكاء الاصطناعي؟','جوجل وAI','فهم الحقيقة قبل النشر والتمييز بين الجودة والنسخ السريع.', '2026-04-21', IMG.seo],
    ['posts-ai/ai-seo-content-success.html','الذكاء الاصطناعي وSEO','AI وSEO','هل المحتوى الآلي ينجح فعلًا في جوجل؟', '2026-04-21', IMG.seo],
    ['posts-ai/ai-save-or-bury-arab-websites.html','هل الذكاء الاصطناعي سينقذ المواقع العربية أم يدفنها؟','المواقع العربية','تحليل أثر AI على جودة وبقاء المواقع العربية.', '2026-04-21', IMG.ai],
    ['posts-ai/arab-websites-ai-who-survives.html','المواقع العربية في عصر الذكاء الاصطناعي','المواقع العربية','من سيصمد ومن سيختفي؟', '2026-04-21', IMG.ai],
    ['posts-ai/ai-knocks-arab-websites-door.html','الذكاء الاصطناعي يطرق باب المواقع العربية','المواقع العربية','فرصة للنمو أم تهديد للبقاء؟', '2026-04-21', IMG.ai],
    ['posts-ai/build-website-with-ai-in-minutes.html','كيف تبني موقعًا كاملًا في دقائق بالذكاء الاصطناعي؟','بناء مواقع','طريقة عملية لاستخدام AI في بناء موقع سريع.', '2026-04-20', IMG.ai],
    ['posts-ai/latest-ai-news-2026.html','جديد الذكاء الاصطناعي في 2026','جديد AI','أبرز التحولات العملية في الذكاء الاصطناعي.', '2026-04-20', IMG.ai],
    ['posts-ai/latest-ai-automation-uses.html','أحدث استخدامات الأتمتة بالذكاء الاصطناعي','Automation','أمثلة عملية لاستخدام AI في أتمتة العمل.', '2026-04-20', IMG.n8n],
    ['posts-ai/future-of-ai-automation.html','مستقبل الأتمتة بالذكاء الاصطناعي','Automation','كيف تتغير الأعمال مع workflows ذكية.', '2026-04-20', IMG.n8n],
    ['posts-ai/30-best-ai-writing-tools.html','أفضل أدوات الكتابة بالذكاء الاصطناعي','كتابة AI','مقارنة عملية بين أدوات الكتابة الشائعة.', '2026-04-19', IMG.ai],
    ['posts-ai/90-day-ai-plan.html','خطة 90 يوم للتحول إلى دخل من AI','خطة نمو','خارطة عملية من التعلم إلى مشروع رقمي.', '2026-04-19', IMG.learn90],
    ['posts-ai/29-90-day-ai-plan.html','خطة 90 يوم لتعلم AI وبناء مشروع','خطة تعلم','مسار طويل لبناء أصل رقمي بالذكاء الاصطناعي.', '2026-04-19', IMG.learn90],
    ['posts-ai/30-day-ai-plan.html','خطة 30 يوم لبناء مشروع بالذكاء الاصطناعي','خطة تنفيذ','من الفكرة إلى أول صفحة ومحتوى خلال شهر.', '2026-04-19', IMG.learn30],
    ['posts-ai/ai-learning-roadmap-30-days.html','خطة تعلم AI خلال 30 يوم','تعلم AI','خطة يومية مبسطة للمبتدئين.', '2026-04-19', IMG.learn30],
    ['posts-ai/ai-affiliate-tools.html','أفضل أدوات AI للتسويق بالعمولة','Affiliate + AI','أدوات للمحتوى والتحليل والتحويل.', '2026-04-19', IMG.affiliate],
    ['posts-ai/ai-content-sales-system.html','كيف تربط AI بالمحتوى والمبيعات','نظام عمل','ربط المحتوى بالبيع والتحويل باستخدام AI.', '2026-04-19', IMG.affiliate],
    ['posts-ai/content-structure-seo.html','أفضل هيكل محتوى يحقق نتائج SEO','SEO','بنية عملية للمقالات والمراجعات.', '2026-04-19', IMG.seo],
    ['posts-ai/arab-affiliate-programs.html','أفضل برامج الأفلييت العربية','Affiliate','اختيار برامج مناسبة للسوق العربي.', '2026-04-19', IMG.affiliate],
    ['posts-ai/affiliate-funnel-guide.html','قمع التحويل في التسويق بالعمولة','Affiliate','نقل الزائر من القراءة إلى القرار.', '2026-04-19', IMG.affiliate],
    ['posts-ai/affiliate-growth-strategy.html','كيف تضاعف أرباحك في الأفلييت','Affiliate','تحسين الصفحات الرابحة وزيادة النقرات.', '2026-04-19', IMG.affiliate],
    ['posts-ai/what-is-affiliate-marketing.html','كيف تبدأ الربح من التسويق بالعمولة','Affiliate','شرح مبسط للمبتدئين.', '2026-04-19', IMG.affiliate],
    ['posts-ai/affiliate-mistakes.html','أخطاء قاتلة في التسويق بالعمولة','Affiliate','أخطاء يجب تجنبها قبل هدر الوقت.', '2026-04-19', IMG.affiliate],
    ['articles/what-is-affiliate-marketing.html','ما هو التسويق بالعمولة؟','Affiliate','شرح مبسط للمبتدئين داخل قسم المقالات.', '2026-04-19', IMG.affiliate],
    ['articles/affiliate-marketing-mistakes.html','أخطاء قاتلة في التسويق بالعمولة تجنبها','Affiliate','نصائح عملية للمبتدئين.', '2026-04-19', IMG.affiliate],
    ['articles/seo-for-affiliate-sites.html','كيف تهيئ موقع الأفلييت للسيو','SEO','خطوات عملية لتحسين صفحات الأفلييت.', '2026-04-19', IMG.seo],
    ['articles/ai-tools-for-affiliate-marketing.html','أفضل أدوات AI للتسويق بالعمولة','Affiliate + AI','استخدام AI في المحتوى والتحليل.', '2026-04-19', IMG.affiliate],
    ['articles/best-content-structure.html','أفضل هيكل محتوى يحقق نتائج أفضل','SEO','بناء مقالات وصفحات أوضح وأكثر تحويلًا.', '2026-04-19', IMG.seo],
    ['articles/best-affiliate-programs-arab-world.html','أفضل برامج الأفلييت في العالم العربي','Affiliate','برامج مناسبة للسوق العربي.', '2026-04-19', IMG.affiliate],
    ['posts-ai/complete-ai-learning-path.html','الطريق الكامل لتعلم الذكاء الاصطناعي','تعلم AI','مسار منظم للتعلم بدون تشتت.', '2026-04-12', IMG.learn90],
    ['posts-ai/what-is-ai-beginners.html','ما هو الذكاء الاصطناعي؟','تعلم AI','شرح الأساسيات للمبتدئين.', '2026-04-12', IMG.learnBasics],
    ['posts-ai/learn-ai-without-technical-background.html','تعلم AI بدون خلفية تقنية','تعلم AI','طريقة دخول المجال لغير التقنيين.', '2026-04-12', IMG.learnBasics],
    ['posts-ai/learning-tips-for-ai.html','نصائح لتعلم الذكاء الاصطناعي','تعلم AI','تقليل التشتت وبناء عادة تعلم.', '2026-04-12', IMG.learnBasics],
    ['posts-ai/ai-learning-communities.html','مجتمعات تعلم الذكاء الاصطناعي','تعلم AI','أماكن ومجتمعات تساعدك على التعلم.', '2026-04-12', IMG.courses],
    ['posts-ai/python-for-ai-beginners.html','Python للذكاء الاصطناعي','تعلم AI','أساسيات بايثون التي تحتاجها في AI.', '2026-04-12', IMG.python],
    ['posts-ai/math-for-ai-beginners.html','رياضيات AI للمبتدئين','تعلم AI','المفاهيم الرياضية المهمة بدون تعقيد.', '2026-04-12', IMG.math],
    ['posts-ai/free-ai-courses-arabic.html','كورسات AI مجانية','تعلم AI','مصادر مجانية عربية وعالمية للتعلم.', '2026-04-12', IMG.courses],
    ['posts-ai/ai-projects-for-beginners.html','مشاريع AI للمبتدئين','تعلم AI','مشاريع صغيرة لتطبيق ما تعلمته.', '2026-04-12', IMG.projects],
    ['posts-ai/best-books-to-learn-ai.html','أفضل كتب لتعلم الذكاء الاصطناعي','تعلم AI','كتب ومراجع مناسبة للانطلاق.', '2026-04-12', IMG.courses],
    ['posts-ai/chatgpt-review.html','مراجعة ChatGPT','أدوات AI','استخدام ChatGPT للكتابة والتحليل والعمل.', '2026-04-10', IMG.ai],
    ['posts-ai/jasper-ai-review.html','مراجعة Jasper AI','أدوات كتابة','أداة كتابة وتسويق للمحتوى الطويل.', '2026-04-10', IMG.ai],
    ['posts-ai/writesonic-review.html','مراجعة Writesonic','أدوات كتابة','كتابة تسويقية ومقالات بمساعدة AI.', '2026-04-10', IMG.ai],
    ['posts-ai/copyai-review.html','مراجعة Copy.ai','أدوات كتابة','أداة للنسخ التسويقي والأفكار.', '2026-04-10', IMG.ai],
    ['posts-ai/canva-ai-review.html','مراجعة Canva AI','تصميم AI','تصميم سريع للمحتوى والصور.', '2026-04-10', IMG.design],
    ['posts-ai/midjourney-guide.html','دليل Midjourney','تصميم AI','إنشاء صور احترافية بالذكاء الاصطناعي.', '2026-04-10', IMG.design],
    ['posts-ai/dalle3-review.html','مراجعة DALL-E 3','تصميم AI','توليد الصور من النصوص.', '2026-04-10', IMG.design],
    ['posts-ai/best-ai-design-tools.html','أفضل أدوات تصميم AI','تصميم AI','مقارنة أدوات التصميم والصور.', '2026-04-10', IMG.design],
    ['posts-ai/ai-logo-design-guide.html','دليل تصميم الشعارات بالذكاء الاصطناعي','تصميم AI','إنشاء شعار وهوية بصرية باستخدام AI.', '2026-04-10', IMG.design],
    ['posts-ai/ai-design-for-social-media.html','تصميم السوشيال ميديا بالذكاء الاصطناعي','تصميم AI','أفكار وتصاميم أسرع للمنصات.', '2026-04-10', IMG.design],
    ['posts-ai/best-ai-video-tools-2026.html','أفضل أدوات AI للفيديو','فيديو AI','أدوات صناعة الفيديو بالذكاء الاصطناعي.', '2026-04-10', IMG.design],
    ['posts-ai/best-ai-coding-tools-2026.html','أفضل أدوات AI للبرمجة','برمجة AI','أدوات للمطورين وكتابة الكود.', '2026-04-10', IMG.deepseek],
    ['posts-ai/best-ai-automation-tools-2026.html','أفضل أدوات AI للأتمتة','Automation','أدوات لبناء workflows ذكية.', '2026-04-10', IMG.n8n],
    ['posts-ai/ai-automation-productivity.html','AI للأتمتة والإنتاجية','Automation','زيادة الإنتاجية باستخدام أدوات AI.', '2026-04-10', IMG.n8n],
    ['posts-ai/ollama-guide.html','دليل Ollama','Open Source','تشغيل النماذج محليًا.', '2026-04-10', IMG.ollama],
    ['posts-ai/lmstudio-guide.html','دليل LM Studio','Open Source','تشغيل النماذج من واجهة رسومية.', '2026-04-10', IMG.lmstudio],
    ['posts-ai/huggingface-guide.html','دليل Hugging Face','Open Source','اكتشاف النماذج المفتوحة.', '2026-04-10', IMG.hf],
    ['posts-ai/langchain-guide.html','دليل LangChain','Open Source','بناء تطبيقات AI وRAG.', '2026-04-10', IMG.langchain],
    ['posts-ai/n8n-guide.html','دليل n8n','Open Source','أتمتة workflows بالذكاء الاصطناعي.', '2026-04-10', IMG.n8n],
    ['posts-ai/llama3-guide.html','دليل Llama 3','Open Source','نموذج مفتوح للتجارب المحلية.', '2026-04-10', IMG.llama],
    ['posts-ai/mistral-guide.html','دليل Mistral','Open Source','نموذج خفيف وسريع.', '2026-04-10', IMG.mistral],
    ['posts-ai/falcon-guide.html','دليل Falcon','Open Source','نموذج مفتوح مع دعم عربي جيد.', '2026-04-10', IMG.falcon],
    ['posts-ai/deepseek-guide.html','دليل DeepSeek','برمجة AI','استخدامه في البرمجة والتحليل.', '2026-04-10', IMG.deepseek],
    ['posts-ai/tool-ollama-page.html','صفحة أداة Ollama','أدوات مفتوحة','بطاقة أداة تفصيلية.', '2026-04-10', IMG.ollama],
    ['posts-ai/tool-lmstudio-page.html','صفحة أداة LM Studio','أدوات مفتوحة','بطاقة أداة تفصيلية.', '2026-04-10', IMG.lmstudio],
    ['posts-ai/tool-llama-page.html','صفحة أداة Llama','أدوات مفتوحة','بطاقة أداة تفصيلية.', '2026-04-10', IMG.llama],
    ['posts-ai/tool-mistral-page.html','صفحة أداة Mistral','أدوات مفتوحة','بطاقة أداة تفصيلية.', '2026-04-10', IMG.mistral],
    ['posts-ai/tool-deepseek-page.html','صفحة أداة DeepSeek','أدوات مفتوحة','بطاقة أداة تفصيلية.', '2026-04-10', IMG.deepseek],
    ['posts-ai/tool-gpt4all-page.html','صفحة أداة GPT4All','أدوات مفتوحة','تشغيل نماذج محليًا.', '2026-04-10', IMG.ollama],
    ['posts-ai/tool-openwebui-page.html','صفحة أداة Open WebUI','أدوات مفتوحة','واجهة محلية للنماذج.', '2026-04-10', IMG.ollama],
    ['posts-ai/28-ai-newsletters.html','أفضل نشرات AI البريدية','مصادر AI','مصادر متابعة الذكاء الاصطناعي.', '2026-04-10', IMG.courses],
    ['posts-ai/27-ai-and-personal-brand.html','AI وبناء البراند الشخصي','براند شخصي','استخدام AI في بناء حضور شخصي.', '2026-04-10', IMG.ai],
    ['posts-ai/tiktok-growth-engineering.html','هندسة النمو في TikTok','نمو رقمي','تحليل عملي للنمو والمحتوى.', '2026-04-10', IMG.affiliate]
  ].sort((a,b)=>b[4].localeCompare(a[4]));
  function card(p){return '<article class="article-card"><a href="'+p[0]+'"><div class="article-image"><img src="'+p[5]+'" alt="'+p[1].replace(/"/g,'')+'" loading="lazy" decoding="async" width="640" height="360"></div><div class="article-content"><span class="article-category">'+p[2]+'</span><h3>'+p[1]+'</h3><p class="article-excerpt">'+p[3]+'</p><div class="article-meta"><span>📅 '+p[4]+'</span><span class="read-more">اقرأ المقال →</span></div></div></a></article>';}
  function render(){
    const path=location.pathname.split('/').pop()||'index.html';
    if(path!=='articles.html'&&path!=='ai-articles.html'&&path!=='posts-ai.html')return;
    const grid=document.querySelector('.articles-grid'); if(!grid)return;
    const list=path==='articles.html'?posts:posts.filter(p=>!p[0].startsWith('articles/'));
    grid.innerHTML=list.map(card).join('');
    const h=document.querySelector('.section-header h2'); if(h)h.textContent=path==='articles.html'?'جميع المقالات حسب تاريخ النشر':'مكتبة مقالات AI حسب تاريخ النشر';
    const d=document.querySelector('.section-header p'); if(d)d.textContent='تم جمع المقالات الموجودة في الموقع والمستودع وترتيبها من الأحدث إلى الأقدم، مع صور مناسبة لكل قسم.';
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render,{once:true});else render();
})();
