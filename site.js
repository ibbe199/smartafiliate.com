(function () {
  const LOGO = '/assets/images/icons/logo.png';

  const items = [
    ['posts-ai/llama3-guide.html','Llama 3 Guide','Open Source','دليل Llama 3.'],
    ['posts-ai/huggingface-guide.html','Hugging Face Guide','Open Source','دليل Hugging Face.'],
    ['posts-ai/ollama-guide.html','Ollama Guide','Open Source','دليل Ollama.'],
    ['posts-ai/mistral-guide.html','Mistral Guide','Open Source','دليل Mistral.'],
    ['posts-ai/falcon-guide.html','Falcon Guide','Open Source','دليل Falcon.'],
    ['posts-ai/30-day-ai-plan.html','30 Day AI Plan','Learning','خطة 30 يوم.'],
    ['posts-ai/29-90-day-ai-plan.html','90 Day AI Plan Archive','Learning','خطة 90 يوم - نسخة أرشيفية.'],
    ['posts-ai/what-is-ai-beginners.html','What Is AI for Beginners','Learning','مدخل للذكاء الاصطناعي.'],
    ['posts-ai/learn-ai-without-technical-background.html','Learn AI Without Technical Background','Learning','تعلم AI بدون خلفية تقنية.'],
    ['posts-ai/ai-projects-for-beginners.html','AI Projects for Beginners','Learning','مشاريع AI للمبتدئين.'],
    ['posts-ai/free-ai-courses-arabic.html','Free AI Courses Arabic','Learning','كورسات AI عربية مجانية.'],
    ['posts-ai/learning-tips-for-ai.html','Learning Tips for AI','Learning','نصائح تعلم AI.'],
    ['posts-ai/best-books-to-learn-ai.html','Best Books to Learn AI','Learning','أفضل كتب AI.'],
    ['posts-ai/28-ai-newsletters.html','AI Newsletters','Learning','نشرات AI.'],
    ['posts-ai/fastest-way-to-learn-ai.html','Fastest Way to Learn AI','Learning','أسرع طريقة لتعلم AI.'],
    ['posts-ai/90-day-ai-plan.html','90 Day AI Plan','Learning','خطة 90 يوم.'],
    ['posts-ai/python-for-ai-beginners.html','Python for AI Beginners','Learning','Python للمبتدئين.'],
    ['posts-ai/complete-ai-learning-path.html','Complete AI Learning Path','Learning','مسار تعلم AI كامل.'],
    ['posts-ai/ai-learning-roadmap-30-days.html','AI Learning Roadmap 30 Days','Learning','خارطة تعلم 30 يوم.'],
    ['posts-ai/math-for-ai-beginners.html','Math for AI Beginners','Learning','رياضيات AI.'],
    ['posts-ai/ai-learning-communities.html','AI Learning Communities','Learning','مجتمعات تعلم AI.'],
    ['posts-ai/chatgpt-review.html','ChatGPT Review','AI','مراجعة ChatGPT.'],
    ['posts-ai/writesonic-review.html','Writesonic Review','AI','مراجعة Writesonic.'],
    ['posts-ai/copyai-review.html','Copy.ai Review','AI','مراجعة Copy.ai.'],
    ['posts-ai/jasper-ai-review.html','Jasper AI Review','AI','مراجعة Jasper.'],
    ['posts-ai/deepseek-guide.html','DeepSeek Guide','Coding','دليل DeepSeek.'],
    ['posts-ai/ai-logo-design-guide.html','AI Logo Design Guide','Design','تصميم الشعارات بالذكاء الاصطناعي.'],
    ['posts-ai/dalle3-review.html','DALL-E 3 Review','Design','مراجعة DALL-E 3.'],
    ['posts-ai/ai-design-for-social-media.html','AI Design for Social Media','Design','تصميم السوشيال بالذكاء الاصطناعي.'],
    ['posts-ai/canva-ai-review.html','Canva AI Review','Design','مراجعة Canva AI.'],
    ['posts-ai/midjourney-guide.html','Midjourney Guide','Design','دليل Midjourney.'],
    ['posts-ai/best-ai-design-tools.html','Best AI Design Tools','Design','أفضل أدوات التصميم.'],
    ['posts-ai/30-best-ai-writing-tools.html','Best AI Writing Tools','Writing','أفضل أدوات الكتابة.'],
    ['posts-ai/ai-affiliate-tools.html','AI Affiliate Tools','Affiliate','أدوات AI للأفلييت.'],
    ['posts-ai/affiliate-mistakes.html','Affiliate Mistakes','Affiliate','أخطاء الأفلييت.'],
    ['posts-ai/what-is-affiliate-marketing.html','What Is Affiliate Marketing','Affiliate','ما هو التسويق بالعمولة؟'],
    ['posts-ai/affiliate-funnel-guide.html','Affiliate Funnel Guide','Affiliate','قمع التحويل.'],
    ['posts-ai/arab-affiliate-programs.html','Arab Affiliate Programs','Affiliate','برامج أفلييت عربية.'],
    ['posts-ai/ai-content-sales-system.html','AI Content Sales System','Affiliate','AI والمحتوى والمبيعات.'],
    ['posts-ai/affiliate-growth-strategy.html','Affiliate Growth Strategy','Affiliate','استراتيجية نمو الأفلييت.'],
    ['articles/best-affiliate-programs-arab-world.html','Best Affiliate Programs Arab World','Affiliate','برامج أفلييت للعالم العربي.'],
    ['articles/affiliate-marketing-mistakes.html','Affiliate Marketing Mistakes','Affiliate','أخطاء التسويق بالعمولة.'],
    ['articles/what-is-affiliate-marketing.html','What Is Affiliate Marketing','Affiliate','شرح التسويق بالعمولة.'],
    ['articles/ai-tools-for-affiliate-marketing.html','AI Tools for Affiliate Marketing','Affiliate','أدوات AI للأفلييت.'],
    ['free-affiliate-system.html','Free Affiliate System','Affiliate','نظام أفلييت مجاني.'],
    ['posts-ai/ai-seo-content-success.html','AI SEO Content Success','SEO','محتوى AI والسيو.'],
    ['posts-ai/future-arab-websites-ai.html','Future Arab Websites AI','SEO','مستقبل المواقع العربية.'],
    ['posts-ai/ai-content-google-opportunity-risk.html','AI Content Google Opportunity Risk','SEO','محتوى AI وجوجل.'],
    ['posts-ai/arab-websites-ai-who-survives.html','Arab Websites AI Who Survives','SEO','المواقع العربية في عصر AI.'],
    ['posts-ai/build-website-with-ai-in-minutes.html','Build Website with AI in Minutes','SEO','بناء موقع بالذكاء الاصطناعي.'],
    ['posts-ai/google-ai-content-acceptance.html','Google AI Content Acceptance','SEO','قبول جوجل لمحتوى AI.'],
    ['posts-ai/ai-save-or-bury-arab-websites.html','AI Save or Bury Arab Websites','SEO','AI والمواقع العربية.'],
    ['posts-ai/google-penalty-ai-content-truth.html','Google Penalty AI Content Truth','SEO','حقيقة عقوبة جوجل.'],
    ['posts-ai/content-structure-seo.html','Content Structure SEO','SEO','هيكل محتوى SEO.'],
    ['posts-ai/ai-knocks-arab-websites-door.html','AI Knocks Arab Websites Door','SEO','AI يطرق باب المواقع العربية.'],
    ['articles/best-content-structure.html','Best Content Structure','SEO','هيكل محتوى مناسب.'],
    ['articles/seo-for-affiliate-sites.html','SEO for Affiliate Sites','SEO','سيو مواقع الأفلييت.'],
    ['posts-ai/ai-automation-productivity.html','AI Automation Productivity','Automation','الأتمتة والإنتاجية.'],
    ['posts-ai/future-of-ai-automation.html','Future of AI Automation','Automation','مستقبل الأتمتة.'],
    ['posts-ai/latest-ai-automation-uses.html','Latest AI Automation Uses','Automation','أحدث استخدامات الأتمتة.'],
    ['ai-automation-offer.html','AI Automation Offer','Automation','عرض الأتمتة بالذكاء الاصطناعي.'],
    ['posts-ai/latest-ai-news-2026.html','Latest AI News 2026','News','جديد AI 2026.'],
    ['posts-ai/27-ai-and-personal-brand.html','AI and Personal Brand','Growth','AI والبراند الشخصي.'],
    ['posts-ai/tiktok-growth-engineering.html','TikTok Growth Engineering','Growth','نمو تيك توك.'],
    ['posts-ai/tool-ollama-page.html','Ollama Tool Page','Tools','صفحة أداة Ollama.'],
    ['posts-ai/tool-gpt4all-page.html','GPT4All Tool Page','Tools','صفحة أداة GPT4All.'],
    ['posts-ai/tool-lmstudio-page.html','LM Studio Tool Page','Tools','صفحة LM Studio.'],
    ['posts-ai/tool-openwebui-page.html','Open WebUI Tool Page','Tools','صفحة Open WebUI.'],
    ['posts-ai/tool-llama-page.html','Llama Tool Page','Tools','صفحة Llama.'],
    ['posts-ai/tool-deepseek-page.html','DeepSeek Tool Page','Tools','صفحة DeepSeek.'],
    ['posts-ai/tool-mistral-page.html','Mistral Tool Page','Tools','صفحة Mistral.'],
    ['tools/huggingface.html','Hugging Face Tool Page','Tools','صفحة Hugging Face.'],
    ['tools/falcon.html','Falcon Tool Page','Tools','صفحة Falcon.'],
    ['ai-tools-comparison.html','AI Tools Comparison','Tools','مقارنة أدوات الذكاء الاصطناعي.']
  ];

  const categoryPages = {Learning:'learn-ai.html','Open Source':'open-source.html',Tools:'best-ai-tools.html',AI:'ai-articles.html',Design:'best-ai-tools.html',Writing:'best-ai-tools.html',Coding:'best-ai-tools.html',SEO:'articles.html',Affiliate:'articles.html',Automation:'articles.html',Growth:'articles.html',News:'articles.html'};
  const pages = {
    'learn-ai.html': {title:'Learn AI | تعلم الذكاء الاصطناعي', badge:'Learning', intro:'مقالات التعلم والخطط والمسارات والكورسات.', categories:['Learning']},
    'open-source.html': {title:'Open Source AI | المصادر المفتوحة', badge:'Open Source', intro:'نماذج وأدوات مفتوحة المصدر.', categories:['Open Source']},
    'best-ai-tools.html': {title:'Best AI Tools | أفضل أدوات AI', badge:'Tools', intro:'مراجعات الأدوات وصفحات أدوات الذكاء الاصطناعي.', categories:['Tools','AI','Design','Writing','Coding']},
    'articles.html': {title:'Articles Archive | أرشيف المقالات', badge:'Articles', intro:'SEO وAffiliate وAutomation وGrowth وNews.', categories:['SEO','Affiliate','Automation','Growth','News']},
    'blog.html': {title:'AI Blog | المدونة', badge:'Blog', intro:'قائمة مختارة من أهم أقسام الموقع.', categories:['AI','SEO','Affiliate','Learning','Automation']},
    'posts-ai.html': {title:'All Posts | كل مقالات posts-ai', badge:'All Posts', intro:'كل المقالات داخل مسار posts-ai.', mode:'posts'},
    'ai-articles.html': {title:'AI Library | مكتبة الذكاء الاصطناعي', badge:'Library', intro:'كل المقالات والصفحات المهمة.', mode:'all'}
  };
  const homeList = [['learn-ai.html','تعلم AI','Learning'],['best-ai-tools.html','أفضل أدوات AI','Tools'],['ai-articles.html','مكتبة AI','AI Library'],['open-source.html','أدوات مفتوحة المصدر','Open Source'],['articles.html','المقالات العامة','Articles'],['posts-ai.html','كل مقالات AI','All Posts']];

  function currentPage(){return location.pathname.toLowerCase().split('/').pop() || 'index.html';}
  function esc(v){return String(v || '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);}
  function itemsFor(cfg){if(!cfg)return[];if(cfg.mode==='all')return items;if(cfg.mode==='posts')return items.filter(i=>i[0].startsWith('posts-ai/'));return items.filter(i=>cfg.categories && cfg.categories.includes(i[2]));}

  function addStyles(){
    let s=document.getElementById('route-css');
    if(!s){s=document.createElement('style');s.id='route-css';document.head.appendChild(s);} 
    s.textContent=`
      .site-header{position:relative!important;z-index:1000!important;background:#061c35!important;border-bottom:1px solid rgba(255,255,255,.08)!important}
      .site-header .header-inner{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:1rem!important;min-height:76px!important;position:relative!important}
      .site-header .logo{display:flex!important;align-items:center!important;gap:.55rem!important;text-decoration:none!important;min-width:150px!important;color:#fff!important}
      .site-logo-img{display:block!important;width:52px!important;height:52px!important;object-fit:contain!important;border-radius:12px!important;background:#fff!important;padding:2px!important;flex:0 0 auto!important}
      .site-logo-word{font-weight:900!important;font-size:1rem!important;color:#fff!important;line-height:1.1!important;white-space:nowrap!important}
      .main-nav{display:flex!important;align-items:center!important;justify-content:center!important;gap:.35rem!important;flex:1!important}
      .main-nav a{color:#eaf2ff!important;text-decoration:none!important;font-weight:900!important;font-size:.92rem!important;padding:.55rem .72rem!important;border-radius:999px!important;white-space:nowrap!important}
      .main-nav a:hover,.main-nav a.active{color:#fff!important;background:#ea580c!important}
      .header-actions{display:flex!important;gap:.5rem!important;align-items:center!important}
      .header-actions a{white-space:nowrap!important}
      .menu-toggle{display:none!important;background:rgba(255,255,255,.08)!important;border:1px solid rgba(255,255,255,.16)!important;color:#fff!important;border-radius:12px!important;width:44px!important;height:44px!important;font-size:1.45rem!important;align-items:center!important;justify-content:center!important;cursor:pointer!important}
      .page-footer-list-section{background:#eef4fb;padding:2rem 0;border-top:1px solid #d9e4f2}.page-footer-list-box{background:#fff;border:1px solid #d9e4f2;border-radius:22px;padding:1rem;box-shadow:0 12px 28px rgba(15,23,42,.08)}.page-footer-list-title{text-align:center;margin:0 0 1rem;color:#0b1f3a;font-size:1.25rem}.page-footer-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.75rem}.page-footer-link{display:flex;justify-content:space-between;align-items:center;gap:.6rem;background:#f8fafc;border:1px solid #e2e8f0;border-radius:15px;padding:.85rem .95rem;text-decoration:none!important;color:#0b1f3a!important;font-weight:900}.page-footer-link span{color:#ea580c;font-size:.72rem;font-weight:900}
      .article-image img{width:100%;height:100%;object-fit:contain;background:#fff}.article-card .article-image{min-height:150px;background:#fff}.article-card a{text-decoration:none!important}.card-actions{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:.85rem}.card-actions a{color:#ea580c!important;font-weight:900!important}
      @media(max-width:900px){.site-header .header-inner{min-height:64px!important}.site-logo-img{width:40px!important;height:40px!important}.site-logo-word{font-size:.82rem!important}.menu-toggle{display:flex!important}.main-nav{display:none!important;position:absolute!important;top:calc(100% + 8px)!important;left:0!important;right:0!important;background:#061c35!important;border:1px solid rgba(255,255,255,.12)!important;border-radius:18px!important;padding:.7rem!important;box-shadow:0 18px 35px rgba(0,0,0,.28)!important;flex-direction:column!important;align-items:stretch!important;z-index:2000!important}.main-nav.active{display:flex!important}.main-nav a{display:block!important;text-align:right!important;width:100%!important;padding:.9rem 1rem!important}.header-actions{display:none!important}.page-footer-list{grid-template-columns:1fr}}
    `;
  }

  function ensureHeader(){
    if(!document.querySelector('.site-header')){
      document.body.insertAdjacentHTML('afterbegin','<header class="site-header"><div class="container header-inner"><a class="logo" href="index.html"></a><button class="menu-toggle" aria-label="فتح وإغلاق القائمة" aria-expanded="false" aria-controls="mainNav">☰</button><nav class="main-nav" id="mainNav"></nav><div class="header-actions"></div></div></header>');
    }
    document.querySelectorAll('.site-header').forEach((h,i)=>{if(i>0)h.remove();});
    const header=document.querySelector('.site-header');
    let inner=header.querySelector('.header-inner');
    if(!inner){header.innerHTML='<div class="container header-inner"></div>';inner=header.querySelector('.header-inner');}
    if(!inner.querySelector('.logo')) inner.insertAdjacentHTML('afterbegin','<a class="logo" href="index.html"></a>');
    if(!inner.querySelector('.menu-toggle')) inner.insertAdjacentHTML('beforeend','<button class="menu-toggle" aria-label="فتح وإغلاق القائمة" aria-expanded="false" aria-controls="mainNav">☰</button>');
    if(!inner.querySelector('.main-nav')) inner.insertAdjacentHTML('beforeend','<nav class="main-nav" id="mainNav"></nav>');
    if(!inner.querySelector('.header-actions')) inner.insertAdjacentHTML('beforeend','<div class="header-actions"></div>');
  }

  function normalizeHeader(){
    ensureHeader();
    document.querySelectorAll('.site-header .logo').forEach(el=>{el.setAttribute('href','index.html');el.innerHTML=`<img class="site-logo-img" src="${LOGO}" alt="Smart Affiliate logo"><span class="site-logo-word">Smart Affiliate</span>`;});
    document.querySelectorAll('.main-nav').forEach(nav=>{
      nav.id='mainNav';
      nav.innerHTML='<a href="index.html">الرئيسية</a><a href="best-ai-tools.html">أفضل أدوات AI</a><a href="ai-articles.html">مكتبة AI</a><a href="learn-ai.html">تعلم AI</a><a href="open-source.html">أدوات مفتوحة المصدر</a><a href="articles.html">المقالات</a>';
      const p=currentPage();
      nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===p)a.classList.add('active');a.addEventListener('click',closeMenu);});
    });
    document.querySelectorAll('.header-actions').forEach(box=>{box.innerHTML='<a href="ai-articles.html" class="btn-outline-light">مكتبة AI</a><a href="best-ai-tools.html" class="btn-primary-light">أفضل أدوات AI</a>';});
    document.querySelectorAll('.menu-toggle').forEach(btn=>{btn.setAttribute('aria-controls','mainNav');btn.setAttribute('aria-expanded','false');btn.onclick=toggleMenu;});
  }

  function footerList(list,title){return `<section class="page-footer-list-section"><div class="container"><div class="page-footer-list-box"><h2 class="page-footer-list-title">${esc(title)}</h2><div class="page-footer-list">${list.map(i=>`<a class="page-footer-link" href="${esc(i[0])}">${esc(i[1])}<span>${esc(i[2])}</span></a>`).join('')}</div></div></div></section>`;}
  function card(i){const catPage=categoryPages[i[2]]||'ai-articles.html';return `<article class="article-card"><div class="article-image"><a href="${esc(i[0])}"><img src="${LOGO}" alt="${esc(i[2])}"></a></div><div class="article-content"><span class="article-category">${esc(i[2])}</span><h3><a href="${esc(i[0])}">${esc(i[1])}</a></h3><p class="article-excerpt">${esc(i[3])}</p><div class="card-actions"><a href="${esc(i[0])}">اقرأ المقال →</a><a href="${esc(catPage)}">صفحة القسم ←</a></div></div></article>`;}
  function renderRoutedPage(){const p=currentPage(),cfg=pages[p];if(!cfg)return;const main=document.querySelector('main');if(!main)return;const list=itemsFor(cfg);main.innerHTML=`<section class="page-hero"><div class="container"><span class="page-badge">${esc(cfg.badge)}</span><h1>${esc(cfg.title)}</h1><p>${esc(cfg.intro)}</p></div></section><section class="section"><div class="container"><div class="section-header"><span class="section-tag">${list.length} روابط</span><h2>المحتوى المناسب لهذه الصفحة</h2></div><div class="articles-grid">${list.map(card).join('')}</div></div></section>${footerList(list,'قائمة هذه الصفحة')}`;}
  function renderHomeList(){const p=currentPage();if(p!=='index.html'&&location.pathname!=='/')return;document.querySelectorAll('.home-full-index,.page-footer-list-section').forEach(e=>e.remove());const main=document.querySelector('main');if(main)main.insertAdjacentHTML('beforeend',footerList(homeList,'قائمة الصفحة الرئيسية'));}
  function init(){addStyles();document.querySelectorAll('.topbar,.ai-tool-finder,.finder-bar,.promo-bar,.quick-tool-bar,[class*=tool-finder],[id*=tool-finder]').forEach(e=>e.remove());normalizeHeader();if(currentPage()==='index.html'||location.pathname==='/')renderHomeList();else renderRoutedPage();normalizeHeader();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();

function closeMenu(){let n=document.getElementById('mainNav'),b=document.querySelector('.menu-toggle');if(!n||!b)return;n.classList.remove('active');b.setAttribute('aria-expanded','false');}
function toggleMenu(){let n=document.getElementById('mainNav'),b=document.querySelector('.menu-toggle');if(!n||!b)return;let open=n.classList.toggle('active');b.setAttribute('aria-expanded',open?'true':'false');}
