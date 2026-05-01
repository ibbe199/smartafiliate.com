(function () {
  const BRAND = 'Smartafiliate';
  const SYSTEM_PAGE = 'https://alishede.systeme.io/affiliate';
  const SYSTEM_LABEL = 'نظام Affiliate';
  const CLICKBANK_LINK = 'https://alishede.systeme.io/affiliate';
  const idle = (fn, timeout) => ('requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: timeout || 1600 }) : setTimeout(fn, timeout || 1600));
  const coreArticles = [
    ['posts-ai/chatgpt-review.html','ChatGPT Review | مراجعة ChatGPT','AI','شرح عملي لاستخدام ChatGPT في المحتوى والتحليل والبرمجة.'],
    ['posts-ai/copyai-review.html','Copy.ai Review | مراجعة Copy.ai','AI','أداة كتابة وتسويق بالمحتوى باستخدام الذكاء الاصطناعي.'],
    ['posts-ai/jasper-ai-review.html','Jasper AI Review | مراجعة Jasper','AI','مراجعة عملية لأداة كتابة احترافية.'],
    ['posts-ai/ollama-guide.html','Ollama Guide | دليل Ollama','Open Source','تشغيل نماذج الذكاء الاصطناعي محليًا على جهازك.'],
    ['posts-ai/llama3-guide.html','Llama 3 Guide | دليل Llama 3','Open Source','تعرف على Llama 3 واستخداماته العملية.'],
    ['posts-ai/mistral-guide.html','Mistral Guide | دليل Mistral','Open Source','نموذج سريع وخفيف للاستخدامات المحلية.'],
    ['posts-ai/falcon-guide.html','Falcon Guide | دليل Falcon','Open Source','نموذج مفتوح المصدر للتجارب المتقدمة.'],
    ['posts-ai/deepseek-guide.html','DeepSeek Guide | دليل DeepSeek','Coding','مساعد قوي للبرمجة والتحليل وحل الأخطاء.'],
    ['posts-ai/midjourney-guide.html','Midjourney Guide | دليل Midjourney','Design','توليد صور احترافية من النصوص والأفكار.'],
    ['posts-ai/30-best-ai-writing-tools.html','أفضل أدوات الكتابة بالذكاء الاصطناعي','Writing','مقارنة عملية بين أدوات الكتابة وصناعة المحتوى.'],
    ['posts-ai/90-day-ai-plan.html','خطة 90 يوم للتحول إلى دخل من AI','Learning','خطة عملية لبناء أصل رقمي قابل للنمو.'],
    ['posts-ai/latest-ai-news-2026.html','جديد الذكاء الاصطناعي في 2026','News','أبرز التحولات الحالية في أدوات ونماذج AI.'],
    ['posts-ai/ai-affiliate-tools.html','أفضل أدوات AI للتسويق بالعمولة','Affiliate','أدوات للمحتوى والتصميم والتحليل في مشاريع الأفلييت.'],
    ['posts-ai/affiliate-mistakes.html','أخطاء قاتلة في التسويق بالعمولة','Affiliate','أخطاء شائعة تمنع النمو وكيف تتجنبها.'],
    ['posts-ai/what-is-ai-beginners.html','ما هو الذكاء الاصطناعي؟','Learning','مدخل واضح للمفاهيم الأساسية للمبتدئين.'],
    ['posts-ai/python-for-beginners.html','Python للمبتدئين','Learning','ابدأ البرمجة من الصفر.'],
    ['posts-ai/free-ai-courses.html','كورسات AI مجانية','Learning','أفضل المصادر المجانية للتعلم.'],
    ['posts-ai/content-structure-seo.html','أفضل هيكل محتوى SEO','SEO','طريقة تنظيم المقال حتى يخدم القارئ ومحركات البحث.'],
    ['posts-ai/google-ai-content.html','هل تقبل جوجل محتوى AI؟','SEO','ما تقبله جوجل فعليًا وما يجب تجنبه.'],
    ['posts-ai/build-ai-website.html','بناء موقع بالذكاء الاصطناعي','SEO','من الفكرة حتى النشر والفهرسة.'],
    ['posts-ai/affiliate-funnel.html','قمع التحويل','Affiliate','بناء Funnel عملي وتحسين التحويل.'],
    ['posts-ai/affiliate-growth.html','استراتيجية نمو الأفلييت','Affiliate','خطة نمو للمحتوى والدخل.'],
    ['posts-ai/what-is-affiliate.html','ما هو التسويق بالعمولة؟','Affiliate','الأساسيات والبدء الصحيح.'],
    ['posts-ai/ai-productivity.html','AI والإنتاجية','Automation','استخدام الذكاء الاصطناعي لتوفير الوقت.'],
    ['posts-ai/automation-use-cases.html','استخدامات الأتمتة','Automation','أمثلة عملية في الأعمال اليومية.'],
    ['posts-ai/future-of-automation.html','مستقبل الأتمتة','Automation','كيف تتغير الأعمال في السنوات القادمة.'],
    ['posts-ai/canva-ai-review.html','Canva AI Review | مراجعة Canva AI','Design','تصميم ومحتوى بصري باستخدام الذكاء الاصطناعي.'],
    ['posts-ai/design-ai-tools.html','أفضل أدوات التصميم بالذكاء الاصطناعي','Design','مجموعة أدوات للمصممين وصناع المحتوى.']
  ];
  function loadIdentityLayer(){if(!document.getElementById('smart-identity-layer')){const link=document.createElement('link');link.id='smart-identity-layer';link.rel='stylesheet';link.href='/identity-fix.css?v=20260501-archive';document.head.appendChild(link);}}
  function normalizeBranding(){document.querySelectorAll('.logo').forEach(function(logo){const light=logo.querySelector('.logo-text-light');const accent=logo.querySelector('.logo-text-accent');if(light&&accent){light.textContent='Smart';accent.textContent='afiliate';}});}
  function removeLegacyBars(){document.querySelectorAll('.topbar,.ai-tool-finder,.finder-bar,.promo-bar,.quick-tool-bar,[class*=tool-finder],[id*=tool-finder]').forEach(function(el){el.remove();});}
  function cardHTML(item){return '<article class="article-card"><div class="article-content"><span class="article-category">'+item[2]+'</span><h3><a href="'+item[0]+'">'+item[1]+'</a></h3><p class="article-excerpt">'+item[3]+'</p><a class="read-more" href="'+item[0]+'">اقرأ المقال →</a></div></article>';}
  function renderCleanPage(){const path=location.pathname.toLowerCase().split('/').pop();if(!['ai-articles.html','posts-ai.html','learn-ai.html'].includes(path)) return;const main=document.querySelector('main');if(!main) return;main.innerHTML='<section class="page-hero"><div class="container"><span class="page-badge">Archive Published</span><h1>All Articles | جميع المقالات</h1><p>تم نشر كامل الأرشيف القديم مع الحفاظ على الروابط والمقالات الحالية.</p></div></section><section class="section"><div class="container"><div class="section-header"><span class="section-tag">28 Articles</span><h2>الأرشيف الكامل</h2></div><div class="articles-grid">'+coreArticles.map(cardHTML).join('')+'</div></div></section>';}
  function init(){loadIdentityLayer();removeLegacyBars();renderCleanPage();normalizeBranding();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
function closeMenu(){}
function toggleMenu(){const nav=document.getElementById('mainNav');const button=document.querySelector('.menu-toggle');if(!nav||!button)return;const open=nav.classList.toggle('active');button.setAttribute('aria-expanded',open?'true':'false');}
