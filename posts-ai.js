function copyPageLink(url) {
  const message = document.getElementById('shareMessage');
  navigator.clipboard.writeText(url).then(function () {
    if (message) message.textContent = 'تم نسخ رابط الصفحة ✅';
  }).catch(function () {
    if (message) message.textContent = 'تعذر نسخ الرابط، انسخه يدويًا: ' + url;
  });
}

(function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const posts = document.querySelectorAll('.post-card');
  const postsCount = document.getElementById('postsCount');
  if (!filterButtons.length || !posts.length || !postsCount) return;

  function updatePostsCount(visibleCount) {
    postsCount.textContent = `📄 ${visibleCount} مقال`;
  }

  function filterPosts(category) {
    let visibleCount = 0;
    posts.forEach(function (post) {
      const categories = post.dataset.category || '';
      if (category === 'all' || categories.includes(category)) {
        post.style.display = 'flex';
        visibleCount++;
      } else {
        post.style.display = 'none';
      }
    });
    updatePostsCount(visibleCount);
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      filterPosts(btn.dataset.filter);
    });
  });

  filterPosts('all');
})();
