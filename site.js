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
      .home-page .article-directory { gap: 1.2rem !important; align-items: stretch !important; }
      .home-page .directory-card { min-height: auto !important; }
      .home-page .directory-card ul { gap: .35rem !important; }
      .home-page .directory-card li { border-bottom: 1px solid rgba(15,23,42,.08); }
      .home-page .directory-card li:last-child { border-bottom: 0; }
      .home-page .directory-card a {
        display: block !important;
        padding: .48rem 0 !important;
        color: #9a3412 !important;
        font-weight: 800 !important;
        line-height: 1.55 !important;
        text-align: right !important;
      }
      .home-page .directory-card a:before { content: none !important; display: none !important; }
      .home-page .link-thumb { display: none !important; }
      @media (max-width: 700px) {
        .home-page .article-directory { grid-template-columns: 1fr !important; }
        .home-page .directory-card { padding: 1rem !important; }
        .home-page .directory-card a { font-size: .95rem !important; }
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
