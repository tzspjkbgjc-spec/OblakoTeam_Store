// ====== ПРИВЕТСТВЕННЫЙ ЭКРАН ======
const enterBtn = document.getElementById("enter-btn");
const welcome = document.getElementById("welcome");
const elementsToShow = document.querySelectorAll(".top, .slogan-bar, .tabs, .brand-tabs, .grid, .bottom");

enterBtn.addEventListener("click", () => {
  welcome.classList.add("hide");
  setTimeout(() => {
    welcome.remove();
    elementsToShow.forEach(el => el.classList.remove("hidden"));
  }, 400);
});

// ====== ТОВАРИ ======

// приклад даних (заміни або доповни своїми)
const hookahsKarma = [
  { id: "karma-1", brand: "karma", name: "KARMA MODEL 0.0 ЖОВТИЙ", price: 8029, image: "images/karma0.0yellow.jpg" },
  { id: "karma-2", brand: "karma", name: "KARMA MODEL 0.0 ЗЕЛЕНИЙ", price: 7979, image: "images/karma0.0green.jpg" },
  { id: "karma-3", brand: "karma", name: "KARMA MODEL 0.0 ЧОРНИЙ", price: 8079, image: "images/karma0.0black.jpg" },
];

const hookahsTotem = [
  { id: "totem-1", brand: "totem", name: "TOTEM MIKRA BLACK", price: 8550, image: "images/totemblack.jpg" },
  { id: "totem-2", brand: "totem", name: "TOTEM MIKRA SILVER", price: 8490, image: "images/totemsilver.jpg" },
];

const hookahsOdin = [
  { id: "odin-1", brand: "odin", name: "ODIN HOOKAH CLASSIC", price: 8950, image: "images/odinclassic.jpg" },
  { id: "odin-2", brand: "odin", name: "ODIN MINI", price: 7350, image: "images/odinmini.jpg" },
];

const products = {
  hookahs: [...hookahsKarma, ...hookahsTotem, ...hookahsOdin],
  heat: [
    { id: "heat-1", name: "REGULATOR KALOUD LOTUS", price: 980, image: "images/kaloud.jpg" },
    { id: "heat-2", name: "ALPHA HEAT MANAGER", price: 1150, image: "images/alphaheat.jpg" },
  ],
  access: [
    { id: "acc-1", name: "ЩИПЦІ ДЛЯ ВУГІЛЛЯ", price: 350, image: "images/tongs.jpg" },
    { id: "acc-2", name: "ЩІТКА ДЛЯ КОЛБИ", price: 180, image: "images/brush.jpg" },
  ],
  bowls: [
    { id: "bowl-1", name: "SOLARIS PHOBOS", price: 490, image: "images/solarisphobos.jpg" },
    { id: "bowl-2", name: "GUSTO BOWL CLASSIC", price: 550, image: "images/gusto.jpg" },
  ],
  vases: [
    { id: "vase-1", name: "КОЛБА BLACK MAT", price: 990, image: "images/vaseblack.jpg" },
    { id: "vase-2", name: "КОЛБА CLEAR CLASSIC", price: 850, image: "images/vaseclear.jpg" },
  ],
};

// ====== РЕНДЕР ТОВАРІВ ======
const productsEl = document.getElementById("products");
const brandTabs = document.getElementById("brand-tabs");

function renderProducts(category, brand = null) {
  productsEl.innerHTML = "";
  let list = products[category] || [];

  if (category === "hookahs" && brand) {
    list = list.filter(p => p.brand === brand);
  }

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price} грн</p>
      <button class="btn-buy" data-id="${item.id}">Додати в кошик</button>
    `;
    productsEl.appendChild(card);
  });
}

renderProducts("hookahs", "karma");

// ====== ВКЛАДКИ КАТЕГОРІЙ ======
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", e => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const cat = tab.dataset.category;
    if (cat === "hookahs") brandTabs.classList.remove("hidden");
    else brandTabs.classList.add("hidden");

    const activeBrand = document.querySelector(".brand-tab.active")?.dataset.brand;
    renderProducts(cat, cat === "hookahs" ? activeBrand : null);
  });
});

// ====== ВКЛАДКИ БРЕНДІВ ======
document.querySelectorAll(".brand-tab").forEach(tab => {
  tab.addEventListener("click", e => {
    document.querySelectorAll(".brand-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const brand = tab.dataset.brand;
    renderProducts("hookahs", brand);
  });
});

// ====== КОРЗИНА ======
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartCount = document.getElementById("cart-count");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");

let cart = [];

function updateCart() {
  cartItemsEl.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    const row = document.createElement("div");
    row.className = "cart-row";
    row.innerHTML = `
      <span>${item.name} (${item.qty})</span>
      <span>${item.price * item.qty} грн</span>
      <button class="remove" data-id="${item.id}">✖</button>
    `;
    cartItemsEl.appendChild(row);
  });

  cartTotalEl.textContent = total;
  cartCount.textContent = cart.reduce((a, b) => a + b.qty, 0);
}

productsEl.addEventListener("click", e => {
  if (e.target.classList.contains("btn-buy")) {
    const id = e.target.dataset.id;
    const allProducts = Object.values(products).flat();
    const prod = allProducts.find(p => p.id === id);
    if (!prod) return;
    const existing = cart.find(c => c.id === id);
    if (existing) existing.qty++;
    else cart.push({ ...prod, qty: 1 });
    updateCart();
  }
});

cartItemsEl.addEventListener("click", e => {
  if (e.target.classList.contains("remove")) {
    const id = e.target.dataset.id;
    cart = cart.filter(c => c.id !== id);
    updateCart();
  }
});

cartBtn.addEventListener("click", () => {
  cartModal.classList.remove("hidden");
});

closeCart.addEventListener("click", () => {
  cartModal.classList.add("hidden");
});

// ====== РІК У ФУТЕРІ ======
document.getElementById("year").textContent = new Date().getFullYear();
