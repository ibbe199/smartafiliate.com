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

  function loadAdsenseAfterPageIsUsable() {
    const run = function () {
      if ('requestIdleCallback' in window) requestIdleCallback(injectAdSense, { timeout: 4500 });
      else setTimeout(injectAdSense, 3500);
    };
    if (document.readyState === 'complete') run();
    else window.addEventListener('load', run, { once: true, passive: true });

    ['scroll', 'touchstart', 'mousemove', 'keydown'].forEach(function (eventName) {
      window.addEventListener(eventName, injectAdSense, { once: true, passive: true });
    });
  }

  injectGTM();
  document.addEventListener('DOMContentLoaded', injectGTMNoScript, { once: true });
  loadAdsenseAfterPageIsUsable();
})();
