(function(){
  const RULES=[
    {keys:['جوجل','SEO','السيو','محتوى'],links:[['/posts-ai/google-ai-content-acceptance.html','هل تقبل جوجل محتوى AI؟'],['/posts-ai/content-structure-seo.html','هيكل محتوى SEO'],['/posts-ai/ai-seo-content-success.html','AI وSEO']]},
    {keys:['تعلم','مبتدئ','Python','رياضيات'],links:[['/posts-ai/complete-ai-learning-path.html','مسار تعلم AI'],['/posts-ai/python-for-ai-beginners.html','Python للمبتدئين'],['/posts-ai/free-ai-courses-arabic.html','كورسات AI مجانية']]},
    {keys:['تصميم','Canva','Midjourney','DALL'],links:[['/posts-ai/best-ai-design-tools.html','أفضل أدوات التصميم'],['/posts-ai/canva-ai-review.html','مراجعة Canva AI'],['/posts-ai/midjourney-guide.html','دليل Midjourney']]}
  ];

  function loadScriptOnce(src,id){if(document.getElementById(id))return;const s=document.createElement('script');s.id=id;s.src=src;s.defer=true;document.head.appendChild(s);}

  function pageText(){return (document.title+' '+document.body.innerText).toLowerCase();}

  function chooseLinks(){
    const txt=pageText();
    let picked=[];
    RULES.forEach(r=>{if(r.keys.some(k=>txt.includes(k.toLowerCase())))picked=picked.concat(r.links);});
    if(!picked.length)picked=[['/ai-articles.html','مكتبة AI'],['/ai-tools-comparison.html','قارن الأدوات'],['/ai-automation-offer.html','ابدأ الأتمتة']];
    return picked.slice(0,3);
  }

  function injectRelated(){
    const body=document.querySelector('.article-body,.post-body,.article-container');
    if(!body||document.querySelector('.smart-related-links'))return;
    const links=chooseLinks();
    const box=document.createElement('section');
    box.className='smart-related-links';
    box.innerHTML='<h2>مقالات مرتبطة</h2><div>'+links.map(l=>'<a href="'+l[0]+'">'+l[1]+'</a>').join('')+'</div>';
    body.appendChild(box);
  }

  function init(){
    injectRelated();

    // تشغيل الربح فقط داخل المقالات
    if(location.pathname.includes('/posts-ai/')){
      loadScriptOnce('/profit-system.js','profit-system');
      loadScriptOnce('/conversion-booster.js','conversion');
      loadScriptOnce('/profit-tracker.js','tracker');
    }

    // تحميل تحسين التصميم
    loadScriptOnce('/site-cleanup.css','cleanup-style');
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
