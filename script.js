const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
     <rect width="100%" height="100%" fill="#ddd"/>
     <text x="50%" y="50%" font-size="28" dominant-baseline="middle" text-anchor="middle" fill="#777">Фото</text>
   </svg>`
);

// товары
const products = {
  hookahs: [
    { id: 1, name: "Odin Hookah", price: 8950, image: "images/loki.jpg" },
    { id: 2, name: "Karma 1.0", price: 8550, image: "images/karma.jpg" },
    { id: 3, name: "Sky Hookah SDM Purple", price: 3350, image: "images/sky purpl.png" }
  ],
  heat: [
    { id: 4, name: "TCL", price: 1050, image: PLACEHOLDER },
    { id: 5, name: "Khmara Control", price: 1200, image: PLACEHOLDER },
    { id: 6, name: "HaGrani", price: 800, image: PLACEHOLDER }
  ],
  access: [
    { id: 7, name: "Щипці Appach", price: 400, image: PLACEHOLDER },
    { id: 8, name: "Щипці Gramm", price: 450, image: PLACEHOLDER },
    { id: 9, name: "Щипці Embery", price: 350, image: PLACEHOLDER }
  ],
  bowls: [
    { id: 10, name: "Чаша Solaris Phobos", price: 400, image: PLACEHOLDER },
    { id: 11, name: "Чаша LAVART NEDRA AMBER WOOD", price: 450, image: PLACEHOLDER },
    { id: 12, name: "Чаша Totem", price: 420, image: PLACEHOLDER }
  ]
};

// отображение
const productsContainer = document.getElementById('products');
const tabs = document.querySelectorAll('.tab');

function render(category){
  const list = products[category] || [];
  productsContainer.innerHTML = '';
  list.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price} грн</p>
      <button class="btn-buy" data-id="${p.id}">Додати в кошик</button>
    `;
    productsContainer.appendChild(card);
  });
}

// вкладки
tabs.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    render(tab.dataset.category);
  });
});

// корзина
let cart = [];
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

cartBtn.addEventListener('click', ()=>{
  cartModal.classList.remove('hidden');
  updateCart();
});
closeCart.addEventListener('click', ()=> cartModal.classList.add('hidden'));

document.addEventListener('click', e=>{
  if(e.target.classList.contains('btn-buy')){
    const id = Number(e.target.dataset.id);
    const item = Object.values(products).flat().find(p=>p.id===id);
    if(item){
      const exist = cart.find(c=>c.id===id);
      if(exist) exist.qty++;
      else cart.push({...item, qty:1});
      updateCart();
    }
  }
  if(e.target.classList.contains('remove')){
    const id = Number(e.target.dataset.id);
    cart = cart.filter(c=>c.id!==id);
    updateCart();
  }
});

function updateCart(){
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item=>{
    total += item.price * item.qty;
    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <div>${item.name} × ${item.qty} — ${item.price * item.qty} грн 
      <button class="remove" data-id="${item.id}">✖</button></div>
    `;
    cartItems.appendChild(row);
  });
  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

document.getElementById('year').textContent = new Date().getFullYear();

// стартовая вкладка
render('hookahs');
