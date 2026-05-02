(function(){
  const EXCLUDED_PAGES=new Set(['contact.html','about.html','privacy.html','privacy-policy.html','cookie-policy.html','terms.html','disclosure.html','sitemap.html']);
  const INDEX_PAGES=new Set(['articles.html','ai-articles.html','posts-ai.html','index.html']);
  const RELATED=[
    ['articles.html','كل المقالات','index'],
    ['ai-articles.html','مكتبة AI','index'],
    ['best-ai-tools.html','أفضل أدوات AI','tools'],
    ['ai-tools-comparison.html','مقارنة أدوات AI','tools'],
    ['learn-ai.html','تعلم AI','learn'],
    ['open-source.html','أدوات مفتوحة المصدر','open'],
    ['posts-ai/chatgpt-review.html','مراجعة ChatGPT','tools'],
    ['posts-ai/ai-affiliate-tools.html','أفضل أدوات AI للتسويق بالعمولة','affiliate'],
    ['posts-ai/what-is-ai-beginners.html','ما هو الذكاء الاصطناعي؟','learn'],
    ['posts-ai/ollama-guide.html','دليل Ollama','open'],
    ['posts-ai/n8n-guide.html','دليل n8n','automation'],
    ['posts-ai/content-structure-seo.html','أفضل هيكل محتوى SEO','seo']
  ];
  function norm(){let p=location.pathname.replace(/^\//,'');return p||'index.html';}
  function google(q){return 'https://www.google.com/search?q='+encodeURIComponent(q+' site:smartafiliate.com');}
  function absLink(href){if(href.startsWith('http'))return href;return href.startsWith('/')?href:'/'+href;}
  function isContentPage(path){return path.startsWith('posts-ai/')||path.startsWith('articles/');}
  function pageTitle(){return (document.querySelector('h1')?.textContent||document.title||'smartafiliate').trim();}
  function isExternal(a){try{const u=new URL(a.href,location.origin);return u.hostname!==location.hostname&&!u.hostname.endsWith('smartafiliate.com');}catch(e){return false;}}
  function addStyle(){
    if(document.getElementById('smart-link-style'))return;
    const st=document.createElement('style');
    st.id='smart-link-style';
    st.textContent='.smart-link-actions{display:flex;gap:.6rem;flex-wrap:wrap;margin:1rem 0}.smart-read-icon,.smart-external-icon{display:inline-flex!important;align-items:center;justify-content:center;gap:.35rem;min-height:38px;padding:.55rem .8rem;border-radius:999px;text-decoration:none!important;font-weight:900;border:1px solid #dbeafe}.smart-read-icon{background:#2563eb!important;color:#fff!important;border-color:#2563eb!important}.smart-external-icon{background:#0b1f3a!important;color:#fff!important;border-color:#0b1f3a!important}.smart-related-links{margin:2rem auto;padding:1.2rem;border-radius:22px;background:#fff;border:1px solid #dbeafe;box-shadow:0 12px 30px rgba(15,23,42,.07)}.smart-related-links h2{margin:.2rem 0 1rem;color:#0b1f3a}.smart-related-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:.7rem}.smart-related-grid a{display:block;padding:.8rem;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;color:#0b1f3a!important;text-decoration:none!important;font-weight:800}.smart-external-box{margin-top:1rem;padding:1rem;border-radius:18px;background:#eff6ff;border:1px solid #bfdbfe}.smart-external-box a{font-weight:900;color:#1d4ed8!important}.article-card .smart-card-actions{display:flex;gap:.45rem;flex-wrap:wrap;margin-top:.75rem}.article-card .smart-card-actions a{font-size:.82rem;min-height:34px;padding:.45rem .65rem}.external-link-mark::after{content:" ↗";font-weight:900;color:#1d4ed8}.tool-link.external-link-mark::after,.smart-external-icon::after{content:""}@media(max-width:760px){.smart-related-links{margin:1.25rem .75rem}.smart-link-actions{padding:0 .75rem}}';
    document.head.appendChild(st);
  }
  function enhanceCards(){
    document.querySelectorAll('.article-card').forEach(card=>{
      if(card.dataset.smartLinked==='1')return;
      if(card.querySelector('.smart-card-actions')){card.dataset.smartLinked='1';return;}
      const a=card.querySelector('a[href]');if(!a)return;
      card.dataset.smartLinked='1';
      const href=a.getAttribute('href');
      const title=(card.querySelector('h3')?.textContent||a.textContent||'المقال').trim();
      const target=card.querySelector('.article-content')||card;
      const row=document.createElement('div');
      row.className='smart-card-actions';
      row.innerHTML='<a class="smart-read-icon" href="'+href+'" aria-label="قراءة المقال">📖 قراءة</a><a class="smart-external-icon" href="'+google(title)+'" target="_blank" rel="noopener noreferrer nofollow" aria-label="رابط خارجي عبر Google">↗ Google</a>';
      target.appendChild(row);
    });
  }
  function injectArticleLinks(){
    const current=norm();
    if(EXCLUDED_PAGES.has(current)||INDEX_PAGES.has(current)||!isContentPage(current))return;
    if(!document.querySelector('main')||document.querySelector('.smart-related-links'))return;
    const title=pageTitle();
    const related=RELATED.filter(x=>x[0]!==current).slice(0,8);
    const box=document.createElement('section');
    box.className='smart-related-links container';
    box.innerHTML='<h2>روابط مقالات مرتبطة</h2><div class="smart-link-actions"><a class="smart-read-icon" href="'+absLink(current)+'">📖 قراءة المقال</a><a class="smart-external-icon" href="'+google(title)+'" target="_blank" rel="noopener noreferrer nofollow">↗ بحث Google</a></div><div class="smart-related-grid">'+related.map(x=>'<a href="'+absLink(x[0])+'">📌 '+x[1]+'</a>').join('')+'</div><div class="smart-external-box">رابط خارجي: <a href="'+google(title)+'" target="_blank" rel="noopener noreferrer nofollow">↗ نتائج Google للموضوع</a></div>';
    document.querySelector('main').appendChild(box);
  }
  function fixExternalLinks(){
    document.querySelectorAll('a[href]').forEach(a=>{
      const href=a.getAttribute('href')||'';
      if(href.startsWith('#')||href.startsWith('mailto:')||href.startsWith('tel:'))return;
      if(isExternal(a)){
        a.target='_blank';
        a.rel='noopener noreferrer nofollow';
        a.classList.add('external-link-mark');
        if(!a.getAttribute('aria-label'))a.setAttribute('aria-label',(a.textContent||'رابط خارجي').trim()+' - يفتح في نافذة جديدة');
      }
    });
  }
  function markToolLinks(){
    document.querySelectorAll('.tool-link,a[href*="openai.com"],a[href*="canva.com"],a[href*="jasper"],a[href*="midjourney"],a[href*="copy.ai"],a[href*="writesonic"],a[href*="github.com"],a[href*="huggingface.co"]').forEach(a=>{
      if(isExternal(a)){
        a.classList.add('external-link-mark');
        if(!/^↗/.test(a.textContent.trim()))a.textContent='↗ '+a.textContent.trim();
      }
    });
  }
  function run(){addStyle();enhanceCards();injectArticleLinks();fixExternalLinks();markToolLinks();setTimeout(()=>{enhanceCards();fixExternalLinks();markToolLinks();},900);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();
