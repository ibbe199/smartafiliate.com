(function(){
  'use strict';

  function addStyle(){
    if(document.getElementById('mobile-menu-fix-style')) return;
    const css = `
      .mobile-menu-button,
      .menu-toggle{
        display:none;
      }
      @media(max-width:920px){
        .site-header .header-inner{
          display:flex!important;
          align-items:center!important;
          justify-content:space-between!important;
          gap:.65rem!important;
        }
        .site-header .logo{
          flex:0 0 auto!important;
        }
        .mobile-menu-button,
        .menu-toggle{
          display:inline-flex!important;
          align-items:center!important;
          justify-content:center!important;
          width:42px!important;
          height:42px!important;
          min-width:42px!important;
          min-height:42px!important;
          border-radius:14px!important;
          border:1px solid rgba(255,255,255,.20)!important;
          background:rgba(255,255,255,.12)!important;
          color:#fff!important;
          font-size:1.35rem!important;
          line-height:1!important;
          font-weight:900!important;
          cursor:pointer!important;
          position:relative!important;
          z-index:3000!important;
          pointer-events:auto!important;
        }
        .site-header .main-nav{
          display:none!important;
        }
        .site-header .main-nav.active,
        .site-header .main-nav.is-open{
          display:flex!important;
          position:fixed!important;
          top:88px!important;
          right:10px!important;
          left:10px!important;
          z-index:2999!important;
          flex-direction:column!important;
          gap:.45rem!important;
          padding:.75rem!important;
          border-radius:20px!important;
          background:rgba(7,20,38,.98)!important;
          box-shadow:0 18px 40px rgba(2,6,23,.32)!important;
          max-height:calc(100vh - 108px)!important;
          overflow-y:auto!important;
        }
        .site-header .main-nav.active a,
        .site-header .main-nav.is-open a{
          display:flex!important;
          width:100%!important;
          min-height:42px!important;
          align-items:center!important;
          justify-content:center!important;
          border-radius:14px!important;
          background:rgba(255,255,255,.07)!important;
          color:#fff!important;
          text-decoration:none!important;
        }
      }
    `;
    const style=document.createElement('style');
    style.id='mobile-menu-fix-style';
    style.textContent=css;
    document.head.appendChild(style);
  }

  function ensureMenuButton(){
    const header=document.querySelector('.site-header');
    if(!header) return;
    const inner=header.querySelector('.header-inner') || header;
    let nav=header.querySelector('.main-nav');
    if(!nav) return;

    let button=header.querySelector('.menu-toggle,.mobile-menu-button');
    if(!button){
      button=document.createElement('button');
      button.type='button';
      button.className='menu-toggle mobile-menu-button';
      button.setAttribute('aria-label','فتح القائمة');
      button.setAttribute('aria-expanded','false');
      button.innerHTML='☰';
      inner.appendChild(button);
    }else{
      button.classList.add('mobile-menu-button');
      button.type='button';
      if(!button.innerHTML.trim()) button.innerHTML='☰';
      button.setAttribute('aria-label','فتح القائمة');
    }

    if(!nav.id) nav.id='mainNav';
    button.setAttribute('aria-controls',nav.id);

    if(button.dataset.menuFixed==='true') return;
    button.dataset.menuFixed='true';
    button.addEventListener('click',function(e){
      e.preventDefault();
      e.stopPropagation();
      const open=nav.classList.toggle('active');
      nav.classList.toggle('is-open',open);
      button.setAttribute('aria-expanded',open?'true':'false');
      button.innerHTML=open?'×':'☰';
    });

    document.addEventListener('click',function(e){
      if(!header.contains(e.target) && nav.classList.contains('active')){
        nav.classList.remove('active','is-open');
        button.setAttribute('aria-expanded','false');
        button.innerHTML='☰';
      }
    });
  }

  function run(){addStyle();ensureMenuButton();}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run,{once:true}); else run();
})();