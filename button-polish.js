(function(){
  'use strict';

  function addStyle(){
    if(document.getElementById('button-polish-style')) return;
    const css = `
      a[href],button{touch-action:manipulation!important}

      /* كل أزرار المقالات والأدوات */
      .btn,.btn-primary,.btn-secondary,
      .cta-primary,.cta-secondary,
      .review-btn-primary,.review-btn-secondary,
      .sa-btn,.sa-btn-primary,.sa-btn-secondary,
      .tool-link,.read-more,.read-more-btn,
      .profit-btn,.profit-link,
      .marketing-btn,.marketing-secondary,
      .long-article-links a,
      .article-meta a,
      .article-card .read-more,
      .tool-card a[href],
      .article-card a.read-more,
      .body a.btn,
      .article-body a.review-btn-primary,
      .article-body a.review-btn-secondary{
        display:inline-flex!important;
        align-items:center!important;
        justify-content:center!important;
        min-height:40px!important;
        padding:.62rem 1rem!important;
        border-radius:999px!important;
        font-size:.84rem!important;
        font-weight:950!important;
        line-height:1.2!important;
        text-decoration:none!important;
        border:1px solid transparent!important;
        position:relative!important;
        z-index:20!important;
        pointer-events:auto!important;
        cursor:pointer!important;
        white-space:nowrap!important;
        transition:transform .18s ease,box-shadow .18s ease,background .18s ease,border-color .18s ease!important;
      }

      .btn:hover,.btn-primary:hover,.btn-secondary:hover,
      .cta-primary:hover,.cta-secondary:hover,
      .review-btn-primary:hover,.review-btn-secondary:hover,
      .sa-btn-primary:hover,.sa-btn-secondary:hover,
      .tool-link:hover,.read-more:hover,.read-more-btn:hover,
      .profit-link:hover,.marketing-btn:hover,.marketing-secondary:hover,
      .article-meta a:hover,.tool-card a[href]:hover{
        transform:translateY(-2px)!important;
        text-decoration:none!important;
      }

      /* داخلي / قراءة / فتح */
      .btn,.btn-primary,
      .cta-primary,
      .review-btn-primary,
      .sa-btn-primary,
      .tool-link,
      .read-more,
      .read-more-btn,
      .profit-link.internal,
      .marketing-btn,
      .article-card .read-more,
      .tool-card a[href]:first-of-type,
      .long-article-links a:first-child{
        background:linear-gradient(135deg,#16a34a,#22c55e)!important;
        color:#fff!important;
        border-color:rgba(22,163,74,.28)!important;
        box-shadow:0 10px 22px rgba(22,163,74,.22)!important;
      }

      /* خارجي / ثانوي */
      .btn-secondary,
      .cta-secondary,
      .review-btn-secondary,
      .sa-btn-secondary,
      .profit-link.external,
      .profit-link.secondary,
      .marketing-secondary,
      .long-article-links a:last-child{
        background:#fff!important;
        color:#0b1f3a!important;
        border-color:#dbeafe!important;
        box-shadow:0 8px 18px rgba(15,23,42,.07)!important;
      }

      .review-actions,.cta-actions,.cta-row,.unified-actions,.profit-actions,.long-article-links,.article-meta{
        display:flex!important;
        flex-wrap:wrap!important;
        gap:.55rem!important;
        align-items:center!important;
      }

      .tool-card .unified-actions,
      .article-card .unified-actions,
      .tool-card,
      .article-card{
        position:relative!important;
      }

      .tool-card .unified-actions,
      .article-card .unified-actions{
        justify-content:center!important;
        margin-top:auto!important;
        width:100%!important;
      }

      .tool-card a[href],.article-card a[href]{
        pointer-events:auto!important;
      }

      .footer-topic-card a{
        border-radius:10px!important;
        padding:.25rem .35rem!important;
        pointer-events:auto!important;
      }
      .footer-topic-card a:hover{
        background:rgba(251,146,60,.10)!important;
        transform:translateX(-2px)!important;
      }

      .main-nav a,.header-actions a,.mini-links a{
        pointer-events:auto!important;
      }

      @media(max-width:700px){
        .review-actions,.cta-actions,.cta-row,.unified-actions,.profit-actions,.long-article-links,.article-meta{
          justify-content:center!important;
        }
        .article .btn,.body .btn,.article-body .review-btn-primary,.article-body .review-btn-secondary,
        .cta-primary,.cta-secondary,.sa-btn-primary,.sa-btn-secondary,.tool-link,.read-more,.read-more-btn{
          width:100%!important;
          max-width:340px!important;
          white-space:normal!important;
          text-align:center!important;
        }
      }
    `;
    const style=document.createElement('style');
    style.id='button-polish-style';
    style.textContent=css;
    document.head.appendChild(style);
  }

  function normalizeButtonText(){
    document.querySelectorAll('a[href]').forEach(function(a){
      if(a.closest('.main-nav,.footer-topic-card,.mini-links')) return;
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