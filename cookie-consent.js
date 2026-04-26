(function () {
  const STORAGE_KEY = 'smartafiliate_cookie_consent';
  const GA_ID = 'G-9T2MP7F5T2';
  const GTM_ID = 'GTM-P96QVPT3';

  function loadGoogleTagManager() {
    if (window.__smartafiliateGTMLoaded) return;
    window.__smartafiliateGTMLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    if (!document.querySelector('script[src*="googletagmanager.com/gtm.js?id=' + GTM_ID + '"]')) {
      const firstScript = document.getElementsByTagName('script')[0];
      const gtmScript = document.createElement('script');
      gtmScript.async = true;
      gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
      firstScript.parentNode.insertBefore(gtmScript, firstScript);
    }
  }

  function insertGtmNoscriptFallback() {
    if (!document.body || document.getElementById('gtm-noscript-fallback')) return;
    const wrapper = document.createElement('div');
    wrapper.id = 'gtm-noscript-fallback';
    wrapper.innerHTML = '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' + GTM_ID + '" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
    document.body.insertBefore(wrapper, document.body.firstChild);
  }

  function applySafeAccessibilityFixes() {
    if (!document.getElementById('smartafiliate-accessibility-fixes')) {
      const style = document.createElement('style');
      style.id = 'smartafiliate-accessibility-fixes';
      style.textContent = ':root{--muted:#334155;--text:#0f172a}.article-excerpt,.post-excerpt,.section-header p,.card p,.tool-card p,.info-card p,.info-card li,.footer-description,.article-meta,.post-meta{color:#334155!important}.page-hero p,.hero p{color:rgba(255,255,255,.92)!important}.main-nav a{color:rgba(255,255,255,.94)!important}a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid #f59e0b!important;outline-offset:3px!important;border-radius:10px}';
      document.head.appendChild(style);
    }

    document.querySelectorAll('button').forEach(function (button) {
      const text = (button.textContent || '').trim();
      if (button.classList.contains('menu-toggle')) {
        button.setAttribute('aria-label', 'فتح وإغلاق قائمة التنقل');
        button.setAttribute('aria-controls', 'mainNav');
        if (!button.getAttribute('aria-expanded')) button.setAttribute('aria-expanded', 'false');
        button.setAttribute('type', 'button');
      } else if (!button.getAttribute('aria-label') && !text) {
        button.setAttribute('aria-label', 'زر تفاعلي');
      }
    });

    document.querySelectorAll('a[href]').forEach(function (link) {
      if (!link.getAttribute('aria-label') && !(link.textContent || '').trim()) {
        link.setAttribute('aria-label', 'رابط داخل موقع Smartafiliate');
      }
    });

    document.querySelectorAll('img').forEach(function (img) {
      if (!img.hasAttribute('alt') || !img.getAttribute('alt').trim()) {
        const card = img.closest('.article-card, .post-card, .tool-card, .review-card, .decision-card');
        const title = card ? card.querySelector('h1,h2,h3,h4,a') : null;
        img.setAttribute('alt', title ? title.textContent.trim() : 'صورة توضيحية من Smartafiliate');
      }
      if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
      if (!img.hasAttribute('loading') && !img.closest('.page-hero')) img.setAttribute('loading', 'lazy');
    });
  }

  function saveConsent(value) {
    localStorage.setItem(STORAGE_KEY, value);
  }

  function hasAnalyticsLoaded() {
    return !!window.__smartafiliateAnalyticsLoaded;
  }

  function loadAnalytics() {
    if (hasAnalyticsLoaded()) return;
    window.__smartafiliateAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);

    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function removeBanner() {
    const existing = document.getElementById('cookie-consent-banner');
    if (existing) existing.remove();
  }

  function buildBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.style.position = 'fixed';
    banner.style.left = '20px';
    banner.style.right = '20px';
    banner.style.bottom = '20px';
    banner.style.zIndex = '9999';
    banner.style.background = '#111827';
    banner.style.color = '#fff';
    banner.style.border = '1px solid rgba(255,255,255,0.12)';
    banner.style.borderRadius = '16px';
    banner.style.padding = '18px';
    banner.style.boxShadow = '0 12px 30px rgba(0,0,0,0.25)';
    banner.style.maxWidth = '980px';
    banner.style.margin = '0 auto';

    banner.innerHTML = '<div style="display:flex;gap:16px;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;">' +
      '<div style="flex:1 1 420px;min-width:260px;">' +
        '<div style="font-size:18px;font-weight:700;margin-bottom:8px;">🍪 ملفات تعريف الارتباط</div>' +
        '<div style="font-size:14px;line-height:1.8;color:#e5e7eb;">نستخدم ملفات تعريف الارتباط لتحسين تجربتك، وقياس الزيارات، وفهم كيفية استخدام الموقع. يمكنك قبولها أو رفضها، وقراءة التفاصيل في <a href="/cookie-policy.html" style="color:#f59e0b;text-decoration:underline;">سياسة الكوكيز</a>.</div>' +
      '</div>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;">' +
        '<button id="cookie-reject-btn" style="border:none;border-radius:10px;padding:10px 16px;background:#374151;color:#fff;cursor:pointer;font-weight:700;">رفض</button>' +
        '<button id="cookie-accept-btn" style="border:none;border-radius:10px;padding:10px 16px;background:#ea580c;color:#fff;cursor:pointer;font-weight:700;">قبول</button>' +
      '</div>' +
    '</div>';

    document.body.appendChild(banner);

    document.getElementById('cookie-accept-btn').addEventListener('click', function () {
      saveConsent('accepted');
      loadAnalytics();
      removeBanner();
    });

    document.getElementById('cookie-reject-btn').addEventListener('click', function () {
      saveConsent('rejected');
      removeBanner();
    });
  }

  loadGoogleTagManager();

  document.addEventListener('DOMContentLoaded', function () {
    insertGtmNoscriptFallback();
    applySafeAccessibilityFixes();
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'accepted') {
      loadAnalytics();
      return;
    }
    if (!saved) buildBanner();
  });
})();
