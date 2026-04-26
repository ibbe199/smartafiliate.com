(function () {
  const STORAGE_KEY = 'smartafiliate_cookie_consent';
  const GA_ID = 'G-9T2MP7F5T2';
  const GTM_ID = 'GTM-P96QVPT3';

  function injectUnifiedCardSizing() {
    if (document.getElementById('unified-card-sizing-upgrade')) return;
    const style = document.createElement('style');
    style.id = 'unified-card-sizing-upgrade';
    style.textContent = `
      .tools-grid{grid-template-columns:repeat(auto-fit,minmax(300px,1fr))!important;gap:2rem!important}
      .tool-card{min-height:390px!important;padding:2rem 1.7rem!important;border-radius:28px!important;display:flex!important;flex-direction:column!important;justify-content:space-between!important}
      .tool-preview{height:185px!important;border-radius:24px!important;margin-bottom:1.3rem!important;display:flex!important;align-items:center!important;justify-content:center!important}
      .preview-icon{width:68px!important;height:68px!important;font-size:2rem!important}
      .tool-card h3{font-size:1.45rem!important}
      .tool-card p{font-size:1.05rem!important;line-height:1.9!important}
      .tool-link{font-size:1rem!important;padding:.8rem 1.3rem!important}
    `;
    document.head.appendChild(style);
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectUnifiedCardSizing();
  });
})();
