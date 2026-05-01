(function () {
  'use strict';

  function injectScript(src, id) {
    if (document.getElementById(id)) return;
    const s = document.createElement('script');
    s.id = id;
    s.defer = true;
    s.src = src + (src.includes('?') ? '&' : '?') + 'v=20260501-clean';
    document.head.appendChild(s);
  }

  function injectAll() {
    // Keep only safe scripts that do not rewrite the visual identity.
    injectScript('/auto-internal-links.js', 'auto-internal-links-loader');
    injectScript('/mobile-menu-fix.js', 'mobile-menu-fix-loader');

    // Disabled legacy identity rewriters:
    // /arabic-polish.js      hides images and rewrites page text/SEO
    // /header-polish.js      adds AI Tool Finder / Find Tool / Start bar
    // /global-unify.js       forces old cards and hidden images
    // /homepage-footer-topics.js can duplicate footer links
    // /button-polish.js      overrides all buttons globally
  }

  injectAll();
})();
