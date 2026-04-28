(function () {
  const BRAND = 'Smartafiliate';
  const AFFILIATE_LINK = 'https://568c33r-ouavcya3kf-f44g5qs.hop.clickbank.net';
  const AFFILIATE_LINK_EXTRA = 'https://568c33r-ouavcya3kf-f44g5qs.hop.clickbank.net';
  const isMobile = () => window.matchMedia('(max-width:760px)').matches;
  const idle = (fn, timeout) => ('requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: timeout || 1600 }) : setTimeout(fn, timeout || 1600));

  (function injectCriticalCss(){
    if(document.getElementById('critical-speed-css')) return;
    const css='.site-header{position:sticky;top:0;z-index:1000}.header-inner{padding:.5rem 0!important}.page-hero{padding:1.25rem 0!important}.page-hero h1{font-size:clamp(1.45rem,6vw,2.35rem)!important;margin:.3rem 0!important}.page-hero p{font-size:.9rem!important}.hub-cta,.quick-grid{display:none!important}.section{padding:1.45rem 0!important}.articles-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:.85rem}.article-card,.post-card,.tool-card,.decision-card,.directory-card{content-visibility:auto;contain-intrinsic-size:1px 300px}.article-image,.post-image{height:84px!important;background:linear-gradient(135deg,#071426,#12305a 65%,#ea580c)!important;display:flex!important;align-items:center!important;justify-content:center!important;text-align:center!important;color:#fff!important;padding:.7rem!important}.article-image img,.post-image img{display:none!important}.article-image:before,.post-image:before{content:attr(data-title);font-weight:900;font-size:.86rem;line-height:1.4}.article-content{padding:.9rem!important}.article-card h3{font-size:.96rem!important;line-height:1.45!important}.article-excerpt{font-size:.78rem!important;line-height:1.65!important}.site-footer{content-visibility:auto;contain-intrinsic-size:1px 260px}@media(min-width:900px){.site-header{box-shadow:none!important}.page-hero{padding:2.4rem 0!important}.section,.section-alt{padding:2.8rem 0!important}.article-card,.post-card,.tool-card,.decision-card,.directory-card{box-shadow:0 4px 14px rgba(15,23,42,.045)!important}.article-card:hover,.post-card:hover,.tool-card:hover,.decision-card:hover,.directory-card:hover{transform:none!important;box-shadow:0 8px 22px rgba(15,23,42,.07)!important}.home-card-visual{box-shadow:none!important}}@media(max-width:700px){.header-actions{display:none!important}.main-nav{display:none}.menu-toggle{display:flex!important}.container{width:min(100% - 1rem,1200px)!important}.articles-grid{grid-template-columns:1fr!important}.article-image,.post-image{height:72px!important}}';
    const style=document.createElement('style');style.id='critical-speed-css';style.textContent=css;document.head.appendChild(style);
  })();

  function injectAppExperienceCss(){
    if(document.getElementById('smart-app-experience-css')) return;
    const css = `
      :root{--app-navy:#071426;--app-navy-2:#0e2445;--app-bg:#eef5ff;--app-card:#fff;--app-text:#0f172a;--app-line:#dbeafe}
      .site-header{position:sticky;top:0;z-index:1100;background:#071426!important;border-bottom:1px solid rgba(255,255,255,.08);box-shadow:0 4px 12px rgba(2,6,23,.10)}
      .site-header.header-scrolled{box-shadow:0 6px 16px rgba(2,6,23,.16)}
      .article-card,.post-card,.tool-card,.decision-card,.directory-card,.fast-feature-card{transition:transform .12s ease!important;contain:layout paint style}.article-card:active,.post-card:active,.tool-card:active,.decision-card:active,.directory-card:active,.fast-feature-card:active,a:active,button:active{transform:scale(.99)}
      .extra-affiliate-link{display:none!important}.tool-card.smart-affiliate-muted .tool-link{background:#fff!important;color:#0b1f3a!important;border:1px solid #d9e4f2!important}.smart-app-bottom-nav{display:none}
      @media(hover:hover) and (min-width:900px){.tool-card.smart-affiliate-card:hover .extra-affiliate-link{display:inline-flex!important;margin-inline-start:.35rem}}
      @media(max-width:760px){
        html{-webkit-text-size-adjust:100%}body{background:var(--app-bg)!important;padding-bottom:calc(84px + env(safe-area-inset-bottom))!important;overflow-x:hidden}.container{width:min(100% - 18px,1120px)!important}.site-header .header-inner{min-height:52px!important;padding:.38rem 0!important}.logo{font-size:.98rem!important}.header-actions{display:none!important}.menu-toggle{display:flex!important;width:34px!important;height:34px!important;border-radius:12px!important;background:rgba(255,255,255,.08)!important;border:1px solid rgba(255,255,255,.12)!important;color:#fff!important}.main-nav.active{display:grid!important;gap:.3rem!important;background:#fff!important;padding:.65rem!important;border-radius:18px!important}.main-nav.active a{border-radius:13px!important;padding:.7rem!important;color:var(--app-text)!important;background:#f8fafc!important}
        main{overflow:hidden}.page-hero{background:linear-gradient(180deg,var(--app-navy) 0%,var(--app-navy-2) 56%,var(--app-bg) 56%,var(--app-bg) 100%)!important;color:#fff!important;padding:.9rem 0 .7rem!important}.page-hero>.container{background:rgba(255,255,255,.055)!important;border:1px solid rgba(255,255,255,.09)!important;border-radius:22px!important;padding:.9rem!important;box-shadow:none!important}.page-hero h1{color:#fff!important;text-align:right!important;font-size:1.28rem!important;line-height:1.42!important}.page-hero p{color:rgba(255,255,255,.84)!important;font-size:.8rem!important;line-height:1.75!important}.page-badge,.section-tag{font-size:.7rem!important;padding:.2rem .62rem!important;border-radius:999px!important}.page-badge{background:rgba(234,88,12,.16)!important;color:#fed7aa!important;border:1px solid rgba(253,186,116,.22)!important}
        .cta-strip{background:rgba(255,255,255,.10)!important;border:1px solid rgba(255,255,255,.10)!important;box-shadow:none!important;border-radius:16px!important;padding:.78rem!important}.cta-actions{display:grid!important;grid-template-columns:1fr!important;gap:.5rem!important}.cta-primary,.cta-secondary,.tool-link,.read-more{min-height:40px!important;border-radius:999px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;font-weight:900!important;touch-action:manipulation!important}.cta-primary,.cta-secondary{width:100%!important}
        .mini-links,.decision-grid,.fast-feature-grid,.tools-grid,.articles-grid{display:flex!important;grid-template-columns:none!important;overflow-x:auto!important;flex-wrap:nowrap!important;gap:.65rem!important;padding:.12rem .03rem .62rem!important;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none}.mini-links::-webkit-scrollbar,.decision-grid::-webkit-scrollbar,.fast-feature-grid::-webkit-scrollbar,.tools-grid::-webkit-scrollbar,.articles-grid::-webkit-scrollbar{display:none}.mini-links a{flex:0 0 auto!important;scroll-snap-align:start;background:rgba(255,255,255,.12)!important;color:#fff!important;border:1px solid rgba(255,255,255,.12)!important;border-radius:999px!important;padding:.38rem .62rem!important;font-size:.72rem!important}
        .section,.section-alt{padding:1.25rem 0!important;border-radius:22px 22px 0 0!important;margin-top:.42rem!important}.section-header{text-align:right!important;margin-bottom:.72rem!important}.section-header h2{font-size:1.06rem!important;line-height:1.5!important}.section-header p{font-size:.78rem!important;line-height:1.65!important;color:#64748b!important}
        .decision-card,.tool-card,.article-card,.post-card{min-width:82%!important;scroll-snap-align:center!important;background:var(--app-card)!important;color:var(--app-text)!important;border:1px solid var(--app-line)!important;border-radius:20px!important;padding:.82rem!important;box-shadow:0 5px 12px rgba(15,23,42,.045)!important}.fast-feature-card{min-width:78%!important;scroll-snap-align:center!important;border-radius:18px!important}.decision-title,.tool-card h3,.article-card h3,.post-card h3{font-size:.96rem!important;line-height:1.52!important}.decision-card p,.tool-card p,.article-excerpt,.post-excerpt{font-size:.76rem!important;line-height:1.65!important;color:#475569!important}.decision-benefits{gap:.25rem!important;margin:.48rem 0!important}.decision-benefits span{font-size:.66rem!important;padding:.16rem .4rem!important}
        .home-card-visual,.article-image,.post-image{height:68px!important;border-radius:13px!important;margin-bottom:.62rem!important;background:linear-gradient(135deg,#06162b,#173b70 58%,#ea580c)!important;box-shadow:none!important}.home-card-visual span{width:38px!important;height:38px!important;border-radius:13px!important;font-size:1.24rem!important}.article-card .home-card-visual{height:66px!important;margin:0 0 .62rem!important}.article-category{font-size:.65rem!important;padding:.16rem .45rem!important;border-radius:999px!important}.article-directory{display:grid!important;grid-template-columns:1fr!important;gap:.62rem!important}.directory-card{border-radius:18px!important;padding:.82rem!important;background:#fff!important;border:1px solid var(--app-line)!important;box-shadow:0 5px 12px rgba(15,23,42,.045)!important}.directory-card .home-card-visual{height:50px!important}.directory-card h4{font-size:.92rem!important;line-height:1.5!important}.directory-card a{font-size:.76rem!important;line-height:1.52!important}
        .smart-app-bottom-nav{position:fixed;right:10px;left:10px;bottom:calc(10px + env(safe-area-inset-bottom));height:62px;z-index:1600;display:grid;grid-template-columns:repeat(4,1fr);gap:.3rem;align-items:center;background:#fff;border:1px solid rgba(148,163,184,.24);border-radius:22px;box-shadow:0 10px 24px rgba(15,23,42,.15);padding:.32rem}.smart-app-bottom-nav a{min-width:0;height:50px;border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.1rem;text-decoration:none!important;color:#334155!important;font-size:.65rem;font-weight:900}.smart-app-bottom-nav a strong{font-size:1.08rem;line-height:1}.smart-app-bottom-nav a.is-active{background:#0b1f3a!important;color:#fff!important}.site-footer{padding:1rem 0 calc(1rem + env(safe-area-inset-bottom))!important}.footer-inner{font-size:.76rem!important;gap:.3rem!important}
      }
      @media(min-width:900px){.site-header{box-shadow:none!important}.article-card,.post-card,.tool-card,.decision-card,.directory-card,.fast-feature-card{transition:none!important}.home-card-visual{box-shadow:none!important}.page-hero::before{display:none!important}}
      @media(max-width:380px){.container{width:min(100% - 16px,1120px)!important}.page-hero h1{font-size:1.2rem!important}.decision-card,.tool-card,.article-card,.post-card,.directory-card{min-width:88%!important;padding:.76rem!important}.home-card-visual,.article-image,.post-image{height:62px!important}.smart-app-bottom-nav{right:8px;left:8px}}
      @media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;transition:none!important}}
    `;
    const style=document.createElement('style');style.id='smart-app-experience-css';style.textContent=css;document.head.appendChild(style);
  }

  function ensureAppBottomNav(){
    if(!isMobile() || document.querySelector('.smart-app-bottom-nav')) return;
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const items = [['index.html','🏠','الرئيسية'],['best-ai-tools.html','🤖','الأدوات'],['ai-articles.html','📚','المقالات'],['learn-ai.html','🎓','تعلم']];
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
      const script = document.createElement('script'); script.id = id; script.src = src; script.defer = true; document.head.appendChild(script);
    };
    if (delay) setTimeout(run, delay); else run();
  }

  function loadStyleOnce(href, id, delay) {
    if (document.getElementById(id)) return;
    const run=function(){ if (document.getElementById(id)) return; const link = document.createElement('link'); link.id = id; link.rel = 'stylesheet'; link.href = href; document.head.appendChild(link); };
    if(delay) setTimeout(run,delay); else run();
  }

  function normalizeBranding() {
    document.title = (document.title || '').replace(/smartafiliate/gi, BRAND);
    document.querySelectorAll('meta[content]').forEach(function (meta) { const value = meta.getAttribute('content') || ''; const next = value.replace(/smartafiliate/gi, BRAND); if (next !== value) meta.setAttribute('content', next); });
    document.querySelectorAll('.logo').forEach(function (logo) { const light = logo.querySelector('.logo-text-light'); const accent = logo.querySelector('.logo-text-accent'); if (light && accent) { light.textContent = 'Smart'; accent.textContent = 'afiliate'; } });
  }

  function cleanText(value) { return String(value || '').replace(/\s*\|\s*Smartafiliate/gi, '').replace(/\s*\|\s*smartafiliate/gi, '').replace(/\s+/g, ' ').trim(); }
  function getCardTitle(card) { const titleEl = card.querySelector('h3 a, h3, .post-title a, .post-title, .tool-title'); return titleEl ? cleanText(titleEl.textContent) : 'Smartafiliate'; }

  function prepareLightCards() {
    document.querySelectorAll('.article-card, .post-card').forEach(function (card) {
      const box = card.querySelector('.article-image, .post-image');
      if (!box) return;
      box.setAttribute('data-title', getCardTitle(card));
      box.querySelectorAll('img').forEach(function (img) { img.loading = 'lazy'; img.decoding = 'async'; img.setAttribute('fetchpriority', 'low'); });
    });
  }

  function getProfitLinks(title) {
    const t = String(title || '').toLowerCase();
    if (['midjourney', 'dall-e', 'dalle', 'canva', 'leonardo', 'تصميم'].some(k => t.includes(k))) return { primary: AFFILIATE_LINK, secondary: AFFILIATE_LINK_EXTRA, primaryText: 'احصل على أداة التصميم الآن →', secondaryText: 'شاهد العرض →' };
    if (['ollama', 'llama', 'mistral', 'falcon', 'تعلم'].some(k => t.includes(k))) return { primary: AFFILIATE_LINK, secondary: AFFILIATE_LINK_EXTRA, primaryText: 'ابدأ التعلم العملي الآن →', secondaryText: 'شاهد العرض →' };
    return { primary: AFFILIATE_LINK, secondary: AFFILIATE_LINK_EXTRA, primaryText: 'شاهد العرض المناسب →', secondaryText: 'عرض إضافي →' };
  }

  function getAffiliateLimit() {
    const path = location.pathname.toLowerCase();
    if (path.includes('/posts-ai/')) return isMobile() ? 2 : 4;
    if (path.endsWith('/best-ai-tools.html')) return isMobile() ? 6 : 12;
    if (path.endsWith('/index.html') || path === '/' || path === '') return isMobile() ? 3 : 7;
    return isMobile() ? 3 : 6;
  }

  function applyAffiliateLinks() {
    const cards = Array.from(document.querySelectorAll('.tool-card'));
    if (!cards.length) return;
    const maxLinks = getAffiliateLimit(); const usedTitles = new Set(); let applied = 0;
    cards.forEach(function (card) {
      const mainLink = card.querySelector('.tool-link'); if (!mainLink) return;
      const originalHref = mainLink.getAttribute('data-original-href') || mainLink.getAttribute('href') || '#';
      const originalText = mainLink.getAttribute('data-original-text') || cleanText(mainLink.textContent) || 'افتح القسم →';
      const title = getCardTitle(card).toLowerCase(); const key = title.replace(/[^\u0600-\u06FFa-z0-9]+/gi, '-').slice(0, 70);
      const shouldMonetize = applied < maxLinks && !usedTitles.has(key);
      card.classList.remove('smart-affiliate-card', 'smart-affiliate-muted'); mainLink.setAttribute('data-original-href', originalHref); mainLink.setAttribute('data-original-text', originalText);
      if (!shouldMonetize) { card.classList.add('smart-affiliate-muted'); mainLink.href = originalHref; mainLink.textContent = originalText; mainLink.removeAttribute('target'); mainLink.removeAttribute('rel'); const oldExtra = card.querySelector('.extra-affiliate-link'); if (oldExtra) oldExtra.remove(); return; }
      const links = getProfitLinks(title); usedTitles.add(key); applied += 1; card.classList.add('smart-affiliate-card'); mainLink.href = links.primary; mainLink.textContent = links.primaryText; mainLink.target = '_blank'; mainLink.rel = 'nofollow sponsored noopener noreferrer';
      let extra = card.querySelector('.extra-affiliate-link');
      if (!isMobile()) { if (!extra) { extra = mainLink.cloneNode(true); extra.classList.add('extra-affiliate-link'); mainLink.insertAdjacentElement('afterend', extra); } extra.href = links.secondary; extra.textContent = links.secondaryText; extra.target = '_blank'; extra.rel = 'nofollow sponsored noopener noreferrer'; extra.setAttribute('aria-label', 'رابط عرض إضافي يظهر عند تمرير المؤشر'); }
      else if (extra) extra.remove();
    });
  }

  function fixImages() { document.querySelectorAll('img').forEach(function (img) { if (!img.hasAttribute('width')) img.setAttribute('width', '1200'); if (!img.hasAttribute('height')) img.setAttribute('height', '630'); img.decoding = 'async'; img.loading = 'lazy'; img.setAttribute('fetchpriority', 'low'); }); }

  function loadSupportScripts() {
    if (isMobile()) return;
    const path = location.pathname.replace(/\/$/, '').toLowerCase(); const isArticle = path.includes('/posts-ai/'); const isLibrary = path.endsWith('/ai-articles.html') || path.endsWith('/posts-ai.html') || path.endsWith('/articles.html');
    if (isLibrary) loadScriptOnce('/publish-all-posts-fix.js', 'publish-all-posts-fix-loader', 9000);
    if (isArticle || isLibrary) loadScriptOnce('/seo-internal-links.js', 'seo-internal-links-loader', 11000);
    if (isArticle) loadScriptOnce('/profit-tracker.js', 'profit-tracker-loader', 13000);
  }

  function runAffiliateAfterIntent(){
    let done = false;
    const run = () => { if(done) return; done = true; applyAffiliateLinks(); };
    if (!isMobile()) { idle(run, 2600); return; }
    ['touchstart','scroll','click'].forEach(evt => window.addEventListener(evt, run, { once:true, passive:true }));
    setTimeout(run, 6500);
  }

  function initFast() {
    injectAppExperienceCss(); normalizeBranding(); prepareLightCards(); fixImages(); if(isMobile()) ensureAppBottomNav(); runAffiliateAfterIntent();
    if (!isMobile()) idle(function(){ loadSupportScripts(); }, 6500);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initFast, { once: true }); else initFast();
  window.addEventListener('resize', function(){ if(isMobile()) ensureAppBottomNav(); }, { passive:true });
})();

function closeMenu() { const nav = document.getElementById('mainNav'); const button = document.querySelector('.menu-toggle'); if (!nav || !button) return; nav.classList.remove('active'); button.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-open'); }
function toggleMenu() { const nav = document.getElementById('mainNav'); const button = document.querySelector('.menu-toggle'); if (!nav || !button) return; const open = nav.classList.toggle('active'); button.setAttribute('aria-expanded', open ? 'true' : 'false'); document.body.classList.toggle('menu-open', open); }
document.addEventListener('click', function (event) { const nav = document.getElementById('mainNav'); const button = document.querySelector('.menu-toggle'); if (!nav || !button) return; if (nav.classList.contains('active') && !nav.contains(event.target) && !button.contains(event.target)) closeMenu(); }, { passive: true });
window.addEventListener('resize', function () { if (window.innerWidth > 900) closeMenu(); }, { passive: true });
(function(){let ticking=false;function onScroll(){if(ticking)return;ticking=true;requestAnimationFrame(function(){const header=document.querySelector('.site-header');if(header)header.classList.toggle('header-scrolled',window.scrollY>50);ticking=false;});}window.addEventListener('scroll',onScroll,{passive:true});})();
