const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
     <rect width="100%" height="100%" fill="#ddd"/>
     <text x="50%" y="50%" font-size="28" dominant-baseline="middle" text-anchor="middle" fill="#777">Фото</text>
   </svg>`
);

// товары
const products = {
  hookahs: [
    { id: 1, name: "Odin Hookah", price: 8950, image: "images/odinmini.png" },
    { id: 2, name: "Karma 1.0", price: 8550, image: "images/karma01.png" },
    { id: 3, name: "Sky Hookah SDM Purple", price: 3350, image: "images/sky purpl.png" },
    { id: 4, name: "Totem Mikra", price: 4900, image: "images/sky purpl.png" },
    { id: 5, name: "Tiaga Black Edition", price: 3350, image: "images/sky purpl.png" }
  ],
  heat: [
    { id: 6, name: "TCL", price: 1050, image: "images/tclb.png" },
    { id: 7, name: "Khmara Control", price: 1200, image: "images/khmaraadept.png" },
    { id: 8, name: "HaGrani", price: 800, image: "images/lotus.png" }
  ],
  access: [
    { id: 9, name: "Щипці Appach", price: 400, image: "images/appach.png" },
    { id: 10, name: "Щипці Trumpet", price: 450, image: "images/Trumpet.png" },
    { id: 11, name: "Щипці Lokko", price: 350, image: "images/lokko.png" }
  ],
  bowls: [
    { id: 12, name: "Чаша Solaris Phobos", price: 400, image: "images/solarisphobos.png" },
    { id: 13, name: "Чаша Lavart Nedra", price: 450, image: "images/lavartnedra.png" },
    { id: 14, name: "Чаша Gusto Bowls", price: 420, image: "images/gustobowls.png" }
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
