(function () {
  const GTM_ID = 'GTM-P96QVPT3';
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  if (!document.querySelector('script[src*="googletagmanager.com/gtm.js?id=' + GTM_ID + '"]')) {
    const firstScript = document.getElementsByTagName('script')[0];
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    firstScript.parentNode.insertBefore(gtmScript, firstScript);
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!document.body || document.getElementById('gtm-noscript-fallback')) return;
    const wrapper = document.createElement('div');
    wrapper.id = 'gtm-noscript-fallback';
    wrapper.innerHTML = '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' + GTM_ID + '" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
    document.body.insertBefore(wrapper, document.body.firstChild);
  });
})();

(function () {
  const BRAND = 'Smartafiliate';

  const IMAGE_BY_TOPIC = [
    { image: '/assets/images/ai-tools-review.png', match: ['30-best-ai-writing-tools', 'chatgpt-review', 'canva-ai-review', 'jasper-ai-review', 'writesonic-review', 'copyai-review', 'dalle3-review', 'midjourney-guide', 'best-ai-design-tools'] },
    { image: '/assets/images/open-source-ai-models.png', match: ['llama3-guide', 'mistral-guide', 'falcon-guide', 'ollama-guide', 'open-source'] },
    { image: '/assets/images/ai-seo-guide.png', match: ['latest-ai-news-2026', 'build-website-with-ai-in-minutes', 'google-ai-content-acceptance', 'google-penalty-ai-content-truth', 'ai-content-google-opportunity-risk', 'ai-seo-content-success', 'content-structure-seo', 'seo-for-affiliate-sites'] },
    { image: '/assets/images/ai-learning-roadmap.png', match: ['complete-ai-learning-path', 'what-is-ai-beginners', 'python-for-ai-beginners', 'math-for-ai-beginners', 'free-ai-courses-arabic', 'best-books-to-learn-ai', 'ai-projects-for-beginners', 'learning-tips-for-ai', 'ai-learning-communities', 'learn-ai'] },
    { image: '/assets/images/ai-productivity-tools.png', match: ['ai-automation-productivity', 'latest-ai-automation-uses', 'future-of-ai-automation', 'ai-affiliate-tools', 'affiliate-funnel-guide', 'affiliate-growth-strategy', 'affiliate-mistakes', 'arab-affiliate-programs', 'what-is-affiliate-marketing', 'ai-content-sales-system', 'tiktok-growth-engineering', 'ai-design-for-social-media', 'ai-logo-design-guide', '27-ai-and-personal-brand', '28-ai-newsletters', '29-90-day-ai-plan', '30-day-ai-plan', '90-day-ai-plan', 'ai-tools-for-affiliate-marketing', 'affiliate-marketing-mistakes', 'best-affiliate-programs-arab-world', 'best-content-structure'] }
  ];

  function normalizeBranding() {
    document.title = (document.title || '').replace(/smartafiliate/gi, BRAND);
    document.querySelectorAll('meta[content]').forEach(function (meta) {
      const value = meta.getAttribute('content') || '';
      const next = value.replace(/smartafiliate/gi, BRAND);
      if (next !== value) meta.setAttribute('content', next);
    });
    document.querySelectorAll('.logo').forEach(function (logo) {
      const light = logo.querySelector('.logo-text-light');
      const accent = logo.querySelector('.logo-text-accent');
      if (light && accent) { light.textContent = 'Smart'; accent.textContent = 'afiliate'; }
    });
  }

  function imageForHref(href) {
    const normalized = (href || '').toLowerCase();
    const topic = IMAGE_BY_TOPIC.find(function (group) {
      return group.match.some(function (key) { return normalized.includes(key); });
    });
    return topic ? topic.image : '';
  }

  function linkHomepageImages() {
    if (!document.body.classList.contains('home-page')) return;
    document.querySelectorAll('.article-directory a[href]').forEach(function (link) {
      if (link.querySelector('img.link-thumb')) return;
      const image = imageForHref(link.getAttribute('href'));
      if (!image) return;
      const img = document.createElement('img');
      img.className = 'link-thumb';
      img.src = image;
      img.alt = link.textContent.trim();
      img.loading = 'lazy';
      img.decoding = 'async';
      img.onerror = function () { img.remove(); };
      link.prepend(img);
    });
  }

  function injectSharedStyles() {
    if (document.getElementById('smartafiliate-shared-fixes')) return;
    const style = document.createElement('style');
    style.id = 'smartafiliate-shared-fixes';
    style.textContent = `
      .article-image, .post-image { width: 100% !important; height: auto !important; aspect-ratio: 16 / 9 !important; overflow: hidden !important; background: linear-gradient(135deg,#0b1f3a,#12305a) !important; }
      .article-image img, .post-image img { width: 100% !important; height: 100% !important; object-fit: cover !important; object-position: center center !important; display: block !important; }
      .article-card, .post-card { display: flex !important; flex-direction: column !important; height: 100% !important; }
      .article-content, .post-content { flex: 1 1 auto !important; display: flex !important; flex-direction: column !important; }
      .article-meta, .post-meta { margin-top: auto !important; }
      .home-page .article-directory a { align-items: center !important; gap: .65rem !important; }
      .home-page .article-directory a:before { display: none !important; }
      .home-page .link-thumb { width: 72px !important; height: 44px !important; object-fit: cover !important; border-radius: 10px !important; flex: 0 0 72px !important; box-shadow: 0 6px 14px rgba(15,23,42,.12); background: #0b1f3a; }
      @media (max-width: 900px) {
        html, body { width: 100%; overflow-x: hidden; }
        .container { width: min(100% - 1.25rem, 1200px) !important; }
        .site-header { position: sticky; top: 0; z-index: 1000; }
        .header-inner { padding: .75rem 0 !important; gap: .75rem !important; }
        .logo { min-width: 0; }
        .logo-text { font-size: 1.15rem !important; line-height: 1 !important; }
        .menu-toggle { display: inline-flex !important; }
        .main-nav { display: none !important; }
        .main-nav.active { display: flex !important; }
        .header-actions { display: none !important; }
        .page-hero { padding: 2.5rem 0 2rem !important; }
        .page-hero h1 { font-size: clamp(2rem, 8vw, 3rem) !important; line-height: 1.25 !important; }
        .page-hero p { font-size: 1rem !important; line-height: 1.9 !important; max-width: 100% !important; }
        .cta-strip { display: block !important; text-align: center !important; padding: 1rem !important; }
        .cta-actions, .hero-buttons, .review-actions, .hub-actions, .learn-actions { display: grid !important; grid-template-columns: 1fr !important; gap: .75rem !important; width: 100% !important; }
        .cta-primary, .cta-secondary, .btn-primary, .btn-secondary, .hub-primary, .hub-secondary, .learn-primary, .learn-secondary { width: 100% !important; min-height: 48px !important; padding: .75rem 1rem !important; text-align: center !important; }
        .decision-grid, .articles-grid, .tools-grid, .review-grid, .cards-grid, .quick-grid, .info-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
        .section, .section-alt { padding: 3rem 0 !important; }
        .section-header { margin-bottom: 1.5rem !important; }
        .article-content, .post-content, .tool-card, .review-card, .decision-card, .info-card { padding: 1rem !important; }
        .article-meta, .post-meta { flex-direction: column !important; align-items: flex-start !important; gap: .4rem !important; }
        .tool-preview { height: 120px !important; }
        .footer-grid { grid-template-columns: 1fr !important; text-align: center !important; }
        .footer-col { align-items: center !important; }
        img { max-width: 100% !important; }
      }
      @media (max-width: 480px) {
        .container { width: min(100% - 1rem, 1200px) !important; }
        .page-hero h1 { font-size: 2rem !important; }
        .section-header h2 { font-size: 1.6rem !important; }
        .home-page .link-thumb { width: 86px !important; height: 52px !important; flex-basis: 86px !important; }
      }
    `;
    document.head.appendChild(style);
  }

  function init() { normalizeBranding(); injectSharedStyles(); linkHomepageImages(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

function closeMenu() {
  const nav = document.getElementById('mainNav');
  const button = document.querySelector('.menu-toggle');
  if (!nav || !button) return;
  nav.classList.remove('active');
  button.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

function toggleMenu() {
  const nav = document.getElementById('mainNav');
  const button = document.querySelector('.menu-toggle');
  if (!nav || !button) return;
  const isOpen = nav.classList.toggle('active');
  button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  document.body.classList.toggle('menu-open', isOpen);
}

document.addEventListener('click', function (event) {
  const nav = document.getElementById('mainNav');
  const button = document.querySelector('.menu-toggle');
  if (!nav || !button) return;
  if (nav.classList.contains('active') && !nav.contains(event.target) && !button.contains(event.target)) closeMenu();
});

window.addEventListener('resize', function () { if (window.innerWidth > 900) closeMenu(); });
window.addEventListener('scroll', function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  if (window.scrollY > 50) header.classList.add('header-scrolled');
  else header.classList.remove('header-scrolled');
});
