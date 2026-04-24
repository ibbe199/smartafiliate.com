(function () {
  var GTM_ID = 'GTM-P96QVPT3';

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  if (!document.querySelector('script[src*="googletagmanager.com/gtm.js?id=' + GTM_ID + '"]')) {
    var firstScript = document.getElementsByTagName('script')[0];
    var gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    firstScript.parentNode.insertBefore(gtmScript, firstScript);
  }

  // 🔥 inject advanced image system
  if (!document.getElementById('smart-images-css')) {
    var link = document.createElement('link');
    link.id = 'smart-images-css';
    link.rel = 'stylesheet';
    link.href = 'smart-images.css';
    document.head.appendChild(link);
  }

  var ARTICLE_IMAGE_MAP = {
    'posts-ai/google-ai-content-acceptance.html': 'assets/images/image_01.jpg',
    'posts-ai/future-arab-websites-ai.html': 'assets/images/image_02.jpg',
    'posts-ai/ai-content-google-opportunity-risk.html': 'assets/images/image_03.jpg',
    'posts-ai/google-penalty-ai-content-truth.html': 'assets/images/image_04.jpg',
    'posts-ai/ai-seo-content-success.html': 'assets/images/image_05.jpg',
    'posts-ai/ai-save-or-bury-arab-websites.html': 'assets/images/image_06.jpg',
    'posts-ai/arab-websites-ai-who-survives.html': 'assets/images/image_07.jpg',
    'posts-ai/ai-knocks-arab-websites-door.html': 'assets/images/image_08.jpg',
    'posts-ai/build-website-with-ai-in-minutes.html': 'assets/images/image_09.jpg',
    'posts-ai/latest-ai-news-2026.html': 'assets/images/image_10.jpg',
    'posts-ai/30-best-ai-writing-tools.html': 'assets/images/image_11.jpg',
    'posts-ai/90-day-ai-plan.html': 'assets/images/image_12.jpg',
    'posts-ai/30-day-ai-plan.html': 'assets/images/image_13.jpg',
    'posts-ai/ai-affiliate-tools.html': 'assets/images/image_14.jpg',
    'posts-ai/ai-content-sales-system.html': 'assets/images/image_15.jpg',
    'posts-ai/affiliate-funnel-guide.html': 'assets/images/image_16.jpg',
    'posts-ai/affiliate-growth-strategy.html': 'assets/images/image_17.jpg',
    'posts-ai/what-is-affiliate-marketing.html': 'assets/images/image_18.jpg',
    'posts-ai/affiliate-mistakes.html': 'assets/images/image_19.jpg',
    'posts-ai/arab-affiliate-programs.html': 'assets/images/image_20.jpg',
    'posts-ai/complete-ai-learning-path.html': 'assets/images/image_21.jpg',
    'posts-ai/content-structure-seo.html': 'assets/images/image_22.jpg',
    'posts-ai/chatgpt-review.html': 'assets/images/image_23.jpg',
    'posts-ai/jasper-ai-review.html': 'assets/images/image_24.jpg',
    'posts-ai/writesonic-review.html': 'assets/images/image_25.jpg',
    'posts-ai/midjourney-guide.html': 'assets/images/image_26.jpg',
    'posts-ai/dalle3-review.html': 'assets/images/image_27.jpg',
    'posts-ai/canva-ai-review.html': 'assets/images/image_28.jpg'
  };

  function normalizeLogoText() {
    document.querySelectorAll('.logo').forEach(function (logo) {
      var light = logo.querySelector('.logo-text-light');
      var accent = logo.querySelector('.logo-text-accent');
      if (light) light.textContent = 'Smart';
      if (accent) accent.textContent = 'afiliate';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    normalizeLogoText();

    // 🔥 add animation class
    document.querySelectorAll('img').forEach(function (img) {
      img.classList.add('smart-image-loaded');
    });
  });
})();
