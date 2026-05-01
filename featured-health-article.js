(function(){
  'use strict';
  const ARTICLE_URL='posts-ai/ai-health-medicine-research.html';
  const CARD='<article class="article-card featured-health-ai-card"><a href="'+ARTICLE_URL+'"><div class="article-image"><img src="assets/images/articles/ai-general.svg" alt="الذكاء الاصطناعي في الصحة وصناعة الأدوية والبحث العلمي" loading="lazy" decoding="async" width="640" height="360"></div><div class="article-content"><span class="article-category">الصحة والبحث العلمي</span><h3>الذكاء الاصطناعي في الصحة وصناعة الأدوية والبحث العلمي</h3><p class="article-excerpt">مراجعة علمية عربية شاملة للتطبيقات والتحديات والآفاق المستقبلية مع مراجع وروابط مباشرة.</p><div class="article-meta"><span>📅 2026-05-01</span><span class="read-more">اقرأ المقال →</span></div></div></a></article>';
  const VALID=new Set(['ai-articles.html','articles.html','posts-ai.html']);
  function page(){return location.pathname.toLowerCase().split('/').pop()||'index.html';}
  function addCard(){
    if(!VALID.has(page()))return;
    const grid=document.querySelector('.articles-grid');
    if(!grid||grid.querySelector('a[href="'+ARTICLE_URL+'"]'))return;
    grid.insertAdjacentHTML('afterbegin',CARD);
    const h=document.querySelector('.section-header h2');
    if(h&&!h.dataset.healthArticleCounted){
      h.dataset.healthArticleCounted='1';
      const m=h.textContent.match(/\((\d+)\)/);
      if(m)h.textContent=h.textContent.replace(/\(\d+\)/,'('+(parseInt(m[1],10)+1)+')');
    }
  }
  function start(){
    addCard();
    let t=0;
    const timer=setInterval(function(){addCard();if(++t>12)clearInterval(timer);},500);
    const grid=document.querySelector('.articles-grid');
    if(grid&&'MutationObserver' in window){
      new MutationObserver(addCard).observe(grid,{childList:true});
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
