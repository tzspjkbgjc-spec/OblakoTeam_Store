// =============== ХЕЛПЕР ДЛЯ ТОВАРІВ ===============
function item(id, brand, category, name, price, image) {
  return { id, brand, category, name, price, image };
}

// =============== ДАНІ ТОВАРІВ ===============

// ---- КАЛЬЯНИ ----
const hookahs = [
  item("karma-1","karma","hookahs","KARMA MODEL 0.0 YELLOW",8029,"images/karma/karma0.0yellow.jpg"),
  item("odin-1","odin","hookahs","ODIN MINI BLACK",9120,"images/odin/odinmini-black.jpg"),
  item("totem-1","totem","hookahs","TOTEM MIKRA STEEL",9700,"images/totem/totem-mikra-steel.jpg"),
  item("sky-1","sky","hookahs","SKY HOOKAH SDM MINI",8999,"images/sky/skymini.jpg"),
  item("gramm-1","gramm","hookahs","GRAMM HOOKAH DARK",7800,"images/gramm/grammdark.jpg"),
  item("trumpet-1","trumpet","hookahs","TRUMPET ONE CHROME",8600,"images/trumpet/trumpetone.jpg"),
  item("tiaga-1","tiaga","hookahs","TIAGA MINI WOOD",7350,"images/tiaga/tiagamini.jpg"),
];

// ---- РЕГУЛЯТОРИ ЖАРУ ----
const koluyd = [
  item("heat-1","heatctrl","koluyd","KALOUD LOTUS PLUS",1550,"images/koluyd/lotusplus.jpg"),
  item("heat-2","heatctrl","koluyd","OBLΛKO HEATCTRL",1250,"images/koluyd/oblakoheat.jpg"),
];

// ---- ЧАШІ ----
const bowls = [
  item("bowl-1","oblako","чаши","OBLΛKO PHUNNEL M GLAZE",780,"images/чаши/oblakoM.jpg"),
  item("bowl-2","oblako","чаши","OBLΛKO PHUNNEL L MARBLE",950,"images/чаши/oblakoL.jpg"),
  item("bowl-3","karma","чаши","KARMA CLASSIC BOWL",720,"images/чаши/karmaclassic.jpg"),
];

// ---- ЩИПЦІ ----
const tweezers = [
  item("tweez-1","oblako","щипцы","ЩИПЦІ OBLΛKO CLASSIC",199,"images/щипцы/tongs-oblako.jpg"),
  item("tweez-2","heatctrl","щипцы","ЩИПЦІ PREMIUM BLACK",249,"images/щипцы/tongs-black.jpg"),
  item("tweez-3","heatctrl","щипцы","ЩИПЦІ TITAN MINI",179,"images/щипцы/tongs-mini.jpg"),
];

// ---- УСІ ТОВАРИ ----
const products = [...hookahs, ...koluyd, ...bowls, ...tweezers];

// =============== РЕНДЕР КАТАЛОГУ ===============
const grid = document.getElementById("productGrid");
const tabs = document.querySelectorAll(".tab-btn");
const brands = document.querySelectorAll(".brand-btn");

function renderProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="product-img">
      <div class="product-name">${p.name}</div>
      <div class="product-price">₴${p.price}</div>
      <button class="add-btn" data-add="${p.id}">В кошик</button>
    `;
    grid.appendChild(card);
  });
}

// початкове відображення
renderProducts(products);

// =============== ФІЛЬТРИ ===============
let currentCategory = "hookahs";
let currentBrand = "all";

function applyFilters() {
  let filtered = products.filter(p => p.category === currentCategory);
  if (currentBrand !== "all") filtered = filtered.filter(p => p.brand === currentBrand);
  renderProducts(filtered);
}

// категорії
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentCategory = tab.getAttribute("data-category");
    applyFilters();
  });
});

// бренди
brands.forEach(btn => {
  btn.addEventListener("click", () => {
    brands.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentBrand = btn.getAttribute("data-brand");
    applyFilters();
  });
});

// =============== КОРЗИНА ===============
let cart = JSON.parse(localStorage.getItem("oblako_cart")) || [];

const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const tgCheckout = document.getElementById("tgCheckout");

function saveCart() {
  localStorage.setItem("oblako_cart", JSON.stringify(cart));
}

function updateCartUI() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
      <div><strong>${item.name}</strong></div>
      <div>₴${item.price} × ${item.qty}</div>
      <button data-remove="${item.id}" class="remove-btn">−</button>
    `;
    cartItems.appendChild(el);
  });
  cartTotal.textContent = `₴${total}`;
  cartCount.textContent = cart.reduce((a, b) => a + b.qty, 0);
  saveCart();
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  updateCartUI();
}

function removeFromCart(id) {
  const idx = cart.findIndex(i => i.id === id);
  if (idx > -1) {
    cart[idx].qty--;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
    updateCartUI();
  }
}

grid.addEventListener("click", e => {
  const addBtn = e.target.closest("[data-add]");
  if (addBtn) addToCart(addBtn.getAttribute("data-add"));
});

cartItems.addEventListener("click", e => {
  const rem = e.target.closest("[data-remove]");
  if (rem) removeFromCart(rem.getAttribute("data-remove"));
});

if (openCartBtn) openCartBtn.addEventListener("click", () => {
  cartOverlay.classList.add("active");
  updateCartUI();
});
if (closeCartBtn) closeCartBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("active");
});

// =============== TELEGRAM LINK ===============
tgCheckout.addEventListener("click", () => {
  const msg = encodeURIComponent(
    "🔥 Нове замовлення OBLΛKO MARKET:\n\n" +
    cart.map(i => `${i.name} — ₴${i.price} × ${i.qty}`).join("\n") +
    `\n\nРазом: ${cartTotal.textContent}`
  );
  tgCheckout.href = `https://t.me/Market199?text=${msg}`;
});

// =============== HERO SCREEN ПЕРЕХІД ===============
const enterBtn = document.getElementById("enterCatalogBtn");
const hero = document.getElementById("heroScreen");
enterBtn.addEventListener("click", () => {
  hero.style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Ініціалізація
updateCartUI();
