// ===============================
// ХЕЛПЕР
// ===============================
function item(id, brand, category, name, price, image){return{ id, brand, category, name, price, image };}

// ===============================
// КАТАЛОГ ТОВАРІВ (приклади 2–3 шт з кожної папки)
// Категорії: "hookahs", "koluyd", "чаши", "щипцы"
// Бренди: karma, odin, totem, sky, gramm, trumpet, tiaga
// ===============================

// KARMA (є файли karma0.1blue.jpg, karma0.1walnut.jpg)
const hookahsKarma=[
  item("karma-01b","karma","hookahs","KARMA MODEL 0.1 BLUE",9570,"images/karma/karma0.1blue.jpg"),
  item("karma-01w","karma","hookahs","KARMA MODEL 0.1 WALNUT",9629,"images/karma/karma0.1walnut.jpg"),
];

// ODIN (є: classic-*.jpg, odinmini.jpg, potal-pink.jpg)
const hookahsOdin=[
  item("odin-cb","odin","hookahs","ODIN CLASSIC BLACK",6760,"images/odin/classic-black.jpg"),
  item("odin-cg","odin","hookahs","ODIN CLASSIC GREEN",6760,"images/odin/classic-green.jpg"),
  item("odin-coak","odin","hookahs","ODIN CLASSIC OAK",6760,"images/odin/classic-oak.jpg"),
  item("odin-mini","odin","hookahs","ODIN MINI",7699,"images/odin/odinmini.jpg"),
  item("odin-pp","odin","hookahs","ODIN POTAL PINK",7270,"images/odin/potal-pink.jpg"),
];

// TOTEM (імена можеш додати пізніше — поки фолбек)
const hookahsTotem=[
  item("totem-1","totem","hookahs","TOTEM MICRA RAW",7800,"images/totem/micra-raw.jpg"),
  item("totem-2","totem","hookahs","TOTEM MICRA BLACK",7990,"images/totem/micra-black.jpg"),
  item("totem-3","totem","hookahs","TOTEM EVO GREEN/WHITE",6350,"images/totem/evo-greenwhite.jpg"),
];

// SKY
const hookahsSky=[
  item("sky-1","sky","hookahs","SKY HOOKAH SDM BLACK",3600,"images/sky/sdm-black.jpg"),
  item("sky-2","sky","hookahs","SKY HOOKAH SDM BLUE ICE",3600,"images/sky/sdm-blueice.jpg"),
  item("sky-3","sky","hookahs","SKY HOOKAH MINI BLACK",3300,"images/sky/mini-black.jpg"),
];

// GRAMM (тимчасові назви/шляхи — заміниш своїми файлами)
const hookahsGramm=[
  item("gramm-1","gramm","hookahs","GRAMM MODEL 1",5200,"images/gramm/model1.jpg"),
  item("gramm-2","gramm","hookahs","GRAMM MODEL 2",5400,"images/gramm/model2.jpg"),
];

// TRUMPET
const hookahsTrumpet=[
  item("trumpet-1","trumpet","hookahs","TRUMPET MODEL 1",5100,"images/trumpet/model1.jpg"),
  item("trumpet-2","trumpet","hookahs","TRUMPET MODEL 2",5300,"images/trumpet/model2.jpg"),
];

// TIAGA
const hookahsTiaga=[
  item("tiaga-1","tiaga","hookahs","TIAGA MODEL 1",4800,"images/tiaga/model1.jpg"),
  item("tiaga-2","tiaga","hookahs","TIAGA MODEL 2",4990,"images/tiaga/model2.jpg"),
];

// ЖАРОРЕГУЛЯТОРИ (папка koluyd)
const heatControllers=[
  item("kol-1","heatctrl","koluyd","КАЛЛАУД V2 BLACK",499,"images/koluyd/v2-black.jpg"),
  item("kol-2","heatctrl","koluyd","КАЛЛАУД V2 GOLD",549,"images/koluyd/v2-gold.jpg"),
  item("kol-3","heatctrl","koluyd","УТРИМУВАЧ ЖАРУ STEEL",449,"images/koluyd/classic-steel.jpg"),
];

