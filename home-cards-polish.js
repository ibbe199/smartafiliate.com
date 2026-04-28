(function(){
  'use strict';

  function addStyle(){
    if(document.getElementById('home-cards-polish-style')) return;
    const css = `
      .home-page .page-hero .decision-grid{
        gap:.75rem!important;
        margin-top:1rem!important;
        align-items:stretch!important;
      }
      .home-page .page-hero .decision-card{
        min-height:176px!important;
        height:176px!important;
        padding:1rem!important;
        border-radius:20px!important;
        background:#fff!important;
        color:#0f172a!important;
        display:flex!important;
        flex-direction:column!important;
        justify-content:space-between!important;
        overflow:hidden!important;
      }
      .home-page .page-hero .decision-icon{
        font-size:1.35rem!important;
        margin-bottom:.2rem!important;
        line-height:1!important;
      }
      .home-page .page-hero .decision-en{
        display:block!important;
        direction:ltr!important;
        color:#ea580c!important;
        font-size:.78rem!important;
        font-weight:900!important;
        letter-spacing:.025em!important;
        line-height:1.2!important;
        margin-bottom:.18rem!important;
      }
      .home-page .page-hero .decision-kicker{
        display:block!important;
        background:transparent!important;
        color:#c2410c!important;
        padding:0!important;
        margin:0 0 .15rem!important;
        font-size:.72rem!important;
        font-weight:800!important;
        line-height:1.3!important;
      }
      .home-page .page-hero .decision-title{
        font-size:.98rem!important;
        line-height:1.45!important;
        margin:.08rem 0!important;
        color:#0b1f3a!important;
        font-weight:950!important;
      }
      .home-page .page-hero .decision-card p:not(.decision-title){
        display:none!important;
      }
      .home-page .page-hero .decision-benefits{
        display:none!important;
      }
      .home-page .page-hero .decision-card .read-more,
      .home-page .page-hero .decision-card .decision-btn{
        display:inline-flex!important;
        align-items:center!important;
        justify-content:center!important;
        align-self:flex-start!important;
        min-height:34px!important;
        padding:.45rem .85rem!important;
        border-radius:999px!important;
        background:#0b1f3a!important;
        color:#fff!important;
        font-size:.76rem!important;
        font-weight:900!important;
        text-decoration:none!important;
        margin-top:.45rem!important;
        pointer-events:auto!important;
      }
      .home-page .page-hero .decision-card:nth-child(2) .read-more,
      .home-page .page-hero .decision-card:nth-child(2) .decision-btn{
        background:#1d4ed8!important;
      }
      .home-page .page-hero .decision-card:nth-child(3) .read-more,
      .home-page .page-hero .decision-card:nth-child(3) .decision-btn{
        background:#ea580c!important;
      }
      @media(max-width:760px){
        .home-page .page-hero .decision-card{
          min-width:72%!important;
          height:158px!important;
          min-height:158px!important;
          padding:.85rem!important;
        }
        .home-page .page-hero .decision-en{font-size:.72rem!important}
        .home-page .page-hero .decision-title{font-size:.9rem!important}
      }
    `;
    const style = document.createElement('style');
    style.id = 'home-cards-polish-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function fixDecisionCards(){
    if(!document.body.classList.contains('home-page')) return;
    const cards = document.querySelectorAll('.page-hero .decision-card');
    if(!cards.length) return;

    const labels = [
      ['Choose the Best AI Tool','اختر أفضل أداة ذكاء اصطناعي','ابدأ الآن →'],
      ['Explore the AI Library','استكشف مكتبة الذكاء الاصطناعي','تصفح المقالات →'],
      ['Learn AI from Scratch','ابدأ تعلم الذكاء الاصطناعي من الصفر','ابدأ التعلم →']
    ];

    cards.forEach(function(card, index){
      const data = labels[index] || labels[0];
      if(!card.querySelector('.decision-en')){
        const en = document.createElement('span');
        en.className = 'decision-en';
        en.textContent = data[0];
        const icon = card.querySelector('.decision-icon');
        if(icon) icon.insertAdjacentElement('afterend', en);
        else card.insertBefore(en, card.firstChild);
      }

      const title = card.querySelector('.decision-title');
      if(title) title.textContent = data[1];

      let btn = card.querySelector('a.read-more, a.decision-btn, a.tool-link');
      if(btn){
        btn.textContent = data[2];
        btn.classList.add('decision-btn');
        btn.style.display = '';
        btn.style.pointerEvents = 'auto';
      }
    });
  }

  function run(){
    addStyle();
    fixDecisionCards();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, {once:true});
  else run();
})();
