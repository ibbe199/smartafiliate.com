(function(){
  'use strict';

  function addStyle(){
    if(document.getElementById('button-polish-style')) return;
    const css = `
      a[href],button{touch-action:manipulation}
      .btn,.review-btn-primary,.review-btn-secondary,.sa-btn-primary,.sa-btn-secondary,.tool-link,.read-more,.profit-btn,.profit-link,.long-article-links a,.footer-topic-more{
        position:relative!important;
        z-index:5!important;
        pointer-events:auto!important;
        cursor:pointer!important;
        transition:transform .18s ease,box-shadow .18s ease,background .18s ease,border-color .18s ease!important;
      }
      .btn:hover,.review-btn-primary:hover,.review-btn-secondary:hover,.sa-btn-primary:hover,.sa-btn-secondary:hover,.tool-link:hover,.read-more:hover,.profit-btn:hover,.profit-link:hover,.long-article-links a:hover{
        transform:translateY(-2px)!important;
        text-decoration:none!important;
      }
      .btn,.review-btn-primary,.sa-btn-primary,.tool-link,.read-more,.profit-btn,.profit-link.internal,.long-article-links a:first-child{
        background:linear-gradient(135deg,#16a34a,#22c55e)!important;
        color:#fff!important;
        border:1px solid rgba(22,163,74,.28)!important;
        box-shadow:0 10px 22px rgba(22,163,74,.22)!important;
      }
      .review-btn-secondary,.sa-btn-secondary,.profit-link.external,.profit-link.secondary,.long-article-links a:last-child{
        background:#fff!important;
        color:#0b1f3a!important;
        border:1px solid #dbeafe!important;
        box-shadow:0 8px 18px rgba(15,23,42,.07)!important;
      }
      .article .btn,.body .btn,.article-body .review-btn-primary,.article-body .review-btn-secondary{
        display:inline-flex!important;
        align-items:center!important;
        justify-content:center!important;
        min-height:42px!important;
        padding:.65rem 1rem!important;
        border-radius:999px!important;
        font-size:.88rem!important;
        font-weight:950!important;
        line-height:1.2!important;
        text-decoration:none!important;
        margin-top:.55rem!important;
      }
      .review-actions,.cta-row,.unified-actions,.profit-actions,.long-article-links{
        display:flex!important;
        flex-wrap:wrap!important;
        gap:.55rem!important;
        align-items:center!important;
        justify-content:flex-start!important;
      }
      .tool-card .unified-actions,.article-card .unified-actions{justify-content:center!important}
      .footer-topic-card a{
        border-radius:10px!important;
        padding:.25rem .35rem!important;
        transition:background .18s ease,color .18s ease,transform .18s ease!important;
      }
      .footer-topic-card a:hover{
        background:rgba(251,146,60,.10)!important;
        transform:translateX(-2px)!important;
      }
      .main-nav a,.header-actions a{pointer-events:auto!important}
      @media(max-width:700px){
        .review-actions,.cta-row,.unified-actions,.profit-actions,.long-article-links{justify-content:center!important}
        .article .btn,.body .btn,.article-body .review-btn-primary,.article-body .review-btn-secondary,.sa-btn-primary,.sa-btn-secondary{width:100%!important;max-width:320px!important}
      }
    `;
    const style=document.createElement('style');
    style.id='button-polish-style';
    style.textContent=css;
    document.head.appendChild(style);
  }

  function normalizeButtonText(){
    document.querySelectorAll('a[href]').forEach(function(a){
      if(a.closest('.main-nav,.footer-topic-card')) return;
      const text=(a.textContent||'').trim();
      if(!text) return;
      if(a.classList.contains('sa-btn-primary') && !/افتح|Open|اقرأ|ابدأ/.test(text)) a.textContent='Open / افتح';
      if(a.classList.contains('sa-btn-secondary') && !/الرسمي|Official/.test(text)) a.textContent='Official / الرسمي';
      if(a.target==='_blank' && !/↗/.test(a.textContent) && !a.classList.contains('share-btn')) a.textContent=a.textContent.trim()+' ↗';
    });
  }

  function protectLinks(){
    document.querySelectorAll('a[href]').forEach(function(a){
      const href=a.getAttribute('href');
      if(!href) return;
      a.style.pointerEvents='auto';
      if(href.startsWith('http')){
        a.target=a.target||'_blank';
        const rel=(a.getAttribute('rel')||'').split(/\s+/).filter(Boolean);
        ['noopener','noreferrer'].forEach(function(x){if(!rel.includes(x)) rel.push(x);});
        a.setAttribute('rel',rel.join(' '));
      }
    });
  }

  function run(){addStyle();protectLinks();normalizeButtonText();}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run,{once:true}); else run();
})();