(function(){
  'use strict';

  function addStyle(){
    if(document.getElementById('homepage-footer-topics-style')) return;
    const css = `
      .footer-topics-section{background:#071426;color:#fff;padding:2.4rem 0;border-top:1px solid rgba(255,255,255,.08)}
      .footer-topics-section .container{width:min(1180px,calc(100% - 2rem));margin:auto}
      .footer-topics-head{text-align:center;margin-bottom:1.5rem}
      .footer-topics-head span{display:inline-flex;background:rgba(234,88,12,.16);color:#fed7aa;border:1px solid rgba(253,186,116,.22);border-radius:999px;padding:.25rem .75rem;font-size:.78rem;font-weight:900;margin-bottom:.6rem}
      .footer-topics-head h2{margin:.2rem 0;color:#fff;font-size:1.5rem;line-height:1.5}
      .footer-topics-head p{margin:.25rem auto 0;color:rgba(255,255,255,.72);font-size:.9rem;line-height:1.8;max-width:760px}
      .footer-topics-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.9rem;align-items:start}
      .footer-topic-card{background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.10);border-radius:20px;padding:1rem;box-shadow:0 14px 32px rgba(2,6,23,.16)}
      .footer-topic-card h3{margin:0 0 .75rem;color:#fff;font-size:.98rem;line-height:1.5;border-bottom:1px solid rgba(255,255,255,.10);padding-bottom:.55rem}
      .footer-topic-card ul{list-style:none;margin:0;padding:0;display:grid;gap:.42rem}
      .footer-topic-card a{color:rgba(255,255,255,.82)!important;text-decoration:none!important;font-size:.79rem;line-height:1.55;font-weight:750;display:block}
      .footer-topic-card a:hover{color:#fb923c!important;text-decoration:none!important}
      .footer-topic-more{display:inline-flex;margin-top:.8rem;color:#fed7aa!important;font-weight:900!important;font-size:.78rem!important}
      @media(max-width:1100px){.footer-topics-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:620px){.footer-topics-section{padding:1.6rem 0}.footer-topics-grid{grid-template-columns:1fr}.footer-topics-head h2{font-size:1.15rem}.footer-topic-card{padding:.9rem;border-radius:18px}.footer-topic-card a{font-size:.78rem}}
    `;
    const style = document.createElement('style');
    style.id = 'homepage-footer-topics-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function createFooterTopics(){
    if(!document.body.classList.contains('home-page')) return;
    document.querySelectorAll('.footer-topics-section').forEach(function(el){ el.remove(); });

    const topics = [
      {title:'📰 أخبار و SEO وجودة المحتوى', links:[
        ['جديد الذكاء الاصطناعي 2026','/posts-ai/latest-ai-news-2026.html'],
        ['هل تقبل جوجل محتوى الذكاء الاصطناعي؟','/posts-ai/google-ai-content-acceptance.html'],
        ['حقيقة عقوبة جوجل لمحتوى AI','/posts-ai/google-penalty-ai-content-truth.html'],
        ['نجاح محتوى AI في SEO','/posts-ai/ai-seo-content-success.html'],
        ['فرصة ومخاطر محتوى AI في جوجل','/posts-ai/ai-content-google-opportunity-risk.html'],
        ['هيكل محتوى SEO ناجح','/posts-ai/content-structure-seo.html']
      ]},
      {title:'✍️ أدوات الكتابة والمحتوى', links:[
        ['أفضل أدوات الكتابة بالذكاء الاصطناعي','/posts-ai/30-best-ai-writing-tools.html'],
        ['مراجعة ChatGPT','/posts-ai/chatgpt-review.html'],
        ['مراجعة Jasper AI','/posts-ai/jasper-ai-review.html'],
        ['مراجعة Copy.ai','/posts-ai/copyai-review.html'],
        ['مراجعة Writesonic','/posts-ai/writesonic-review.html'],
        ['نظام محتوى يبيع بالذكاء الاصطناعي','/posts-ai/ai-content-sales-system.html']
      ]},
      {title:'🎨 التصميم والصور', links:[
        ['مراجعة Canva AI','/posts-ai/canva-ai-review.html'],
        ['أفضل أدوات التصميم بالذكاء الاصطناعي','/posts-ai/best-ai-design-tools.html'],
        ['تصميم السوشيال ميديا بالذكاء الاصطناعي','/posts-ai/ai-design-for-social-media.html'],
        ['دليل تصميم الشعارات بالذكاء الاصطناعي','/posts-ai/ai-logo-design-guide.html'],
        ['مراجعة DALL·E 3','/posts-ai/dalle3-review.html'],
        ['دليل Midjourney','/posts-ai/midjourney-guide.html']
      ]},
      {title:'🎓 تعلم الذكاء الاصطناعي', links:[
        ['ما هو الذكاء الاصطناعي؟','/posts-ai/what-is-ai-beginners.html'],
        ['الطريق الكامل لتعلم AI','/posts-ai/complete-ai-learning-path.html'],
        ['خطة 30 يوم لتعلم AI','/posts-ai/30-day-ai-plan.html'],
        ['خريطة تعلم AI في 30 يوم','/posts-ai/ai-learning-roadmap-30-days.html'],
        ['خطة 90 يوم للذكاء الاصطناعي','/posts-ai/90-day-ai-plan.html'],
        ['خطة 90 يوم متقدمة','/posts-ai/29-90-day-ai-plan.html'],
        ['أسرع طريقة لتعلم AI','/posts-ai/fastest-way-to-learn-ai.html'],
        ['نصائح تعلم الذكاء الاصطناعي','/posts-ai/learning-tips-for-ai.html'],
        ['تعلم AI بدون خلفية تقنية','/posts-ai/learn-ai-without-technical-background.html'],
        ['مجتمعات تعلم AI','/posts-ai/ai-learning-communities.html']
      ]},
      {title:'💻 البرمجة والمشاريع', links:[
        ['Python للمبتدئين في AI','/posts-ai/python-for-ai-beginners.html'],
        ['رياضيات AI للمبتدئين','/posts-ai/math-for-ai-beginners.html'],
        ['مشاريع AI للمبتدئين','/posts-ai/ai-projects-for-beginners.html'],
        ['أفضل كتب تعلم AI','/posts-ai/best-books-to-learn-ai.html'],
        ['دورات ذكاء اصطناعي مجانية','/posts-ai/free-ai-courses-arabic.html'],
        ['بناء موقع بالذكاء الاصطناعي','/posts-ai/build-website-with-ai-in-minutes.html']
      ]},
      {title:'🧩 نماذج ومصادر مفتوحة', links:[
        ['دليل Mistral','/posts-ai/mistral-guide.html'],
        ['دليل Falcon','/posts-ai/falcon-guide.html'],
        ['دليل Ollama','/posts-ai/ollama-guide.html'],
        ['دليل Llama 3','/posts-ai/llama3-guide.html'],
        ['Mistral داخل قسم الأدوات','/tools/mistral.html'],
        ['Falcon داخل قسم الأدوات','/tools/falcon.html'],
        ['Ollama داخل قسم الأدوات','/tools/ollama.html'],
        ['Llama 3 داخل قسم الأدوات','/tools/llama.html']
      ]},
      {title:'💰 التسويق بالعمولة والربح', links:[
        ['ما هو التسويق بالعمولة؟','/posts-ai/what-is-affiliate-marketing.html'],
        ['دليل Funnel للتسويق بالعمولة','/posts-ai/affiliate-funnel-guide.html'],
        ['أدوات AI للتسويق بالعمولة','/posts-ai/ai-affiliate-tools.html'],
        ['أخطاء التسويق بالعمولة','/posts-ai/affiliate-mistakes.html'],
        ['استراتيجية نمو Affiliate','/posts-ai/affiliate-growth-strategy.html'],
        ['برامج أفلييت عربية','/posts-ai/arab-affiliate-programs.html'],
        ['TikTok Growth Engineering','/posts-ai/tiktok-growth-engineering.html']
      ]},
      {title:'🌍 المواقع العربية والمستقبل', links:[
        ['مستقبل المواقع العربية مع AI','/posts-ai/future-arab-websites-ai.html'],
        ['من ينجو من المواقع العربية؟','/posts-ai/arab-websites-ai-who-survives.html'],
        ['هل ينقذ AI المواقع العربية أم يدفنها؟','/posts-ai/ai-save-or-bury-arab-websites.html'],
        ['AI يطرق باب المواقع العربية','/posts-ai/ai-knocks-arab-websites-door.html'],
        ['مستقبل الأتمتة بالذكاء الاصطناعي','/posts-ai/future-of-ai-automation.html'],
        ['أحدث استخدامات الأتمتة','/posts-ai/latest-ai-automation-uses.html'],
        ['الأتمتة والإنتاجية بالذكاء الاصطناعي','/posts-ai/ai-automation-productivity.html'],
        ['الذكاء وبناء العلامة الشخصية','/posts-ai/27-ai-and-personal-brand.html'],
        ['نشرات AI البريدية','/posts-ai/28-ai-newsletters.html']
      ]}
    ];

    const section = document.createElement('section');
    section.className = 'footer-topics-section';
    section.setAttribute('aria-label','جميع المقالات منظمة حسب الموضوع');
    section.innerHTML = '<div class="container"><div class="footer-topics-head"><span>جميع المقالات</span><h2>جميع المقالات منظمة حسب الموضوع</h2><p>هذا فهرس كامل ومنسق لكل مقالات الموقع، مرتب حسب الموضوع لتسهيل الوصول وتقوية الروابط الداخلية.</p></div><div class="footer-topics-grid">'+
      topics.map(function(topic){
        return '<div class="footer-topic-card"><h3>'+topic.title+'</h3><ul>'+topic.links.map(function(link){return '<li><a href="'+link[1]+'">'+link[0]+'</a></li>';}).join('')+'</ul></div>';
      }).join('')+
      '</div></div>';

    const footer = document.querySelector('footer,.site-footer');
    if(footer && footer.parentNode){ footer.parentNode.insertBefore(section, footer); }
    else { document.body.appendChild(section); }
  }

  function run(){ addStyle(); createFooterTopics(); }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, {once:true}); else run();
})();
