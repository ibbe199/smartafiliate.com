(function(){
  function base(path){return path.startsWith('/') ? path : '/' + path;}
  function style(){
    if(document.getElementById('smart-footer-full-style'))return;
    const s=document.createElement('style');
    s.id='smart-footer-full-style';
    s.textContent=`
.smart-final-footer{background:#071d35!important;color:#fff!important;padding:12px 0!important;margin-top:28px!important;border-top:1px solid rgba(147,197,253,.18)!important;direction:rtl!important;text-align:center!important;overflow:hidden!important}
.smart-final-footer *{box-sizing:border-box!important}.smart-final-footer a{text-decoration:none!important}.smart-final-footer .container{max-width:1180px!important;margin:0 auto!important;padding-left:14px!important;padding-right:14px!important;width:100%!important}
.smart-footer-line{display:flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;flex-wrap:wrap!important;width:100%!important}
.smart-footer-brand-mini{display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;color:#fff!important;font-weight:900!important;font-size:1rem!important;line-height:1.2!important;margin:0 6px!important;white-space:nowrap!important}
.smart-footer-brand-mini small{color:#cbd5e1!important;font-size:.8rem!important;font-weight:700!important}
.smart-footer-links{display:flex!important;align-items:center!important;justify-content:center!important;gap:6px!important;flex-wrap:wrap!important;margin:0!important;padding:0!important}
.smart-footer-links a{display:inline-flex!important;align-items:center!important;justify-content:center!important;color:#dbeafe!important;background:rgba(59,130,246,.12)!important;border:1px solid rgba(147,197,253,.16)!important;border-radius:999px!important;font-weight:800!important;font-size:.82rem!important;line-height:1.2!important;padding:6px 9px!important;white-space:nowrap!important}
.smart-footer-links a:hover{color:#fff!important;background:rgba(59,130,246,.32)!important}
.smart-footer-copy{width:100%!important;margin-top:8px!important;color:#cbd5e1!important;font-size:.78rem!important;line-height:1.4!important}
@media(max-width:620px){.smart-final-footer{padding:10px 0!important;margin-top:22px!important}.smart-footer-line{gap:6px!important}.smart-footer-brand-mini{width:100%!important;margin-bottom:4px!important}.smart-footer-links a{font-size:.78rem!important;padding:6px 8px!important}.smart-footer-copy{font-size:.74rem!important}}
    `;
    document.head.appendChild(s);
  }
  function footerHTML(){
    return '<div class="container">'+
      '<div class="smart-footer-line">'+
      '<div class="smart-footer-brand-mini">smartafiliate <small>AI + Affiliate</small></div>'+
      '<nav class="smart-footer-links" aria-label="Footer links">'+
      '<a href="'+base('about.html')+'">من نحن</a>'+
      '<a href="'+base('contact.html')+'">تواصل</a>'+
      '<a href="'+base('articles.html')+'">المقالات</a>'+
      '<a href="'+base('ai-articles.html')+'">مكتبة AI</a>'+
      '<a href="'+base('best-ai-tools.html')+'">أفضل أدوات AI</a>'+
      '<a href="'+base('ai-tools-comparison.html')+'">مقارنة الأدوات</a>'+
      '<a href="'+base('learn-ai.html')+'">تعلم AI</a>'+
      '<a href="'+base('open-source.html')+'">مصادر مفتوحة</a>'+
      '<a href="'+base('privacy-policy.html')+'">الخصوصية</a>'+
      '<a href="'+base('terms.html')+'">الشروط</a>'+
      '<a href="'+base('sitemap.html')+'">Sitemap</a>'+
      '</nav></div>'+
      '<div class="smart-footer-copy">© 2026 smartafiliate — Contact: <a href="mailto:info@smartafiliate.com">info@smartafiliate.com</a></div>'+
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
