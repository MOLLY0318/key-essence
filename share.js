(function () {
  var url = window.location.href;
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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

  function copyToClipboard(text, done) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () {
        done(fallbackCopy(text));
      });
    } else {
      done(fallbackCopy(text));
    }
  }

  var toastEl = null;
  function showToast(message) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'share-toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    toastEl.classList.add('is-visible');
    clearTimeout(toastEl._hideTimer);
    toastEl._hideTimer = setTimeout(function () {
      toastEl.classList.remove('is-visible');
    }, 4200);
  }

  document.querySelectorAll('.share-copy').forEach(function (btn) {
    var defaultText = btn.textContent;
    btn.addEventListener('click', function () {
      copyToClipboard(url, function (ok) {
        btn.textContent = ok ? '已複製 ✓' : '複製失敗，請手動複製';
        setTimeout(function () { btn.textContent = defaultText; }, ok ? 1800 : 2200);
      });
    });
  });

  document.querySelectorAll('.share-ig').forEach(function (btn) {
    btn.addEventListener('click', function () {
      copyToClipboard(url, function (ok) {
        showToast(ok
          ? '連結已複製！打開 IG → 新增限動 → 貼紙 → 連結，貼上剛複製的網址'
          : '請手動複製網址，再打開 IG → 新增限動 → 貼紙 → 連結');
        if (ok && isMobile) {
          setTimeout(function () {
            window.location.href = 'instagram://story-camera';
          }, 600);
        }
      });
    });
  });
})();
