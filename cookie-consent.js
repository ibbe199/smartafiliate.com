(function () {
  const ADSENSE_CLIENT = 'ca-pub-8104771152321322';
  const GTM_ID = 'GTM-P96QVPT3';

  function injectGTM() {
    window.dataLayer = window.dataLayer || [];
    if (!window.__smartafiliateGTMStart) {
      window.__smartafiliateGTMStart = true;
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    }
    if (document.querySelector('script[src*="googletagmanager.com/gtm.js?id=' + GTM_ID + '"]')) return;
    const firstScript = document.getElementsByTagName('script')[0];
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    firstScript.parentNode.insertBefore(gtmScript, firstScript);
  }

  function injectGTMNoScript() {
    if (!document.body || document.getElementById('gtm-noscript-fallback')) return;
    const wrapper = document.createElement('div');
    wrapper.id = 'gtm-noscript-fallback';
    wrapper.innerHTML = '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' + GTM_ID + '" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
    document.body.insertBefore(wrapper, document.body.firstChild);
  }

  function injectAdSense() {
    if (window.__smartafiliateAdsenseLoaded) return;
    if (document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
      window.__smartafiliateAdsenseLoaded = true;
      return;
    }
    window.__smartafiliateAdsenseLoaded = true;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + ADSENSE_CLIENT;
    s.crossOrigin = 'anonymous';
    document.head.appendChild(s);
  }

  function injectArabicPolish() {
    if (document.getElementById('arabic-polish-loader')) return;
    const s = document.createElement('script');
    s.id = 'arabic-polish-loader';
    s.defer = true;
    s.src = '/arabic-polish.js';
    document.head.appendChild(s);
  }

  function injectHeaderPolish(){
    if (document.getElementById('header-polish-loader')) return;
    const s = document.createElement('script');
    s.id = 'header-polish-loader';
    s.defer = true;
    s.src = '/header-polish.js';
    document.head.appendChild(s);
  }

  function injectGlobalUnify(){
    if (document.getElementById('global-unify-loader')) return;
    const s = document.createElement('script');
    s.id = 'global-unify-loader';
    s.defer = true;
    s.src = '/global-unify.js';
    document.head.appendChild(s);
  }

  function runWhenIdle(callback, timeout) {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(callback, { timeout: timeout || 6000 });
    } else {
      setTimeout(callback, timeout || 3500);
    }
  }

  function loadGTMAfterPageIsUsable() {
    window.addEventListener('load', function () {
      runWhenIdle(injectGTM, 5000);
      runWhenIdle(injectGTMNoScript, 5500);
    }, { once: true, passive: true });
  }

  function loadAdsenseAfterPageIsUsable() {
    window.addEventListener('load', function () {
      runWhenIdle(injectAdSense, 7000);
    }, { once: true, passive: true });

    ['scroll', 'touchstart', 'keydown'].forEach(function (eventName) {
      window.addEventListener(eventName, function () {
        setTimeout(injectAdSense, 1200);
      }, { once: true, passive: true });
    });
  }

  injectArabicPolish();
  injectHeaderPolish();
  injectGlobalUnify();
  loadGTMAfterPageIsUsable();
  loadAdsenseAfterPageIsUsable();
})();
