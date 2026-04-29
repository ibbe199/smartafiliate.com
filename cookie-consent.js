(function () {
  function injectScript(src, id){
    if (document.getElementById(id)) return;
    const s = document.createElement('script');
    s.id = id;
    s.defer = true;
    s.src = src;
    document.head.appendChild(s);
  }

  function injectAll(){
    injectScript('/arabic-polish.js','arabic-polish-loader');
    injectScript('/header-polish.js','header-polish-loader');
    injectScript('/global-unify.js','global-unify-loader');
    injectScript('/homepage-footer-topics.js','footer-topics-loader');
    injectScript('/auto-internal-links.js','auto-internal-links-loader');
    injectScript('/button-polish.js','button-polish-loader');
    injectScript('/mobile-menu-fix.js','mobile-menu-fix-loader');
  }

  injectAll();
})();