(function () {
  const BRAND = 'Smartafiliate';
  const SYSTEM_PAGE = 'https://alishede.systeme.io/affiliate';
  const SYSTEM_LABEL = 'نظام Affiliate';
  const CLICKBANK_LINK = 'https://alishede.systeme.io/affiliate';
  const idle = (fn, timeout) => ('requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: timeout || 1600 }) : setTimeout(fn, timeout || 1600));
  const coreArticles = [
    ['posts-ai/chatgpt-review.html','ChatGPT Review | مراجعة ChatGPT','AI','شرح عملي لاستخدام ChatGPT في المحتوى والتحليل والبرمجة.'],
    ['posts-ai/ollama-guide.html','Ollama Guide | دليل Ollama','Open Source','تشغيل نماذج الذكاء الاصطناعي محليًا على جهازك.'],
    ['posts-ai/deepseek-guide.html','DeepSeek Guide | دليل DeepSeek','Coding','مساعد قوي للبرمجة والتحليل وحل الأخطاء.'],
    ['posts-ai/midjourney-guide.html','Midjourney Guide | دليل Midjourney','Design','توليد صور احترافية من النصوص والأفكار.'],
    ['posts-ai/30-best-ai-writing-tools.html','أفضل أدوات الكتابة بالذكاء الاصطناعي','Writing','مقارنة عملية بين أدوات الكتابة وصناعة المحتوى.'],
    ['posts-ai/90-day-ai-plan.html','خطة 90 يوم للتحول إلى دخل من AI','Learning','خطة عملية لبناء أصل رقمي قابل للنمو.'],
    ['posts-ai/latest-ai-news-2026.html','جديد الذكاء الاصطناعي في 2026','News','أبرز التحولات الحالية في أدوات ونماذج AI.'],
    ['posts-ai/llama3-guide.html','Llama 3 Guide | دليل Llama 3','Open Source','تعرف على Llama 3 واستخداماته العملية.'],
    ['posts-ai/mistral-guide.html','Mistral Guide | دليل Mistral','Open Source','نموذج سريع وخفيف للاستخدامات المحلية.'],
    ['posts-ai/ai-affiliate-tools.html','أفضل أدوات AI للتسويق بالعمولة','Affiliate','أدوات للمحتوى والتصميم والتحليل في مشاريع الأفلييت.'],
    ['posts-ai/affiliate-mistakes.html','أخطاء قاتلة في التسويق بالعمولة','Affiliate','أخطاء شائعة تمنع النمو وكيف تتجنبها.'],
    ['posts-ai/what-is-ai-beginners.html','ما هو الذكاء الاصطناعي؟','Learning','مدخل واضح للمفاهيم الأساسية للمبتدئين.']
  ];

  function loadIdentityLayer(){
    if(!document.getElementById('smart-identity-layer')){const link=document.createElement('link');link.id='smart-identity-layer';link.rel='stylesheet';link.href='/identity-fix.css?v=20260501-clean-pages';document.head.appendChild(link);}
    if(!document.getElementById('smart-critical-mobile-fix')){const style=document.createElement('style');style.id='smart-critical-mobile-fix';style.textContent='@media(max-width:760px){.topbar,.ai-tool-finder,.finder-bar,.promo-bar,.quick-tool-bar,[class*=tool-finder],[id*=tool-finder]{display:none!important}.page-hero,.hero{padding:28px 0!important}.articles-grid,.posts-grid,.tools-grid{grid-template-columns:1fr!important}.article-card,.post-card{border-radius:16px!important}.filter-bar,.filters,.library-filters{display:flex!important;overflow-x:auto!important;flex-wrap:nowrap!important}}';document.head.appendChild(style);}
  }
  function normalizeBranding(){document.title=(document.title||'').replace(/smartafiliate/gi,BRAND);document.querySelectorAll('.logo').forEach(function(logo){const light=logo.querySelector('.logo-text-light');const accent=logo.querySelector('.logo-text-accent');if(light&&accent){light.textContent='Smart';accent.textContent='afiliate';}});}
  function removeLegacyBars(){document.querySelectorAll('.topbar,.ai-tool-finder,.finder-bar,.promo-bar,.quick-tool-bar,[class*=tool-finder],[id*=tool-finder]').forEach(function(el){el.remove();});}
  function cardHTML(item){return '<article class="article-card"><div class="article-content"><span class="article-category">'+item[2]+'</span><h3><a href="'+item[0]+'">'+item[1]+'</a></h3><p class="article-excerpt">'+item[3]+'</p><a class="read-more" href="'+item[0]+'">اقرأ المقال →</a></div></article>';}
  function renderCleanPage(){
    const path=location.pathname.toLowerCase().split('/').pop();
    if(!['ai-articles.html','posts-ai.html','learn-ai.html'].includes(path)) return;
    const main=document.querySelector('main'); if(!main) return;
    const isLearn=path==='learn-ai.html'; const isPosts=path==='posts-ai.html';
    const title=isLearn?'Learn AI | تعلم الذكاء الاصطناعي':(isPosts?'All Articles | جميع المقالات':'AI Library | مكتبة الذكاء الاصطناعي');
    const desc=isLearn?'مسار عملي مختصر للتعلم والتطبيق بدون القوالب القديمة.':'فهرس حديث ونظيف لأهم المقالات مع الحفاظ على روابط المقالات الأساسية.';
    const primary=isLearn?'posts-ai/what-is-ai-beginners.html':'posts-ai.html';
    const secondary=isLearn?'best-ai-tools.html':'best-ai-tools.html';
    main.innerHTML='<section class="page-hero"><div class="container"><span class="page-badge">Smart Affiliate</span><h1>'+title+'</h1><p>'+desc+'</p><div class="cta-actions"><a class="cta-primary" href="'+primary+'">ابدأ الآن</a><a class="cta-secondary" href="'+secondary+'">أفضل الأدوات</a></div></div></section><section class="section"><div class="container"><div class="section-header"><span class="section-tag">مقالات مختارة</span><h2>روابط المقالات الأساسية</h2><p>تم تنظيف الصفحة مع الحفاظ على روابط المقالات وعدم حذف المحتوى من المستودع.</p></div><div class="articles-grid">'+coreArticles.map(cardHTML).join('')+'</div></div></section>';
  }
  function injectAffiliateCss(){if(document.getElementById('smart-affiliate-system-css'))return;const style=document.createElement('style');style.id='smart-affiliate-system-css';style.textContent='.smart-system-nav-link{font-weight:900!important}.smart-breadcrumb{width:min(1100px,calc(100% - 32px));margin:1rem auto 0;padding:.75rem 1rem;border:1px solid #dbeafe;border-radius:999px;background:#f8fafc;color:#334155;font-size:.9rem;font-weight:800;display:flex;gap:.45rem;align-items:center;flex-wrap:wrap}.smart-breadcrumb a{color:#1d4ed8!important;text-decoration:none!important;font-weight:900}';document.head.appendChild(style);}
  function getPageTitle(){const h1=document.querySelector('h1');return(h1?h1.textContent:document.title).replace(/\s+/g,' ').replace(/\|\s*Smartafiliate/i,'').trim();}
  function addBreadcrumbs(){if(document.querySelector('.smart-breadcrumb'))return;const path=location.pathname.toLowerCase();if(!path.includes('/posts-ai/')&&!path.endsWith('/posts-ai.html')&&!path.endsWith('/blog.html'))return;const nav=document.createElement('nav');nav.className='smart-breadcrumb';nav.innerHTML='<a href="/index.html">الرئيسية</a><span>›</span><a href="/posts-ai.html">جميع المقالات</a><span>›</span><span class="current">'+getPageTitle()+'</span>';const main=document.querySelector('main');if(main)main.insertBefore(nav,main.firstChild);}
  function addSystemLinks(){document.querySelectorAll('.main-nav').forEach(function(nav){if(!nav.querySelector('a[href="'+SYSTEM_PAGE+'"]')){const a=document.createElement('a');a.href=SYSTEM_PAGE;a.textContent=SYSTEM_LABEL;a.className='smart-system-nav-link';a.target='_blank';a.rel='noopener noreferrer';nav.appendChild(a);}});}
  function prepareImages(){document.querySelectorAll('img').forEach(function(img){img.decoding='async';img.loading='lazy';});}
  function applyBasicAffiliateLinks(){Array.from(document.querySelectorAll('.tool-card')).slice(0,4).forEach(function(card){const link=card.querySelector('.tool-link');if(!link)return;link.href=CLICKBANK_LINK;link.target='_blank';});}
  function init(){loadIdentityLayer();removeLegacyBars();renderCleanPage();injectAffiliateCss();normalizeBranding();addBreadcrumbs();addSystemLinks();prepareImages();idle(applyBasicAffiliateLinks,2500);setTimeout(removeLegacyBars,500);setTimeout(removeLegacyBars,1500);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
function closeMenu(){const nav=document.getElementById('mainNav');const button=document.querySelector('.menu-toggle');if(!nav||!button)return;nav.classList.remove('active');button.setAttribute('aria-expanded','false');}
function toggleMenu(){const nav=document.getElementById('mainNav');const button=document.querySelector('.menu-toggle');if(!nav||!button)return;const open=nav.classList.toggle('active');button.setAttribute('aria-expanded',open?'true':'false');}
