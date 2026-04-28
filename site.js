(function () {
  const BRAND = 'Smartafiliate';
  const AFFILIATE_LINK = 'https://9e507bq9nsow4n57d9tap0ohpd.hop.clickbank.net';
  const AFFILIATE_LINK_EXTRA = 'https://f21555c3kvj-1zc-zxjkslrl96.hop.clickbank.net';

  (function injectCriticalCss(){
    if(document.getElementById('critical-speed-css')) return;
    const css='.site-header{position:sticky;top:0;z-index:1000}.header-inner{padding:.55rem 0!important}.page-hero{padding:1.65rem 0!important}.page-hero h1{font-size:clamp(1.65rem,6vw,2.6rem)!important;margin:.35rem 0!important}.page-hero p{font-size:.95rem!important}.hub-cta,.quick-grid{display:none!important}.section{padding:2rem 0!important}.articles-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}.article-card,.post-card{content-visibility:auto;contain-intrinsic-size:1px 330px}.article-image,.post-image{height:96px!important;background:linear-gradient(135deg,#071426,#12305a 65%,#ea580c)!important;display:flex!important;align-items:center!important;justify-content:center!important;text-align:center!important;color:#fff!important;padding:.8rem!important}.article-image img,.post-image img{display:none!important}.article-image:before,.post-image:before{content:attr(data-title);font-weight:900;font-size:.9rem;line-height:1.45}.article-content{padding:1rem!important}.article-card h3{font-size:1rem!important;line-height:1.5!important}.article-excerpt{font-size:.82rem!important;line-height:1.7!important}.site-footer{content-visibility:auto;contain-intrinsic-size:1px 300px}@media(max-width:700px){.header-actions{display:none!important}.main-nav{display:none}.menu-toggle{display:flex!important}.container{width:min(100% - 1rem,1200px)!important}.articles-grid{grid-template-columns:1fr!important}.article-image,.post-image{height:82px!important}}';
    const style=document.createElement('style');style.id='critical-speed-css';style.textContent=css;document.head.appendChild(style);
  })();

  function injectAppExperienceCss(){
    if(document.getElementById('smart-app-experience-css')) return;
    const css = `
      :root{--app-navy:#071426;--app-navy-2:#0e2445;--app-orange:#ea580c;--app-bg:#eef5ff;--app-card:#ffffff;--app-text:#0f172a;--app-muted:#64748b;--app-line:#dbeafe;--app-shadow:0 18px 45px rgba(15,23,42,.14)}
      .site-header{position:sticky;top:0;z-index:1100;background:rgba(7,18,36,.94)!important;backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-bottom:1px solid rgba(255,255,255,.08);box-shadow:0 10px 28px rgba(2,6,23,.18)}
      .site-header.header-scrolled{box-shadow:0 18px 42px rgba(2,6,23,.25)}
      .article-card,.post-card,.tool-card,.decision-card,.directory-card,.fast-feature-card{transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease!important}
      .article-card:active,.post-card:active,.tool-card:active,.decision-card:active,.directory-card:active,.fast-feature-card:active,a:active,button:active{transform:scale(.98)}
      .smart-app-bottom-nav{display:none}
      @media(max-width:760px){
        html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
        body{background:var(--app-bg)!important;padding-bottom:calc(94px + env(safe-area-inset-bottom))!important;overflow-x:hidden}
        .container{width:min(100% - 20px,1120px)!important}
        .site-header .header-inner{min-height:56px!important;padding:.45rem 0!important}
        .logo{font-size:1rem!important;letter-spacing:-.02em}.header-actions{display:none!important}.menu-toggle{display:flex!important;width:36px!important;height:36px!important;border-radius:13px!important;background:rgba(255,255,255,.08)!important;border:1px solid rgba(255,255,255,.12)!important;color:#fff!important}
        .main-nav{border-radius:20px!important;margin-top:.55rem!important;box-shadow:var(--app-shadow)!important}.main-nav.active{display:grid!important;gap:.35rem!important;background:#fff!important;padding:.7rem!important}.main-nav.active a{border-radius:14px!important;padding:.75rem!important;color:var(--app-text)!important;background:#f8fafc!important}
        main{overflow:hidden}.page-hero{background:linear-gradient(180deg,var(--app-navy) 0%,var(--app-navy-2) 58%,var(--app-bg) 58%,var(--app-bg) 100%)!important;color:#fff!important;padding:1rem 0 .8rem!important}.page-hero>.container{background:rgba(255,255,255,.06)!important;border:1px solid rgba(255,255,255,.10)!important;border-radius:26px!important;padding:1rem!important;box-shadow:0 22px 48px rgba(2,6,23,.22)!important}.page-hero h1{color:#fff!important;text-align:right!important;font-size:1.42rem!important;line-height:1.45!important}.page-hero p{color:rgba(255,255,255,.84)!important;font-size:.84rem!important;line-height:1.85!important}.page-badge,.section-tag{font-size:.72rem!important;padding:.22rem .7rem!important;border-radius:999px!important}.page-badge{background:rgba(234,88,12,.18)!important;color:#fed7aa!important;border:1px solid rgba(253,186,116,.25)!important}
        .cta-strip{background:rgba(255,255,255,.10)!important;border:1px solid rgba(255,255,255,.12)!important;box-shadow:none!important;border-radius:18px!important;padding:.9rem!important}.cta-actions{display:grid!important;grid-template-columns:1fr!important;gap:.55rem!important}.cta-primary,.cta-secondary,.tool-link,.read-more{min-height:42px!important;border-radius:999px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;font-weight:900!important;touch-action:manipulation!important}.cta-primary,.cta-secondary{width:100%!important}
        .mini-links{display:flex!important;overflow-x:auto!important;flex-wrap:nowrap!important;gap:.5rem!important;padding:.15rem .05rem .4rem!important;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none}.mini-links::-webkit-scrollbar,.decision-grid::-webkit-scrollbar,.fast-feature-grid::-webkit-scrollbar,.tools-grid::-webkit-scrollbar,.articles-grid::-webkit-scrollbar{display:none}.mini-links a{flex:0 0 auto!important;scroll-snap-align:start;background:rgba(255,255,255,.12)!important;color:#fff!important;border:1px solid rgba(255,255,255,.14)!important;border-radius:999px!important;padding:.42rem .7rem!important;font-size:.74rem!important}
        .section,.section-alt{padding:1.55rem 0!important;border-radius:26px 26px 0 0!important;margin-top:.55rem!important}.section-header{text-align:right!important;margin-bottom:.9rem!important}.section-header h2{font-size:1.15rem!important;line-height:1.55!important}.section-header p{font-size:.82rem!important;line-height:1.75!important;color:#64748b!important}
        .decision-grid,.fast-feature-grid,.tools-grid,.articles-grid{display:flex!important;grid-template-columns:none!important;overflow-x:auto!important;gap:.78rem!important;padding:.2rem .05rem .8rem!important;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch}.decision-card,.tool-card,.article-card,.post-card{min-width:82%!important;scroll-snap-align:center!important;background:var(--app-card)!important;color:var(--app-text)!important;border:1px solid var(--app-line)!important;border-radius:24px!important;padding:1rem!important;box-shadow:0 10px 26px rgba(15,23,42,.07)!important}.fast-feature-card{min-width:78%!important;scroll-snap-align:center!important;border-radius:22px!important}.decision-title,.tool-card h3,.article-card h3,.post-card h3{font-size:1rem!important;line-height:1.6!important}.decision-card p,.tool-card p,.article-excerpt,.post-excerpt{font-size:.8rem!important;line-height:1.75!important;color:#475569!important}.decision-benefits{gap:.3rem!important;margin:.6rem 0!important}.decision-benefits span{font-size:.68rem!important;padding:.18rem .45rem!important}
        .home-card-visual,.article-image,.post-image{height:86px!important;border-radius:16px!important;margin-bottom:.78rem!important;background:radial-gradient(circle at 20% 18%,rgba(255,255,255,.28),transparent 25%),linear-gradient(135deg,#06162b,#173b70 55%,#ea580c)!important}.home-card-visual span{width:46px!important;height:46px!important;border-radius:16px!important;font-size:1.45rem!important}.article-card .home-card-visual{height:82px!important;margin:0 0 .75rem!important}.article-category{font-size:.68rem!important;padding:.18rem .5rem!important;border-radius:999px!important}.article-meta{gap:.5rem!important;margin-top:.65rem!important}.article-directory{display:grid!important;grid-template-columns:1fr!important;gap:.78rem!important}.directory-card{border-radius:22px!important;padding:1rem!important;background:#fff!important;border:1px solid var(--app-line)!important;box-shadow:0 10px 26px rgba(15,23,42,.07)!important}.directory-card .home-card-visual{height:64px!important}.directory-card h4{font-size:.98rem!important;line-height:1.6!important}.directory-card a{font-size:.8rem!important;line-height:1.6!important}
        .smart-app-bottom-nav{position:fixed;right:10px;left:10px;bottom:calc(10px + env(safe-area-inset-bottom));height:68px;z-index:1600;display:grid;grid-template-columns:repeat(4,1fr);gap:.35rem;align-items:center;background:rgba(255,255,255,.93);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(148,163,184,.28);border-radius:25px;box-shadow:0 20px 48px rgba(15,23,42,.22);padding:.35rem}.smart-app-bottom-nav a{min-width:0;height:56px;border-radius:19px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.15rem;text-decoration:none!important;color:#334155!important;font-size:.68rem;font-weight:900}.smart-app-bottom-nav a strong{font-size:1.18rem;line-height:1}.smart-app-bottom-nav a.is-active{background:#0b1f3a!important;color:#fff!important}.site-footer{padding:1rem 0 calc(1rem + env(safe-area-inset-bottom))!important}.footer-inner{font-size:.78rem!important;gap:.35rem!important}
      }
      @media(max-width:380px){.container{width:min(100% - 18px,1120px)!important}.page-hero h1{font-size:1.28rem!important}.decision-card,.tool-card,.article-card,.post-card,.directory-card{min-width:88%!important;padding:.85rem!important}.home-card-visual,.article-image,.post-image{height:74px!important}.smart-app-bottom-nav{right:8px;left:8px}}
      @media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;transition:none!important}}
    `;
    const style=document.createElement('style');style.id='smart-app-experience-css';style.textContent=css;document.head.appendChild(style);
  }

  function ensureAppBottomNav(){
    if(document.querySelector('.smart-app-bottom-nav')) return;
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const items = [
      ['index.html','🏠','الرئيسية'],
      ['best-ai-tools.html','🤖','الأدوات'],
      ['ai-articles.html','📚','المقالات'],
      ['learn-ai.html','🎓','تعلم']
    ];
    const nav=document.createElement('nav');
    nav.className='smart-app-bottom-nav';
    nav.setAttribute('aria-label','تنقل التطبيق');
    nav.innerHTML=items.map(function(item){
      const active = (path === item[0] || (path === '' && item[0] === 'index.html')) ? ' class="is-active" aria-current="page"' : '';
      return '<a href="'+item[0]+'"'+active+'><strong>'+item[1]+'</strong><span>'+item[2]+'</span></a>';
    }).join('');
    document.body.appendChild(nav);
  }

  function loadScriptOnce(src, id, delay) {
    if (document.getElementById(id)) return;
    const run = function () {
      if (document.getElementById(id)) return;
      const script = document.createElement('script');
      script.id = id;
      script.src = src;
      script.defer = true;
      document.head.appendChild(script);
    };
    if (delay) setTimeout(run, delay);
    else run();
  }

  function loadStyleOnce(href, id, delay) {
    if (document.getElementById(id)) return;
    const run=function(){
      if (document.getElementById(id)) return;
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    };
    if(delay) setTimeout(run,delay); else run();
  }

  function normalizeBranding() {
    document.title = (document.title || '').replace(/smartafiliate/gi, BRAND);
    document.querySelectorAll('meta[content]').forEach(function (meta) {
      const value = meta.getAttribute('content') || '';
      const next = value.replace(/smartafiliate/gi, BRAND);
      if (next !== value) meta.setAttribute('content', next);
    });
    document.querySelectorAll('.logo').forEach(function (logo) {
      const light = logo.querySelector('.logo-text-light');
      const accent = logo.querySelector('.logo-text-accent');
      if (light && accent) { light.textContent = 'Smart'; accent.textContent = 'afiliate'; }
    });
  }

  function cleanText(value) {
    return String(value || '').replace(/\s*\|\s*Smartafiliate/gi, '').replace(/\s*\|\s*smartafiliate/gi, '').replace(/\s+/g, ' ').trim();
  }

  function getCardTitle(card) {
    const titleEl = card.querySelector('h3 a, h3, .post-title a, .post-title, .tool-title');
    return titleEl ? cleanText(titleEl.textContent) : 'Smartafiliate';
  }

  function prepareLightCards() {
    document.querySelectorAll('.article-card, .post-card').forEach(function (card) {
      const title = getCardTitle(card);
      const box = card.querySelector('.article-image, .post-image');
      if (box) {
        box.setAttribute('data-title', title);
        box.querySelectorAll('img').forEach(function (img) {
          img.loading = 'lazy';
          img.decoding = 'async';
          img.setAttribute('fetchpriority', 'low');
        });
      }
    });
  }

  function getProfitLinks(title) {
    const t = String(title || '').toLowerCase();
    if (['midjourney', 'dall-e', 'dalle', 'canva', 'leonardo', 'تصميم'].some(function (k) { return t.includes(k); })) return { primary: AFFILIATE_LINK_EXTRA, secondary: AFFILIATE_LINK, primaryText: 'جرّب أداة التصميم →', secondaryText: 'عرض إضافي →' };
    if (['ollama', 'llama', 'mistral', 'falcon'].some(function (k) { return t.includes(k); })) return { primary: AFFILIATE_LINK_EXTRA, secondary: AFFILIATE_LINK, primaryText: 'عرض تعلّم AI →', secondaryText: 'أداة بديلة →' };
    return { primary: AFFILIATE_LINK, secondary: AFFILIATE_LINK_EXTRA, primaryText: 'جرّب الأداة →', secondaryText: 'عرض إضافي →' };
  }

  function applyAffiliateLinks() {
    document.querySelectorAll('.tool-card').forEach(function (card) {
      const mainLink = card.querySelector('.tool-link');
      if (!mainLink) return;
      const links = getProfitLinks(getCardTitle(card));
      mainLink.href = links.primary; mainLink.textContent = links.primaryText; mainLink.target = '_blank'; mainLink.rel = 'nofollow sponsored noopener noreferrer';
      let extra = card.querySelector('.extra-affiliate-link');
      if (!extra) { extra = mainLink.cloneNode(true); extra.classList.add('extra-affiliate-link'); mainLink.insertAdjacentElement('afterend', extra); }
      extra.href = links.secondary; extra.textContent = links.secondaryText; extra.target = '_blank'; extra.rel = 'nofollow sponsored noopener noreferrer';
    });
  }

  function fixImages() {
    document.querySelectorAll('img').forEach(function (img) {
      if (!img.hasAttribute('width')) img.setAttribute('width', '1200');
      if (!img.hasAttribute('height')) img.setAttribute('height', '630');
      img.decoding = 'async'; img.loading = 'lazy'; img.setAttribute('fetchpriority', 'low');
    });
  }

  function loadSupportScripts() {
    const path = location.pathname.replace(/\/$/, '').toLowerCase();
    const isArticle = path.includes('/posts-ai/');
    const isLibrary = path.endsWith('/ai-articles.html') || path.endsWith('/posts-ai.html') || path.endsWith('/articles.html');
    if (isLibrary) loadScriptOnce('/publish-all-posts-fix.js', 'publish-all-posts-fix-loader', 2500);
    if (isArticle || isLibrary) loadScriptOnce('/seo-internal-links.js', 'seo-internal-links-loader', 3000);
    if (isArticle) loadScriptOnce('/profit-tracker.js', 'profit-tracker-loader', 3500);
  }

  function initFast() {
    injectAppExperienceCss(); ensureAppBottomNav(); normalizeBranding(); prepareLightCards(); applyAffiliateLinks(); fixImages(); loadSupportScripts();
    loadStyleOnce('/site-cleanup.css', 'site-cleanup-css', 1800);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initFast, { once: true });
  else initFast();
})();

function closeMenu() { const nav = document.getElementById('mainNav'); const button = document.querySelector('.menu-toggle'); if (!nav || !button) return; nav.classList.remove('active'); button.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-open'); }
function toggleMenu() { const nav = document.getElementById('mainNav'); const button = document.querySelector('.menu-toggle'); if (!nav || !button) return; const open = nav.classList.toggle('active'); button.setAttribute('aria-expanded', open ? 'true' : 'false'); document.body.classList.toggle('menu-open', open); }
document.addEventListener('click', function (event) { const nav = document.getElementById('mainNav'); const button = document.querySelector('.menu-toggle'); if (!nav || !button) return; if (nav.classList.contains('active') && !nav.contains(event.target) && !button.contains(event.target)) closeMenu(); }, { passive: true });
window.addEventListener('resize', function () { if (window.innerWidth > 900) closeMenu(); }, { passive: true });
window.addEventListener('scroll', function () { const header = document.querySelector('.site-header'); if (header) header.classList.toggle('header-scrolled', window.scrollY > 50); }, { passive: true });
