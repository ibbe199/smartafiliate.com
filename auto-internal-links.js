(function(){
  'use strict';

  const LINKS = [
    ['Ollama', '/posts-ai/ollama-guide.html'],
    ['أولاما', '/posts-ai/ollama-guide.html'],
    ['Llama 3', '/posts-ai/llama3-guide.html'],
    ['لاما 3', '/posts-ai/llama3-guide.html'],
    ['Mistral', '/posts-ai/mistral-guide.html'],
    ['ميسترال', '/posts-ai/mistral-guide.html'],
    ['Falcon', '/posts-ai/falcon-guide.html'],
    ['فالكون', '/posts-ai/falcon-guide.html'],
    ['DeepSeek', '/posts-ai/deepseek-guide.html'],
    ['ديب سيك', '/posts-ai/deepseek-guide.html'],
    ['Hugging Face', '/posts-ai/huggingface-guide.html'],
    ['هاجينغ فيس', '/posts-ai/huggingface-guide.html'],
    ['LM Studio', '/posts-ai/lmstudio-guide.html'],
    ['Open WebUI', '/posts-ai/openwebui-guide.html'],
    ['GPT4All', '/posts-ai/gpt4all-guide.html'],
    ['الأتمتة', '/posts-ai/ai-automation-productivity.html'],
    ['أتمتة المهام', '/posts-ai/ai-automation-productivity.html'],
    ['التصميم بالذكاء الاصطناعي', '/posts-ai/best-ai-design-tools.html'],
    ['Canva AI', '/posts-ai/canva-ai-review.html'],
    ['ChatGPT', '/posts-ai/chatgpt-review.html'],
    ['أدوات الكتابة', '/posts-ai/30-best-ai-writing-tools.html'],
    ['SEO', '/posts-ai/content-structure-seo.html'],
    ['تعلم الذكاء الاصطناعي', '/posts-ai/complete-ai-learning-path.html']
  ];

  function addStyle(){
    if(document.getElementById('auto-internal-links-style')) return;
    const css = `.auto-internal-link{color:#c2410c!important;font-weight:900!important;text-decoration:none!important;border-bottom:1px dashed rgba(234,88,12,.45)}.auto-internal-link:hover{color:#ea580c!important;border-bottom-style:solid}`;
    const style = document.createElement('style');
    style.id = 'auto-internal-links-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function isArticlePage(){
    return location.pathname.includes('/posts-ai/') || document.querySelector('article,.article-body,.post-content,.tool-article');
  }

  function escapeRegExp(text){
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function shouldSkip(node){
    const parent = node.parentElement;
    if(!parent) return true;
    if(parent.closest('a,script,style,textarea,code,pre,h1,h2,h3,h4,h5,h6,nav,header,footer,.cta-row,.link-grid,.unified-actions,.main-nav')) return true;
    return false;
  }

  function linkTextNode(node, used){
    if(shouldSkip(node)) return;
    let text = node.nodeValue;
    if(!text || text.trim().length < 8) return;

    for(const item of LINKS){
      const phrase = item[0];
      const href = item[1];
      if(used.has(phrase)) continue;
      if(location.pathname === href) continue;
      const regex = new RegExp('(^|\\s|[،.؛:!؟\"])(' + escapeRegExp(phrase) + ')(?=$|\\s|[،.؛:!؟\"])', 'i');
      const match = text.match(regex);
      if(!match) continue;

      const before = text.slice(0, match.index) + match[1];
      const matched = match[2];
      const after = text.slice(match.index + match[0].length);
      const frag = document.createDocumentFragment();
      if(before) frag.appendChild(document.createTextNode(before));
      const a = document.createElement('a');
      a.href = href;
      a.className = 'auto-internal-link';
      a.textContent = matched;
      frag.appendChild(a);
      if(after) frag.appendChild(document.createTextNode(after));
      node.parentNode.replaceChild(frag, node);
      used.add(phrase);
      break;
    }
  }

  function addRelatedBox(){
    if(document.querySelector('.auto-related-box')) return;
    const article = document.querySelector('.article-body, article, .post-content, main');
    if(!article) return;
    const current = location.pathname;
    const related = LINKS.filter(function(item){ return item[1] !== current; }).slice(0,6);
    const box = document.createElement('aside');
    box.className = 'link-box auto-related-box';
    box.innerHTML = '<h2>اقرأ أيضًا</h2><div class="link-grid">' + related.map(function(item){ return '<a href="'+item[1]+'">'+item[0]+'</a>'; }).join('') + '</div>';
    article.appendChild(box);
  }

  function run(){
    if(!isArticlePage()) return;
    addStyle();
    const root = document.querySelector('.article-body, article, .post-content, main');
    if(!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    const used = new Set();
    nodes.forEach(function(node){
      if(used.size < 14) linkTextNode(node, used);
    });
    addRelatedBox();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, {once:true}); else run();
})();
