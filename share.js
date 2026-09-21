(function () {
  var url = window.location.href;

  var fb = document.querySelector('[data-share="facebook"]');
  if (fb) fb.href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);

  var line = document.querySelector('[data-share="line"]');
  if (line) line.href = 'https://social-plugins.line.me/lineit/share?url=' + encodeURIComponent(url);

  function fallbackCopy(text) {
    var input = document.createElement('textarea');
    input.value = text;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(input);
    return ok;
  }

  document.querySelectorAll('.share-copy').forEach(function (btn) {
    var defaultText = btn.textContent;
    btn.addEventListener('click', function () {
      function showCopied() {
        btn.textContent = '已複製 ✓';
        setTimeout(function () { btn.textContent = defaultText; }, 1800);
      }
      function showFailed() {
        btn.textContent = '複製失敗，請手動複製';
        setTimeout(function () { btn.textContent = defaultText; }, 2200);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(showCopied, function () {
          if (fallbackCopy(url)) showCopied(); else showFailed();
        });
      } else {
        if (fallbackCopy(url)) showCopied(); else showFailed();
      }
    });
  });
})();
