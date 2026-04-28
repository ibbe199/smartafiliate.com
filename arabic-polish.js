(function(){
  'use strict';

  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isHome = page === 'index.html' || page === '' || location.pathname === '/';
  const isOpenSource = page === 'open-source.html';

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
      .open-source-official-btn{margin-inline-start:.45rem;background:#fff!important;color:#0b1f3a!important;border:1px solid #d9e4f2!important}
      @media(max-width:760px){.open-source-official-btn{margin-inline-start:0;margin-top:.45rem;width:100%}}
    `;
    const style = document.createElement('style'); style.id = 'smart-light-polish-style'; style.textContent = css; document.head.appendChild(style);
  }

  function hideRealImages(){ document.querySelectorAll('img:not([src^="data:image/svg+xml"])').forEach(function(img){ img.setAttribute('aria-hidden','true'); img.loading='lazy'; img.decoding='async'; img.removeAttribute('srcset'); img.removeAttribute('sizes'); }); }

  function keyFromCard(card){ const h3 = card && card.querySelector('h3'); const title = h3 ? h3.textContent.trim().toLowerCase() : ''; return Object.keys(internalPages).find(function(k){ return title.includes(k); }); }

  function fixOpenSourceButtons(){
    if(!isOpenSource) return;
    document.querySelectorAll('.tool-card').forEach(function(card){
      const key = keyFromCard(card); if(!key) return;
      const main = card.querySelector('a.tool-link:not(.open-source-official-btn)'); if(!main) return;
      main.href = internalPages[key]; main.removeAttribute('target'); main.removeAttribute('rel'); main.textContent = 'اقرأ الشرح العملي →';
      let official = card.querySelector('.open-source-official-btn');
      if(!official){ official = document.createElement('a'); official.className = 'tool-link open-source-official-btn'; main.insertAdjacentElement('afterend', official); }
      official.href = officialLinks[key]; official.target = '_blank'; official.rel = 'noopener noreferrer nofollow'; official.textContent = 'الموقع الرسمي ↗';
    });
  }

  function improveHomeHero(){ if(!isHome) return; const h1=document.querySelector('.page-hero h1'); const p=document.querySelector('.page-hero > .container > p'); if(h1) h1.textContent='دليلك العملي لاستخدام الذكاء الاصطناعي'; if(p) p.textContent='اختر الأدوات المناسبة، اقرأ شروحات واضحة، وابدأ بناء مشروع رقمي خطوة بخطوة.'; }

  const replacements = [[/محلياً/g,'محليًا'],[/مجانياً/g,'مجانيًا'],[/عملياً/g,'عمليًا'],[/حقاً/g,'حقًا'],[/أولاً/g,'أولًا'],[/جهازاً/g,'جهازًا'],[/قوياً/g,'قويًا'],[/بدون تعقيد/g,'دون تعقيد'],[/بدون صور/g,'دون صور'],[/بدون تحميل/g,'دون تحميل'],[/بدون تضييع وقت/g,'دون تضييع وقت'],[/أفضل أدوات AI/g,'أفضل أدوات الذكاء الاصطناعي'],[/مكتبة AI/g,'مكتبة الذكاء الاصطناعي'],[/جديد AI/g,'جديد الذكاء الاصطناعي'],[/SEO وAI/g,'SEO والذكاء الاصطناعي'],[/ما هو AI\؟/g,'ما هو الذكاء الاصطناعي؟'],[/كورسات AI مجانية/g,'دورات ذكاء اصطناعي مجانية']];
  function polishText(){ if(!document.body) return; const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(node){ const parent=node.parentElement; if(!node.nodeValue || !node.nodeValue.trim() || !parent || ['SCRIPT','STYLE','CODE','PRE','TEXTAREA','NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT; return NodeFilter.FILTER_ACCEPT; }}); const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode); nodes.forEach(function(n){ let v=n.nodeValue; replacements.forEach(function(r){ v=v.replace(r[0],r[1]); }); n.nodeValue=v; }); }

  function run(){ applySeo(); addLightStyle(); hideRealImages(); polishText(); improveHomeHero(); fixOpenSourceButtons(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', run, {once:true}); else run();
})();
