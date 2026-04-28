(function(){
  'use strict';

  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isHome = page === 'index.html' || page === '' || location.pathname === '/';
  const isOpenSource = page === 'open-source.html';
  const isToolPage = location.pathname.indexOf('/tools/') === 0;
  const AFFILIATE_LINK = 'https://568c33r-ouavcya3kf-f44g5qs.hop.clickbank.net';

  const seo = {
    'index.html': { title: 'دليلك العملي لاستخدام الذكاء الاصطناعي وبناء مشروع رقمي | Smartafiliate', description: 'موقع عربي عملي يساعدك على اختيار أدوات الذكاء الاصطناعي، قراءة شروحات واضحة، وبناء مشروع رقمي خطوة بخطوة دون تعقيد.' },
    'open-source.html': { title: 'أفضل أدوات ذكاء اصطناعي مفتوحة المصدر يمكنك تشغيلها محليًا | Smartafiliate', description: 'تعرف على أفضل أدوات الذكاء الاصطناعي مفتوحة المصدر التي يمكنك تشغيلها محليًا على جهازك دون اتصال بالإنترنت، مع مقارنة عملية وروابط مباشرة.' },
    'best-ai-tools.html': { title: 'أدوات الذكاء الاصطناعي التي يمكنك استخدامها فعليًا | Smartafiliate', description: 'قائمة عملية لأفضل أدوات الذكاء الاصطناعي مرتبة حسب الهدف، مع وصف واضح يساعدك على اختيار الأداة المناسبة.' },
    'ai-articles.html': { title: 'مكتبة الذكاء الاصطناعي: شروحات عملية دون تعقيد | Smartafiliate', description: 'مكتبة عربية تضم شروحات ومقالات عملية عن الذكاء الاصطناعي والأدوات والإنتاجية والتسويق الرقمي.' },
    'learn-ai.html': { title: 'تعلم الذكاء الاصطناعي من الصفر إلى التطبيق العملي | Smartafiliate', description: 'مسار مبسط لتعلم الذكاء الاصطناعي من البداية حتى التطبيق العملي، مع مصادر وأدوات مناسبة للمبتدئين.' }
  };

  const officialLinks = {
    'mistral': 'https://mistral.ai/', 'falcon': 'https://falconllm.tii.ae/', 'ollama': 'https://ollama.com/', 'llama 3': 'https://www.llama.com/', 'llama': 'https://www.llama.com/', 'deepseek': 'https://www.deepseek.com/', 'hugging face': 'https://huggingface.co/', 'lm studio': 'https://lmstudio.ai/', 'open webui': 'https://github.com/open-webui/open-webui', 'gpt4all': 'https://www.nomic.ai/gpt4all'
  };

  const internalPages = {
    'mistral': '/tools/mistral.html', 'falcon': '/tools/falcon.html', 'ollama': '/tools/ollama.html', 'llama 3': '/tools/llama.html', 'llama': '/tools/llama.html', 'deepseek': '/tools/deepseek.html', 'hugging face': '/tools/huggingface.html', 'lm studio': '/tools/lmstudio.html', 'open webui': '/tools/openwebui.html', 'gpt4all': '/tools/gpt4all.html'
  };

  function setMeta(selector, value){ document.querySelectorAll(selector).forEach(function(el){ el.setAttribute('content', value); }); }
  function applySeo(){ const data = seo[page] || (isHome ? seo['index.html'] : null); if(!data) return; document.title = data.title; setMeta('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]', data.description); setMeta('meta[property="og:title"], meta[name="twitter:title"]', data.title); }

  function addLightStyle(){
    if(document.getElementById('smart-light-polish-style')) return;
    const css = `
      img:not([src^="data:image/svg+xml"]),picture,.article-image img,.post-image img,.hero-image img,.card-image img,.tool-image img,.featured-image img{display:none!important;visibility:hidden!important}
      .article-image,.post-image,.hero-image,.card-image,.tool-image,.featured-image,.home-card-visual,.tool-preview{background:radial-gradient(circle at 18% 18%,rgba(255,255,255,.24),transparent 28%),linear-gradient(135deg,#071426,#12305a 62%,#ea580c)!important;color:#fff!important}
      .article-image:empty::before,.post-image:empty::before,.hero-image:empty::before,.card-image:empty::before,.tool-image:empty::before,.featured-image:empty::before{content:'AI';display:flex;align-items:center;justify-content:center;width:100%;height:100%;min-height:84px;font-weight:900;letter-spacing:.06em;color:#fff}
      .smart-btn-row{display:flex;flex-wrap:wrap;gap:.55rem;margin-top:.8rem}
      .smart-primary-btn,.smart-secondary-btn{display:inline-flex!important;align-items:center;justify-content:center;min-height:40px;padding:.62rem 1rem;border-radius:999px;text-decoration:none!important;font-weight:900;line-height:1.2;cursor:pointer;pointer-events:auto!important}
      .smart-primary-btn{background:#0b1f3a!important;color:#fff!important;border:1px solid #0b1f3a!important}
      .smart-secondary-btn{background:#fff!important;color:#0b1f3a!important;border:1px solid #d9e4f2!important}
      .profit-cta{margin:18px 0;padding:18px;border-radius:22px;background:linear-gradient(135deg,#071426,#12305a 60%,#ea580c);color:#fff;text-align:center;box-shadow:0 10px 24px rgba(15,23,42,.12)}
      .profit-cta h2{margin:.2rem 0 .5rem;color:#fff}.profit-cta p{color:rgba(255,255,255,.84);line-height:1.8}.profit-cta .smart-primary-btn{background:#16a34a!important;border-color:#16a34a!important}
      @media(max-width:760px){.smart-btn-row{display:grid}.smart-primary-btn,.smart-secondary-btn{width:100%}}
    `;
    const style = document.createElement('style'); style.id = 'smart-light-polish-style'; style.textContent = css; document.head.appendChild(style);
  }

  function hideRealImages(){ document.querySelectorAll('img:not([src^="data:image/svg+xml"])').forEach(function(img){ img.setAttribute('aria-hidden','true'); img.loading='lazy'; img.decoding='async'; img.removeAttribute('srcset'); img.removeAttribute('sizes'); }); }

  function keyFromCard(card){ const h3 = card && card.querySelector('h3'); const title = h3 ? h3.textContent.trim().toLowerCase() : ''; return Object.keys(internalPages).find(function(k){ return title.includes(k); }); }

  function makeButton(href, text, cls, external){
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    a.className = cls;
    if(external){ a.target = '_blank'; a.rel = 'noopener noreferrer nofollow'; }
    return a;
  }

  function addToolButtons(){
    if(!isOpenSource) return;
    document.querySelectorAll('.tool-card').forEach(function(card){
      const key = keyFromCard(card); if(!key || card.querySelector('.smart-btn-row')) return;
      const old = card.querySelector('a.tool-link');
      if(old) old.style.display = 'none';
      const row = document.createElement('div');
      row.className = 'smart-btn-row';
      row.appendChild(makeButton(internalPages[key], 'اقرأ المقال →', 'smart-primary-btn', false));
      row.appendChild(makeButton(officialLinks[key], 'الموقع الرسمي ↗', 'smart-secondary-btn', true));
      card.appendChild(row);
    });
  }

  function addHomeButtons(){
    if(!isHome) return;
    const targets = [
      ['.page-hero .cta-actions', [['/best-ai-tools.html','استكشف الأدوات →','smart-primary-btn'],['/ai-articles.html','اقرأ المقالات →','smart-secondary-btn']]],
      ['.home-primary-section .tools-grid .tool-card:nth-child(1)', [['/best-ai-tools.html','افتح القسم →','smart-primary-btn']]],
      ['.home-primary-section .tools-grid .tool-card:nth-child(2)', [['/ai-articles.html','افتح المكتبة →','smart-primary-btn']]],
      ['.home-primary-section .tools-grid .tool-card:nth-child(3)', [['/learn-ai.html','ابدأ التعلم →','smart-primary-btn']]],
      ['.home-primary-section .tools-grid .tool-card:nth-child(4)', [['/open-source.html','افتح المصادر →','smart-primary-btn']]]
    ];
    targets.forEach(function(item){
      const holder = document.querySelector(item[0]);
      if(!holder || holder.querySelector('.smart-primary-btn,.smart-secondary-btn')) return;
      const row = holder.classList.contains('cta-actions') ? holder : document.createElement('div');
      if(!holder.classList.contains('cta-actions')) row.className = 'smart-btn-row';
      item[1].forEach(function(btn){ row.appendChild(makeButton(btn[0], btn[1], btn[2], false)); });
      if(!holder.classList.contains('cta-actions')) holder.appendChild(row);
    });
  }

  function addToolProfitCta(){
    if(!isToolPage || document.querySelector('.profit-cta')) return;
    const main = document.querySelector('main') || document.body;
    const top = document.createElement('section');
    top.className = 'profit-cta';
    top.innerHTML = '<h2>حوّل معرفتك بالأداة إلى تطبيق عملي</h2><p>ابدأ بخطة واضحة لتعلم الذكاء الاصطناعي واستخدامه في مشروع رقمي بدل التجربة العشوائية.</p><div class="smart-btn-row" style="justify-content:center"><a class="smart-primary-btn" href="'+AFFILIATE_LINK+'" target="_blank" rel="nofollow sponsored noopener noreferrer">ابدأ التعلم العملي الآن</a><a class="smart-secondary-btn" href="/open-source.html">رجوع إلى الأدوات</a></div>';
    main.appendChild(top);
  }

  function improveHomeHero(){ if(!isHome) return; const h1=document.querySelector('.page-hero h1'); const p=document.querySelector('.page-hero > .container > p'); if(h1) h1.textContent='دليلك العملي لاستخدام الذكاء الاصطناعي'; if(p) p.textContent='اختر الأدوات المناسبة، اقرأ شروحات واضحة، وابدأ بناء مشروع رقمي خطوة بخطوة.'; }

  const replacements = [[/محلياً/g,'محليًا'],[/مجانياً/g,'مجانيًا'],[/عملياً/g,'عمليًا'],[/حقاً/g,'حقًا'],[/أولاً/g,'أولًا'],[/جهازاً/g,'جهازًا'],[/قوياً/g,'قويًا'],[/بدون تعقيد/g,'دون تعقيد'],[/بدون صور/g,'دون صور'],[/بدون تحميل/g,'دون تحميل'],[/بدون تضييع وقت/g,'دون تضييع وقت'],[/أفضل أدوات AI/g,'أفضل أدوات الذكاء الاصطناعي'],[/مكتبة AI/g,'مكتبة الذكاء الاصطناعي'],[/جديد AI/g,'جديد الذكاء الاصطناعي'],[/SEO وAI/g,'SEO والذكاء الاصطناعي'],[/ما هو AI\؟/g,'ما هو الذكاء الاصطناعي؟'],[/كورسات AI مجانية/g,'دورات ذكاء اصطناعي مجانية']];
  function polishText(){ if(!document.body) return; const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(node){ const parent=node.parentElement; if(!node.nodeValue || !node.nodeValue.trim() || !parent || ['SCRIPT','STYLE','CODE','PRE','TEXTAREA','NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT; return NodeFilter.FILTER_ACCEPT; }}); const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode); nodes.forEach(function(n){ let v=n.nodeValue; replacements.forEach(function(r){ v=v.replace(r[0],r[1]); }); n.nodeValue=v; }); }

  function run(){ applySeo(); addLightStyle(); hideRealImages(); polishText(); improveHomeHero(); addToolButtons(); addHomeButtons(); addToolProfitCta(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', run, {once:true}); else run();
})();
