(function(){
  const MAIN='https://9e507bq9nsow4n57d9tap0ohpd.hop.clickbank.net';
  const EXTRA='https://f21555c3kvj-1zc-zxjkslrl96.hop.clickbank.net';
  const COMPARE='/ai-tools-comparison.html';
  const AUTOMATION='/ai-automation-offer.html';

  function isArticle(){return location.pathname.indexOf('/posts-ai/')===0||!!document.querySelector('.article-body,.post-body,.article-container');}

  function pick(){
    const t=(document.title+' '+document.body.innerText).toLowerCase();
    if(t.includes('أتمتة')||t.includes('automation')||t.includes('إنتاجية')||t.includes('مهام'))return{u:AUTOMATION,d:MAIN,k:'⚡ طبّق الأتمتة الآن',b:'افتح صفحة الأتمتة',secondary:'قارن أدوات AI'};
    if(t.includes('تصميم')||t.includes('canva')||t.includes('midjourney')||t.includes('dall'))return{u:COMPARE,d:EXTRA,k:'🎨 اختر أداة التصميم المناسبة',b:'قارن أدوات التصميم',secondary:'جرّب العرض'};
    if(t.includes('أفلييت')||t.includes('عمولة')||t.includes('أرباح')||t.includes('تسويق'))return{u:COMPARE,d:EXTRA,k:'💰 حوّل القراءة إلى أرباح',b:'قارن الأدوات الرابحة',secondary:'احصل على العرض'};
    if(t.includes('seo')||t.includes('جوجل')||t.includes('محتوى')||t.includes('كتابة'))return{u:COMPARE,d:MAIN,k:'🚀 اختر أداة المحتوى والـ SEO',b:'قارن أدوات المحتوى',secondary:'جرّب الأداة'};
    if(t.includes('تعلم')||t.includes('python')||t.includes('كورسات')||t.includes('مبتدئين'))return{u:COMPARE,d:MAIN,k:'🎓 ابدأ بالأداة المناسبة للتعلم',b:'قارن الأدوات أولًا',secondary:'ابدأ الآن'};
    return{u:COMPARE,d:MAIN,k:'🔥 اختر الأداة المناسبة لهذا المقال',b:'قارن الأدوات',secondary:'جرّب الآن'};
  }

  function style(){
    if(document.getElementById('conversion-booster-style'))return;
    const s=document.createElement('style');
    s.id='conversion-booster-style';
    s.textContent='.sticky-profit-bar{position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;background:#071426;color:#fff;border:1px solid rgba(255,255,255,.16);border-radius:18px;padding:.75rem 1rem;display:flex;align-items:center;justify-content:space-between;gap:.8rem;box-shadow:0 16px 38px rgba(0,0,0,.28)}.sticky-profit-bar strong{font-size:.95rem}.sticky-profit-bar a{background:#ea580c;color:#fff;border-radius:999px;padding:.55rem .9rem;font-weight:900;white-space:nowrap}.sticky-profit-bar button{background:transparent;color:#fff;border:0;font-size:1.1rem;cursor:pointer}.comparison-profit-box{margin:2rem 0;padding:1.2rem;border-radius:22px;background:#f8fafc;border:1px solid #d9e4f2}.comparison-profit-box h2{margin-top:0}.comparison-profit-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.8rem}.comparison-profit-card{background:#fff;border:1px solid #e2e8f0;border-radius:18px;padding:1rem}.comparison-profit-card a{display:inline-block;margin-top:.7rem;background:#ea580c;color:#fff;border-radius:999px;padding:.55rem .9rem;font-weight:900}.comparison-profit-card a.dark{background:#071426}.article-profit-path{margin:1.5rem 0;padding:1rem;border-radius:20px;background:#fff7ed;border:1px solid #fed7aa}.article-profit-path a{font-weight:900;color:#c2410c}@media(max-width:700px){.sticky-profit-bar{font-size:.85rem}.comparison-profit-grid{grid-template-columns:1fr}}';
    document.head.appendChild(s);
  }

  function container(){return document.querySelector('.article-body,.post-body,.article-container,main article,main .container');}

  function addSticky(){
    if(!isArticle()||document.querySelector('.sticky-profit-bar'))return;
    const o=pick();
    const bar=document.createElement('div');
    bar.className='sticky-profit-bar';
    bar.innerHTML='<strong>'+o.k+'</strong><a href="'+o.u+'">'+o.b+'</a><button aria-label="إغلاق">×</button>';
    bar.querySelector('button').onclick=function(){bar.remove();};
    document.body.appendChild(bar);
  }

  function addComparison(){
    if(!isArticle()||document.querySelector('.comparison-profit-box'))return;
    const c=container();if(!c)return;const o=pick();
    const box=document.createElement('section');
    box.className='comparison-profit-box';
    box.innerHTML='<h2>الخطوة التالية بعد قراءة هذا المقال</h2><div class="comparison-profit-grid"><div class="comparison-profit-card"><h3>1. قارن الأدوات</h3><p>ابدأ من صفحة المقارنة لتختار الأداة الأنسب بدل الضغط العشوائي.</p><a href="'+COMPARE+'">قارن الأدوات</a></div><div class="comparison-profit-card"><h3>2. طبّق عمليًا</h3><p>إذا كان المقال عن الأتمتة أو الإنتاجية، افتح صفحة التطبيق المباشر.</p><a class="dark" href="'+AUTOMATION+'">صفحة الأتمتة</a></div><div class="comparison-profit-card"><h3>3. ابدأ بالعرض</h3><p>جاهز للتجربة؟ انتقل مباشرة إلى العرض المناسب لهذا المقال.</p><a href="'+o.d+'" target="_blank" rel="nofollow sponsored noopener noreferrer">'+o.secondary+'</a></div></div>';
    const ps=c.querySelectorAll('p');if(ps.length>4)ps[3].after(box);else c.appendChild(box);
  }

  function addInlinePath(){
    if(!isArticle()||document.querySelector('.article-profit-path'))return;
    const c=container();if(!c)return;const o=pick();
    const path=document.createElement('div');
    path.className='article-profit-path';
    path.innerHTML='📌 تريد تطبيق ما قرأته؟ ابدأ من <a href="'+o.u+'">صفحة الربح المناسبة</a> أو افتح <a href="'+COMPARE+'">مقارنة أدوات AI</a>.';
    const h2=c.querySelector('h2'); if(h2)h2.before(path); else c.prepend(path);
  }

  function rewriteOldToolLinks(){
    if(!isArticle())return;
    document.querySelectorAll('a[href="/best-ai-tools.html"],a[href="best-ai-tools.html"]').forEach(a=>{a.setAttribute('href',COMPARE); if(!a.textContent.trim())a.textContent='قارن أدوات AI';});
  }

  function init(){style();rewriteOldToolLinks();addInlinePath();addComparison();addSticky();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
