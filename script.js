// OblakoUa — simple shop with cart + Telegram checkout
const products = [
  { id: 1, name: "Кальян Odin", price: 8950, img: "https://picsum.photos/seed/odin/800/600" },
  { id: 2, name: "Кальян Karma", price: 8550, img: "https://picsum.photos/seed/karma/800/600" }
];

const container = document.getElementById("products");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartItemsEl = document.getElementById("cart-items");
const cartCountEl = document.getElementById("cart-count");
const cartTotalEl = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout");
const tgLinkEl = document.getElementById("tg-link");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render products
function renderProducts(){
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.price} грн</p>
      <button data-id="${p.id}">Добавить в корзину</button>
    `;
    container.appendChild(card);
  });
}

// Cart render
function renderCart(){
  cartItemsEl.innerHTML = "";
  if(cart.length === 0){
    cartItemsEl.innerHTML = "<p>Корзина пуста</p>";
  } else {
    cart.forEach(item => {
      const row = document.createElement("div");
      row.className = "cart-row";
      row.innerHTML = `
        <div>
          <strong>${item.name}</strong><br/>
          <small>${item.qty} × ${item.price} грн</small>
        </div>
        <div>
          <button data-id="${item.id}" class="remove">Удалить</button>
        </div>
      `;
      cartItemsEl.appendChild(row);
    });
  }
  cartCountEl.textContent = cart.reduce((s,i)=>s+i.qty,0);
  cartTotalEl.textContent = cart.reduce((s,i)=>s+i.qty*i.price,0);
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add/remove handlers
document.addEventListener("click", e => {
  if(e.target.tagName === "BUTTON" && e.target.dataset.id && !e.target.classList.contains('remove')){
    const id = Number(e.target.dataset.id);
    const p = products.find(x => x.id === id);
    if(!p) return;
    const inCart = cart.find(x => x.id === id);
    if(inCart) inCart.qty++;
    else cart.push({ id: p.id, name: p.name, price: p.price, qty: 1 });
    renderCart();
  }
  if(e.target.classList.contains("remove")){
    const id = Number(e.target.dataset.id);
    cart = cart.filter(x => x.id !== id);
    renderCart();
  }
});

cartBtn.addEventListener("click", () => {
  cartModal.classList.remove("hidden");
  renderCart();
});

closeCart.addEventListener("click", ()=> cartModal.classList.add("hidden"));

// Checkout via Telegram — uses placeholder username if not changed
checkoutBtn.addEventListener("click", ()=>{
  if(cart.length === 0){ alert("Корзина пустая"); return; }
  const orderText = cart.map(i=>`${i.qty}× ${i.name} — ${i.price*i.qty} грн`).join("\n");
  const total = cart.reduce((s,i)=>s+i.qty*i.price,0);
  const message = `Заказ: \n${orderText}\nИтого: ${total} грн\n\nИмя:%20\nТелефон:%20\nАдрес/Комментарий:`;
  // Replace with your Telegram username (without @), e.g. 'OblakoUaShopBot' or personal username
  const tgUsername = "your_username"; // <-- замените на свой username без @
  if(tgUsername && tgUsername !== "your_username"){
    const url = `https://t.me/${tgUsername}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  } else {
    navigator.clipboard.writeText(message).then(()=>{
      alert("Шаблон заказа скопирован в буфер. Вставьте в Telegram/Viber для отправки. Также замените 'your_username' в script.js на ваш Telegram username для быстрой отправки.");
    });
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
renderCart();