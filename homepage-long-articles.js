(function(){
  'use strict';

  function addStyle(){
    if(document.getElementById('homepage-long-articles-style')) return;
    const css = `
      .long-articles-section{background:#eef5ff;padding:2.4rem 0}
      .long-articles-section .container{width:min(1120px,calc(100% - 2rem));margin:auto}
      .long-articles-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem;margin-top:1.3rem}
      .long-article-card{background:#fff;border:1px solid #dbeafe;border-radius:24px;padding:1rem;box-shadow:0 12px 28px rgba(15,23,42,.07);display:flex;flex-direction:column;min-height:310px}
      .long-article-visual{height:96px;border-radius:18px;background:radial-gradient(circle at 18% 18%,rgba(255,255,255,.24),transparent 28%),linear-gradient(135deg,#071426,#12305a 58%,#ea580c);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:.9rem}
      .long-article-visual span{width:50px;height:50px;border-radius:18px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.20);display:flex;align-items:center;justify-content:center;font-size:1.55rem}
      .long-article-card small{color:#c2410c;font-weight:900;margin-bottom:.35rem}
      .long-article-card h3{font-size:1rem;line-height:1.55;margin:.15rem 0;color:#0b1f3a}
      .long-article-card p{font-size:.82rem;line-height:1.75;color:#64748b;margin:.35rem 0 .8rem}
      .long-article-links{display:grid;gap:.45rem;margin-top:auto}
      .long-article-links a{display:inline-flex;align-items:center;justify-content:center;min-height:34px;border-radius:999px;text-decoration:none!important;font-size:.78rem;font-weight:900;padding:.45rem .8rem}
      .long-article-links a:first-child{background:#16a34a;color:#fff!important}
      .long-article-links a:last-child{background:#fff;color:#0b1f3a!important;border:1px solid #dbeafe}
      @media(max-width:900px){.long-articles-grid{grid-template-columns:1fr}}
      @media(max-width:620px){.long-articles-section{padding:1.6rem 0}.long-article-card{min-height:auto}.long-article-visual{height:78px}}
    `;
    const style=document.createElement('style');
    style.id='homepage-long-articles-style';
    style.textContent=css;
    document.head.appendChild(style);
  }

  function updateMainButtons(){
    if(!document.body.classList.contains('home-page')) return;

    const links = Array.from(document.querySelectorAll('a'));
    links.forEach(function(a){
      const txt = (a.textContent || '').trim();
      const href = a.getAttribute('href') || '';
      if(txt.includes('أفضل أدوات AI') || href === 'best-ai-tools.html'){
        a.setAttribute('href','/posts-ai/30-best-ai-writing-tools.html');
      }
      if(txt.includes('مكتبة المقالات') || txt.includes('تصفح المقالات')){
        a.setAttribute('href','/posts-ai/content-structure-seo.html');
      }
      if(txt.includes('ابدأ التعلم') || href === 'learn-ai.html'){
        a.setAttribute('href','/posts-ai/complete-ai-learning-path.html');
      }
      if(txt.includes('افتح المصادر') || href === 'open-source.html'){
        a.setAttribute('href','/posts-ai/ollama-guide.html');
      }
    });
  }

  function addLongArticlesSection(){
    if(!document.body.classList.contains('home-page')) return;
    if(document.querySelector('.long-articles-section')) return;

    const articles = [
      ['✍️','أدوات الكتابة','أفضل أدوات الكتابة بالذكاء الاصطناعي','مقال طويل يشرح أدوات الكتابة، الفرق بينها، ومتى تستخدم كل أداة للمحتوى وSEO.','/posts-ai/30-best-ai-writing-tools.html','/posts-ai/chatgpt-review.html'],
      ['🎨','التصميم','أفضل أدوات التصميم بالذكاء الاصطناعي','دليل طويل لاختيار أدوات التصميم والصور والبنرات والسوشيال ميديا.','/posts-ai/best-ai-design-tools.html','/posts-ai/canva-ai-review.html'],
      ['⚙️','الأتمتة','أتمتة المهام بالذكاء الاصطناعي','شرح طويل يربط الأتمتة بالإنتاجية وإدارة البريد والعمل والعملاء.','/posts-ai/ai-automation-productivity.html','/posts-ai/latest-ai-automation-uses.html'],
      ['🎓','تعلم AI','الطريق الكامل لتعلم الذكاء الاصطناعي','مسار طويل ومنظم للمبتدئين من الأساس إلى التطبيق العملي.','/posts-ai/complete-ai-learning-path.html','/posts-ai/ai-learning-roadmap-30-days.html'],
      ['🧩','مصادر مفتوحة','دليل Ollama لتشغيل النماذج محليًا','مقال عملي طويل يربط المصادر المفتوحة بالتشغيل المحلي والتجربة.','/posts-ai/ollama-guide.html','/posts-ai/llama3-guide.html'],
      ['🌍','المواقع العربية','مستقبل المواقع العربية مع الذكاء الاصطناعي','تحليل طويل لمستقبل المواقع العربية، SEO، وجودة المحتوى في عصر AI.','/posts-ai/future-arab-websites-ai.html','/posts-ai/arab-websites-ai-who-survives.html']
    ];

    const section=document.createElement('section');
    section.className='long-articles-section';
    section.innerHTML='<div class="container"><div class="section-header"><span class="section-tag">مقالات طويلة مرتبطة</span><h2>ابدأ من المقال الطويل المناسب لهدفك</h2><p>روابط مباشرة من الصفحة الرئيسية إلى المقالات العميقة، حتى لا يبقى الزائر في صفحات عامة فقط.</p></div><div class="long-articles-grid">'+articles.map(function(item){return '<article class="long-article-card"><div class="long-article-visual"><span>'+item[0]+'</span></div><small>'+item[1]+'</small><h3>'+item[2]+'</h3><p>'+item[3]+'</p><div class="long-article-links"><a href="'+item[4]+'">اقرأ المقال الطويل</a><a href="'+item[5]+'">مقال مرتبط</a></div></article>';}).join('')+'</div></div>';

    const target=document.querySelector('.home-primary-section') || document.querySelector('main .section');
    if(target && target.parentNode){ target.parentNode.insertBefore(section, target.nextSibling); }
    else { document.querySelector('main')?.appendChild(section); }
  }

  function run(){ addStyle(); updateMainButtons(); addLongArticlesSection(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', run, {once:true}); else run();
})();
