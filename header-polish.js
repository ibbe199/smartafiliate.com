(function(){
  'use strict';

  function applyBilingualHeader(){
    const header = document.querySelector('.site-header');
    if(!header) return;

    const logo = header.querySelector('.logo');
    if(logo){
      logo.innerHTML = '<span class="logo-text logo-text-light">Smart</span><span class="logo-text logo-text-accent">afiliate</span>';
      logo.setAttribute('aria-label','Smartafiliate');
    }

    const navMap = {
      'الرئيسية': ['Home','الرئيسية'],
      'أفضل أدوات AI': ['AI Tools','أدوات الذكاء الاصطناعي'],
      'أفضل أدوات الذكاء الاصطناعي': ['AI Tools','أدوات الذكاء الاصطناعي'],
      'مكتبة AI': ['AI Library','مكتبة الذكاء الاصطناعي'],
      'مكتبة الذكاء الاصطناعي': ['AI Library','مكتبة الذكاء الاصطناعي'],
      'تعلم AI': ['Learn AI','تعلم الذكاء الاصطناعي'],
      'تعلم الذكاء الاصطناعي': ['Learn AI','تعلم الذكاء الاصطناعي'],
      'أدوات مفتوحة المصدر': ['Open Source','مصادر مفتوحة'],
      'المقالات': ['Articles','المقالات'],
      'جميع المقالات': ['All Posts','كل المقالات'],
      'من نحن': ['About','من نحن'],
      'تواصل': ['Contact','تواصل']
    };

    header.querySelectorAll('.main-nav a').forEach(function(a){
      const raw = (a.textContent || '').replace(/\s+/g,' ').trim();
      const pair = navMap[raw];
      if(!pair || a.dataset.bilingualDone === 'true') return;
      a.innerHTML = '<span class="nav-en">'+pair[0]+'</span><span class="nav-ar">'+pair[1]+'</span>';
      a.dataset.bilingualDone = 'true';
      a.setAttribute('aria-label', pair[0] + ' - ' + pair[1]);
    });

    header.querySelectorAll('.header-actions a').forEach(function(a){
      const raw = (a.textContent || '').replace(/\s+/g,' ').trim();
      if(raw.includes('مكتبة') || raw.includes('AI Library')) a.textContent = 'AI Library';
      if(raw.includes('أفضل') || raw.includes('AI Tools')) a.textContent = 'AI Tools';
    });

    const logos = header.querySelectorAll('.logo');
    logos.forEach(function(item, index){ if(index > 0) item.style.display = 'none'; });
  }

  function addHeaderPolish(){
    if(document.getElementById('header-polish-style')) return;
    const css = `
      html{font-size:16px;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
      body{font-family:"Segoe UI",Tahoma,Arial,sans-serif!important;line-height:1.85!important;color:#0f172a!important}
      h1,h2,h3,h4,.main-nav a,.logo-text,.btn-outline-light,.btn-primary-light,.tool-link{letter-spacing:-.015em;font-weight:800!important}
      p,li{font-weight:400;line-height:1.9}

      .site-header{background:rgba(7,20,38,.96)!important;backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,.08)!important;box-shadow:0 8px 24px rgba(2,6,23,.12)!important}
      .header-inner{min-height:64px!important;padding:.5rem 0!important;gap:.65rem!important;display:flex!important;align-items:center!important;justify-content:space-between!important}
      .logo{direction:ltr!important;align-items:center!important;gap:0!important;min-width:max-content!important;flex:0 0 auto!important}
      .logo-text{font-size:1.06rem!important;line-height:1!important;font-weight:900!important}.logo-text-light{color:#fff!important}.logo-text-accent{color:#fb923c!important}
      .main-nav{gap:.22rem!important;justify-content:center!important;overflow-x:auto;scrollbar-width:none;white-space:nowrap;flex:1 1 auto!important;min-width:0!important}
      .main-nav::-webkit-scrollbar{display:none}
      .main-nav a{display:inline-flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:.08rem!important;min-width:max-content!important;font-size:.72rem!important;padding:.45rem .62rem!important;border-radius:999px;color:rgba(255,255,255,.84)!important;text-decoration:none!important;white-space:nowrap;line-height:1.1!important}
      .main-nav a:hover{background:rgba(255,255,255,.09)!important;color:#fff!important;text-decoration:none!important}
      .nav-en{font-size:.76rem!important;font-weight:900!important;color:#fff!important;letter-spacing:.01em!important;direction:ltr!important}
      .nav-ar{font-size:.62rem!important;font-weight:700!important;color:rgba(255,255,255,.62)!important;direction:rtl!important}
      .header-actions{gap:.42rem!important;flex:0 0 auto!important}
      .btn-outline-light,.btn-primary-light{font-size:.76rem!important;padding:.5rem .76rem!important;border-radius:999px!important;white-space:nowrap}
      .menu-toggle{width:38px!important;height:38px!important;border-radius:13px!important;background:rgba(255,255,255,.08)!important}

      @media(max-width:1100px){.main-nav a{padding:.42rem .48rem!important}.nav-en{font-size:.7rem!important}.nav-ar{font-size:.58rem!important}.header-actions{display:none!important}}
      @media(max-width:920px){.main-nav{display:none!important}.menu-toggle{display:inline-flex!important}.main-nav.active{display:flex!important;top:64px!important;right:10px!important;left:10px!important;padding:.65rem!important;border-radius:18px!important;background:#071426!important;box-shadow:0 18px 40px rgba(2,6,23,.28)!important;max-height:calc(100vh - 84px)!important;overflow-y:auto!important}.main-nav.active a{width:100%!important;font-size:.9rem!important;text-align:center!important;padding:.82rem 1rem!important;background:rgba(255,255,255,.06)!important;margin:.12rem 0!important}.main-nav.active .nav-en{font-size:.9rem!important}.main-nav.active .nav-ar{font-size:.72rem!important}}
      @media(min-width:921px){.menu-toggle{display:none!important}}
      @media(max-width:760px){body{font-size:15px!important}.container{width:min(100% - 18px,1200px)!important}.site-header{position:sticky!important;top:0!important;z-index:1200!important}.header-inner{min-height:52px!important;padding:.35rem 0!important}.logo-text{font-size:.92rem!important}.page-hero h1,.hero h1{font-size:1.45rem!important;line-height:1.55!important}.page-hero p,.hero p{font-size:.86rem!important;line-height:1.9!important}.section-header h2{font-size:1.18rem!important;line-height:1.55!important}.card h3,.tool-card h3,.article-card h3{font-size:1rem!important;line-height:1.55!important}}
    `;
    const style = document.createElement('style');
    style.id = 'header-polish-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function run(){ addHeaderPolish(); applyBilingualHeader(); }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, {once:true});
  else run();
})();
