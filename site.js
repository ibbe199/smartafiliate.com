(function () {
  const posts = [
['posts-ai/llama3-guide.html','Llama 3 Guide','Open Source','دليل Llama 3.'],['posts-ai/30-day-ai-plan.html','30 Day AI Plan','Learning','خطة 30 يوم.'],['posts-ai/huggingface-guide.html','Hugging Face Guide','Open Source','دليل Hugging Face.'],['posts-ai/29-90-day-ai-plan.html','90 Day AI Plan Archive','Learning','خطة 90 يوم - نسخة أرشيفية.'],['posts-ai/ollama-guide.html','Ollama Guide','Open Source','دليل Ollama.'],['posts-ai/ai-affiliate-tools.html','AI Affiliate Tools','Affiliate','أدوات AI للأفلييت.'],['posts-ai/affiliate-mistakes.html','Affiliate Mistakes','Affiliate','أخطاء الأفلييت.'],['posts-ai/ai-logo-design-guide.html','AI Logo Design Guide','Design','تصميم الشعارات بالذكاء الاصطناعي.'],['posts-ai/what-is-ai-beginners.html','What Is AI for Beginners','Learning','مدخل للذكاء الاصطناعي.'],['posts-ai/ai-automation-productivity.html','AI Automation Productivity','Automation','الأتمتة والإنتاجية.'],['posts-ai/ai-seo-content-success.html','AI SEO Content Success','SEO','محتوى AI والسيو.'],['posts-ai/learn-ai-without-technical-background.html','Learn AI Without Technical Background','Learning','تعلم AI بدون خلفية تقنية.'],['posts-ai/latest-ai-news-2026.html','Latest AI News 2026','News','جديد AI 2026.'],['posts-ai/what-is-affiliate-marketing.html','What Is Affiliate Marketing','Affiliate','ما هو التسويق بالعمولة؟'],['posts-ai/chatgpt-review.html','ChatGPT Review','AI','مراجعة ChatGPT.'],['posts-ai/future-arab-websites-ai.html','Future Arab Websites AI','SEO','مستقبل المواقع العربية.'],['posts-ai/affiliate-funnel-guide.html','Affiliate Funnel Guide','Affiliate','قمع التحويل.'],['posts-ai/dalle3-review.html','DALL-E 3 Review','Design','مراجعة DALL-E 3.'],['posts-ai/ai-content-google-opportunity-risk.html','AI Content Google Opportunity Risk','SEO','محتوى AI وجوجل.'],['posts-ai/ai-projects-for-beginners.html','AI Projects for Beginners','Learning','مشاريع AI للمبتدئين.'],['posts-ai/free-ai-courses-arabic.html','Free AI Courses Arabic','Learning','كورسات AI عربية مجانية.'],['posts-ai/writesonic-review.html','Writesonic Review','AI','مراجعة Writesonic.'],['posts-ai/copyai-review.html','Copy.ai Review','AI','مراجعة Copy.ai.'],['posts-ai/ai-design-for-social-media.html','AI Design for Social Media','Design','تصميم السوشيال بالذكاء الاصطناعي.'],['posts-ai/learning-tips-for-ai.html','Learning Tips for AI','Learning','نصائح تعلم AI.'],['posts-ai/arab-websites-ai-who-survives.html','Arab Websites AI Who Survives','SEO','المواقع العربية في عصر AI.'],['posts-ai/best-books-to-learn-ai.html','Best Books to Learn AI','Learning','أفضل كتب AI.'],['posts-ai/28-ai-newsletters.html','AI Newsletters','Learning','نشرات AI.'],['posts-ai/27-ai-and-personal-brand.html','AI and Personal Brand','Growth','AI والبراند الشخصي.'],['posts-ai/deepseek-guide.html','DeepSeek Guide','Coding','دليل DeepSeek.'],['posts-ai/build-website-with-ai-in-minutes.html','Build Website with AI in Minutes','SEO','بناء موقع بالذكاء الاصطناعي.'],['posts-ai/math-for-ai-beginners.html','Math for AI Beginners','Learning','رياضيات AI.'],['posts-ai/jasper-ai-review.html','Jasper AI Review','AI','مراجعة Jasper.'],['posts-ai/30-best-ai-writing-tools.html','Best AI Writing Tools','Writing','أفضل أدوات الكتابة.'],['posts-ai/google-ai-content-acceptance.html','Google AI Content Acceptance','SEO','قبول جوجل لمحتوى AI.'],['posts-ai/content-structure-seo.html','Content Structure SEO','SEO','هيكل محتوى SEO.'],['posts-ai/arab-affiliate-programs.html','Arab Affiliate Programs','Affiliate','برامج أفلييت عربية.'],['posts-ai/ai-learning-communities.html','AI Learning Communities','Learning','مجتمعات تعلم AI.'],['posts-ai/canva-ai-review.html','Canva AI Review','Design','مراجعة Canva AI.'],['posts-ai/tiktok-growth-engineering.html','TikTok Growth Engineering','Growth','نمو تيك توك.'],['posts-ai/ai-save-or-bury-arab-websites.html','AI Save or Bury Arab Websites','SEO','AI والمواقع العربية.'],['posts-ai/ai-content-sales-system.html','AI Content Sales System','Affiliate','AI والمحتوى والمبيعات.'],['posts-ai/fastest-way-to-learn-ai.html','Fastest Way to Learn AI','Learning','أسرع طريقة لتعلم AI.'],['posts-ai/future-of-ai-automation.html','Future of AI Automation','Automation','مستقبل الأتمتة.'],['posts-ai/90-day-ai-plan.html','90 Day AI Plan','Learning','خطة 90 يوم.'],['posts-ai/mistral-guide.html','Mistral Guide','Open Source','دليل Mistral.'],['posts-ai/google-penalty-ai-content-truth.html','Google Penalty AI Content Truth','SEO','حقيقة عقوبة جوجل.'],['posts-ai/latest-ai-automation-uses.html','Latest AI Automation Uses','Automation','أحدث استخدامات الأتمتة.'],['posts-ai/python-for-ai-beginners.html','Python for AI Beginners','Learning','Python للمبتدئين.'],['posts-ai/falcon-guide.html','Falcon Guide','Open Source','دليل Falcon.'],['posts-ai/complete-ai-learning-path.html','Complete AI Learning Path','Learning','مسار تعلم AI كامل.'],['posts-ai/affiliate-growth-strategy.html','Affiliate Growth Strategy','Affiliate','استراتيجية نمو الأفلييت.'],['posts-ai/ai-learning-roadmap-30-days.html','AI Learning Roadmap 30 Days','Learning','خارطة تعلم 30 يوم.'],['posts-ai/midjourney-guide.html','Midjourney Guide','Design','دليل Midjourney.'],['posts-ai/ai-knocks-arab-websites-door.html','AI Knocks Arab Websites Door','SEO','AI يطرق باب المواقع العربية.'],['posts-ai/best-ai-design-tools.html','Best AI Design Tools','Design','أفضل أدوات التصميم.']
  ];
  const external = [
['posts-ai/tool-ollama-page.html','Ollama Tool Page','Tools','صفحة أداة Ollama.'],['posts-ai/tool-gpt4all-page.html','GPT4All Tool Page','Tools','صفحة أداة GPT4All.'],['posts-ai/tool-lmstudio-page.html','LM Studio Tool Page','Tools','صفحة LM Studio.'],['posts-ai/tool-openwebui-page.html','Open WebUI Tool Page','Tools','صفحة Open WebUI.'],['posts-ai/tool-llama-page.html','Llama Tool Page','Tools','صفحة Llama.'],['posts-ai/tool-deepseek-page.html','DeepSeek Tool Page','Tools','صفحة DeepSeek.'],['posts-ai/tool-mistral-page.html','Mistral Tool Page','Tools','صفحة Mistral.'],['tools/huggingface.html','Hugging Face Tool Page','Tools','صفحة Hugging Face.'],['tools/falcon.html','Falcon Tool Page','Tools','صفحة Falcon.'],['articles/best-affiliate-programs-arab-world.html','Best Affiliate Programs Arab World','Affiliate','برامج أفلييت للعالم العربي.'],['articles/best-content-structure.html','Best Content Structure','SEO','هيكل محتوى مناسب.'],['articles/seo-for-affiliate-sites.html','SEO for Affiliate Sites','SEO','سيو مواقع الأفلييت.'],['articles/affiliate-marketing-mistakes.html','Affiliate Marketing Mistakes','Affiliate','أخطاء التسويق بالعمولة.'],['articles/what-is-affiliate-marketing.html','What Is Affiliate Marketing','Affiliate','شرح التسويق بالعمولة.'],['articles/ai-tools-for-affiliate-marketing.html','AI Tools for Affiliate Marketing','Affiliate','أدوات AI للأفلييت.'],['ai-tools-comparison.html','AI Tools Comparison','Tools','مقارنة أدوات الذكاء الاصطناعي.'],['free-affiliate-system.html','Free Affiliate System','Affiliate','نظام أفلييت مجاني.'],['ai-automation-offer.html','AI Automation Offer','Automation','عرض الأتمتة بالذكاء الاصطناعي.']
  ];

  const all = posts.concat(external);

  const HUB_ICONS = {
    'learn-ai.html': '/assets/images/icons/learn-ai-page.png',
    'open-source.html': '/assets/images/icons/open-source-page.png',
    'best-ai-tools.html': '/assets/images/icons/best-ai-tools-page.png',
    'articles.html': '/assets/images/icons/article-page.png',
    'blog.html': '/assets/images/icons/blog-page.png',
    'posts-ai.html': '/assets/images/icons/posts-ai-page.png',
    'ai-articles.html': '/assets/images/icons/ai-articles-page.png',
    default: '/assets/images/icons/article-page.png'
  };

  const CATEGORY_ICONS = {
    Learning: '/assets/images/icons/learn-ai-page.png',
    'Open Source': '/assets/images/icons/open-source-page.png',
    Tools: '/assets/images/icons/best-ai-tools-page.png',
    AI: '/assets/images/icons/ai-articles-page.png',
    Design: '/assets/images/icons/best-ai-tools-page.png',
    Writing: '/assets/images/icons/article-page.png',
    Coding: '/assets/images/icons/open-source-page.png',
    SEO: '/assets/images/icons/article-page.png',
    Affiliate: '/assets/images/icons/blog-page.png',
    Automation: '/assets/images/icons/best-ai-tools-page.png',
    Growth: '/assets/images/icons/blog-page.png',
    News: '/assets/images/icons/posts-ai-page.png',
    Archive: '/assets/images/icons/article-page.png',
    Blog: '/assets/images/icons/blog-page.png'
  };

  const pages = {
    'learn-ai.html': {
      title: 'Learn AI | تعلم الذكاء الاصطناعي',
      badge: 'Learning',
      intro: 'مقالات التعلم والخطط والمسارات فقط.',
      mode: 'categories',
      categories: ['Learning']
    },
    'open-source.html': {
      title: 'Open Source AI | المصادر المفتوحة',
      badge: 'Open Source',
      intro: 'نماذج وأدوات مفتوحة المصدر فقط مثل Ollama وLlama وMistral وFalcon وHugging Face.',
      mode: 'categories',
      categories: ['Open Source']
    },
    'best-ai-tools.html': {
      title: 'Best AI Tools | أفضل أدوات AI',
      badge: 'Tools',
      intro: 'مراجعات الأدوات وصفحات الأدوات العملية للكتابة والتصميم والبرمجة والإنتاجية.',
      mode: 'categories',
      categories: ['Tools','AI','Design','Writing','Coding']
    },
    'articles.html': {
      title: 'Articles Archive | أرشيف المقالات',
      badge: 'Articles',
      intro: 'مقالات عامة مرتبة حسب التخصص: SEO وAffiliate وAutomation وGrowth وNews.',
      mode: 'categories',
      categories: ['SEO','Affiliate','Automation','Growth','News']
    },
    'blog.html': {
      title: 'AI Blog | المدونة',
      badge: 'Blog',
      intro: 'مقالات مختارة من أهم أقسام الموقع.',
      mode: 'categories',
      categories: ['AI','SEO','Affiliate','Learning','Automation']
    },
    'posts-ai.html': {
      title: 'All Posts | كل مقالات posts-ai',
      badge: 'All Posts',
      intro: 'كل المقالات داخل مسار posts-ai فقط.',
      mode: 'posts-only'
    },
    'ai-articles.html': {
      title: 'AI Library | مكتبة الذكاء الاصطناعي',
      badge: 'Library',
      intro: 'كل المقالات والصفحات المهمة المرتبطة بالذكاء الاصطناعي.',
      mode: 'all'
    }
  };

  function currentPage(){
    return location.pathname.toLowerCase().split('/').pop() || 'index.html';
  }

  function escapeHtml(value){
    return String(value).replace(/[&<>"']/g,function(ch){
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[ch];
    });
  }

  function css(){
    if(!document.getElementById('smart-identity-layer')){
      let l=document.createElement('link');
      l.id='smart-identity-layer';
      l.rel='stylesheet';
      l.href='/identity-fix.css?v=20260501-routed-icons';
      document.head.appendChild(l);
    }
    if(!document.getElementById('route-css')){
      let s=document.createElement('style');
      s.id='route-css';
      s.textContent='.home-full-index{background:#eef4fb;padding:2rem 0}.home-index-group{margin:1rem 0 1.4rem}.home-index-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:.7rem}.home-index-link{display:flex;justify-content:space-between;gap:.5rem;background:#fff;border:1px solid #d9e4f2;border-radius:16px;padding:.8rem .9rem;text-decoration:none!important;color:#0b1f3a!important;font-weight:900}.home-index-link span{font-size:.72rem;color:#ea580c}.home-index-count{display:inline-flex;background:#fff7ed;color:#ea580c;border-radius:999px;padding:.45rem .8rem;font-weight:900}.article-image img{width:100%;height:100%;object-fit:cover}.article-card .article-image{min-height:150px;background:#f8fafc}.article-card>a{display:block;height:100%;color:inherit;text-decoration:none}@media(max-width:760px){.home-index-list{grid-template-columns:1fr}}';
      document.head.appendChild(s);
    }
  }

  function clean(){
    document.querySelectorAll('.topbar,.ai-tool-finder,.finder-bar,.promo-bar,.quick-tool-bar,[class*=tool-finder],[id*=tool-finder]').forEach(e=>e.remove());
  }

  function logo(){
    document.querySelectorAll('.logo').forEach(x=>{
      let a=x.querySelector('.logo-text-light'),b=x.querySelector('.logo-text-accent');
      if(a&&b){a.textContent='Smart';b.textContent='afiliate';}
    });
  }

  function getItems(cfg){
    if(!cfg) return [];
    if(cfg.mode==='posts-only') return posts;
    if(cfg.mode==='all') return all;
    return all.filter(a=>cfg.categories.includes(a[2]));
  }

  function card(a,pageKey){
    const href=escapeHtml(a[0]);
    const title=escapeHtml(a[1]);
    const category=escapeHtml(a[2]);
    const excerpt=escapeHtml(a[3]);
    const icon=escapeHtml(CATEGORY_ICONS[a[2]] || HUB_ICONS[pageKey] || HUB_ICONS.default);
    return '<article class="article-card"><a href="'+href+'"><div class="article-image"><img src="'+icon+'" alt="'+category+'"></div><div class="article-content"><span class="article-category">'+category+'</span><h3>'+title+'</h3><p class="article-excerpt">'+excerpt+'</p><span class="read-more">اقرأ المقال →</span></div></a></article>';
  }

  function renderPage(){
    const pageKey=currentPage();
    const cfg=pages[pageKey];
    if(!cfg)return;
    const main=document.querySelector('main');
    if(!main)return;
    const items=getItems(cfg);
    const heroIcon=escapeHtml(HUB_ICONS[pageKey] || HUB_ICONS.default);
    main.innerHTML='<section class="page-hero"><div class="container"><span class="page-badge">'+escapeHtml(cfg.badge)+'</span><h1>'+escapeHtml(cfg.title)+'</h1><p>'+escapeHtml(cfg.intro)+'</p><div class="page-hero-icon"><img src="'+heroIcon+'" alt="'+escapeHtml(cfg.badge)+'"></div></div></section><section class="section"><div class="container"><div class="section-header"><span class="section-tag">'+items.length+' روابط</span><h2>المحتوى المناسب لهذه الصفحة</h2></div><div class="articles-grid">'+items.map(a=>card(a,pageKey)).join('')+'</div></div></section>';
  }

  function renderHome(){
    let p=currentPage();
    if(p!=='index.html'&&location.pathname!=='/')return;
    if(document.querySelector('.home-full-index'))return;
    let g={};
    all.forEach(a=>(g[a[2]]||(g[a[2]]=[])).push(a));
    let order=['Learning','AI','SEO','Affiliate','Open Source','Design','Automation','Tools','Growth','Writing','Coding','News'];
    let html='<section class="home-full-index"><div class="container"><div class="section-header"><span class="section-tag">فهرس كامل</span><h2>'+all.length+' مقال وصفحة محتوى منظمة</h2><p>كل المحتوى مرتبط حسب النوع.</p><div class="home-index-count">'+all.length+' رابط</div></div>';
    order.forEach(c=>{if(!g[c])return;html+='<div class="home-index-group"><h3>'+escapeHtml(c)+'</h3><div class="home-index-list">'+g[c].map(a=>'<a class="home-index-link" href="'+escapeHtml(a[0])+'">'+escapeHtml(a[1])+'<span>'+escapeHtml(c)+'</span></a>').join('')+'</div></div>';});
    html+='</div></section>';
    let main=document.querySelector('main');
    if(main)main.insertAdjacentHTML('beforeend',html);
  }

  function init(){css();clean();renderPage();renderHome();logo();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
function closeMenu(){let n=document.getElementById('mainNav'),b=document.querySelector('.menu-toggle');if(!n||!b)return;n.classList.remove('active');b.setAttribute('aria-expanded','false');}
function toggleMenu(){let n=document.getElementById('mainNav'),b=document.querySelector('.menu-toggle');if(!n||!b)return;let o=n.classList.toggle('active');b.setAttribute('aria-expanded',o?'true':'false');}
