(function(){
  const EXTRA_REPO_POSTS = [
    ['posts-ai/learn-ai-without-technical-background.html','تعلم الذكاء الاصطناعي بدون خلفية تقنية','تعلم AI','دليل مبسط للبدء في الذكاء الاصطناعي بدون خبرة تقنية أو برمجة.'],
    ['posts-ai/ai-automation-productivity.html','أتمتة المهام بالذكاء الاصطناعي','أتمتة AI','استخدام أدوات AI لإرسال الإيميلات، تحليل البيانات، إدارة المشاريع، والرد على العملاء.'],
    ['posts-ai/latest-ai-automation-uses.html','أحدث استخدامات أتمتة الذكاء الاصطناعي','أتمتة AI','أمثلة عملية لاستخدام الأتمتة في الأعمال الرقمية والمحتوى والتسويق.'],
    ['posts-ai/future-of-ai-automation.html','مستقبل الأتمتة بالذكاء الاصطناعي','أتمتة AI','كيف ستغير الأتمتة الذكية طريقة العمل والإنتاجية في السنوات القادمة.'],
    ['posts-ai/ai-affiliate-tools.html','أفضل أدوات AI للتسويق بالعمولة','الأفلييت','أدوات تساعد في كتابة المحتوى، تحليل البيانات، وتصميم صفحات الأفلييت.']
  ];

  function addMissingPosts(){
    if (!window.ALL_PUBLISHED_ARTICLES && typeof ALL_PUBLISHED_ARTICLES === 'undefined') return;
    const list = window.ALL_PUBLISHED_ARTICLES || ALL_PUBLISHED_ARTICLES;
    EXTRA_REPO_POSTS.forEach(function(post){
      if (!list.some(function(item){ return item[0] === post[0]; })) list.push(post);
    });
    if (typeof renderArticles === 'function') renderArticles();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addMissingPosts, { once:true });
  else addMissingPosts();
})();
