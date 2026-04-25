(function () {
  const STORAGE_KEY = 'smartafiliate_cookie_consent';
  const GA_ID = 'G-9T2MP7F5T2';
  const GTM_ID = 'GTM-P96QVPT3';

  const FALLBACK_BY_TOPIC = [
    { image: '/assets/images/ai-tools-review.png', keys: ['chatgpt-review','canva-ai-review','jasper-ai-review','writesonic-review','copyai-review','dalle3-review','midjourney-guide','30-best-ai-writing-tools','best-ai-design-tools'] },
    { image: '/assets/images/open-source-ai-models.png', keys: ['llama3-guide','mistral-guide','falcon-guide','ollama-guide'] },
    { image: '/assets/images/ai-seo-guide.png', keys: ['google-ai-content-acceptance','google-penalty-ai-content-truth','ai-content-google-opportunity-risk','ai-seo-content-success','content-structure-seo','latest-ai-news-2026','build-website-with-ai-in-minutes','future-arab-websites-ai','ai-save-or-bury-arab-websites','arab-websites-ai-who-survives','ai-knocks-arab-websites-door','seo-for-affiliate-sites'] },
    { image: '/assets/images/ai-learning-roadmap.png', keys: ['complete-ai-learning-path','what-is-ai-beginners','python-for-ai-beginners','math-for-ai-beginners','free-ai-courses-arabic','best-books-to-learn-ai','ai-projects-for-beginners','learning-tips-for-ai','ai-learning-communities'] },
    { image: '/assets/images/ai-productivity-tools.png', keys: ['ai-automation-productivity','latest-ai-automation-uses','future-of-ai-automation','ai-affiliate-tools','affiliate-funnel-guide','affiliate-growth-strategy','affiliate-mistakes','arab-affiliate-programs','what-is-affiliate-marketing','ai-content-sales-system','tiktok-growth-engineering','ai-design-for-social-media','ai-logo-design-guide','27-ai-and-personal-brand','28-ai-newsletters','29-90-day-ai-plan','30-day-ai-plan','90-day-ai-plan','ai-tools-for-affiliate-marketing','affiliate-marketing-mistakes','best-affiliate-programs-arab-world','best-content-structure'] }
  ];

  function slugFromPath(pathname) {
    return pathname.split('/').pop().replace(/\.html$/i, '');
  }

  function generatedCoverFromPath(pathname) {
    const clean = pathname.replace(/^\//, '').replace(/\.html$/i, '').replace(/\//g, '-');
    return '/assets/generated-covers/' + clean + '.svg';
  }

  function topicFallback(slug) {
    const group = FALLBACK_BY_TOPIC.find(function (item) {
      return item.keys.some(function (key) { return slug.includes(key); });
    });
    return group ? group.image : '/assets/images/ai-tools-review.png';
  }

  function getArticleImageConfig(pathname) {
    const slug = slugFromPath(pathname);
    if (!slug || !pathname.endsWith('.html')) return null;
    if (!pathname.includes('/posts-ai/') && !pathname.includes('/articles/')) return null;
    return {
      src: generatedCoverFromPath(pathname),
      fallback: topicFallback(slug),
      alt: document.querySelector('h1') ? document.querySelector('h1').textContent.trim() : 'صورة مقال Smartafiliate'
    };
  }

  function ensureArticleThumbnailStyles() {
    if (document.getElementById('smartafiliate-article-thumbnail-styles')) return;
    const style = document.createElement('style');
    style.id = 'smartafiliate-article-thumbnail-styles';
    style.textContent = `
      .article-featured-thumbnail { margin: 2rem auto 0; max-width: 1120px; border-radius: 24px; overflow: hidden; border: 1px solid rgba(255,255,255,.14); box-shadow: 0 24px 70px rgba(2,6,23,.24); background:#071426; }
      .article-featured-thumbnail img { display:block; width:100%; aspect-ratio:1200/630; object-fit:cover; }
      .page-hero { --article-cover-opacity:.72; }
      @media(max-width:640px){.article-featured-thumbnail{margin-top:1.25rem;border-radius:16px}}
    `;
    document.head.appendChild(style);
  }

  function setMeta(selector, value) {
    const tag = document.querySelector(selector);
    if (tag) tag.setAttribute('content', value);
  }

  function updateMetaImages(src) {
    const absoluteUrl = new URL(src, window.location.origin).href;
    setMeta('meta[property="og:image"]', absoluteUrl);
    setMeta('meta[name="twitter:image"]', absoluteUrl);
    const jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLd || !jsonLd.textContent.trim()) return;
    try {
      const data = JSON.parse(jsonLd.textContent);
      data.image = [absoluteUrl];
      if (data.author && data.author.name) data.author.name = 'Smartafiliate';
      if (data.publisher && data.publisher.name) data.publisher.name = 'Smartafiliate';
      jsonLd.textContent = JSON.stringify(data);
    } catch (error) {}
  }

  function injectArticleThumbnail() {
    const config = getArticleImageConfig(window.location.pathname);
    if (!config || document.querySelector('.article-featured-thumbnail')) return;
    const heroContainer = document.querySelector('.page-hero .container');
    if (!heroContainer) return;

    ensureArticleThumbnailStyles();
    const hero = document.querySelector('.page-hero');
    if (hero) hero.style.setProperty('--article-cover', 'url("' + config.src + '")');
    updateMetaImages(config.src);

    const wrapper = document.createElement('figure');
    wrapper.className = 'article-featured-thumbnail';
    const image = document.createElement('img');
    image.src = config.src;
    image.alt = config.alt;
    image.loading = 'eager';
    image.decoding = 'async';
    image.width = 1200;
    image.height = 630;
    image.onerror = function () {
      if (image.dataset.fallbackTried === '1') return;
      image.dataset.fallbackTried = '1';
      image.src = config.fallback;
      if (hero) hero.style.setProperty('--article-cover', 'url("' + config.fallback + '")');
      updateMetaImages(config.fallback);
    };
    wrapper.appendChild(image);
    heroContainer.appendChild(wrapper);
  }

  function updatePostsGridThumbnails() {
    document.querySelectorAll('.post-card, .article-card').forEach(function (card) {
      const link = card.querySelector('h3 a[href], .post-title a[href]');
      const img = card.querySelector('.post-image img, .article-image img');
      if (!link || !img) return;
      const href = link.getAttribute('href');
      if (!href || !href.endsWith('.html')) return;
      let pathname;
      try { pathname = new URL(href, window.location.origin).pathname; } catch (e) { return; }
      const config = getArticleImageConfig(pathname);
      if (!config) return;
      img.src = config.src;
      img.alt = link.textContent.trim();
      img.onerror = function () {
        if (img.dataset.fallbackTried === '1') return;
        img.dataset.fallbackTried = '1';
        img.src = config.fallback;
      };
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

  loadGoogleTagManager();

  function saveConsent(value) { localStorage.setItem(STORAGE_KEY, value); }
  function hasAnalyticsLoaded() { return !!window.__smartafiliateAnalyticsLoaded; }
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

  function removeBanner() { const existing = document.getElementById('cookie-consent-banner'); if (existing) existing.remove(); }

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
    banner.innerHTML = `<div style="display:flex;gap:16px;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;"><div style="flex:1 1 420px;min-width:260px;"><div style="font-size:18px;font-weight:700;margin-bottom:8px;">🍪 ملفات تعريف الارتباط</div><div style="font-size:14px;line-height:1.8;color:#e5e7eb;">نستخدم ملفات تعريف الارتباط لتحسين تجربتك، وقياس الزيارات، وفهم كيفية استخدام الموقع. يمكنك قبولها أو رفضها، وقراءة التفاصيل في <a href="/cookie-policy.html" style="color:#f59e0b;text-decoration:underline;">سياسة الكوكيز</a>.</div></div><div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;"><button id="cookie-reject-btn" style="border:none;border-radius:10px;padding:10px 16px;background:#374151;color:#fff;cursor:pointer;font-weight:700;">رفض</button><button id="cookie-accept-btn" style="border:none;border-radius:10px;padding:10px 16px;background:#ea580c;color:#fff;cursor:pointer;font-weight:700;">قبول</button></div></div>`;
    document.body.appendChild(banner);
    document.getElementById('cookie-accept-btn').addEventListener('click', function () { saveConsent('accepted'); loadAnalytics(); removeBanner(); });
    document.getElementById('cookie-reject-btn').addEventListener('click', function () { saveConsent('rejected'); removeBanner(); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    insertGtmNoscriptFallback();
    injectArticleThumbnail();
    updatePostsGridThumbnails();
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'accepted') { loadAnalytics(); return; }
    if (!saved) buildBanner();
  });
})();