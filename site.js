(function () {
  const BRAND = 'Smartafiliate';
  const SYSTEM_PAGE = 'https://alishede.systeme.io/affiliate';
  const SYSTEM_LABEL = 'نظام Affiliate';
  const CLICKBANK_LINK = 'https://alishede.systeme.io/affiliate';
  const POPUP_KEY = 'smart_affiliate_popup_seen_v1';
  const isMobile = () => window.matchMedia('(max-width:760px)').matches;
  const idle = (fn, timeout) => ('requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: timeout || 1600 }) : setTimeout(fn, timeout || 1600));

  function loadIdentityLayer(){if(document.getElementById('smart-identity-layer')) return; const link=document.createElement('link'); link.id='smart-identity-layer'; link.rel='stylesheet'; link.href='/identity-fix.css'; document.head.appendChild(link);} 

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
      .smart-breadcrumb{width:min(1100px,calc(100% - 32px));margin:1rem auto 0;padding:.75rem 1rem;border:1px solid #dbeafe;border-radius:999px;background:#f8fafc;color:#334155;font-size:.9rem;font-weight:800;display:flex;gap:.45rem;align-items:center;flex-wrap:wrap}.smart-breadcrumb a{color:#1d4ed8!important;text-decoration:none!important;font-weight:900}
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
    });
  }

  function getPageTitle() {
    const h1 = document.querySelector('h1');
    return (h1 ? h1.textContent : document.title).replace(/\s+/g, ' ').replace(/\|\s*Smartafiliate/i, '').trim();
  }

  function addBreadcrumbs() {
    if (document.querySelector('.smart-breadcrumb')) return;
    const path = location.pathname.toLowerCase();
    if (!path.includes('/posts-ai/') && !path.endsWith('/posts-ai.html') && !path.endsWith('/blog.html')) return;
    const nav = document.createElement('nav');
    nav.className = 'smart-breadcrumb';
    nav.innerHTML = '<a href="/index.html">الرئيسية</a><span>›</span><a href="/posts-ai.html">جميع المقالات</a><span>›</span><span class="current">'+getPageTitle()+'</span>';
    const main = document.querySelector('main');
    if (main) main.insertBefore(nav, main.firstChild);
  }

  function addSystemLinks() { document.querySelectorAll('.main-nav').forEach(function (nav) { if (!nav.querySelector('a[href="'+SYSTEM_PAGE+'"]')) { const a=document.createElement('a'); a.href=SYSTEM_PAGE; a.textContent=SYSTEM_LABEL; a.className='smart-system-nav-link'; a.target='_blank'; a.rel='noopener noreferrer'; nav.appendChild(a); } }); }
  function prepareImages() { document.querySelectorAll('img').forEach(function (img) { img.decoding='async'; img.loading='lazy'; }); }
  function applyBasicAffiliateLinks() { Array.from(document.querySelectorAll('.tool-card')).slice(0,4).forEach(function (card) { const link=card.querySelector('.tool-link'); if (!link) return; link.href=CLICKBANK_LINK; link.target='_blank'; }); }

  function init() {
    loadIdentityLayer();
    injectAffiliateCss();
    normalizeBranding();
    addBreadcrumbs();
    addSystemLinks();
    prepareImages();
    addTitlesToVisuals();
    idle(applyBasicAffiliateLinks, 2500);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();

function closeMenu() { const nav=document.getElementById('mainNav'); const button=document.querySelector('.menu-toggle'); if (!nav || !button) return; nav.classList.remove('active'); button.setAttribute('aria-expanded','false'); }
function toggleMenu() { const nav=document.getElementById('mainNav'); const button=document.querySelector('.menu-toggle'); if (!nav || !button) return; const open=nav.classList.toggle('active'); button.setAttribute('aria-expanded', open ? 'true' : 'false'); }
