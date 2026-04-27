(function(){
  const MAIN_OFFER='https://9e507bq9nsow4n57d9tap0ohpd.hop.clickbank.net';
  const EXTRA_OFFER='https://f21555c3kvj-1zc-zxjkslrl96.hop.clickbank.net';

  function pickOffer(){
    const text=(document.title+' '+document.body.innerText).toLowerCase();
    if(text.includes('تصميم')||text.includes('canva')||text.includes('midjourney')||text.includes('dall')){
      return {url:EXTRA_OFFER,title:'🎨 الأداة المقترحة للتصميم بالذكاء الاصطناعي',button:'جرّب أداة التصميم الآن'};
    }
    if(text.includes('أتمتة')||text.includes('automation')||text.includes('إنتاجية')||text.includes('مهام')){
      return {url:MAIN_OFFER,title:'⚡ الأداة المقترحة لأتمتة المهام',button:'ابدأ أتمتة عملك الآن'};
    }
    if(text.includes('seo')||text.includes('جوجل')||text.includes('محتوى')){
      return {url:MAIN_OFFER,title:'🚀 الأداة المقترحة للمحتوى والـ SEO',button:'جرّب أداة المحتوى الآن'};
    }
    if(text.includes('أفلييت')||text.includes('عمولة')||text.includes('تسويق')||text.includes('أرباح')){
      return {url:EXTRA_OFFER,title:'💰 العرض المقترح لزيادة أرباح الأفلييت',button:'احصل على العرض الآن'};
    }
    if(text.includes('تعلم')||text.includes('python')||text.includes('كورسات')||text.includes('مبتدئين')){
      return {url:MAIN_OFFER,title:'🎓 العرض المقترح لتعلم الذكاء الاصطناعي',button:'ابدأ التعلم الآن'};
    }
    return {url:MAIN_OFFER,title:'🔥 الأداة المقترحة لهذا المقال',button:'جرّب الآن'};
  }

  function injectStyle(){
    if(document.getElementById('profit-system-style')) return;
    const style=document.createElement('style');
    style.id='profit-system-style';
    style.textContent='.smart-profit-box{margin:2rem 0;padding:1.4rem;border-radius:24px;background:linear-gradient(135deg,#071426,#12305a 65%,#ea580c);color:#fff;box-shadow:0 14px 34px rgba(15,23,42,.18)}.smart-profit-box h2,.smart-profit-box h3{margin:0 0 .7rem;color:#fff}.smart-profit-box p{margin:0 0 1rem;color:rgba(255,255,255,.86);line-height:1.9}.smart-profit-actions{display:flex;flex-wrap:wrap;gap:.65rem}.smart-profit-actions a{display:inline-block;border-radius:999px;padding:.72rem 1.05rem;font-weight:900;text-decoration:none}.smart-profit-primary{background:#fff;color:#c2410c}.smart-profit-secondary{background:rgba(255,255,255,.14);color:#fff;border:1px solid rgba(255,255,255,.25)}.smart-inline-profit{display:inline-block;margin:.25rem .2rem;padding:.22rem .55rem;border-radius:999px;background:#fff7ed;color:#c2410c;font-weight:900;border:1px solid #fed7aa}';
    document.head.appendChild(style);
  }

  function getArticleContainer(){
    return document.querySelector('.article-body,.post-body,.article-container,main article,main .container');
  }

  function isArticlePage(){
    return location.pathname.indexOf('/posts-ai/')===0 || document.querySelector('.article-body,.post-body,.article-container');
  }

  function injectProfitBox(){
    if(!isArticlePage()||document.querySelector('.smart-profit-box')) return;
    const container=getArticleContainer();
    if(!container) return;
    const offer=pickOffer();
    const box=document.createElement('section');
    box.className='smart-profit-box';
    box.innerHTML='<h2>'+offer.title+'</h2><p>طبّق ما قرأته في هذا المقال باستخدام عرض مناسب يساعدك على الانتقال من القراءة إلى التنفيذ العملي.</p><div class="smart-profit-actions"><a class="smart-profit-primary" href="'+offer.url+'" target="_blank" rel="nofollow sponsored noopener noreferrer">'+offer.button+' →</a><a class="smart-profit-secondary" href="/best-ai-tools.html">قارن أفضل أدوات AI</a></div>';
    container.appendChild(box);
  }

  function injectInlineLinks(){
    if(!isArticlePage()) return;
    const offer=pickOffer();
    const paragraphs=Array.from(document.querySelectorAll('.article-body p,.post-body p,.article-container p,main article p'));
    if(!paragraphs.length) return;
    const target=paragraphs[Math.min(2,paragraphs.length-1)];
    if(target&& !target.querySelector('.smart-inline-profit')){
      const a=document.createElement('a');
      a.className='smart-inline-profit';
      a.href=offer.url;
      a.target='_blank';
      a.rel='nofollow sponsored noopener noreferrer';
      a.textContent='جرّب الأداة المناسبة';
      target.appendChild(document.createTextNode(' '));
      target.appendChild(a);
    }
  }

  function init(){injectStyle();injectInlineLinks();injectProfitBox();}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