// ЧАШІ (папка «чаши»; назви файлів — заміниш своїми)
const bowls=[
  item("bowl-1","oblako","чаши","OBLAKO PHUNNEL M MILK",599,"images/чаши/oblako-m-milk.jpg"),
  item("bowl-2","oblako","чаши","OBLAKO PHUNNEL M BLACK",629,"images/чаши/oblako-m-black.jpg"),
  item("bowl-3","oblako","чаши","OBLAKO PHUNNEL S ORANGE",549,"images/чаши/oblako-s-orange.jpg"),
];

// ЩИПЦІ (папка «щипцы»)
const tweezers=[
  item("twee-1","heatctrl","щипцы","ЩИПЦІ OBLΛKO CLASSIC",199,"images/щипцы/tongs-oblako.jpg"),
  item("twee-2","heatctrl","щипцы","ЩИПЦІ BLACK PREMIUM",249,"images/щипцы/tongs-black.jpg"),
  item("twee-3","heatctrl","щипцы","ЩИПЦІ MINI TITAN",179,"images/щипцы/tongs-mini.jpg"),
];

// Всі товари
const products=[
  ...hookahsKarma,
  ...hookahsOdin,
  ...hookahsTotem,
  ...hookahsSky,
  ...hookahsGramm,
  ...hookahsTrumpet,
  ...hookahsTiaga,
  ...heatControllers,
  ...bowls,
  ...tweezers,
];

// ===============================
// СТАН
// ===============================
let currentCategory="hookahs";
let currentBrand="all";
const cart={};

// ===============================
// DOM
// ===============================
const heroScreen=document.getElementById("heroScreen");
const enterCatalogBtn=document.getElementById("enterCatalogBtn");
const categoryTabs=document.getElementById("categoryTabs");
const brandBar=document.getElementById("brandBar");
const productGrid=document.getElementById("productGrid");
const openCartBtn=document.getElementById("openCartBtn");
const closeCartBtn=document.getElementById("closeCartBtn");
const cartOverlay=document.getElementById("cartOverlay");
const cartItemsEl=document.getElementById("cartItems");
const cartTotalEl=document.getElementById("cartTotal");
const cartCountEl=document.getElementById("cartCount");
const tgCheckout=document.getElementById("tgCheckout");

// ===============================
// LOCAL STORAGE
// ===============================
function saveCart(){localStorage.setItem("oblako_cart",JSON.stringify(cart));}
function loadCart(){const saved=localStorage.getItem("oblako_cart");if(!saved)return;try{Object.assign(cart,JSON.parse(saved));}catch(e){console.warn("cant load cart",e);}}

// ===============================
// РЕНДЕР ТОВАРІВ
// ===============================
function renderProducts(){
  let list=products.filter(p=>p.category===currentCategory);
  if(currentBrand!=="all"){list=list.filter(p=>p.brand===currentBrand);}
  productGrid.innerHTML=list.map(prod=>`
    <div class="product-card">
      <div class="product-img-wrap">
        <img src="${prod.image}" alt="${prod.name}" class="product-img" onerror="this.onerror=null;this.src='images/placeholder.jpg';"/>
      </div>
      <div class="product-name">${prod.name}</div>
      <div class="product-bottom-row">
        <div class="product-price">₴${prod.price}</div>
        <button class="add-btn" data-add="${prod.id}">в кошик</button>
      </div>
    </div>
  `).join("");
}

// ===============================
// ТАБИ КАТЕГОРІЙ
// ===============================
function handleCategoryClick(e){
  const btn=e.target.closest(".tab-btn"); if(!btn)return;
  [...categoryTabs.querySelectorAll(".tab-btn")].forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  currentCategory=btn.getAttribute("data-category");
  currentBrand="all";
  if(brandBar){[...brandBar.querySelectorAll(".brand-btn")].forEach(b=>b.classList.remove("active"));const allBtn=brandBar.querySelector('[data-brand="all"]');if(allBtn)allBtn.classList.add("active");}
  if(heroScreen)heroScreen.style.display="none";
  renderProducts();
}
if(categoryTabs){categoryTabs.addEventListener("click",handleCategoryClick);}

