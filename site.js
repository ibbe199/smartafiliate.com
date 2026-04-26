(function () {
  const GTM_ID = 'GTM-P96QVPT3';
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  if (!document.querySelector('script[src*="googletagmanager.com/gtm.js?id=' + GTM_ID + '"]')) {
    const firstScript = document.getElementsByTagName('script')[0];
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    firstScript.parentNode.insertBefore(gtmScript, firstScript);
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!document.body || document.getElementById('gtm-noscript-fallback')) return;
    const wrapper = document.createElement('div');
    wrapper.id = 'gtm-noscript-fallback';
    wrapper.innerHTML = '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' + GTM_ID + '" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
    document.body.insertBefore(wrapper, document.body.firstChild);
  });
})();

(function () {
  const BRAND = 'Smartafiliate';

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

  function cleanHomepageDirectory() {
    document.querySelectorAll('.home-page .article-directory img.link-thumb').forEach(function (img) { img.remove(); });
  }

  function injectSharedStyles() {
    if (document.getElementById('smartafiliate-shared-fixes')) return;
    const style = document.createElement('style');
    style.id = 'smartafiliate-shared-fixes';
    style.textContent = `
      .home-page .article-directory {
        display: grid !important;
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        gap: 1.25rem !important;
        align-items: start !important;
      }
      .home-page .directory-card {
        min-height: 0 !important;
        height: auto !important;
        padding: 1.15rem 1.2rem !important;
        border-radius: 18px !important;
      }
      .home-page .directory-card h4 {
        margin: 0 0 .75rem !important;
        padding-bottom: .55rem !important;
        font-size: 1rem !important;
        line-height: 1.5 !important;
        color: #0f172a !important;
        text-align: right !important;
      }
      .home-page .directory-card ul {
        display: grid !important;
        gap: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      .home-page .directory-card li {
        margin: 0 !important;
        padding: 0 !important;
        border-bottom: 1px solid rgba(15,23,42,.07) !important;
      }
      .home-page .directory-card li:last-child { border-bottom: 0 !important; }
      .home-page .directory-card a {
        display: block !important;
        padding: .42rem 0 !important;
        color: #9a3412 !important;
        font-size: .96rem !important;
        font-weight: 700 !important;
        line-height: 1.45 !important;
        letter-spacing: 0 !important;
        word-spacing: 0 !important;
        text-align: right !important;
        text-decoration-thickness: 1px !important;
        text-underline-offset: 3px !important;
        overflow-wrap: anywhere !important;
      }
      .home-page .directory-card a:hover { color: #c2410c !important; }
      .home-page .directory-card a:before { content: none !important; display: none !important; }
      .home-page .link-thumb { display: none !important; }
      @media (max-width: 1000px) {
        .home-page .article-directory { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
      }
      @media (max-width: 700px) {
        html, body {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow-x: hidden !important;
          direction: rtl !important;
        }
        body.home-page, body.home-page main, body.home-page section, body.home-page header, body.home-page footer {
          width: 100% !important;
          max-width: 100% !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          transform: none !important;
          left: auto !important;
          right: auto !important;
          box-sizing: border-box !important;
        }
        .container,
        .home-page .container,
        .header-inner,
        .page-hero .container,
        .section .container,
        .section-alt .container {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          margin-left: auto !important;
          margin-right: auto !important;
          padding-left: 16px !important;
          padding-right: 16px !important;
          box-sizing: border-box !important;
        }
        .site-header { position: sticky !important; top: 0 !important; z-index: 9999 !important; background: #071426 !important; }
        .header-inner { min-height: 64px !important; display: flex !important; align-items: center !important; justify-content: space-between !important; gap: .75rem !important; }
        .logo { display: inline-flex !important; align-items: center !important; min-width: 0 !important; }
        .logo-text { font-size: 1.15rem !important; line-height: 1 !important; }
        .menu-toggle { display: inline-flex !important; align-items: center !important; justify-content: center !important; width: 44px !important; height: 44px !important; border-radius: 12px !important; color: #fff !important; border: 1px solid rgba(255,255,255,.18) !important; background: rgba(255,255,255,.06) !important; }
        .main-nav { display: none !important; position: absolute !important; top: 100% !important; left: 16px !important; right: 16px !important; width: auto !important; background: #071426 !important; border: 1px solid rgba(255,255,255,.12) !important; border-radius: 16px !important; padding: .75rem !important; box-shadow: 0 18px 40px rgba(0,0,0,.28) !important; }
        .main-nav.active { display: grid !important; gap: .35rem !important; }
        .main-nav a { display: block !important; padding: .75rem .9rem !important; color: #fff !important; text-align: right !important; border-radius: 10px !important; }
        .header-actions { display: none !important; }
        .page-hero { width: 100% !important; padding: 2rem 0 1.5rem !important; text-align: center !important; min-height: auto !important; display: block !important; }
        .page-hero .container { display: grid !important; gap: .9rem !important; justify-items: center !important; text-align: center !important; }
        .page-badge, .section-tag { display: inline-flex !important; align-items: center !important; justify-content: center !important; margin: 0 auto !important; }
        .page-hero h1 { width: 100% !important; font-size: 1.85rem !important; line-height: 1.35 !important; margin: 0 !important; max-width: 100% !important; text-align: center !important; }
        .page-hero p { width: 100% !important; font-size: .98rem !important; line-height: 1.8 !important; margin: 0 !important; max-width: 34rem !important; text-align: center !important; }
        .cta-strip { width: 100% !important; max-width: 100% !important; padding: 1rem !important; margin: .4rem 0 0 !important; border-radius: 18px !important; display: grid !important; gap: .85rem !important; text-align: center !important; box-sizing: border-box !important; }
        .cta-strip p { font-size: .95rem !important; line-height: 1.7 !important; }
        .cta-actions, .hero-buttons, .review-actions, .hub-actions, .learn-actions { display: grid !important; grid-template-columns: 1fr !important; gap: .65rem !important; width: 100% !important; }
        .cta-actions a, .cta-primary, .cta-secondary, .btn-primary, .btn-secondary, .hub-primary, .hub-secondary, .learn-primary, .learn-secondary { width: 100% !important; min-height: 46px !important; display: flex !important; align-items: center !important; justify-content: center !important; padding: .72rem 1rem !important; font-size: .95rem !important; text-align: center !important; box-sizing: border-box !important; }
        .mini-links { width: 100% !important; display: flex !important; flex-wrap: wrap !important; justify-content: center !important; gap: .45rem !important; margin: .2rem 0 0 !important; }
        .mini-links a { display: inline-flex !important; align-items: center !important; justify-content: center !important; padding: .42rem .65rem !important; border-radius: 999px !important; background: rgba(255,255,255,.08) !important; color: #fff !important; font-size: .82rem !important; line-height: 1.3 !important; }
        .decision-grid, .tools-grid, .articles-grid, .review-grid, .cards-grid, .quick-grid, .info-grid { display: grid !important; grid-template-columns: 1fr !important; gap: 1rem !important; width: 100% !important; max-width: 100% !important; }
        .decision-card, .tool-card, .article-card, .post-card, .review-card, .info-card { width: 100% !important; max-width: 100% !important; text-align: right !important; padding: 1rem !important; box-sizing: border-box !important; }
        .section, .section-alt { width: 100% !important; max-width: 100% !important; padding: 2.5rem 0 !important; margin: 0 !important; }
        .section-header { margin-bottom: 1.25rem !important; text-align: center !important; }
        .section-header h2 { font-size: 1.55rem !important; line-height: 1.4 !important; }
        .section-header p { font-size: .95rem !important; line-height: 1.7 !important; }
        .home-page .article-directory { grid-template-columns: 1fr !important; gap: 1rem !important; width: 100% !important; max-width: 100% !important; }
        .home-page .directory-card { width: 100% !important; max-width: 100% !important; padding: 1rem !important; border-radius: 16px !important; box-sizing: border-box !important; }
        .home-page .directory-card h4 { font-size: .98rem !important; }
        .home-page .directory-card a { font-size: .94rem !important; padding: .38rem 0 !important; line-height: 1.45 !important; }
        img { max-width: 100% !important; height: auto !important; }
      }
    `;
    document.head.appendChild(style);
  }

  function init() {
    normalizeBranding();
    cleanHomepageDirectory();
    injectSharedStyles();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
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
  const isOpen = nav.classList.toggle('active');
  button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  document.body.classList.toggle('menu-open', isOpen);
}

document.addEventListener('click', function (event) {
  const nav = document.getElementById('mainNav');
  const button = document.querySelector('.menu-toggle');
  if (!nav || !button) return;
  if (nav.classList.contains('active') && !nav.contains(event.target) && !button.contains(event.target)) closeMenu();
});

window.addEventListener('resize', function () { if (window.innerWidth > 900) closeMenu(); });
window.addEventListener('scroll', function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  if (window.scrollY > 50) header.classList.add('header-scrolled');
  else header.classList.remove('header-scrolled');
});
