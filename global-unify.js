(function(){
  'use strict';

  const AFFILIATE_LINK = 'https://568c33r-ouavcya3kf-f44g5qs.hop.clickbank.net';

  const toolMap = {
    'mistral': ['/tools/mistral.html', 'https://mistral.ai/'],
    'falcon': ['/tools/falcon.html', 'https://falconllm.tii.ae/'],
    'ollama': ['/tools/ollama.html', 'https://ollama.com/'],
    'llama 3': ['/tools/llama.html', 'https://www.llama.com/'],
    'llama': ['/tools/llama.html', 'https://www.llama.com/'],
    'deepseek': ['/tools/deepseek.html', 'https://www.deepseek.com/'],
    'hugging face': ['/tools/huggingface.html', 'https://huggingface.co/'],
    'lm studio': ['/tools/lmstudio.html', 'https://lmstudio.ai/'],
    'open webui': ['/tools/openwebui.html', 'https://github.com/open-webui/open-webui'],
    'gpt4all': ['/tools/gpt4all.html', 'https://www.nomic.ai/gpt4all']
  };

  function addStyle(){
    if(document.getElementById('global-unify-style')) return;
    const css = `
      :root{--sa-dark:#071426;--sa-blue:#12305a;--sa-orange:#ea580c;--sa-green:#16a34a;--sa-soft:#eef5ff;--sa-border:#dbeafe}
      .sa-card,.tool-card,.article-card,.directory-card,.decision-card{box-sizing:border-box!important}
      .tool-card,.article-card,.directory-card{border-radius:24px!important;border:1px solid var(--sa-border)!important;background:#fff!important;box-shadow:0 10px 28px rgba(15,23,42,.07)!important;overflow:hidden!important}
      .tools-grid .tool-card,.articles-grid .article-card{min-height:270px!important;height:270px!important;display:flex!important;flex-direction:column!important;justify-content:space-between!important;align-items:center!important;text-align:center!important;padding:1rem!important}
      .home-card-visual,.article-image,.post-image,.card-image,.tool-image,.featured-image,.unified-visual,.tool-preview{height:92px!important;min-height:92px!important;max-height:92px!important;width:100%!important;border-radius:18px!important;margin:0 0 .8rem!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;background:radial-gradient(circle at 18% 18%,rgba(255,255,255,.24),transparent 28%),linear-gradient(135deg,var(--sa-dark),var(--sa-blue) 60%,var(--sa-orange))!important;color:#fff!important;overflow:hidden!important}
      .home-card-visual span,.unified-visual span,.preview-icon{width:46px!important;height:46px!important;border-radius:16px!important;background:rgba(255,255,255,.15)!important;border:1px solid rgba(255,255,255,.18)!important;display:flex!important;align-items:center!important;justify-content:center!important;font-size:1.35rem!important;color:#fff!important;margin:0 auto .2rem!important}
      .preview-title{font-size:.78rem!important;font-weight:950!important;color:#fff!important}.preview-subtitle{display:none!important}
      .tool-card h3,.article-card h3,.directory-card h4{font-size:1rem!important;line-height:1.45!important;margin:.15rem 0 .35rem!important;color:#0b1f3a!important;font-weight:950!important;text-align:center!important}
      .tool-card p,.article-card p,.article-excerpt,.directory-card p{font-size:.8rem!important;line-height:1.65!important;color:#64748b!important;margin:.1rem 0 .55rem!important;max-height:3.35em!important;overflow:hidden!important;text-align:center!important}
      .unified-actions{display:flex!important;flex-wrap:wrap!important;gap:.45rem!important;align-items:center!important;justify-content:center!important;margin-top:auto!important;width:100%!important;position:relative!important;z-index:20!important}
      .sa-btn,.sa-btn-primary,.sa-btn-secondary,.tool-link,.read-more{display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:34px!important;padding:.45rem .82rem!important;border-radius:999px!important;text-decoration:none!important;font-size:.76rem!important;font-weight:950!important;line-height:1.2!important;pointer-events:auto!important;cursor:pointer!important;white-space:nowrap!important}
      .sa-btn-primary,.tool-link,.read-more{background:linear-gradient(135deg,var(--sa-green),#22c55e)!important;color:#fff!important;border:1px solid rgba(22,163,74,.25)!important;box-shadow:0 8px 18px rgba(22,163,74,.20)!important}
      .sa-btn-secondary{background:#fff!important;color:#0b1f3a!important;border:1px solid var(--sa-border)!important;box-shadow:0 5px 14px rgba(15,23,42,.05)!important}
      a[target="_blank"].sa-btn-secondary::after{content:' ↗'}
      .tool-card img,.article-card img,.post-card img{display:none!important}
      .tool-page main,.tool-article,.article-page main,.post-page main{max-width:960px!important;margin:auto!important;padding:24px!important}
      .tool-article .card,.tool-page .card,article .card{border-radius:24px!important;border:1px solid var(--sa-border)!important;box-shadow:0 8px 24px rgba(15,23,42,.06)!important}
      @media(max-width:760px){.tools-grid .tool-card,.articles-grid .article-card{height:245px!important;min-height:245px!important;min-width:78%!important}.home-card-visual,.article-image,.post-image,.card-image,.tool-image,.featured-image,.unified-visual,.tool-preview{height:78px!important;min-height:78px!important;max-height:78px!important}.sa-btn,.sa-btn-primary,.sa-btn-secondary,.tool-link,.read-more{min-height:32px!important;font-size:.7rem!important;padding:.4rem .68rem!important}}
    `;
    const style=document.createElement('style'); style.id='global-unify-style'; style.textContent=css; document.head.appendChild(style);
  }

  function normalizeCardVisual(card, index){
    if(card.querySelector('.home-card-visual,.unified-visual,.article-image,.post-image,.card-image,.tool-image,.featured-image,.tool-preview')) return;
    const icons = ['🤖','📚','🎓','🧩','⚙️','🔎','✍️','🚀'];
    const visual = document.createElement('div');
    visual.className = 'unified-visual';
    visual.setAttribute('aria-hidden','true');
    visual.innerHTML = '<span>' + icons[index % icons.length] + '</span>';
    card.insertBefore(visual, card.firstChild);
  }

  function cardKey(card){
    const title = (card.querySelector('h3,h2,.preview-title')?.textContent || '').toLowerCase();
    const text = (title + ' ' + (card.textContent || '').toLowerCase()).trim();
    return Object.keys(toolMap).find(k => text.includes(k));
  }

  function normalizeButtons(card){
    const key = cardKey(card);
    let internal = key ? toolMap[key][0] : null;
    let external = key ? toolMap[key][1] : null;
    const existing = Array.from(card.querySelectorAll('a[href]'));
    const firstInternal = existing.find(a => {
      const href = a.getAttribute('href') || '';
      return href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('#');
    });
    const firstExternal = existing.find(a => (a.getAttribute('href') || '').startsWith('http'));
    internal = internal || (firstInternal ? firstInternal.getAttribute('href') : null);
    external = external || (firstExternal ? firstExternal.getAttribute('href') : null);
    if(!internal && !external) return;

    existing.forEach(a => {
      if(a.closest('.main-nav,.header-actions,.top-conversion-bar,.guide-cta,.mid-cta,.end-cta')) return;
      a.remove();
    });
    card.querySelectorAll('.unified-actions').forEach(row => row.remove());

    const row = document.createElement('div');
    row.className = 'unified-actions';
    if(internal){
      const a = document.createElement('a');
      a.href = internal.startsWith('/') ? internal : '/' + internal;
      a.className = 'sa-btn-primary';
      a.textContent = 'Open / افتح';
      row.appendChild(a);
    }
    if(external){
      const a = document.createElement('a');
      a.href = external;
      a.className = 'sa-btn-secondary';
      a.textContent = 'Official / الرسمي';
      a.target = '_blank';
      a.rel = 'noopener noreferrer nofollow';
      row.appendChild(a);
    }
    card.appendChild(row);
    card.dataset.unifiedButtons = 'true';
  }

  function normalizeCards(){
    const cards = Array.from(document.querySelectorAll('.tool-card,.article-card,.directory-card'));
    cards.forEach((card, index) => {
      normalizeCardVisual(card, index);
      normalizeButtons(card);
    });
  }

  function fixLinks(){
    document.querySelectorAll('a[href]').forEach(a => {
      let href = a.getAttribute('href');
      if(!href) return;
      href = href.trim();
      if(href === '/tools-comparison.html' || href === 'tools-comparison.html') a.setAttribute('href','/ai-tools-comparison.html');
      if(href === 'articles.html') a.setAttribute('href','/ai-articles.html');
      if(href === 'blog.html') a.setAttribute('href','/ai-articles.html');
      if(href.startsWith('tools/')) a.setAttribute('href','/' + href);
      if(href.startsWith('posts-ai/')) a.setAttribute('href','/' + href);
      href = a.getAttribute('href') || href;
      if(href.startsWith('http')){
        if(!a.target) a.target = '_blank';
        const rel = (a.rel || '').split(/\s+/);
        ['noopener','noreferrer'].forEach(r => { if(!rel.includes(r)) rel.push(r); });
        if((href.includes('hop.clickbank.net') || href.includes('clickbank.net')) && !rel.includes('sponsored')) rel.push('sponsored');
        a.rel = rel.filter(Boolean).join(' ');
      }
    });
  }

  function normalizePageShell(){
    document.body.classList.add('sa-unified');
    document.querySelectorAll('main > section').forEach(section => {
      if(!section.classList.contains('section') && !section.classList.contains('page-hero')) section.classList.add('section');
    });
  }

  function run(){ addStyle(); fixLinks(); normalizePageShell(); normalizeCards(); }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, {once:true}); else run();
})();
