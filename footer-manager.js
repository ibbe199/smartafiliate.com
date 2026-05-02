(function(){
  function base(path){return path.startsWith('/') ? path : '/' + path;}
  function style(){
    if(document.getElementById('smart-footer-full-style'))return;
    const s=document.createElement('style');
    s.id='smart-footer-full-style';
    s.textContent=`
.smart-final-footer{background:linear-gradient(135deg,#06182d,#071d35,#0b2748)!important;color:#fff!important;padding:42px 0 18px!important;margin-top:36px!important;border-top:1px solid rgba(147,197,253,.18)!important;direction:rtl!important;overflow:hidden!important;content-visibility:auto!important;contain-intrinsic-size:360px!important}
.smart-final-footer *{box-sizing:border-box!important}.smart-final-footer a{text-decoration:none!important}.smart-final-footer .container{max-width:1180px!important;margin:0 auto!important;padding-left:18px!important;padding-right:18px!important;width:100%!important}
.smart-footer-layout{display:grid!important;grid-template-columns:1.25fr 1fr 1fr 1fr!important;align-items:start!important;gap:26px!important;width:100%!important}
.smart-footer-brand{min-width:0!important}.smart-footer-logo{display:inline-flex!important;align-items:center!important;gap:0!important;margin-bottom:10px!important;font-size:1.28rem!important;font-weight:950!important;letter-spacing:-.02em!important}.smart-footer-logo span:first-child{color:#fff!important}.smart-footer-logo span:last-child{color:#f97316!important}.smart-footer-desc{color:#cbd5e1!important;font-size:.95rem!important;line-height:1.9!important;max-width:360px!important;margin:0 0 14px!important}.smart-footer-email{display:inline-flex!important;align-items:center!important;justify-content:center!important;color:#fff!important;background:rgba(249,115,22,.18)!important;border:1px solid rgba(249,115,22,.35)!important;border-radius:999px!important;padding:8px 12px!important;font-size:.9rem!important;font-weight:800!important;direction:ltr!important}.smart-footer-email:hover{background:rgba(249,115,22,.3)!important}
.smart-footer-col{min-width:0!important}.smart-footer-title{font-size:1rem!important;font-weight:950!important;color:#fff!important;margin:0 0 12px!important;padding-bottom:8px!important;border-bottom:1px solid rgba(255,255,255,.12)!important}.smart-footer-links{display:flex!important;flex-direction:column!important;gap:9px!important}.smart-footer-link{display:inline-flex!important;align-items:center!important;justify-content:flex-start!important;width:max-content!important;max-width:100%!important;color:#dbeafe!important;font-weight:800!important;font-size:.92rem!important;line-height:1.45!important;padding:4px 0!important;white-space:normal!important}.smart-footer-link:hover{color:#fff!important;transform:translateX(-3px)!important}.smart-footer-link::before{content:'›'!important;color:#f97316!important;font-size:1.2rem!important;line-height:1!important;margin-left:7px!important}
.smart-footer-bottom{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:14px!important;margin-top:30px!important;padding-top:16px!important;border-top:1px solid rgba(255,255,255,.12)!important;color:#cbd5e1!important;font-size:.86rem!important;line-height:1.7!important}.smart-footer-bottom-links{display:flex!important;align-items:center!important;justify-content:flex-end!important;gap:12px!important;flex-wrap:wrap!important}.smart-footer-bottom a{color:#93c5fd!important;font-weight:800!important}.smart-footer-bottom a:hover{color:#fff!important}
@media(max-width:980px){.smart-footer-layout{grid-template-columns:1fr 1fr!important;gap:24px!important}.smart-footer-brand{grid-column:1/-1!important}.smart-footer-desc{max-width:760px!important}}
@media(max-width:640px){.smart-final-footer{padding:34px 0 18px!important;margin-top:28px!important}.smart-final-footer .container{padding-left:16px!important;padding-right:16px!important}.smart-footer-layout{grid-template-columns:1fr!important;gap:22px!important;text-align:right!important}.smart-footer-logo{font-size:1.2rem!important}.smart-footer-desc{font-size:.94rem!important}.smart-footer-title{font-size:1rem!important;margin-bottom:10px!important}.smart-footer-links{gap:7px!important}.smart-footer-link{font-size:.94rem!important;padding:6px 0!important;width:100%!important}.smart-footer-bottom{flex-direction:column!important;align-items:flex-start!important;text-align:right!important;margin-top:24px!important}.smart-footer-bottom-links{justify-content:flex-start!important;gap:10px!important}}
    `;
    document.head.appendChild(s);
  }
  function footerHTML(){
    return '<div class="container">'+
      '<div class="smart-footer-layout">'+
        '<div class="smart-footer-brand">'+
          '<div class="smart-footer-logo"><span>smart</span><span>afiliate</span></div>'+
          '<p class="smart-footer-desc">منصة عربية تساعدك على فهم الذكاء الاصطناعي، اختيار الأدوات المناسبة، وبناء مشروع رقمي يعتمد على المحتوى والتسويق بالعمولة.</p>'+
          '<a class="smart-footer-email" href="mailto:info@smartafiliate.com">info@smartafiliate.com</a>'+
        '</div>'+
        '<nav class="smart-footer-col" aria-label="روابط الموقع">'+
          '<h3 class="smart-footer-title">روابط الموقع</h3>'+
          '<div class="smart-footer-links">'+
            '<a class="smart-footer-link" href="'+base('index.html')+'">الرئيسية</a>'+
            '<a class="smart-footer-link" href="'+base('articles.html')+'">المقالات</a>'+
            '<a class="smart-footer-link" href="'+base('ai-articles.html')+'">مكتبة AI</a>'+
            '<a class="smart-footer-link" href="'+base('blog.html')+'">المدونة</a>'+
          '</div>'+
        '</nav>'+
        '<nav class="smart-footer-col" aria-label="تعلم وأدوات">'+
          '<h3 class="smart-footer-title">تعلم وأدوات</h3>'+
          '<div class="smart-footer-links">'+
            '<a class="smart-footer-link" href="'+base('best-ai-tools.html')+'">أفضل أدوات AI</a>'+
            '<a class="smart-footer-link" href="'+base('learn-ai.html')+'">تعلم AI</a>'+
            '<a class="smart-footer-link" href="'+base('open-source.html')+'">أدوات مفتوحة المصدر</a>'+
            '<a class="smart-footer-link" href="'+base('ai-tools-comparison.html')+'">مقارنة أدوات AI</a>'+
          '</div>'+
        '</nav>'+
        '<nav class="smart-footer-col" aria-label="معلومات قانونية وتواصل">'+
          '<h3 class="smart-footer-title">معلومات</h3>'+
          '<div class="smart-footer-links">'+
            '<a class="smart-footer-link" href="'+base('about.html')+'">من نحن</a>'+
            '<a class="smart-footer-link" href="'+base('contact.html')+'">تواصل معنا</a>'+
            '<a class="smart-footer-link" href="'+base('privacy.html')+'">سياسة الخصوصية</a>'+
            '<a class="smart-footer-link" href="'+base('terms.html')+'">الشروط</a>'+
            '<a class="smart-footer-link" href="'+base('sitemap.html')+'">خريطة الموقع</a>'+
          '</div>'+
        '</nav>'+
      '</div>'+
      '<div class="smart-footer-bottom">'+
        '<div>© 2026 smartafiliate — جميع الحقوق محفوظة.</div>'+
        '<div class="smart-footer-bottom-links">'+
          '<a href="'+base('cookie-policy.html')+'">الكوكيز</a>'+
          '<a href="'+base('disclosure.html')+'">الإفصاح</a>'+
          '<a href="'+base('sitemap.xml')+'">Sitemap XML</a>'+
        '</div>'+
      '</div>'+
    '</div>';
  }
  function build(){
    if(document.querySelector('.smart-final-footer[data-managed="1"]'))return;
    style();
    document.querySelectorAll('footer,.site-footer,.smart-global-footer,.smart-final-footer,.smart-global-contact').forEach(function(f){f.remove();});
    var footer=document.createElement('footer');
    footer.className='smart-final-footer';
    footer.dataset.managed='1';
    footer.innerHTML=footerHTML();
    var main=document.querySelector('main');
    if(main)main.insertAdjacentElement('afterend',footer);else document.body.appendChild(footer);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build,{once:true});else build();
})();
