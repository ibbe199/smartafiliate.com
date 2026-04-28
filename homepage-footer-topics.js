(function(){
  'use strict';

  function addStyle(){
    if(document.getElementById('homepage-footer-topics-style')) return;
    const css = `
      .footer-topics-section{background:#071426;color:#fff;padding:2.2rem 0;border-top:1px solid rgba(255,255,255,.08)}
      .footer-topics-section .container{width:min(1120px,calc(100% - 2rem));margin:auto}
      .footer-topics-head{text-align:center;margin-bottom:1.4rem}
      .footer-topics-head span{display:inline-flex;background:rgba(234,88,12,.16);color:#fed7aa;border:1px solid rgba(253,186,116,.22);border-radius:999px;padding:.25rem .75rem;font-size:.78rem;font-weight:900;margin-bottom:.6rem}
      .footer-topics-head h2{margin:.2rem 0;color:#fff;font-size:1.45rem;line-height:1.5}
      .footer-topics-head p{margin:.25rem auto 0;color:rgba(255,255,255,.72);font-size:.9rem;line-height:1.8;max-width:680px}
      .footer-topics-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:.85rem}
      .footer-topic-card{background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.10);border-radius:20px;padding:1rem;min-height:235px;box-shadow:0 14px 32px rgba(2,6,23,.16)}
      .footer-topic-card h3{margin:0 0 .8rem;color:#fff;font-size:.98rem;line-height:1.5;border-bottom:1px solid rgba(255,255,255,.10);padding-bottom:.55rem}
      .footer-topic-card ul{list-style:none;margin:0;padding:0;display:grid;gap:.42rem}
      .footer-topic-card a{color:rgba(255,255,255,.82)!important;text-decoration:none!important;font-size:.8rem;line-height:1.55;font-weight:750;display:block}
      .footer-topic-card a:hover{color:#fb923c!important;text-decoration:none!important}
      .footer-topic-more{display:inline-flex;margin-top:.8rem;color:#fed7aa!important;font-weight:900!important;font-size:.78rem!important}
      @media(max-width:1000px){.footer-topics-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.footer-topic-card{min-height:auto}}
      @media(max-width:620px){.footer-topics-section{padding:1.5rem 0}.footer-topics-grid{grid-template-columns:1fr}.footer-topics-head h2{font-size:1.15rem}.footer-topic-card{padding:.9rem;border-radius:18px}.footer-topic-card a{font-size:.78rem}}
    `;
    const style = document.createElement('style');
    style.id = 'homepage-footer-topics-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function createFooterTopics(){
    if(!document.body.classList.contains('home-page')) return;
    if(document.querySelector('.footer-topics-section')) return;

    const topics = [
      {
        title:'📰 أخبار و SEO',
        links:[
          ['جديد الذكاء الاصطناعي 2026','/posts-ai/latest-ai-news-2026.html'],
          ['هل تقبل جوجل محتوى الذكاء الاصطناعي؟','/posts-ai/google-ai-content-acceptance.html'],
          ['هيكل محتوى SEO ناجح','/posts-ai/content-structure-seo.html'],
          ['محتوى AI وجودة الموقع','/posts-ai/ai-content-risk-or-opportunity.html']
        ],
        more:['كل المقالات','/ai-articles.html']
      },
      {
        title:'🧪 مراجعات الأدوات',
        links:[
          ['أفضل أدوات الكتابة بالذكاء الاصطناعي','/posts-ai/30-best-ai-writing-tools.html'],
          ['مراجعة ChatGPT','/posts-ai/chatgpt-review.html'],
          ['مراجعة Canva AI','/posts-ai/canva-ai-review.html'],
          ['أفضل أدوات التصميم بالذكاء الاصطناعي','/posts-ai/best-ai-design-tools.html']
        ],
        more:['قسم الأدوات','/best-ai-tools.html']
      },
      {
        title:'🎓 تعلم الذكاء الاصطناعي',
        links:[
          ['الطريق الكامل لتعلم AI','/posts-ai/complete-ai-learning-path.html'],
          ['ما هو الذكاء الاصطناعي؟','/posts-ai/what-is-ai-beginners.html'],
          ['Python للمبتدئين في AI','/posts-ai/python-for-ai-beginners.html'],
          ['دورات ذكاء اصطناعي مجانية','/posts-ai/free-ai-courses-arabic.html']
        ],
        more:['ابدأ التعلم','/learn-ai.html']
      },
      {
        title:'🧩 مصادر مفتوحة',
        links:[
          ['Mistral','/tools/mistral.html'],
          ['Ollama','/tools/ollama.html'],
          ['Llama 3','/tools/llama.html'],
          ['Hugging Face','/tools/huggingface.html']
        ],
        more:['كل المصادر المفتوحة','/open-source.html']
      },
      {
        title:'🌍 المواقع العربية',
        links:[
          ['مستقبل المواقع العربية مع AI','/posts-ai/future-arab-websites-ai.html'],
          ['هل سيستبدل AI المواقع العربية؟','/posts-ai/will-ai-replace-arabic-websites.html'],
          ['الذكاء الاصطناعي يطرق باب المواقع العربية','/posts-ai/ai-knocking-arabic-websites.html'],
          ['كيف تبني موقعًا كاملًا بالذكاء الاصطناعي؟','/posts-ai/build-website-with-ai-in-minutes.html']
        ],
        more:['مكتبة المقالات','/ai-articles.html']
      }
    ];

    const section = document.createElement('section');
    section.className = 'footer-topics-section';
    section.setAttribute('aria-label','مقالات منظمة حسب الموضوع');
    section.innerHTML = '<div class="container"><div class="footer-topics-head"><span>مقالات منظمة</span><h2>استكشف المقالات حسب الموضوع</h2><p>روابط مختصرة ومنظمة تساعد الزائر على الوصول بسرعة إلى أهم المقالات قبل مغادرة الصفحة.</p></div><div class="footer-topics-grid">'+
      topics.map(function(topic){
        return '<div class="footer-topic-card"><h3>'+topic.title+'</h3><ul>'+topic.links.map(function(link){return '<li><a href="'+link[1]+'">'+link[0]+'</a></li>';}).join('')+'</ul><a class="footer-topic-more" href="'+topic.more[1]+'">'+topic.more[0]+' →</a></div>';
      }).join('')+
      '</div></div>';

    const footer = document.querySelector('footer,.site-footer');
    if(footer && footer.parentNode){
      footer.parentNode.insertBefore(section, footer);
    } else {
      document.body.appendChild(section);
    }
  }

  function run(){ addStyle(); createFooterTopics(); }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, {once:true}); else run();
})();
