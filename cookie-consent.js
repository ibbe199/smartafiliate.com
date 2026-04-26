(function () {
  const STORAGE_KEY = 'smartafiliate_cookie_consent';
  const GA_ID = 'G-9T2MP7F5T2';
  const GTM_ID = 'GTM-P96QVPT3';

  const thumbs = {
    '/posts-ai/chatgpt-review.html': ['assets/images/ai-reviews.webp', 'مراجعة ChatGPT وأدوات الذكاء الاصطناعي'],
    '/posts-ai/canva-ai-review.html': ['assets/images/ai-reviews.webp', 'مراجعة Canva AI وأدوات التصميم بالذكاء الاصطناعي'],
    '/posts-ai/google-ai-content-acceptance.html': ['assets/images/ai-reviews.webp', 'مراجعات أدوات الذكاء الاصطناعي وتحليل المحتوى'],
    '/posts-ai/ollama-guide.html': ['assets/images/ai-guide.webp', 'دليل أدوات الذكاء الاصطناعي وتشغيل النماذج محليا'],
    '/posts-ai/llama3-guide.html': ['assets/images/ai-guide.webp', 'دليل نماذج الذكاء الاصطناعي مفتوحة المصدر']
  };

  function abs(path) { return new URL('/' + path.replace(/^\//, ''), location.origin).href; }

  function setMeta(selector, value) {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', value);
  }

  function injectHomeCardSizing() {
    if (!document.body || !document.body.classList.contains('home-page')) return;
    if (document.getElementById('home-card-sizing-upgrade')) return;
    const style = document.createElement('style');
    style.id = 'home-card-sizing-upgrade';
    style.textContent = `
      body.home-page .home-primary-section .tools-grid {
        gap: 2rem !important;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
      }
      body.home-page .home-primary-section .tool-card {
        padding: 2rem 1.7rem !important;
        border-radius: 28px !important;
        min-height: 390px !important;
        box-shadow: 0 22px 55px rgba(15,23,42,.12) !important;
      }
      body.home-page .home-primary-section .tool-preview {
        height: 185px !important;
        border-radius: 24px !important;
        margin-bottom: 1.35rem !important;
      }
      body.home-page .home-primary-section .preview-icon {
        width: 68px !important;
        height: 68px !important;
        font-size: 2rem !important;
        border-radius: 20px !important;
      }
      body.home-page .home-primary-section .preview-title {
        font-size: 1.35rem !important;
        font-weight: 950 !important;
      }
      body.home-page .home-primary-section .preview-subtitle {
        font-size: 1rem !important;
        line-height: 1.7 !important;
      }
      body.home-page .home-primary-section .tool-card h3 {
        font-size: 1.45rem !important;
        line-height: 1.55 !important;
        margin-bottom: .85rem !important;
      }
      body.home-page .home-primary-section .tool-card p {
        font-size: 1.05rem !important;
        line-height: 1.9 !important;
        margin-bottom: 1.35rem !important;
      }
      body.home-page .home-primary-section .tool-link {
        font-size: 1rem !important;
        padding: .82rem 1.35rem !important;
        font-weight: 900 !important;
      }
      @media (max-width:700px) {
        body.home-page .home-primary-section .tool-card { min-height: auto !important; padding: 1.55rem !important; }
        body.home-page .home-primary-section .tool-preview { height: 160px !important; }
        body.home-page .home-primary-section .tool-card h3 { font-size: 1.25rem !important; }
        body.home-page .home-primary-section .tool-card p { font-size: .98rem !important; }
      }
    `;
    document.head.appendChild(style);
  }

  function injectThumb() {
    const item = thumbs[location.pathname];
    if (item && !document.querySelector('.article-featured-thumbnail')) {
      const src = '/' + item[0];
      const alt = item[1];
      const hero = document.querySelector('.page-hero .container');
      if (hero) {
        if (!document.getElementById('article-featured-thumbnail-style')) {
          const style = document.createElement('style');
          style.id = 'article-featured-thumbnail-style';
          style.textContent = '.article-featured-thumbnail{margin:2rem auto 0;max-width:1120px;border-radius:24px;overflow:hidden;border:1px solid rgba(255,255,255,.14);box-shadow:0 24px 70px rgba(2,6,23,.24);background:#071426}.article-featured-thumbnail img{display:block;width:100%;aspect-ratio:1200/630;object-fit:cover}@media(max-width:640px){.article-featured-thumbnail{margin-top:1.25rem;border-radius:16px}}';
          document.head.appendChild(style);
        }
        const fig = document.createElement('figure');
        fig.className = 'article-featured-thumbnail';
        fig.innerHTML = '<img src="' + src + '" alt="' + alt + '" width="1200" height="630" loading="eager" decoding="async">';
        hero.appendChild(fig);
      }
      setMeta('meta[property="og:image"]', abs(src));
      setMeta('meta[name="twitter:image"]', abs(src));
      const json = document.querySelector('script[type="application/ld+json"]');
      if (json) {
        try { const data = JSON.parse(json.textContent); data.image = [abs(src)]; json.textContent = JSON.stringify(data); } catch(e) {}
      }
    }

    const map = {
      'posts-ai/chatgpt-review.html': thumbs['/posts-ai/chatgpt-review.html'],
      'posts-ai/canva-ai-review.html': thumbs['/posts-ai/canva-ai-review.html'],
      'posts-ai/google-ai-content-acceptance.html': thumbs['/posts-ai/google-ai-content-acceptance.html'],
      'posts-ai/ollama-guide.html': thumbs['/posts-ai/ollama-guide.html'],
      'posts-ai/llama3-guide.html': thumbs['/posts-ai/llama3-guide.html']
    };
    document.querySelectorAll('.post-card').forEach(function(card) {
      const a = card.querySelector('.post-title a[href], h3 a[href]');
      const img = card.querySelector('.post-image img');
      if (!a || !img || !map[a.getAttribute('href')]) return;
      img.src = map[a.getAttribute('href')][0];
      img.alt = map[a.getAttribute('href')][1];
    });
  }

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

  function loadAnalytics() {
    if (window.__smartafiliateAnalyticsLoaded) return;
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

  function buildBanner() {
    if (document.getElementById('cookie-consent-banner')) return;
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.style.cssText = 'position:fixed;left:20px;right:20px;bottom:20px;z-index:9999;background:#111827;color:#fff;border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:18px;box-shadow:0 12px 30px rgba(0,0,0,.25);max-width:980px;margin:0 auto';
    banner.innerHTML = '<div style="display:flex;gap:16px;align-items:flex-start;justify-content:space-between;flex-wrap:wrap"><div style="flex:1 1 420px;min-width:260px"><div style="font-size:18px;font-weight:700;margin-bottom:8px">🍪 ملفات تعريف الارتباط</div><div style="font-size:14px;line-height:1.8;color:#e5e7eb">نستخدم ملفات تعريف الارتباط لتحسين تجربتك، وقياس الزيارات، وفهم كيفية استخدام الموقع. يمكنك قبولها أو رفضها، وقراءة التفاصيل في <a href="/cookie-policy.html" style="color:#f59e0b;text-decoration:underline">سياسة الكوكيز</a>.</div></div><div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center"><button id="cookie-reject-btn" type="button" style="border:none;border-radius:10px;padding:10px 16px;background:#374151;color:#fff;cursor:pointer;font-weight:700">رفض</button><button id="cookie-accept-btn" type="button" style="border:none;border-radius:10px;padding:10px 16px;background:#ea580c;color:#fff;cursor:pointer;font-weight:700">قبول</button></div></div>';
    document.body.appendChild(banner);
    document.getElementById('cookie-accept-btn').onclick = function(){ localStorage.setItem(STORAGE_KEY, 'accepted'); loadAnalytics(); banner.remove(); };
    document.getElementById('cookie-reject-btn').onclick = function(){ localStorage.setItem(STORAGE_KEY, 'rejected'); banner.remove(); };
  }

  loadGoogleTagManager();
  document.addEventListener('DOMContentLoaded', function () {
    insertGtmNoscriptFallback();
    injectHomeCardSizing();
    injectThumb();
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'accepted') loadAnalytics();
    if (!saved) buildBanner();
  });
})();
