(function(){
  const RULES=[
    {keys:['جوجل','SEO','السيو','محتوى'],links:[['/posts-ai/google-ai-content-acceptance.html','هل تقبل جوجل محتوى AI؟'],['/posts-ai/content-structure-seo.html','هيكل محتوى SEO'],['/posts-ai/ai-seo-content-success.html','AI وSEO']]},
    {keys:['تعلم','مبتدئ','Python','رياضيات'],links:[['/posts-ai/complete-ai-learning-path.html','مسار تعلم AI'],['/posts-ai/python-for-ai-beginners.html','Python للمبتدئين'],['/posts-ai/free-ai-courses-arabic.html','كورسات AI مجانية']]},
    {keys:['تصميم','Canva','Midjourney','DALL'],links:[['/posts-ai/best-ai-design-tools.html','أفضل أدوات التصميم'],['/posts-ai/canva-ai-review.html','مراجعة Canva AI'],['/posts-ai/midjourney-guide.html','دليل Midjourney']]},
    {keys:['أفلييت','عمولة','تسويق','أرباح'],links:[['/posts-ai/what-is-affiliate-marketing.html','ما هو الأفلييت؟'],['/posts-ai/affiliate-funnel-guide.html','قمع التحويل'],['/posts-ai/affiliate-growth-strategy.html','زيادة أرباح الأفلييت']]},
    {keys:['مفتوحة','Ollama','Llama','Mistral'],links:[['/posts-ai/ollama-guide.html','دليل Ollama'],['/posts-ai/llama3-guide.html','دليل Llama 3'],['/posts-ai/mistral-guide.html','دليل Mistral']]}
  ];

  function loadScriptOnce(src,id){if(document.getElementById(id))return;const s=document.createElement('script');s.id=id;s.src=src;s.defer=true;document.head.appendChild(s);}

  function pageText(){return (document.title+' '+document.body.innerText).toLowerCase();}
  function chooseLinks(){const txt=pageText();let picked=[];RULES.forEach(r=>{if(r.keys.some(k=>txt.includes(k.toLowerCase())))picked=picked.concat(r.links);});if(!picked.length)picked=[['/ai-articles.html','مكتبة AI'],['/best-ai-tools.html','أفضل أدوات AI'],['/posts-ai.html','جميع المقالات']];const current=location.pathname.replace(/\/$/,'');const seen=new Set();return picked.filter(l=>{const path=l[0].replace(/\/$/,'');if(path===current||seen.has(path))return false;seen.add(path);return true;}).slice(0,4);}

  function injectSchema(){if(document.getElementById('seo-breadcrumb-schema'))return;const s=document.createElement('script');s.type='application/ld+json';s.id='seo-breadcrumb-schema';s.textContent=JSON.stringify({'@context':'https://schema.org','@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':1,'name':'الرئيسية','item':location.origin+'/'},{'@type':'ListItem','position':2,'name':'مكتبة AI','item':location.origin+'/ai-articles.html'},{'@type':'ListItem','position':3,'name':document.title.replace(/\s*\|\s*Smartafiliate/i,''),'item':location.href}]});document.head.appendChild(s);}

  function injectRelated(){const body=document.querySelector('.article-body,.post-body,.article-container');if(!body||document.querySelector('.smart-related-links'))return;const links=chooseLinks();if(!links.length)return;const box=document.createElement('section');box.className='smart-related-links';box.innerHTML='<h2>مقالات مرتبطة</h2><div>'+links.map(l=>'<a href="'+l[0]+'">'+l[1]+'</a>').join('')+'</div>';body.appendChild(box);}

  function injectStyle(){if(document.getElementById('smart-related-style'))return;const st=document.createElement('style');st.id='smart-related-style';st.textContent='.smart-related-links{margin:2rem 0;padding:1.2rem;border:1px solid #d9e4f2;border-radius:22px;background:#fff7ed}.smart-related-links h2{margin:0 0 .9rem;color:#0b1f3a}.smart-related-links div{display:flex;flex-wrap:wrap;gap:.6rem}.smart-related-links a{display:inline-block;background:#fff;color:#c2410c;border:1px solid #fed7aa;border-radius:999px;padding:.55rem .9rem;font-weight:800}';document.head.appendChild(st);}

  function fixInternalLinks(){document.querySelectorAll('a[href]').forEach(a=>{let h=a.getAttribute('href');if(!h||h.startsWith('http')||h.startsWith('#')||h.startsWith('mailto:')||h.startsWith('tel:'))return;if(h==='/po'||h==='/post'||h==='/posts'||h==='posts'||h==='post')a.setAttribute('href','/posts-ai.html');if(h==='posts-ai'||h==='/posts-ai')a.setAttribute('href','/posts-ai.html');});}

  function init(){
    fixInternalLinks();
    injectStyle();
    injectRelated();
    injectSchema();

    // 🔥 تحميل نظام الأرباح والتحويل
    loadScriptOnce('/profit-system.js','profit-system-loader');
    loadScriptOnce('/conversion-booster.js','conversion-booster-loader');
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
