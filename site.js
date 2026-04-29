(function () {
  const BRAND = 'Smartafiliate';
  const SYSTEM_PAGE = 'https://alishede.systeme.io/affiliate';
  const SYSTEM_LABEL = 'نظام Affiliate';
  const CLICKBANK_LINK = 'https://alishede.systeme.io/affiliate';
  const POPUP_KEY = 'smart_affiliate_popup_seen_v1';
  const isMobile = () => window.matchMedia('(max-width:760px)').matches;
  const idle = (fn, timeout) => ('requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: timeout || 1600 }) : setTimeout(fn, timeout || 1600));

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

  function injectAffiliateCss() {
    if (document.getElementById('smart-affiliate-system-css')) return;
    const css = `
      .smart-affiliate-banner{margin:1rem 0 0;padding:1rem;border-radius:20px;background:linear-gradient(135deg,#fff7ed,#ffffff);border:1px solid #fed7aa;box-shadow:0 10px 24px rgba(15,23,42,.06);display:grid;gap:.65rem;color:#0f172a}
      .smart-affiliate-banner strong{font-size:1.05rem;color:#0b1f3a}.smart-affiliate-banner p{margin:0!important;color:#475569!important;line-height:1.75!important}.smart-affiliate-banner a{display:inline-flex;width:max-content;align-items:center;justify-content:center;border-radius:999px;background:#ea580c;color:#fff!important;text-decoration:none!important;font-weight:900;padding:.75rem 1rem}
      .smart-system-nav-link{font-weight:900!important}.smart-app-bottom-nav{display:none}
      .home-card-visual,.article-image,.post-image{position:relative;overflow:hidden;text-align:center}.home-card-visual .smart-visual-title,.article-image .smart-visual-title,.post-image .smart-visual-title{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:1rem;color:#fff;font-weight:900;font-size:clamp(.82rem,2.4vw,1.08rem);line-height:1.55;text-shadow:0 2px 12px rgba(0,0,0,.38);background:linear-gradient(180deg,rgba(2,6,23,.12),rgba(2,6,23,.38));z-index:2}.home-card-visual>span:not(.smart-visual-title){opacity:.15;transform:scale(1.15)}
      .smart-popup-overlay{position:fixed;inset:0;background:rgba(2,6,23,.62);z-index:9999;display:flex;align-items:center;justify-content:center;padding:1rem}.smart-popup-card{width:min(94vw,430px);background:#fff;border-radius:24px;border:1px solid #fed7aa;box-shadow:0 24px 70px rgba(0,0,0,.32);padding:1.25rem;display:grid;gap:.75rem;color:#0f172a;text-align:right}.smart-popup-card h2{margin:0;color:#0b1f3a;font-size:1.25rem;line-height:1.45}.smart-popup-card p{margin:0;color:#475569;line-height:1.75}.smart-popup-actions{display:grid;gap:.55rem}.smart-popup-primary{display:flex;align-items:center;justify-content:center;border-radius:999px;background:#ea580c;color:#fff!important;text-decoration:none!important;font-weight:900;padding:.85rem 1rem}.smart-popup-close{border:0;background:#f8fafc;color:#475569;border-radius:999px;padding:.75rem 1rem;font-weight:900;cursor:pointer}.smart-popup-x{position:absolute;top:.7rem;left:.7rem;width:36px;height:36px;border:0;border-radius:999px;background:#f1f5f9;color:#0f172a;font-size:1.2rem;cursor:pointer}.smart-popup-card{position:relative}
      @media(max-width:760px){body{padding-bottom:calc(84px + env(safe-area-inset-bottom))}.smart-affiliate-banner{border-radius:18px;padding:.9rem;margin-top:.85rem}.smart-affiliate-banner strong{font-size:.95rem}.smart-affiliate-banner p{font-size:.78rem!important}.smart-affiliate-banner a{width:100%;min-height:40px}.home-card-visual .smart-visual-title,.article-image .smart-visual-title,.post-image .smart-visual-title{font-size:.78rem;padding:.65rem;line-height:1.45}.smart-popup-card{border-radius:20px;padding:1rem}.smart-popup-card h2{font-size:1.08rem}.smart-app-bottom-nav{position:fixed;right:10px;left:10px;bottom:calc(10px + env(safe-area-inset-bottom));height:62px;z-index:1600;display:grid;grid-template-columns:repeat(4,1fr);gap:.3rem;align-items:center;background:#fff;border:1px solid rgba(148,163,184,.24);border-radius:22px;box-shadow:0 10px 24px rgba(15,23,42,.15);padding:.32rem}.smart-app-bottom-nav a{min-width:0;height:50px;border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.1rem;text-decoration:none!important;color:#334155!important;font-size:.65rem;font-weight:900}.smart-app-bottom-nav a strong{font-size:1.08rem;line-height:1}.smart-app-bottom-nav a.is-active{background:#0b1f3a!important;color:#fff!important}}
    `;
    const style = document.createElement('style');
    style.id = 'smart-affiliate-system-css';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function getCardTitle(card) {
    const el = card.querySelector('h3 a, h3, h4 a, h4, .decision-title, .tool-title, .post-title a, .post-title');
    return el ? el.textContent.replace(/\s+/g, ' ').trim() : '';
  }

  function addTitlesToVisuals() {
    document.querySelectorAll('.decision-card, .tool-card, .article-card, .directory-card, .post-card').forEach(function (card) {
      const title = getCardTitle(card);
      if (!title) return;
      const visual = card.querySelector('.home-card-visual, .article-image, .post-image');
      if (!visual || visual.querySelector('.smart-visual-title')) return;
      const span = document.createElement('span');
      span.className = 'smart-visual-title';
      span.textContent = title;
      visual.appendChild(span);
      visual.setAttribute('aria-label', title);
    });
  }

  function addSystemLinks() {
    document.querySelectorAll('.main-nav').forEach(function (nav) {
      if (!nav.querySelector('a[href="'+SYSTEM_PAGE+'"]')) {
        const a = document.createElement('a');
        a.href = SYSTEM_PAGE;
        a.textContent = SYSTEM_LABEL;
        a.className = 'smart-system-nav-link';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        nav.appendChild(a);
      }
    });

    document.querySelectorAll('.header-actions').forEach(function (wrap) {
      if (!wrap.querySelector('a[href="'+SYSTEM_PAGE+'"]')) {
        const a = document.createElement('a');
        a.href = SYSTEM_PAGE;
        a.textContent = 'ابدأ Affiliate';
        a.className = 'btn-primary-light smart-system-nav-link';
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        wrap.appendChild(a);
      }
    });
  }

  function addHomepageBanner() {
    const path = location.pathname.toLowerCase();
    const isHome = path === '/' || path.endsWith('/index.html') || path === '';
    if (!isHome || document.querySelector('.smart-affiliate-banner')) return;
    const target = document.querySelector('.page-hero .container');
    if (!target) return;
    const banner = document.createElement('div');
    banner.className = 'smart-affiliate-banner';
    banner.innerHTML = '<strong>🚀 ابدأ نظام Affiliate بالأتمتة</strong><p>سجل إيميلك أولاً، ثم تصلك رسائل المتابعة تلقائيًا من Systeme.io.</p><a href="'+SYSTEM_PAGE+'" target="_blank" rel="noopener noreferrer">افتح صفحة التسجيل الآن →</a>';
    target.appendChild(banner);
  }

  function showOneTimePopup() {
    try { if (localStorage.getItem(POPUP_KEY) === '1') return; } catch (e) {}
    if (document.querySelector('.smart-popup-overlay')) return;
    const overlay = document.createElement('div');
    overlay.className = 'smart-popup-overlay';
    overlay.innerHTML = '<div class="smart-popup-card" role="dialog" aria-modal="true" aria-label="عرض Affiliate"><button class="smart-popup-x" type="button" aria-label="إغلاق">×</button><h2>🔥 تريد طريقة بسيطة للبدء في Affiliate؟</h2><p>سجل إيميلك في صفحة Systeme.io وستصلك التفاصيل والمتابعة تلقائيًا.</p><div class="smart-popup-actions"><a class="smart-popup-primary" href="'+SYSTEM_PAGE+'" target="_blank" rel="noopener noreferrer">افتح صفحة التسجيل الآن →</a><button class="smart-popup-close" type="button">لاحقًا</button></div></div>';
    function closePopup() {
      try { localStorage.setItem(POPUP_KEY, '1'); } catch (e) {}
      overlay.remove();
    }
    overlay.addEventListener('click', function (event) { if (event.target === overlay) closePopup(); });
    overlay.querySelector('.smart-popup-x').addEventListener('click', closePopup);
    overlay.querySelector('.smart-popup-close').addEventListener('click', closePopup);
    overlay.querySelector('.smart-popup-primary').addEventListener('click', closePopup);
    document.body.appendChild(overlay);
  }

  function addMobileBottomNav() {
    if (!isMobile() || document.querySelector('.smart-app-bottom-nav')) return;
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const items = [
      ['index.html', '🏠', 'الرئيسية'],
      ['best-ai-tools.html', '🤖', 'الأدوات'],
      ['ai-articles.html', '📚', 'المقالات'],
      [SYSTEM_PAGE, '💰', 'Affiliate']
    ];
    const nav = document.createElement('nav');
    nav.className = 'smart-app-bottom-nav';
    nav.setAttribute('aria-label', 'تنقل سريع');
    nav.innerHTML = items.map(function (item) {
      const external = item[0].indexOf('http') === 0;
      const href = external ? item[0] : '/' + item[0];
      const active = !external && (path === item[0] || (path === '' && item[0] === 'index.html')) ? ' class="is-active" aria-current="page"' : '';
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return '<a href="'+href+'"'+active+attrs+'><strong>'+item[1]+'</strong><span>'+item[2]+'</span></a>';
    }).join('');
    document.body.appendChild(nav);
  }

  function prepareImages() {
    document.querySelectorAll('img').forEach(function (img) {
      img.decoding = 'async';
      img.loading = 'lazy';
      img.setAttribute('fetchpriority', 'low');
    });
  }

  function applyBasicAffiliateLinks() {
    const cards = Array.from(document.querySelectorAll('.tool-card'));
    cards.slice(0, isMobile() ? 2 : 4).forEach(function (card) {
      const link = card.querySelector('.tool-link');
      if (!link || link.dataset.smartLinked === '1') return;
      link.dataset.smartLinked = '1';
      link.href = CLICKBANK_LINK;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      if (!/العرض|ابدأ|شاهد/.test(link.textContent)) link.textContent = 'ابدأ من صفحة التسجيل →';
    });
  }

  function init() {
    injectAffiliateCss();
    normalizeBranding();
    addSystemLinks();
    addHomepageBanner();
    addMobileBottomNav();
    prepareImages();
    addTitlesToVisuals();
    idle(applyBasicAffiliateLinks, 2500);
    setTimeout(showOneTimePopup, 5000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
  window.addEventListener('resize', function () { addMobileBottomNav(); }, { passive: true });
})();

function closeMenu() {
  const nav = document.getElementById('mainNav');
  const button = document.querySelector('.menu-toggle');
  if (!nav || !button) return;
  nav.classList.remove('active');
  button.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

function toggleMenu() {
  const nav = document.getElementById('mainNav');
  const button = document.querySelector('.menu-toggle');
  if (!nav || !button) return;
  const open = nav.classList.toggle('active');
  button.setAttribute('aria-expanded', open ? 'true' : 'false');
  document.body.classList.toggle('menu-open', open);
}

document.addEventListener('click', function (event) {
  const nav = document.getElementById('mainNav');
  const button = document.querySelector('.menu-toggle');
  if (!nav || !button) return;
  if (nav.classList.contains('active') && !nav.contains(event.target) && !button.contains(event.target)) closeMenu();
}, { passive: true });

window.addEventListener('resize', function () {
  if (window.innerWidth > 900) closeMenu();
}, { passive: true });

(function () {
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      const header = document.querySelector('.site-header');
      if (header) header.classList.toggle('header-scrolled', window.scrollY > 50);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();
