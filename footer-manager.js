(function(){
  function base(path){return path.startsWith('/') ? path : '/' + path;}
  function style(){
    if(document.getElementById('smart-footer-full-style'))return;
    const s=document.createElement('style');
    s.id='smart-footer-full-style';
    s.textContent=`
.smart-final-footer{background:linear-gradient(180deg,#071d35 0%,#041326 100%)!important;color:#fff!important;padding:26px 0 16px!important;margin-top:44px!important;border-top:1px solid rgba(255,255,255,.1)!important;overflow:hidden!important;direction:rtl!important;text-align:center!important}
.smart-final-footer *{box-sizing:border-box!important}.smart-final-footer a{text-decoration:none!important}.smart-final-footer .container{max-width:1180px!important;margin:0 auto!important;padding-left:18px!important;padding-right:18px!important;width:100%!important}
.smart-footer-brand{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:8px!important;margin-bottom:18px!important}.smart-footer-brand h2{margin:0!important;color:#fff!important;font-size:1.65rem!important;line-height:1.25!important}.smart-footer-brand p{color:#cbd5e1!important;line-height:1.75!important;margin:0!important;max-width:760px!important}.smart-footer-contact{margin:2px 0 0!important;color:#fff!important;font-weight:800!important}.smart-footer-contact a{color:#fed7aa!important;overflow-wrap:anywhere!important}.smart-footer-badges{display:flex!important;gap:8px!important;flex-wrap:wrap!important;justify-content:center!important;margin-top:4px!important}.smart-footer-badge{display:inline-flex!important;padding:.38rem .72rem!important;border-radius:999px!important;background:rgba(234,88,12,.18)!important;color:#fed7aa!important;font-weight:900!important;border:1px solid rgba(251,146,60,.25)!important;font-size:.84rem!important}
.smart-footer-nav{display:flex!important;flex-direction:column!important;gap:12px!important;margin:12px auto 18px!important}.smart-footer-strip{display:flex!important;align-items:center!important;justify-content:center!important;gap:10px!important;flex-wrap:wrap!important;padding:10px 12px!important;background:rgba(255,255,255,.045)!important;border:1px solid rgba(255,255,255,.08)!important;border-radius:18px!important}.smart-footer-strip h3{margin:0!important;color:#fff!important;font-size:.95rem!important;white-space:nowrap!important;padding-inline:6px!important}.smart-footer-strip nav{display:flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;flex-wrap:wrap!important}.smart-footer-strip a{display:inline-flex!important;align-items:center!important;justify-content:center!important;color:#dbeafe!important;background:rgba(255,255,255,.06)!important;border:1px solid rgba(255,255,255,.08)!important;border-radius:999px!important;font-weight:800!important;font-size:.9rem!important;line-height:1.35!important;padding:7px 11px!important;white-space:nowrap!important;transition:background .18s ease,color .18s ease!important}.smart-footer-strip a:hover{color:#fff!important;background:rgba(234,88,12,.28)!important}
.smart-footer-bottom{border-top:1px solid rgba(255,255,255,.12)!important;padding-top:14px!important;display:flex!important;justify-content:center!important;align-items:center!important;gap:12px!important;flex-wrap:wrap!important;color:#cbd5e1!important;font-size:.88rem!important}.smart-footer-bottom-links{display:flex!important;gap:8px!important;flex-wrap:wrap!important;justify-content:center!important}.smart-footer-bottom-links a{color:#cbd5e1!important;font-weight:800!important;background:rgba(255,255,255,.055)!important;border-radius:999px!important;padding:6px 10px!important}.smart-footer-bottom-links a:hover{color:#fff!important}
@media(max-width:620px){.smart-final-footer{padding:22px 0 14px!important}.smart-final-footer .container{padding-left:14px!important;padding-right:14px!important}.smart-footer-brand h2{font-size:1.45rem!important}.smart-footer-brand p{font-size:.92rem!important}.smart-footer-strip{justify-content:center!important;gap:8px!important;padding:10px!important}.smart-footer-strip h3{width:100%!important;text-align:center!important;color:#fed7aa!important}.smart-footer-strip nav{width:100%!important}.smart-footer-strip a{font-size:.84rem!important;padding:7px 9px!important}.smart-footer-bottom{flex-direction:column!important}}
    `;
    document.head.appendChild(s);
  }
  function footerHTML(){
    return '<div class="container">'+
      '<div class="smart-footer-brand"><h2>smartafiliate</h2><p>منصة عربية عملية لفهم الذكاء الاصطناعي، أدوات AI، التسويق بالعمولة، وبناء محتوى قابل للنمو.</p><p class="smart-footer-contact">Contact: <a href="mailto:info@smartafiliate.com">info@smartafiliate.com</a></p><div class="smart-footer-badges"><span class="smart-footer-badge">AI Tools</span><span class="smart-footer-badge">Affiliate</span><span class="smart-footer-badge">SEO</span></div></div>'+
      '<div class="smart-footer-nav">'+
      '<div class="smart-footer-strip"><h3>عن الموقع</h3><nav><a href="'+base('about.html')+'">من نحن</a><a href="'+base('about.html')+'">About me</a><a href="'+base('contact.html')+'">تواصل معنا</a><a href="'+base('disclosure.html')+'">الإفصاح</a></nav></div>'+
      '<div class="smart-footer-strip"><h3>المحتوى</h3><nav><a href="'+base('articles.html')+'">كل المقالات</a><a href="'+base('ai-articles.html')+'">مكتبة AI</a><a href="'+base('posts-ai.html')+'">فهرس مقالات AI</a><a href="'+base('blog.html')+'">المدونة</a></nav></div>'+
      '<div class="smart-footer-strip"><h3>التعلم والأدوات</h3><nav><a href="'+base('best-ai-tools.html')+'">أفضل أدوات AI</a><a href="'+base('ai-tools-comparison.html')+'">مقارنة الأدوات</a><a href="'+base('learn-ai.html')+'">تعلم AI</a><a href="'+base('open-source.html')+'">مصادر مفتوحة</a></nav></div>'+
      '<div class="smart-footer-strip"><h3>القوانين</h3><nav><a href="'+base('privacy.html')+'">سياسة الخصوصية</a><a href="'+base('privacy-policy.html')+'">Privacy Policy</a><a href="'+base('cookie-policy.html')+'">سياسة الكوكيز</a><a href="'+base('terms.html')+'">الشروط والأحكام</a><a href="'+base('sitemap.html')+'">خريطة الموقع</a></nav></div>'+
      '</div><div class="smart-footer-bottom"><span>smartafiliate © 2026 — جميع الحقوق محفوظة</span><div class="smart-footer-bottom-links"><a href="'+base('index.html')+'">الرئيسية</a><a href="'+base('contact.html')+'">تواصل</a><a href="'+base('sitemap.xml')+'">Sitemap XML</a></div></div>'+
      '</div>';
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
