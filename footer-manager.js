(function(){
  function base(path){
    return path.startsWith('/') ? path : '/' + path;
  }
  function style(){
    if(document.getElementById('smart-footer-full-style'))return;
    const s=document.createElement('style');
    s.id='smart-footer-full-style';
    s.textContent='.smart-final-footer{background:#071d35!important;color:#fff!important;padding:34px 0 18px!important;margin-top:44px!important;text-align:initial!important}.smart-final-footer a{color:#dbeafe!important;text-decoration:none!important;font-weight:800!important}.smart-final-footer a:hover{color:#fff!important}.smart-footer-grid{display:grid!important;grid-template-columns:repeat(5,minmax(0,1fr))!important;gap:18px!important;align-items:start!important}.smart-footer-brand{grid-column:span 1!important}.smart-footer-brand h2{margin:0 0 8px!important;color:#fff!important;font-size:1.35rem!important}.smart-footer-brand p{color:#cbd5e1!important;line-height:1.8!important;margin:.35rem 0!important}.smart-footer-col h3{color:#fff!important;margin:0 0 10px!important;font-size:1rem!important}.smart-footer-col nav{display:flex!important;flex-direction:column!important;gap:8px!important}.smart-footer-bottom{border-top:1px solid rgba(255,255,255,.12)!important;margin-top:24px!important;padding-top:14px!important;display:flex!important;justify-content:space-between!important;gap:12px!important;flex-wrap:wrap!important;color:#cbd5e1!important;font-size:.9rem!important}.smart-footer-contact{margin-top:10px!important;color:#fff!important;font-weight:800!important}.smart-footer-badge{display:inline-flex!important;margin-top:10px!important;padding:.45rem .7rem!important;border-radius:999px!important;background:rgba(234,88,12,.18)!important;color:#fed7aa!important;font-weight:900!important}@media(max-width:900px){.smart-footer-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}.smart-footer-brand{grid-column:1/-1!important}.smart-footer-bottom{justify-content:center!important;text-align:center!important}}@media(max-width:560px){.smart-final-footer{padding:28px 0 16px!important}.smart-footer-grid{grid-template-columns:1fr!important;text-align:center!important}.smart-footer-col nav{align-items:center!important}.smart-footer-bottom{flex-direction:column!important;align-items:center!important}}';
    document.head.appendChild(s);
  }
  function footerHTML(){
    return '<div class="container smart-footer-grid">'+
      '<div class="smart-footer-brand"><h2>smartafiliate</h2><p>منصة عربية عملية لفهم الذكاء الاصطناعي، أدوات AI، التسويق بالعمولة، وبناء محتوى قابل للنمو.</p><p class="smart-footer-contact">Contact: <a href="mailto:info@smartafiliate.com">info@smartafiliate.com</a></p><span class="smart-footer-badge">AI + Affiliate</span></div>'+
      '<div class="smart-footer-col"><h3>من نحن</h3><nav><a href="'+base('about.html')+'">من نحن</a><a href="'+base('about.html')+'">About me</a><a href="'+base('contact.html')+'">تواصل معنا</a><a href="'+base('disclosure.html')+'">الإفصاح</a></nav></div>'+
      '<div class="smart-footer-col"><h3>أقسام الموقع</h3><nav><a href="'+base('index.html')+'">الرئيسية</a><a href="'+base('articles.html')+'">كل المقالات</a><a href="'+base('ai-articles.html')+'">مكتبة AI</a><a href="'+base('posts-ai.html')+'">فهرس مقالات AI</a><a href="'+base('blog.html')+'">المدونة</a></nav></div>'+
      '<div class="smart-footer-col"><h3>تعلم وأدوات</h3><nav><a href="'+base('best-ai-tools.html')+'">أفضل أدوات AI</a><a href="'+base('ai-tools-comparison.html')+'">مقارنة الأدوات</a><a href="'+base('learn-ai.html')+'">تعلم AI</a><a href="'+base('learn.html')+'">تعلم وابدأ</a><a href="'+base('open-source.html')+'">مصادر مفتوحة</a></nav></div>'+
      '<div class="smart-footer-col"><h3>القوانين والخرائط</h3><nav><a href="'+base('privacy.html')+'">سياسة الخصوصية</a><a href="'+base('privacy-policy.html')+'">Privacy Policy</a><a href="'+base('cookie-policy.html')+'">سياسة الكوكيز</a><a href="'+base('terms.html')+'">الشروط والأحكام</a><a href="'+base('sitemap.xml')+'">خريطة الموقع</a></nav></div>'+
      '</div><div class="container smart-footer-bottom"><span>smartafiliate © 2026 — جميع الحقوق محفوظة</span><span>بناء محتوى عربي عملي للمستقبل</span></div>';
  }
  function build(){
    style();
    document.querySelectorAll('footer,.site-footer,.smart-global-footer,.smart-final-footer,.smart-global-contact').forEach(function(f){f.remove();});
    var footer=document.createElement('footer');
    footer.className='smart-final-footer';
    footer.innerHTML=footerHTML();
    var main=document.querySelector('main');
    if(main)main.insertAdjacentElement('afterend',footer);else document.body.appendChild(footer);
  }
  function run(){build();setTimeout(build,1000);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();
