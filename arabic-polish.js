(function(){
  'use strict';

  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isHome = page === 'index.html' || page === '' || location.pathname === '/';

  const seo = {
    'index.html': { title: 'دليلك العملي لاستخدام الذكاء الاصطناعي وبناء مشروع رقمي | Smartafiliate', description: 'موقع عربي عملي يساعدك على اختيار أدوات الذكاء الاصطناعي، قراءة شروحات واضحة، وبناء مشروع رقمي خطوة بخطوة دون تعقيد.' },
    'open-source.html': { title: 'أفضل أدوات ذكاء اصطناعي مفتوحة المصدر يمكنك تشغيلها محليًا | Smartafiliate', description: 'تعرف على أفضل أدوات الذكاء الاصطناعي مفتوحة المصدر التي يمكنك تشغيلها محليًا على جهازك دون اتصال بالإنترنت، مع مقارنة عملية وروابط مباشرة.' },
    'best-ai-tools.html': { title: 'أدوات الذكاء الاصطناعي التي يمكنك استخدامها فعليًا | Smartafiliate', description: 'قائمة عملية لأفضل أدوات الذكاء الاصطناعي مرتبة حسب الهدف، مع وصف واضح يساعدك على اختيار الأداة المناسبة.' },
    'ai-articles.html': { title: 'مكتبة الذكاء الاصطناعي: شروحات عملية دون تعقيد | Smartafiliate', description: 'مكتبة عربية تضم شروحات ومقالات عملية عن الذكاء الاصطناعي والأدوات والإنتاجية والتسويق الرقمي.' },
    'learn-ai.html': { title: 'تعلم الذكاء الاصطناعي من الصفر إلى التطبيق العملي | Smartafiliate', description: 'مسار مبسط لتعلم الذكاء الاصطناعي من البداية حتى التطبيق العملي، مع مصادر وأدوات مناسبة للمبتدئين.' }
  };

  const officialLinks = {
    'mistral': 'https://mistral.ai/',
    'falcon': 'https://falconllm.tii.ae/',
    'ollama': 'https://ollama.com/',
    'llama 3': 'https://www.llama.com/',
    'llama': 'https://www.llama.com/',
    'deepseek': 'https://www.deepseek.com/',
    'hugging face': 'https://huggingface.co/',
    'lm studio': 'https://lmstudio.ai/',
    'open webui': 'https://github.com/open-webui/open-webui',
    'gpt4all': 'https://www.nomic.ai/gpt4all'
  };

  const internalPages = {
    'mistral': '/tools/mistral.html',
    'falcon': '/tools/falcon.html',
    'ollama': '/tools/ollama.html',
    'llama 3': '/tools/llama.html',
    'llama': '/tools/llama.html',
    'deepseek': '/tools/deepseek.html',
    'hugging face': '/tools/huggingface.html',
    'lm studio': '/tools/lmstudio.html',
    'open webui': '/tools/openwebui.html',
    'gpt4all': '/tools/gpt4all.html'
  };

  function getToolKey(card){
    const titleEl = card && card.querySelector('h3');
    const title = titleEl ? titleEl.textContent.trim().toLowerCase() : '';
    let found = null;
    Object.keys(internalPages).forEach(function(key){ if(!found && title.includes(key)) found = key; });
    return found;
  }

  function setMeta(selector, value){ document.querySelectorAll(selector).forEach(function(el){ el.setAttribute('content', value); }); }

  function applySeo(){
    const data = seo[page] || (isHome ? seo['index.html'] : null);
    if(!data) return;
    document.title = data.title;
    setMeta('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]', data.description);
    setMeta('meta[property="og:title"], meta[name="twitter:title"]', data.title);
  }

  function removeRealImages(){
    if(document.getElementById('remove-real-images-style')) return;
    const css = `img:not([src^="data:image/svg+xml"]),picture,.article-image img,.post-image img,.hero-image img,.card-image img,.tool-image img,.featured-image img{display:none!important;visibility:hidden!important}.article-image,.post-image,.hero-image,.card-image,.tool-image,.featured-image,.home-card-visual,.tool-preview{background:radial-gradient(circle at 18% 18%,rgba(255,255,255,.24),transparent 28%),linear-gradient(135deg,#071426,#12305a 62%,#ea580c)!important;color:#fff!important}.article-image:empty::before,.post-image:empty::before,.hero-image:empty::before,.card-image:empty::before,.tool-image:empty::before,.featured-image:empty::before{content:'AI';display:flex;align-items:center;justify-content:center;width:100%;height:100%;min-height:84px;font-weight:900;letter-spacing:.06em;color:#fff}.article-image::before,.post-image::before{color:#fff!important}.open-source-official-btn{margin-inline-start:.45rem;background:#fff!important;color:#0b1f3a!important;border:1px solid #d9e4f2!important}@media(max-width:760px){.open-source-official-btn{margin-inline-start:0;margin-top:.45rem;width:100%}}`;
    const style = document.createElement('style');
    style.id = 'remove-real-images-style';
    style.textContent = css;
    document.head.appendChild(style);
    document.querySelectorAll('img:not([src^="data:image/svg+xml"])').forEach(function(img){ img.setAttribute('aria-hidden','true'); img.loading = 'lazy'; img.decoding = 'async'; img.removeAttribute('srcset'); img.removeAttribute('sizes'); });
  }

  function enhanceOpenSourceButtons(){
    if(page !== 'open-source.html') return;
    document.querySelectorAll('.tool-card').forEach(function(card){
      const key = getToolKey(card);
      if(!key) return;
      const target = internalPages[key];
      const officialHref = officialLinks[key];
      const titleEl = card.querySelector('h3');
      let main = card.querySelector('a.tool-link:not(.open-source-official-btn)');
      if(!main){
        main = document.createElement('a');
        main.className = 'tool-link';
        card.appendChild(main);
      }
      main.href = target;
      main.removeAttribute('target');
      main.removeAttribute('rel');
      main.textContent = 'اقرأ الشرح العملي →';
      main.setAttribute('aria-label', 'اقرأ الشرح العملي عن ' + (titleEl ? titleEl.textContent.trim() : 'الأداة'));

      let official = card.querySelector('.open-source-official-btn');
      if(!official){
        official = document.createElement('a');
        official.className = 'tool-link open-source-official-btn';
        main.insertAdjacentElement('afterend', official);
      }
      official.href = officialHref;
      official.target = '_blank';
      official.rel = 'noopener noreferrer nofollow';
      official.textContent = 'الموقع الرسمي ↗';
    });
  }

  function keepOpenSourceButtonsLocked(){
    if(page !== 'open-source.html') return;
    enhanceOpenSourceButtons();
    [300, 1200, 3000, 7000].forEach(function(ms){ setTimeout(enhanceOpenSourceButtons, ms); });
    document.addEventListener('click', function(e){
      const link = e.target.closest && e.target.closest('.tool-card a.tool-link:not(.open-source-official-btn)');
      if(!link) return;
      const card = link.closest('.tool-card');
      const key = getToolKey(card);
      if(key && link.getAttribute('href') !== internalPages[key]) link.href = internalPages[key];
    }, true);
  }

  const replacements = [[/محلياً/g,'محليًا'],[/مجانياً/g,'مجانيًا'],[/عملياً/g,'عمليًا'],[/حقاً/g,'حقًا'],[/أولاً/g,'أولًا'],[/جهازاً/g,'جهازًا'],[/قوياً/g,'قويًا'],[/بدون تعقيد/g,'دون تعقيد'],[/بدون صور/g,'دون صور'],[/بدون تحميل/g,'دون تحميل'],[/بدون تضييع وقت/g,'دون تضييع وقت'],[/يمكن تشغيلها محليًا/g,'يمكنك تشغيلها محليًا'],[/ماذا تريد أن تفعل اليوم\؟/g,'ماذا تريد أن تفعل اليوم باستخدام الذكاء الاصطناعي؟'],[/مكتبة وأدوات الذكاء الاصطناعي/g,'دليلك العملي لاستخدام الذكاء الاصطناعي'],[/منصة عربية منظمة تجمع أفضل أدوات AI، المقالات، خطط التعلم، والمصادر المفتوحة في مكان واحد\./g,'منصة عربية عملية تساعدك على اختيار أدوات الذكاء الاصطناعي، قراءة شروحات واضحة، وبناء مشروع رقمي خطوة بخطوة.'],[/ابدأ من القسم الأقرب لك: أدوات جاهزة، مقالات تعليمية، أو خطة تعلم عملية\./g,'اختر هدفك وابدأ باستخدام أدوات الذكاء الاصطناعي بطريقة واضحة وعملية.'],[/أفضل أدوات AI/g,'أفضل أدوات الذكاء الاصطناعي'],[/مكتبة AI/g,'مكتبة الذكاء الاصطناعي'],[/جديد AI/g,'جديد الذكاء الاصطناعي'],[/SEO وAI/g,'SEO والذكاء الاصطناعي'],[/ما هو AI\؟/g,'ما هو الذكاء الاصطناعي؟'],[/كورسات AI مجانية/g,'دورات ذكاء اصطناعي مجانية']];

  function polishTextNode(node){ let text=node.nodeValue; let next=text; replacements.forEach(function(pair){ next=next.replace(pair[0],pair[1]); }); if(next!==text) node.nodeValue=next; }
  function polishVisibleText(){ if(!document.body) return; const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(node){ if(!node.nodeValue||!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT; const parent=node.parentElement; if(!parent) return NodeFilter.FILTER_REJECT; if(['SCRIPT','STYLE','CODE','PRE','TEXTAREA','NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT; return NodeFilter.FILTER_ACCEPT; }}); const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode); nodes.forEach(polishTextNode); }
  function improveHomeHero(){ if(!isHome) return; const h1=document.querySelector('.page-hero h1'); const heroP=document.querySelector('.page-hero > .container > p'); if(h1) h1.textContent='دليلك العملي لاستخدام الذكاء الاصطناعي'; if(heroP) heroP.textContent='اختر الأدوات المناسبة، اقرأ شروحات واضحة، وابدأ بناء مشروع رقمي خطوة بخطوة.'; }

  function run(){ applySeo(); removeRealImages(); polishVisibleText(); improveHomeHero(); keepOpenSourceButtonsLocked(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', run, {once:true}); else run();
})();
