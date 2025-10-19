// placeholder svg for missing images
const PLACEHOLDER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
       <rect width="100%" height="100%" fill="#ddd"/>
       <text x="50%" y="50%" font-size="28" dominant-baseline="middle" text-anchor="middle" fill="#777">
         Фото отсутствует
       </text>
     </svg>`
  );

// products: 4 categories × 10 items (placeholders)
const products = {
  calyan: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: Кальян Tiaga / Sky ${i + 1},
    price: ₴${2200 + i * 50},
    image: PLACEHOLDER,
    desc: Короткое описание кальяна №${i + 1}.,
  })),
  kolby: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: Колба ${i + 1},
    price: ₴${400 + i * 30},
    image: PLACEHOLDER,
    desc: Колба №${i + 1}, прочное стекло.,
  })),
  mixes: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: Смесь ${i + 1},
    price: ₴${120 + i * 25},
    image: PLACEHOLDER,
    desc: Вкусная смесь ${i + 1}.,
  })),
  access: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: Аксессуар ${i + 1},
    price: ₴${80 + i * 20},
    image: PLACEHOLDER,
    desc: Полезный аксессуар ${i + 1}.,
  })),
};

const productsContainer = document.getElementById('products');
const tabs = document.querySelectorAll('.tab');

// создаём карточку товара
function createCard(p) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <div class="title">${p.name}</div>
    <div class="price">${p.price}</div>
    <div class="meta"><button class="btn-buy" data-id="${p.id}">Посмотреть</button></div>
  `;
  card.querySelector('.btn-buy').addEventListener('click', () => openModal(p));
  return card;
}

// отрисовка категории
function render(category) {
  const list = products[category] || [];
  productsContainer.innerHTML = '';
  list.forEach((p) => productsContainer.appendChild(createCard(p)));
}

// логика вкладок
tabs.forEach((t) => {
  t.addEventListener('click', () => {
    tabs.forEach((x) => x.classList.remove('active'));
    t.classList.add('active');
    render(t.dataset.category);
    window.scrollTo({
      top: document.getElementById('products').offsetTop - 80,
      behavior: 'smooth',
    });
  });
});

// модальное окно товара
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const buyBtn = document.getElementById('buyBtn');

function openModal(p) {
  modalImg.src = p.image;
  modalTitle.textContent = p.name;
  modalPrice.textContent = p.price;
  modalDesc.textContent = p.desc;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  buyBtn.onclick = () => {
    addToCart(p);
    closeTheModal();
  };
}

function closeTheModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeTheModal();
});
document.querySelectorAll('.modal-backdrop').forEach((el) =>
  el.addEventListener('click', closeTheModal)
);
closeModal.addEventListener('click', closeTheModal);

// корзина
let cart = [];
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

cartBtn.addEventListener('click', () => {
  cartModal.classList.remove('hidden');
});
closeCart.addEventListener('click', () => {
  cartModal.classList.add('hidden');
});

function addToCart(p) {
  cart.push(p);
  updateCartUI();
}
innerHTML = '';
  let total = 0;

  cart.forEach((it, idx) => {
    const el = document.createElement('div');
    el.className = 'cart-row';
    el.innerHTML = `
      <div>${it.name} — ${it.price} 
        <button data-remove="${idx}">Удалить</button>
      </div>
    `;
    cartItems.appendChild(el);
    total += Number(String(it.price).replace(/[^0-9]/g, '')) || 0;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;

  cartItems.querySelectorAll('button[data-remove]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const idx = Number(e.target.getAttribute('data-remove'));
      cart.splice(idx, 1);
      updateCartUI();
    });
  });
}

// стартовая категория
render('calyan');
document.getElementById('year').textContent = new Date().getFullYear();function updateCartUI() {
  cartItems.
