// 預約入口分流：手機直接打開 LINE（帶入預約訊息），電腦改到預約區看 QR code 與表單
(function () {
  var LINE_MSG = 'https://line.me/R/oaMessage/@864ihpsq/?';
  var ua = navigator.userAgent;
  var isMobile = /Android|iPhone|iPad|iPod|Mobile|Line\//i.test(ua) ||
    (navigator.maxTouchPoints > 1 && /Macintosh/.test(ua)); // iPadOS 會偽裝成 Mac
  document.documentElement.classList.add(isMobile ? 'is-mobile' : 'is-desktop');

  // <a data-line-msg="我想預約｜陪伴會談">：手機開 LINE，電腦到 data-desktop-href（預設 contact.html#book）
  document.querySelectorAll('a[data-line-msg]').forEach(function (a) {
    if (isMobile) {
      a.href = LINE_MSG + encodeURIComponent(a.getAttribute('data-line-msg'));
      a.target = '_blank';
      a.rel = 'noopener';
    } else {
      a.href = a.getAttribute('data-desktop-href') || 'contact.html#book';
      a.removeAttribute('target');
    }
  });

  // 手機上「沒有 LINE？改填表單」：展開原本只在電腦顯示的表單
  document.querySelectorAll('[data-show-form]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var box = document.getElementById(btn.getAttribute('data-show-form'));
      if (!box) return;
      box.classList.add('is-open');
      box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
