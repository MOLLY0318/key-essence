// 普羅芳選購清單邏輯：篩選、購物車（localStorage）、複製訂單內容＋導去 LINE 加好友
(function () {
  const CART_KEY = 'ke-shop-cart-v1';
  const CUSTOMER_KEY = 'ke-shop-customer-v1';

  let activeCategory = '全部';
  let cart = loadCart();
  let customer = loadCustomer();

  function loadCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {
      /* 私密瀏覽或儲存被擋，購物車僅維持在本次瀏覽 */
    }
  }

  function loadCustomer() {
    try {
      const raw = localStorage.getItem(CUSTOMER_KEY);
      return raw ? JSON.parse(raw) : { name: '', phone: '', ship: '', address: '' };
    } catch (e) {
      return { name: '', phone: '', ship: '', address: '' };
    }
  }

  function saveCustomer() {
    try {
      localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customer));
    } catch (e) {
      /* 私密瀏覽或儲存被擋，資料僅維持在本次瀏覽 */
    }
  }

  function productById(id) {
    return SHOP_PRODUCTS.find(function (p) { return p.id === id; });
  }

  // ── 篩選列 ──
  function renderFilters() {
    const el = document.getElementById('shopFilter');
    const cats = ['全部'].concat(SHOP_CATEGORIES);
    el.innerHTML = cats.map(function (c) {
      const active = c === activeCategory ? ' active' : '';
      return '<button type="button" class="shop-filter-btn' + active + '" data-cat="' + escapeAttr(c) + '">' + escapeHtml(c) + '</button>';
    }).join('');
    el.querySelectorAll('.shop-filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeCategory = btn.getAttribute('data-cat');
        renderFilters();
        renderGrid();
      });
    });
  }

  // ── 商品格 ──
  function renderGrid() {
    const el = document.getElementById('shopGrid');
    const list = activeCategory === '全部'
      ? SHOP_PRODUCTS
      : SHOP_PRODUCTS.filter(function (p) { return p.cat === activeCategory; });

    el.innerHTML = list.map(function (p) {
      const qty = cart[p.id] ? cart[p.id].qty : 1;
      const latin = p.latin ? p.latin : '';
      const imgHtml = p.img
        ? '<img class="shop-card-img" src="images/shop/' + escapeAttr(p.img) + '" alt="' + escapeAttr(p.name) + '">'
        : '';
      const descHtml = p.desc
        ? '<div class="shop-card-desc">' + escapeHtml(p.desc) + '</div>'
        : '';
      return (
        '<div class="shop-card" data-id="' + escapeAttr(p.id) + '">' +
          imgHtml +
          '<div class="shop-card-cat">' + escapeHtml(p.cat) + '</div>' +
          '<h3>' + escapeHtml(p.name) + '</h3>' +
          '<div class="shop-card-latin">' + escapeHtml(latin) + '</div>' +
          '<div class="shop-card-size">容量：' + escapeHtml(p.size) + '</div>' +
          descHtml +
          '<div class="shop-card-price">NT$ ' + p.price + '</div>' +
          '<div class="shop-card-row">' +
            '<div class="qty-stepper">' +
              '<button type="button" class="qty-minus" aria-label="減少數量">−</button>' +
              '<input type="text" inputmode="numeric" class="qty-input" value="' + qty + '" aria-label="數量">' +
              '<button type="button" class="qty-plus" aria-label="增加數量">＋</button>' +
            '</div>' +
            '<button type="button" class="shop-add-btn">加入清單</button>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    el.querySelectorAll('.shop-card').forEach(function (card) {
      const id = card.getAttribute('data-id');
      const input = card.querySelector('.qty-input');
      card.querySelector('.qty-minus').addEventListener('click', function () {
        input.value = Math.max(1, (parseInt(input.value, 10) || 1) - 1);
      });
      card.querySelector('.qty-plus').addEventListener('click', function () {
        input.value = Math.max(1, (parseInt(input.value, 10) || 1) + 1);
      });
      input.addEventListener('change', function () {
        const v = Math.max(1, parseInt(input.value, 10) || 1);
        input.value = v;
      });
      const addBtn = card.querySelector('.shop-add-btn');
      addBtn.addEventListener('click', function () {
        const qty = Math.max(1, parseInt(input.value, 10) || 1);
        cart[id] = { qty: qty };
        saveCart();
        updateCartFab();
        addBtn.textContent = '已加入 ✓';
        addBtn.classList.add('added');
        setTimeout(function () {
          addBtn.textContent = '加入清單';
          addBtn.classList.remove('added');
        }, 1100);
      });
    });
  }

  // ── 購物車浮動按鈕 ──
  function cartCount() {
    return Object.keys(cart).reduce(function (sum, id) { return sum + cart[id].qty; }, 0);
  }

  function updateCartFab() {
    document.getElementById('cartFabCount').textContent = cartCount();
  }

  // ── 購物車視窗 ──
  function renderCartModal() {
    const listEl = document.getElementById('cartList');
    const ids = Object.keys(cart);

    if (ids.length === 0) {
      listEl.innerHTML = '<div class="cart-empty">目前清單是空的，先去挑幾支喜歡的精油吧。</div>';
    } else {
      listEl.innerHTML = ids.map(function (id) {
        const p = productById(id);
        if (!p) return '';
        const qty = cart[id].qty;
        return (
          '<div class="cart-row" data-id="' + escapeAttr(id) + '">' +
            '<div class="cart-row-info">' +
              '<div class="cart-row-name">' + escapeHtml(p.name) + '（' + escapeHtml(p.size) + '）</div>' +
              '<div class="cart-row-meta">單價 NT$' + p.price + '</div>' +
            '</div>' +
            '<div class="qty-stepper">' +
              '<button type="button" class="cart-qty-minus" aria-label="減少數量">−</button>' +
              '<input type="text" inputmode="numeric" class="cart-qty-input" value="' + qty + '" aria-label="數量">' +
              '<button type="button" class="cart-qty-plus" aria-label="增加數量">＋</button>' +
            '</div>' +
            '<button type="button" class="cart-row-remove" aria-label="移除">🗑</button>' +
          '</div>'
        );
      }).join('');
    }

    listEl.querySelectorAll('.cart-row').forEach(function (row) {
      const id = row.getAttribute('data-id');
      const input = row.querySelector('.cart-qty-input');
      function setQty(v) {
        v = Math.max(1, v);
        cart[id].qty = v;
        input.value = v;
        saveCart();
        updateCartFab();
        renderCartTotals();
        renderGridQtyLabel(id, v);
      }
      row.querySelector('.cart-qty-minus').addEventListener('click', function () {
        setQty((parseInt(input.value, 10) || 1) - 1);
      });
      row.querySelector('.cart-qty-plus').addEventListener('click', function () {
        setQty((parseInt(input.value, 10) || 1) + 1);
      });
      input.addEventListener('change', function () {
        setQty(parseInt(input.value, 10) || 1);
      });
      row.querySelector('.cart-row-remove').addEventListener('click', function () {
        delete cart[id];
        saveCart();
        updateCartFab();
        renderCartModal();
        renderCartTotals();
      });
    });

    renderCartTotals();
  }

  function renderGridQtyLabel(id, qty) {
    const card = document.querySelector('.shop-card[data-id="' + cssEscape(id) + '"]');
    if (card) {
      const input = card.querySelector('.qty-input');
      if (input) input.value = qty;
    }
  }

  function renderCartTotals() {
    const ids = Object.keys(cart);
    let totalQty = 0, totalPrice = 0;
    ids.forEach(function (id) {
      const p = productById(id);
      if (!p) return;
      totalQty += cart[id].qty;
      totalPrice += cart[id].qty * p.price;
    });
    document.getElementById('cartTotalQty').textContent = totalQty;
    document.getElementById('cartTotalPrice').textContent = totalPrice;
  }

  function buildOrderText() {
    const ids = Object.keys(cart);
    if (ids.length === 0) return '';
    const lines = ['【普羅芳訂購清單】來自鑰．本質官網'];
    let totalQty = 0, totalPrice = 0;
    ids.forEach(function (id) {
      const p = productById(id);
      if (!p) return;
      const qty = cart[id].qty;
      const subtotal = p.price * qty;
      totalQty += qty;
      totalPrice += subtotal;
      lines.push('・' + p.name + '（' + p.size + '）NT$' + p.price + ' × ' + qty + ' = NT$' + subtotal);
    });
    lines.push('');
    lines.push('總數量：' + totalQty + '　總金額（原價）：NT$' + totalPrice);
    lines.push('');
    lines.push('姓名：' + (customer.name || '（未填寫）'));
    lines.push('電話：' + (customer.phone || '（未填寫）'));
    lines.push('寄送方式：' + (customer.ship || '（未選擇）'));
    lines.push('地址／門市／面交地點：' + (customer.address || '（未填寫）'));
    return lines.join('\n');
  }

  function fillCustomerForm() {
    document.getElementById('custName').value = customer.name || '';
    document.getElementById('custPhone').value = customer.phone || '';
    document.getElementById('custAddress').value = customer.address || '';
    document.querySelectorAll('input[name="custShip"]').forEach(function (radio) {
      radio.checked = radio.value === customer.ship;
    });
  }

  function openCartModal() {
    renderCartModal();
    fillCustomerForm();
    document.getElementById('cartModal').classList.add('open');
  }
  function closeCartModal() {
    document.getElementById('cartModal').classList.remove('open');
  }

  function isMobileDevice() {
    return /iPhone|iPod|Android/i.test(navigator.userAgent);
  }

  function openCatalogModal() {
    const pdfPath = 'files/普羅芳商品型錄.pdf';
    if (isMobileDevice()) {
      // 手機版 Safari 在 iframe 裡的 PDF 無法用手勢捲動，改成開新分頁用原生檢視器
      window.open(pdfPath, '_blank');
      return;
    }
    const frame = document.getElementById('catalogFrame');
    if (!frame.getAttribute('src')) frame.setAttribute('src', pdfPath);
    document.getElementById('catalogModal').classList.add('open');
  }
  function closeCatalogModal() {
    document.getElementById('catalogModal').classList.remove('open');
  }

  // ── 小工具 ──
  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function escapeAttr(s) { return escapeHtml(s); }
  function cssEscape(s) { return String(s).replace(/"/g, '\\"'); }

  document.addEventListener('DOMContentLoaded', function () {
    renderFilters();
    renderGrid();
    updateCartFab();

    document.getElementById('cartFab').addEventListener('click', openCartModal);
    document.getElementById('cartModalClose').addEventListener('click', closeCartModal);
    document.getElementById('cartModalBackdrop').addEventListener('click', closeCartModal);

    document.getElementById('catalogOpenBtn').addEventListener('click', openCatalogModal);
    document.getElementById('catalogModalClose').addEventListener('click', closeCatalogModal);
    document.getElementById('catalogModalBackdrop').addEventListener('click', closeCatalogModal);

    document.getElementById('custName').addEventListener('input', function (e) {
      customer.name = e.target.value;
      saveCustomer();
    });
    document.getElementById('custPhone').addEventListener('input', function (e) {
      customer.phone = e.target.value;
      saveCustomer();
    });
    document.getElementById('custAddress').addEventListener('input', function (e) {
      customer.address = e.target.value;
      saveCustomer();
    });
    document.querySelectorAll('input[name="custShip"]').forEach(function (radio) {
      radio.addEventListener('change', function (e) {
        customer.ship = e.target.value;
        saveCustomer();
      });
    });

    document.getElementById('cartClearBtn').addEventListener('click', function () {
      if (Object.keys(cart).length === 0) return;
      if (!window.confirm('確定要清空整份訂購清單嗎？')) return;
      cart = {};
      saveCart();
      updateCartFab();
      renderCartModal();
      renderGrid();
    });

    document.getElementById('cartCopyBtn').addEventListener('click', function () {
      const text = buildOrderText();
      if (!text) return;
      const btn = document.getElementById('cartCopyBtn');
      const done = function () {
        const original = btn.textContent;
        btn.textContent = '已複製 ✓';
        setTimeout(function () { btn.textContent = original; }, 1400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
      } else {
        fallbackCopy(text, done);
      }
    });

    function fallbackCopy(text, done) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { /* 複製失敗就讓使用者手動選取 */ }
      document.body.removeChild(ta);
    }
  });
})();
