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
  function absLink(href){if(href.startsWith('http'))return href;return href.startsWith('/')?href:'/'+href;}
  function isContentPage(path){return path.startsWith('posts-ai/')||path.startsWith('articles/');}
  function isExternal(a){try{const u=new URL(a.href,location.origin);return u.hostname!==location.hostname&&!u.hostname.endsWith('smartafiliate.com');}catch(e){return false;}}
  function addStyle(){
    if(document.getElementById('smart-link-style'))return;
    const st=document.createElement('style');
    st.id='smart-link-style';
    st.textContent='.smart-link-actions{display:flex;gap:.6rem;flex-wrap:wrap;margin:1rem 0}.smart-read-icon{display:inline-flex!important;align-items:center;justify-content:center;gap:.35rem;min-height:38px;padding:.55rem .8rem;border-radius:999px;text-decoration:none!important;font-weight:900;border:1px solid #2563eb;background:#2563eb!important;color:#fff!important}.smart-related-links{margin:2rem auto;padding:1.2rem;border-radius:22px;background:#fff;border:1px solid #dbeafe;box-shadow:0 12px 30px rgba(15,23,42,.07)}.smart-related-links h2{margin:.2rem 0 1rem;color:#0b1f3a}.smart-related-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:.7rem}.smart-related-grid a{display:block;padding:.8rem;border-radius:16px;background:#f8fafc;border:1px solid #e2e8f0;color:#0b1f3a!important;text-decoration:none!important;font-weight:800}.external-link-mark::after{content:" ↗";font-weight:900;color:#1d4ed8}.tool-link.external-link-mark::after{content:""}@media(max-width:760px){.smart-related-links{margin:1.25rem .75rem}.smart-link-actions{padding:0 .75rem}}';
    document.head.appendChild(st);
  }
  function removeCardActionButtons(){
    document.querySelectorAll('.article-card .smart-card-actions').forEach(row=>row.remove());
    document.querySelectorAll('.article-card a.smart-external-icon,.article-card a.smart-read-icon').forEach(a=>a.remove());
  }
  function injectArticleLinks(){
    const current=norm();
    if(EXCLUDED_PAGES.has(current)||INDEX_PAGES.has(current)||!isContentPage(current))return;
    if(!document.querySelector('main')||document.querySelector('.smart-related-links'))return;
    const related=RELATED.filter(x=>x[0]!==current).slice(0,8);
    const box=document.createElement('section');
    box.className='smart-related-links container';
    box.innerHTML='<h2>روابط مقالات مرتبطة</h2><div class="smart-link-actions"><a class="smart-read-icon" href="'+absLink(current)+'">📖 قراءة المقال</a></div><div class="smart-related-grid">'+related.map(x=>'<a href="'+absLink(x[0])+'">📌 '+x[1]+'</a>').join('')+'</div>';
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
  function run(){addStyle();removeCardActionButtons();injectArticleLinks();fixExternalLinks();markToolLinks();setTimeout(()=>{removeCardActionButtons();fixExternalLinks();markToolLinks();},900);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();
