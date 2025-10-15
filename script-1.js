// данные товаров (заглушки). Заменяй картинки на свои или вставляй локальные /images/...
const hookahs = [
  { id:1, name:"Odin X1", price:"8950 грн", img:"https://picsum.photos/seed/hookah1/800/600" },
  { id:2, name:"Alpha Hookah 300", price:"7450 грн", img:"https://picsum.photos/seed/hookah2/800/600" },
  { id:3, name:"Maklaud Classic", price:"5200 грн", img:"https://picsum.photos/seed/hookah3/800/600" },
  { id:4, name:"Kaya Slim", price:"4300 грн", img:"https://picsum.photos/seed/hookah4/800/600" },
  { id:5, name:"Troy Hookah Pro", price:"10200 грн", img:"https://picsum.photos/seed/hookah5/800/600" },
  { id:6, name:"Skyline 2.0", price:"6200 грн", img:"https://picsum.photos/seed/hookah6/800/600" },
  { id:7, name:"Vapor Mate", price:"3800 грн", img:"https://picsum.photos/seed/hookah7/800/600" },
  { id:8, name:"Nebula S", price:"8800 грн", img:"https://picsum.photos/seed/hookah8/800/600" },
  { id:9, name:"Iron Smoke", price:"4990 грн", img:"https://picsum.photos/seed/hookah9/800/600" },
  { id:10, name:"Aurora Elite", price:"11200 грн", img:"https://picsum.photos/seed/hookah10/800/600" }
];

const vases = [
  { id:101, name:"Колба Bubble Blue", price:"750 грн", img:"https://picsum.photos/seed/vase1/800/600" },
  { id:102, name:"Колба Classic", price:"650 грн", img:"https://picsum.photos/seed/vase2/800/600" },
  { id:103, name:"Колба Slim", price:"720 грн", img:"https://picsum.photos/seed/vase3/800/600" },
  { id:104, name:"Колба Frosted", price:"840 грн", img:"https://picsum.photos/seed/vase4/800/600" },
  { id:105, name:"Колба Tall", price:"980 грн", img:"https://picsum.photos/seed/vase5/800/600" },
  { id:106, name:"Колба Aurora", price:"1190 грн", img:"https://picsum.photos/seed/vase6/800/600" },
  { id:107, name:"Колба Mini", price:"420 грн", img:"https://picsum.photos/seed/vase7/800/600" },
  { id:108, name:"Колба Stain", price:"860 грн", img:"https://picsum.photos/seed/vase8/800/600" },
  { id:109, name:"Колба Mirror", price:"1290 грн", img:"https://picsum.photos/seed/vase9/800/600" },
  { id:110, name:"Колба Gradient", price:"990 грн", img:"https://picsum.photos/seed/vase10/800/600" }
];

const hookahListEl = document.getElementById('hookah-list');
const vaseListEl = document.getElementById('vase-list');
const tpl = document.getElementById('product-template');

function renderProducts(list, container){
  container.innerHTML = '';
  list.forEach(p=>{
    const clone = tpl.content.cloneNode(true);
    clone.querySelector('.img-wrap img').src = p.img;
    clone.querySelector('.img-wrap img').alt = p.name;
    clone.querySelector('.prod-title').textContent = p.name;
    clone.querySelector('.prod-price').textContent = p.price;
    // Telegram buy link - замените 'yourtelegram' на ваш @username
    const tgText = encodeURIComponent(`Хочу купить: ${p.name} — ${p.price}`);
    clone.querySelector('.btn-buy').href = https://t.me/yourtelegram?text=${tgText};
    clone.querySelector('.btn-buy').textContent = 'Купить в Telegram';
    container.appendChild(clone);
  });
}

// Инициализация
renderProducts(hookahs, hookahListEl);
renderProducts(vases, vaseListEl);

// Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelector('.tab-btn.active').classList.remove('active');
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(tc=>tc.classList.add('hidden'));
    document.getElementById(btn.dataset.tab).classList.remove('hidden');
    // прокрутка к каталогу на мобильных иногда удобна
    document.getElementById('catalog').scrollIntoView({behavior:'smooth'});
  });
});