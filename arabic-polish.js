(function(){
  'use strict';

  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isHome = page === 'index.html' || page === '' || location.pathname === '/';

  const seo = {
    'index.html': {
      title: 'دليلك العملي لاستخدام الذكاء الاصطناعي وبناء مشروع رقمي | Smartafiliate',
      description: 'موقع عربي عملي يساعدك على اختيار أدوات الذكاء الاصطناعي، قراءة شروحات واضحة، وبناء مشروع رقمي خطوة بخطوة دون تعقيد.'
    },
    'open-source.html': {
      title: 'أفضل أدوات ذكاء اصطناعي مفتوحة المصدر يمكنك تشغيلها محليًا | Smartafiliate',
      description: 'تعرف على أفضل أدوات الذكاء الاصطناعي مفتوحة المصدر التي يمكنك تشغيلها محليًا على جهازك دون اتصال بالإنترنت، مع مقارنة عملية وروابط مباشرة.'
    },
    'best-ai-tools.html': {
      title: 'أدوات الذكاء الاصطناعي التي يمكنك استخدامها فعليًا | Smartafiliate',
      description: 'قائمة عملية لأفضل أدوات الذكاء الاصطناعي مرتبة حسب الهدف، مع وصف واضح يساعدك على اختيار الأداة المناسبة.'
    },
    'ai-articles.html': {
      title: 'مكتبة الذكاء الاصطناعي: شروحات عملية دون تعقيد | Smartafiliate',
      description: 'مكتبة عربية تضم شروحات ومقالات عملية عن الذكاء الاصطناعي والأدوات والإنتاجية والتسويق الرقمي.'
    },
    'learn-ai.html': {
      title: 'تعلم الذكاء الاصطناعي من الصفر إلى التطبيق العملي | Smartafiliate',
      description: 'مسار مبسط لتعلم الذكاء الاصطناعي من البداية حتى التطبيق العملي، مع مصادر وأدوات مناسبة للمبتدئين.'
    }
  };

  function setMeta(selector, value){
    document.querySelectorAll(selector).forEach(function(el){ el.setAttribute('content', value); });
  }

  function applySeo(){
    const data = seo[page] || (isHome ? seo['index.html'] : null);
    if(!data) return;
    document.title = data.title;
    setMeta('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]', data.description);
    setMeta('meta[property="og:title"], meta[name="twitter:title"]', data.title);
  }

  const replacements = [
    [/محلياً/g, 'محليًا'],
    [/مجانياً/g, 'مجانيًا'],
    [/عملياً/g, 'عمليًا'],
    [/حقاً/g, 'حقًا'],
    [/أولاً/g, 'أولًا'],
    [/جهازاً/g, 'جهازًا'],
    [/قوياً/g, 'قويًا'],
    [/بدون تعقيد/g, 'دون تعقيد'],
    [/بدون صور/g, 'دون صور'],
    [/بدون تحميل/g, 'دون تحميل'],
    [/بدون تضييع وقت/g, 'دون تضييع وقت'],
    [/يمكن تشغيلها محليًا/g, 'يمكنك تشغيلها محليًا'],
    [/ماذا تريد أن تفعل اليوم\؟/g, 'ماذا تريد أن تفعل اليوم باستخدام الذكاء الاصطناعي؟'],
    [/مكتبة وأدوات الذكاء الاصطناعي/g, 'دليلك العملي لاستخدام الذكاء الاصطناعي'],
    [/منصة عربية منظمة تجمع أفضل أدوات AI، المقالات، خطط التعلم، والمصادر المفتوحة في مكان واحد\./g, 'منصة عربية عملية تساعدك على اختيار أدوات الذكاء الاصطناعي، قراءة شروحات واضحة، وبناء مشروع رقمي خطوة بخطوة.'],
    [/ابدأ من القسم الأقرب لك: أدوات جاهزة، مقالات تعليمية، أو خطة تعلم عملية\./g, 'اختر هدفك وابدأ باستخدام أدوات الذكاء الاصطناعي بطريقة واضحة وعملية.'],
    [/أفضل أدوات AI/g, 'أفضل أدوات الذكاء الاصطناعي'],
    [/مكتبة AI/g, 'مكتبة الذكاء الاصطناعي'],
    [/جديد AI/g, 'جديد الذكاء الاصطناعي'],
    [/SEO وAI/g, 'SEO والذكاء الاصطناعي'],
    [/ما هو AI\؟/g, 'ما هو الذكاء الاصطناعي؟'],
    [/كورسات AI مجانية/g, 'دورات ذكاء اصطناعي مجانية']
  ];

  function polishTextNode(node){
    let text = node.nodeValue;
    let next = text;
    replacements.forEach(function(pair){ next = next.replace(pair[0], pair[1]); });
    if(next !== text) node.nodeValue = next;
  }

  function polishVisibleText(){
    if(!document.body) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function(node){
        if(!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if(!parent) return NodeFilter.FILTER_REJECT;
        if(['SCRIPT','STYLE','CODE','PRE','TEXTAREA','NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(polishTextNode);
  }

  function improveHomeHero(){
    if(!isHome) return;
    const h1 = document.querySelector('.page-hero h1');
    const heroP = document.querySelector('.page-hero > .container > p');
    if(h1) h1.textContent = 'دليلك العملي لاستخدام الذكاء الاصطناعي';
    if(heroP) heroP.textContent = 'اختر الأدوات المناسبة، اقرأ شروحات واضحة، وابدأ بناء مشروع رقمي خطوة بخطوة.';
  }

  function run(){
    applySeo();
    polishVisibleText();
    improveHomeHero();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, {once:true});
  else run();
})();
