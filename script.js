const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
     <rect width="100%" height="100%" fill="#1a1a1a"/>
     <text x="50%" y="50%" font-size="28" dominant-baseline="middle" text-anchor="middle" fill="#555">Фото</text>
   </svg>`);
const products = { hookahs:[{id:1,name:'KARMA MODEL 0.0',price:7999,image:PLACEHOLDER}],heat:[],access:[],bowls:[],vases:[] };
const productsContainer=document.getElementById('products');
function render(category){
 const list=products[category]||[];
 productsContainer.innerHTML='';
 list.forEach(p=>{
  const c=document.createElement('div');
  c.className='card';
  c.innerHTML=`<img src="${p.image}"><h3>${p.name}</h3><p>${p.price} грн</p><button class='btn-buy'>Додати</button>`;
  productsContainer.appendChild(c);
 });
}
document.getElementById('year').textContent=new Date().getFullYear();
render('hookahs');
