(function () {
  function injectUnifiedLayoutFixes() {
    if (document.getElementById('unified-layout-fixes')) return;
    const style = document.createElement('style');
    style.id = 'unified-layout-fixes';
    style.textContent = `
      /* توحيد مقاسات كروت الأدوات والصور في جميع الصفحات */
      .tools-grid,.tool-grid,.cards-grid:has(.tool-card){display:grid!important;grid-template-columns:repeat(auto-fit,minmax(320px,1fr))!important;gap:2.1rem!important;align-items:stretch!important}
      .tool-card{width:100%!important;min-height:430px!important;padding:2rem 1.75rem!important;border-radius:30px!important;display:flex!important;flex-direction:column!important;justify-content:space-between!important;text-align:center!important;overflow:hidden!important;box-shadow:0 22px 55px rgba(15,23,42,.12)!important}
      .tool-preview{width:100%!important;height:210px!important;min-height:210px!important;max-height:210px!important;border-radius:24px!important;margin:0 0 1.45rem!important;padding:1.25rem!important;overflow:hidden!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:.75rem!important;text-align:center!important}
      .preview-icon{width:72px!important;height:72px!important;min-width:72px!important;min-height:72px!important;font-size:2.1rem!important;border-radius:22px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important}
      .preview-title{font-size:1.4rem!important;line-height:1.35!important;font-weight:950!important}.preview-subtitle{font-size:1.04rem!important;line-height:1.7!important;max-width:95%!important}.tool-card h3{font-size:1.5rem!important;line-height:1.55!important;font-weight:900!important;margin:.25rem 0 .9rem!important;color:#0b1f3a!important}.tool-card p{font-size:1.06rem!important;line-height:1.9!important;color:#475569!important;margin:0 auto 1.45rem!important;max-width:94%!important}.tool-link,.tool-card .tool-link{align-self:center!important;font-size:1.02rem!important;padding:.85rem 1.45rem!important;border-radius:999px!important;font-weight:900!important;min-width:150px!important}
      @media (min-width:1100px){.tools-grid,.tool-grid,.cards-grid:has(.tool-card){grid-template-columns:repeat(3,minmax(0,1fr))!important}}
      @media (max-width:900px){.tools-grid,.tool-grid,.cards-grid:has(.tool-card){grid-template-columns:repeat(auto-fit,minmax(280px,1fr))!important}}
      @media (max-width:700px){.tools-grid,.tool-grid,.cards-grid:has(.tool-card){grid-template-columns:1fr!important;gap:1.35rem!important}.tool-card{min-height:auto!important;padding:1.55rem!important;border-radius:24px!important}.tool-preview{height:180px!important;min-height:180px!important;max-height:180px!important;border-radius:20px!important}.preview-icon{width:60px!important;height:60px!important;min-width:60px!important;min-height:60px!important;font-size:1.75rem!important}.preview-title{font-size:1.2rem!important}.preview-subtitle{font-size:.96rem!important}.tool-card h3{font-size:1.28rem!important}.tool-card p{font-size:.98rem!important}}

      /* تنظيم صفحة تعلم AI */
      body:has(script[src*="learn-ai.js"]) .articles-grid{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(340px,1fr))!important;gap:2rem!important;align-items:stretch!important}
      body:has(script[src*="learn-ai.js"]) .article-card{height:100%!important;display:flex!important;flex-direction:column!important;border-radius:24px!important;overflow:hidden!important;box-shadow:0 14px 36px rgba(15,23,42,.08)!important;background:#fff!important}
      body:has(script[src*="learn-ai.js"]) .article-image{height:230px!important;min-height:230px!important;background:#071426!important;overflow:hidden!important}
      body:has(script[src*="learn-ai.js"]) .article-image img{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center!important}
      body:has(script[src*="learn-ai.js"]) .article-content{display:flex!important;flex-direction:column!important;flex:1!important;padding:1.45rem!important;text-align:right!important}
      body:has(script[src*="learn-ai.js"]) .article-card h3{font-size:1.22rem!important;line-height:1.65!important;margin-bottom:.75rem!important;color:#0b1f3a!important}
      body:has(script[src*="learn-ai.js"]) .article-excerpt{font-size:.98rem!important;line-height:1.85!important;color:#475569!important;margin-bottom:1rem!important}
      body:has(script[src*="learn-ai.js"]) .article-meta{margin-top:auto!important;padding-top:1rem!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:1rem!important}
      body:has(script[src*="learn-ai.js"]) .shortcut-links{display:flex!important;flex-wrap:wrap!important;gap:.55rem!important;margin:.35rem 0 1rem!important}
      body:has(script[src*="learn-ai.js"]) .shortcut-links a{font-size:.86rem!important;font-weight:800!important;color:#c2410c!important}
      body:has(script[src*="learn-ai.js"]) .learn-cta,body:has(script[src*="learn-ai.js"]) .next-step-box{border-radius:18px!important;padding:1.1rem 1.25rem!important;margin-top:1.5rem!important;background:#fff!important;box-shadow:0 8px 24px rgba(15,23,42,.06)!important}
      @media (min-width:1000px){body:has(script[src*="learn-ai.js"]) .articles-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}}
      @media (max-width:760px){body:has(script[src*="learn-ai.js"]) .articles-grid{grid-template-columns:1fr!important;gap:1.25rem!important}body:has(script[src*="learn-ai.js"]) .article-image{height:210px!important;min-height:210px!important}body:has(script[src*="learn-ai.js"]) .article-content{padding:1.15rem!important}body:has(script[src*="learn-ai.js"]) .article-card h3{font-size:1.08rem!important}}
    `;
    document.head.appendChild(style);
  }
  document.addEventListener('DOMContentLoaded', injectUnifiedLayoutFixes);
})();
