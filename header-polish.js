(function(){
  'use strict';

  function addHeaderPolish(){
    if(document.getElementById('header-polish-style')) return;
    const css = `
      html{font-size:16px;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
      body{font-family:"Segoe UI",Tahoma,Arial,sans-serif!important;line-height:1.85!important;color:#0f172a!important}
      h1,h2,h3,h4,.main-nav a,.logo-text,.btn-outline-light,.btn-primary-light,.tool-link{letter-spacing:-.015em;font-weight:800!important}
      p,li{font-weight:400;line-height:1.9}

      .site-header{
        background:rgba(7,20,38,.96)!important;
        backdrop-filter:blur(14px);
        border-bottom:1px solid rgba(255,255,255,.08)!important;
        box-shadow:0 8px 24px rgba(2,6,23,.12)!important;
      }
      .header-inner{
        min-height:62px!important;
        padding:.55rem 0!important;
        gap:.75rem!important;
        display:flex!important;
        align-items:center!important;
        justify-content:space-between!important;
      }
      .logo{direction:ltr;align-items:center;gap:0!important;min-width:max-content}
      .logo-text{font-size:1.05rem!important;line-height:1!important}
      .logo-text-light{color:#fff!important}.logo-text-accent{color:#fb923c!important}
      .main-nav{gap:.28rem!important;justify-content:flex-start!important;overflow-x:auto;scrollbar-width:none;white-space:nowrap}
      .main-nav::-webkit-scrollbar{display:none}
      .main-nav a{font-size:.82rem!important;padding:.5rem .72rem!important;border-radius:999px;color:rgba(255,255,255,.84)!important;text-decoration:none!important;white-space:nowrap}
      .main-nav a:hover{background:rgba(255,255,255,.09)!important;color:#fff!important;text-decoration:none!important}
      .header-actions{gap:.45rem!important}
      .btn-outline-light,.btn-primary-light{font-size:.78rem!important;padding:.52rem .8rem!important;border-radius:999px!important;white-space:nowrap}
      .menu-toggle{width:38px!important;height:38px!important;border-radius:13px!important;background:rgba(255,255,255,.08)!important}

      @media(max-width:920px){
        .header-actions{display:none!important}
        .main-nav{display:none!important}
        .menu-toggle{display:inline-flex!important}
        .main-nav.active{display:flex!important;top:64px!important;right:10px!important;left:10px!important;padding:.65rem!important;border-radius:18px!important;background:#071426!important;box-shadow:0 18px 40px rgba(2,6,23,.28)!important;max-height:calc(100vh - 84px)!important;overflow-y:auto!important}
        .main-nav.active a{width:100%;font-size:.9rem!important;text-align:center;padding:.82rem 1rem!important;background:rgba(255,255,255,.06)!important;margin:.12rem 0!important}
      }
      @media(min-width:921px){.menu-toggle{display:none!important}}
      @media(max-width:760px){
        body{font-size:15px!important}
        .container{width:min(100% - 18px,1200px)!important}
        .site-header{position:sticky!important;top:0!important;z-index:1200!important}
        .header-inner{min-height:52px!important;padding:.35rem 0!important}
        .logo-text{font-size:.92rem!important}
        .page-hero h1,.hero h1{font-size:1.45rem!important;line-height:1.55!important}
        .page-hero p,.hero p{font-size:.86rem!important;line-height:1.9!important}
        .section-header h2{font-size:1.18rem!important;line-height:1.55!important}
        .card h3,.tool-card h3,.article-card h3{font-size:1rem!important;line-height:1.55!important}
      }
    `;
    const style = document.createElement('style');
    style.id = 'header-polish-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addHeaderPolish, {once:true});
  else addHeaderPolish();
})();
