(function () {
  const STORAGE_KEY = 'smartafiliate_cookie_consent';

  function saveConsent(value) {
    localStorage.setItem(STORAGE_KEY, value);
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

    banner.innerHTML = `
      <div style="display:flex;gap:16px;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;">
        <div style="flex:1 1 420px;min-width:260px;">
          <div style="font-size:18px;font-weight:700;margin-bottom:8px;">🍪 ملفات تعريف الارتباط</div>
          <div style="font-size:14px;line-height:1.8;color:#e5e7eb;">
            نستخدم ملفات تعريف الارتباط لتحسين تجربتك، وقياس الزيارات، وفهم كيفية استخدام الموقع.
            يمكنك قبولها أو رفضها، وقراءة التفاصيل في
            <a href="/cookie-policy.html" style="color:#f59e0b;text-decoration:underline;">سياسة الكوكيز</a>.
          </div>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;">
          <button id="cookie-reject-btn" style="border:none;border-radius:10px;padding:10px 16px;background:#374151;color:#fff;cursor:pointer;font-weight:700;">رفض</button>
          <button id="cookie-accept-btn" style="border:none;border-radius:10px;padding:10px 16px;background:#ea580c;color:#fff;cursor:pointer;font-weight:700;">قبول</button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);

    document.getElementById('cookie-accept-btn').addEventListener('click', function () {
      saveConsent('accepted');
      removeBanner();
    });

    document.getElementById('cookie-reject-btn').addEventListener('click', function () {
      saveConsent('rejected');
      removeBanner();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) buildBanner();
  });
})();