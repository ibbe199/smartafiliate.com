(function () {
  const GTM_ID = 'GTM-P96QVPT3';

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

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

  function normalizeText(value) {
    if (!value) return value;
    return value.replace(/smartafiliate/gi, BRAND);
  }

  function normalizeBranding() {
    document.title = normalizeText(document.title);

    document.querySelectorAll('meta[content]').forEach(function (meta) {
      const content = meta.getAttribute('content');
      const next = normalizeText(content);
      if (next !== content) meta.setAttribute('content', next);
    });

    document.querySelectorAll('.logo').forEach(function (logo) {
      const light = logo.querySelector('.logo-text-light');
      const accent = logo.querySelector('.logo-text-accent');
      if (light && accent) {
        light.textContent = 'Smart';
        accent.textContent = 'afiliate';
      }
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || !/smartafiliate/i.test(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      node.nodeValue = normalizeText(node.nodeValue);
    });
  }

  function injectMobileFixes() {
    if (document.getElementById('smartafiliate-mobile-fixes')) return;
    const style = document.createElement('style');
    style.id = 'smartafiliate-mobile-fixes';
    style.textContent = `
      @media (max-width: 900px) {
        html, body { width: 100%; overflow-x: hidden; }
        .container { width: min(100% - 1.25rem, 1200px) !important; }
        .site-header { position: sticky; top: 0; z-index: 1000; }
        .header-inner { padding: .75rem 0 !important; gap: .75rem !important; }
        .logo { min-width: 0; }
        .logo-text { font-size: 1.15rem !important; line-height: 1 !important; }
        .menu-toggle { display: inline-flex !important; }
        .main-nav { display: none !important; }
        .main-nav.active { display: flex !important; }
        .header-actions { display: none !important; }
        .page-hero { padding: 2.5rem 0 2rem !important; }
        .page-hero h1 { font-size: clamp(2rem, 8vw, 3rem) !important; line-height: 1.25 !important; }
        .page-hero p { font-size: 1rem !important; line-height: 1.9 !important; max-width: 100% !important; }
        .cta-strip { display: block !important; text-align: center !important; padding: 1rem !important; }
        .cta-actions, .hero-buttons, .review-actions, .hub-actions, .learn-actions { display: grid !important; grid-template-columns: 1fr !important; gap: .75rem !important; width: 100% !important; }
        .cta-primary, .cta-secondary, .btn-primary, .btn-secondary, .hub-primary, .hub-secondary, .learn-primary, .learn-secondary { width: 100% !important; min-height: 48px !important; padding: .75rem 1rem !important; text-align: center !important; }
        .decision-grid, .articles-grid, .tools-grid, .review-grid, .cards-grid, .quick-grid, .info-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
        .section, .section-alt { padding: 3rem 0 !important; }
        .section-header { margin-bottom: 1.5rem !important; }
        .article-image, .post-image { height: 190px !important; }
        .article-content, .post-content, .tool-card, .review-card, .decision-card, .info-card { padding: 1rem !important; }
        .article-meta, .post-meta { flex-direction: column !important; align-items: flex-start !important; gap: .4rem !important; }
        .tool-preview { height: 120px !important; }
        .newsletter { padding: 1.25rem !important; }
        .newsletter-form { display: grid !important; grid-template-columns: 1fr !important; }
        .newsletter-input, .newsletter-btn { width: 100% !important; }
        .footer-grid { grid-template-columns: 1fr !important; text-align: center !important; }
        .footer-col { align-items: center !important; }
        img { max-width: 100% !important; height: auto; }
      }
      @media (max-width: 480px) {
        .container { width: min(100% - 1rem, 1200px) !important; }
        .page-hero h1 { font-size: 2rem !important; }
        .section-header h2 { font-size: 1.6rem !important; }
        .article-image, .post-image { height: 170px !important; }
        .share-buttons { display: grid !important; grid-template-columns: 1fr !important; }
        .share-btn { width: 100% !important; }
      }
    `;
    document.head.appendChild(style);
  }

  function initSharedFixes() {
    normalizeBranding();
    injectMobileFixes();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSharedFixes);
  } else {
    initSharedFixes();
  }
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
  if (nav.classList.contains('active') && !nav.contains(event.target) && !button.contains(event.target)) {
    closeMenu();
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 900) closeMenu();
});

window.addEventListener('scroll', function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  if (window.scrollY > 50) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});