// ===============================
// ФІЛЬТР БРЕНДІВ (активний лише для категорії hookahs)
// ===============================
function handleBrandClick(e){
  const btn=e.target.closest(".brand-btn"); if(!btn)return;
  [...brandBar.querySelectorAll(".brand-btn")].forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  currentBrand=btn.getAttribute("data-brand");
  if(heroScreen)heroScreen.style.display="none";
  renderProducts();
}
if(brandBar){brandBar.addEventListener("click",handleBrandClick);}

// Показувати бар брендів тільки для категорії "hookahs"
const observer=new MutationObserver(()=>{const showBrands=(currentCategory==="hookahs");brandBar.style.display=showBrands?"flex":"none";});
observer.observe(document.body,{attributes:false,childList:false,subtree:false});

// ===============================
// HERO CTA
// ===============================
if(enterCatalogBtn){enterCatalogBtn.addEventListener("click",()=>{if(heroScreen)heroScreen.style.display="none";renderProducts();});}

// ===============================
// КОРЗИНА
// ===============================
function addToCart(id){const product=products.find(p=>p.id===id);if(!product)return;if(!cart[id]){cart[id]={...product,qty:1};}else{cart[id].qty+=1;}updateCartUI();}
function removeOne(id){if(!cart[id])return;cart[id].qty-=1;if(cart[id].qty<=0){delete cart[id];}updateCartUI();}
function addOne(id){if(!cart[id])return;cart[id].qty+=1;updateCartUI();}
function calcTotal(){let sum=0,count=0;Object.values(cart).forEach(i=>{sum+=i.price*i.qty;count+=i.qty;});return{sum,count};}
function updateCartUI(){
  cartItemsEl.innerHTML=Object.values(cart).map(item=>{
    const lineSum=item.price*item.qty;
    return `
      <div class="cart-row">
        <div class="cart-info">
          <div class="cart-name">${item.name}</div>
          <div class="cart-meta">${item.brand.toUpperCase()} • ₴${item.price} / шт</div>
        </div>
        <div class="cart-qty-wrap">
          <div class="qty-controls">
            <button class="qty-btn" data-minus="${item.id}">-</button>
            <div class="qty-num">${item.qty}</div>
            <button class="qty-btn" data-plus="${item.id}">+</button>
          </div>
          <div class="cart-line-sum">₴${lineSum}</div>
        </div>
      </div>
    `;
  }).join("");
  const {sum,count}=calcTotal();
  cartTotalEl.textContent=`₴${sum}`;
  cartCountEl.textContent=count;

  // Telegram message
  let lines=["🛒 *Новий заказ з OBLΛKO_TEAM*"]; let i=1;
  Object.values(cart).forEach(it=>{lines.push(`${i}) ${it.name} x${it.qty} = ₴${it.price*it.qty}`);i++;});
  lines.push(`\n💰 Разом: ₴${sum}`);lines.push(`\n📞 Залиш свій номер для підтвердження.`);
  const msg=encodeURIComponent(lines.join("\n"));
  tgCheckout.href=`https://t.me/Market199?text=${msg}`;

  saveCart();
}

// Додавання з карток
if(productGrid){productGrid.addEventListener("click",(e)=>{const btn=e.target.closest("[data-add]");if(!btn)return;addToCart(btn.getAttribute("data-add"));});}
// +/- у кошику
if(cartItemsEl){cartItemsEl.addEventListener("click",(e)=>{const m=e.target.closest("[data-minus]");const p=e.target.closest("[data-plus]");if(m){removeOne(m.getAttribute("data-minus"));}if(p){addOne(p.getAttribute("data-plus"));}});}

// Відкриття/закриття кошика
if(openCartBtn){openCartBtn.addEventListener("click",()=>{cartOverlay.classList.add("active");updateCartUI();});}
if(closeCartBtn){closeCartBtn.addEventListener("click",()=>{cartOverlay.classList.remove("active");});}
if(cartOverlay){cartOverlay.addEventListener("click",(e)=>{if(e.target===cartOverlay){cartOverlay.classList.remove("active");}});}

// ===============================
// СТАРТ
// ===============================
loadCart();
renderProducts();
updateCartUI(); 
