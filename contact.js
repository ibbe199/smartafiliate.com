(function () {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  if (!form || !submitBtn) return;

  let submitted = false;
  const defaultLabel = submitBtn.textContent;

  form.addEventListener('submit', function (e) {
    if (submitted) {
      e.preventDefault();
      return;
    }

    submitted = true;
    submitBtn.textContent = 'جاري الإرسال...';
    submitBtn.classList.add('loading');

    window.setTimeout(function () {
      if (submitBtn.classList.contains('loading')) {
        submitBtn.textContent = defaultLabel;
        submitBtn.classList.remove('loading');
        submitted = false;
      }
    }, 10000);
  });
})();
