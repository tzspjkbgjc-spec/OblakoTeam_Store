// Плейсхолдер
const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
     <rect width="100%" height="100%" fill="#1a1a1a"/>
     <text x="50%" y="50%" font-size="28" dominant-baseline="middle" text-anchor="middle" fill="#555">Фото</text>
   </svg>`
);

// =======================
// Дані товарів (бренди кальянів)
// =======================
const hookahsKarma = [
  { id: "karma-1",  brand: "karma", name: "KARMA MODEL 0.0 ЖОВТИЙ", price: 8029, image: PLACEHOLDER },
  { id: "karma-2",  brand: "karma", name: "KARMA MODEL 0.0 ЗЕЛЕНИЙ", price: 7979, image: PLACEHOLDER },
  { id: "karma-3",  brand: "karma", name: "KARMA MODEL 0.0 ЧЕРВОНИЙ", price: 8079, image: PLACEHOLDER },
  { id: "karma-4",  brand: "karma", name: "KARMA MODEL 0.0 ЧОРНИЙ", price: 7979, image: PLACEHOLDER },
  { id: "karma-5",  brand: "karma", name: "KARMA MODEL 0.1 WALNUT КОРИЧНЕВИЙ", price: 9629, image: PLACEHOLDER },
  { id: "karma-6",  brand: "karma", name: "KARMA MODEL 0.1 WALNUT БІЛИЙ", price: 9479, image: PLACEHOLDER },
  { id: "karma-7",  brand: "karma", name: "KARMA MODEL 0.1 WALNUT БІЛИЙ (2)", price: 9779, image: PLACEHOLDER },
  { id: "karma-8",  brand: "karma", name: "KARMA MODEL 0.1 WALNUT БЛАКИТНИЙ", price: 9479, image: PLACEHOLDER },
  { id: "karma-9",  brand: "karma", name: "KARMA MODEL 0.1 WALNUT КОРИЧНЕВИЙ", price: 9679, image: PLACEHOLDER },
  { id: "karma-10", brand: "karma", name: "KARMA MODEL 0.1 WALNUT СІРИЙ", price: 9479, image: PLACEHOLDER },
  { id: "karma-11", brand: "karma", name: "KARMA MODEL 0.1 WALNUT ФІСТАШКОВИЙ", price: 9479, image: PLACEHOLDER },
  { id: "karma-12", brand: "karma", name: "KARMA MODEL 0.1 WALNUT ЧОРНИЙ", price: 9479, image: PLACEHOLDER },
  { id: "karma-13", brand: "karma", name: "KARMA MODEL 0.1 ЖОВТА", price: 7829, image: PLACEHOLDER },
  { id: "karma-14", brand: "karma", name: "KARMA MODEL 0.1 ЧОРНИЙ", price: 7779, image: PLACEHOLDER },
  { id: "karma-15", brand: "karma", name: "KARMA MODEL 1.1 WALNUT АЙВОРІ", price: 7779, image: PLACEHOLDER },
  { id: "karma-16", brand: "karma", name: "KARMA MODEL 1.1 WALNUT ЖОВТА", price: 8029, image: PLACEHOLDER },
  { id: "karma-17", brand: "karma", name: "KARMA MODEL 1.1 WALNUT ЗЕЛЕНИЙ", price: 7779, image: PLACEHOLDER },
  { id: "karma-18", brand: "karma", name: "KARMA MODEL 1.1 WALNUT ПІНК", price: 7879, image: PLACEHOLDER },
  { id: "karma-19", brand: "karma", name: "KARMA MODEL 1.1 WALNUT ФІОЛЕТОВИЙ", price: 7779, image: PLACEHOLDER },
  { id: "karma-20", brand: "karma", name: "KARMA MODEL 1.1 WALNUT ЧЕРВОНИЙ", price: 7829, image: PLACEHOLDER }
];

const hookahsOdin = [
  { id: "odin-1",  brand: "odin", name: "Odin Classic Mini Cosmo", price: 7260, image: PLACEHOLDER },
  { id: "odin-2",  brand: "odin", name: "Odin Classic Mini Sky", price: 7260, image: PLACEHOLDER },
  { id: "odin-3",  brand: "odin", name: "Odin Classic Mini Saturn", price: 7260, image: PLACEHOLDER },
  { id: "odin-4",  brand: "odin", name: "Odin Classic Mini Mars", price: 7260, image: PLACEHOLDER },
  { id: "odin-5",  brand: "odin", name: "Odin Classic Mini Toxic", price: 7260, image: PLACEHOLDER },
  { id: "odin-6",  brand: "odin", name: "Odin Classic Mini Black", price: 6260, image: PLACEHOLDER },
  { id: "odin-7",  brand: "odin", name: "Odin Classic Mini Brown", price: 6260, image: PLACEHOLDER },
  { id: "odin-8",  brand: "odin", name: "Odin Classic Mini Crayon", price: 6260, image: PLACEHOLDER },
  { id: "odin-9",  brand: "odin", name: "Odin Classic Mini White", price: 6260, image: PLACEHOLDER },
  { id: "odin-10", brand: "odin", name: "Odin Classic Mini Green", price: 6260, image: PLACEHOLDER },
  { id: "odin-11", brand: "odin", name: "Odin Epoxy Royal Loki", price: 7570, image: PLACEHOLDER },
  { id: "odin-12", brand: "odin", name: "Odin Epoxy Royal Grey", price: 7570, image: PLACEHOLDER },
  { id: "odin-13", brand: "odin", name: "Odin Epoxy Royal Purple", price: 7570, image: PLACEHOLDER },
  { id: "odin-14", brand: "odin", name: "Odin Epoxy Royal Iris", price: 7570, image: PLACEHOLDER },
  { id: "odin-15", brand: "odin", name: "Odin Epoxy Royal Milkyway", price: 7570, image: PLACEHOLDER },
  { id: "odin-16", brand: "odin", name: "Odin Potal Black", price: 7270, image: PLACEHOLDER },
  { id: "odin-17", brand: "odin", name: "Odin Potal Green", price: 7270, image: PLACEHOLDER },
  { id: "odin-18", brand: "odin", name: "Odin Potal Pink", price: 7270, image: PLACEHOLDER },
  { id: "odin-19", brand: "odin", name: "Odin Classic Дуб", price: 6760, image: PLACEHOLDER },
  { id: "odin-20", brand: "odin", name: "Odin Classic Орех", price: 7270, image: PLACEHOLDER },
  { id: "odin-21", brand: "odin", name: "Odin Classic Black", price: 6760, image: PLACEHOLDER },
  { id: "odin-22", brand: "odin", name: "Odin Classic Royal Green", price: 6760, image: PLACEHOLDER },
  { id: "odin-23", brand: "odin", name: "Odin Classic Brown", price: 6760, image: PLACEHOLDER },
  { id: "odin-24", brand: "odin", name: "Odin Classic White", price: 6760, image: PLACEHOLDER },
  { id: "odin-25", brand: "odin", name: "Odin Classic Crayon", price: 6760, image: PLACEHOLDER },
  { id: "odin-26", brand: "odin", name: "Odin Epoxy Milkyway", price: 7570, image: PLACEHOLDER },
  { id: "odin-27", brand: "odin", name: "Odin Epoxy Marmur", price: 7570, image: PLACEHOLDER },
  { id: "odin-28", brand: "odin", name: "Odin Epoxy Lemon Pie", price: 7570, image: PLACEHOLDER },
  { id: "odin-29", brand: "odin", name: "Odin Epoxy Valerie", price: 7570, image: PLACEHOLDER },
  { id: "odin-30", brand: "odin", name: "Odin Classic Royal Green (дубль)", price: 6760, image: PLACEHOLDER }
];

const hookahsTotem = [
  { id: "totem-1",  brand: "totem", name: "Totem Monolit Micra Sangria Red", price: 4100, image: PLACEHOLDER },
  { id: "totem-2",  brand: "totem", name: "Totem Monolit Micra Caroline Acid", price: 4400, image: PLACEHOLDER },
  { id: "totem-3",  brand: "totem", name: "Totem Monolit Micra Green Acid", price: 4400, image: PLACEHOLDER },
  { id: "totem-4",  brand: "totem", name: "Totem Monolit Micra Ocean Blue", price: 4400, image: PLACEHOLDER },
  { id: "totem-5",  brand: "totem", name: "Totem Monolit Micra Orange Acid", price: 4400, image: PLACEHOLDER },
  { id: "totem-6",  brand: "totem", name: "Totem Monolit Micra Space Black", price: 4400, image: PLACEHOLDER },
  { id: "totem-7",  brand: "totem", name: "Totem Evo Green/White", price: 6350, image: PLACEHOLDER },
  { id: "totem-8",  brand: "totem", name: "Totem Monolit Ultra Wood Cherry", price: 6700, image: PLACEHOLDER },
  { id: "totem-9",  brand: "totem", name: "Totem Monolit Micra Emerald Green", price: 4100, image: PLACEHOLDER },
  { id: "totem-10", brand: "totem", name: "Totem Monolit Micra Violet Space", price: 4100, image: PLACEHOLDER },
  { id: "totem-11", brand: "totem", name: "Totem Monolit Micra Cooper", price: 4400, image: PLACEHOLDER },
  { id: "totem-12", brand: "totem", name: "Totem Monolit Optima Bronze", price: 5700, image: PLACEHOLDER },
  { id: "totem-13", brand: "totem", name: "Totem Monolit Optima Chocolate", price: 5700, image: PLACEHOLDER },
  { id: "totem-14", brand: "totem", name: "Totem Monolit Optima Cooper", price: 5700, image: PLACEHOLDER },
  { id: "totem-15", brand: "totem", name: "Totem Monolit Optima Emerald Green", price: 5700, image: PLACEHOLDER },
  { id: "totem-16", brand: "totem", name: "Totem Monolit Optima Ocean Blue", price: 5700, image: PLACEHOLDER },
  { id: "totem-17", brand: "totem", name: "Totem Monolit Optima Silver Shine", price: 5700, image: PLACEHOLDER },
  { id: "totem-18", brand: "totem", name: "Totem Monolit Optima Space Black", price: 5700, image: PLACEHOLDER },
  { id: "totem-19", brand: "totem", name: "Totem Monolit Optima Violet Space", price: 5700, image: PLACEHOLDER },
  { id: "totem-20", brand: "totem", name: "Totem Monolit Ultra Steel", price: 6000, image: PLACEHOLDER },
  { id: "totem-21", brand: "totem", name: "Totem Evo Bronze/White", price: 6350, image: PLACEHOLDER },
  { id: "totem-22", brand: "totem", name: "Totem Evo Black/White", price: 6350, image: PLACEHOLDER },
  { id: "totem-23", brand: "totem", name: "Totem Monolit Ultra Wood Black", price: 6700, image: PLACEHOLDER },
  { id: "totem-24", brand: "totem", name: "Totem Monolit Ultra Wood Pure", price: 6700, image: PLACEHOLDER }
];

const hookahsTiaga = [
  { id: "tiaga-1",  brand: "tiaga", name: "Tiaga Hookah Mini Classic Black", price: 1900, image: PLACEHOLDER },
  { id: "tiaga-2",  brand: "tiaga", name: "Tiaga Hookah Mini Classic Black Edition Clear", price: 1900, image: PLACEHOLDER },
  { id: "tiaga-3",  brand: "tiaga", name: "Tiaga Hookah Mini Classic Black Edition Black", price: 1900, image: PLACEHOLDER },
  { id: "tiaga-4",  brand: "tiaga", name: "Tiaga Hookah Mini Classic Clear", price: 1900, image: PLACEHOLDER },
  { id: "tiaga-5",  brand: "tiaga", name: "Tiaga Hookah Mini Orbita Clear", price: 1900, image: PLACEHOLDER },
  { id: "tiaga-6",  brand: "tiaga", name: "Tiaga Hookah Mini Orbita Black", price: 1900, image: PLACEHOLDER },
  { id: "tiaga-7",  brand: "tiaga", name: "Tiaga Hookah Classic Clear", price: 2100, image: PLACEHOLDER },
  { id: "tiaga-8",  brand: "tiaga", name: "Tiaga Hookah Classic Black Edition Clear", price: 2150, image: PLACEHOLDER },
  { id: "tiaga-9",  brand: "tiaga", name: "Tiaga Hookah Classic Black Edition Clear C", price: 2150, image: PLACEHOLDER },
  { id: "tiaga-10", brand: "tiaga", name: "Tiaga Hookah Classic Black Edition Black C", price: 2150, image: PLACEHOLDER },
  { id: "tiaga-11", brand: "tiaga", name: "Tiaga Hookah Classic Clear C", price: 2150, image: PLACEHOLDER },
  { id: "tiaga-12", brand: "tiaga", name: "Tiaga Hookah Classic Clear Transparent", price: 2150, image: PLACEHOLDER },
  { id: "tiaga-13", brand: "tiaga", name: "Tiaga Hookah Classic Black Transparent", price: 2150, image: PLACEHOLDER },
  { id: "tiaga-14", brand: "tiaga", name: "Tiaga Hookah Classic Black Transparent C", price: 2150, image: PLACEHOLDER },
  { id: "tiaga-15", brand: "tiaga", name: "Tiaga Hookah Orbita Clear", price: 2150, image: PLACEHOLDER },
  { id: "tiaga-16", brand: "tiaga", name: "Tiaga Hookah Orbita Clear Transparent", price: 2150, image: PLACEHOLDER },
  { id: "tiaga-17", brand: "tiaga", name: "Tiaga Hookah Orbita Clear Transparent C", price: 2150, image: PLACEHOLDER },
  { id: "tiaga-18", brand: "tiaga", name: "Tiaga Hookah Orbita Black", price: 2150, image: PLACEHOLDER },
  { id: "tiaga-19", brand: "tiaga", name: "Tiaga Hookah Iris Bronze", price: 2650, image: PLACEHOLDER },
  { id: "tiaga-20", brand: "tiaga", name: "Tiaga Hookah Iris Black", price: 2650, image: PLACEHOLDER },
  { id: "tiaga-21", brand: "tiaga", name: "Tiaga Hookah Bita Almond", price: 3650, image: PLACEHOLDER },
  { id: "tiaga-22", brand: "tiaga", name: "Tiaga Hookah QB Green", price: 4170, image: PLACEHOLDER },
  { id: "tiaga-23", brand: "tiaga", name: "Tiaga Hookah Astra Green-Black", price: 4450, image: PLACEHOLDER },
  { id: "tiaga-24", brand: "tiaga", name: "Tiaga Hookah Astra Black", price: 4450, image: PLACEHOLDER }
];

const hookahsGramm = [
  { id: "gramm-1",  brand: "gramm", name: "Gramm Solo Green", price: 2350, image: PLACEHOLDER },
  { id: "gramm-2",  brand: "gramm", name: "Gramm Solo Red", price: 2350, image: PLACEHOLDER },
  { id: "gramm-3",  brand: "gramm", name: "Gramm Solo Clear", price: 2350, image: PLACEHOLDER },
  { id: "gramm-4",  brand: "gramm", name: "Gramm Solo Blue", price: 2350, image: PLACEHOLDER },
  { id: "gramm-5",  brand: "gramm", name: "Gramm Solo Black", price: 2350, image: PLACEHOLDER },
  { id: "gramm-6",  brand: "gramm", name: "Gramm Era Andromeda Black", price: 4400, image: PLACEHOLDER },
  { id: "gramm-7",  brand: "gramm", name: "Gramm Era Big Bang Black", price: 4400, image: PLACEHOLDER },
  { id: "gramm-8",  brand: "gramm", name: "Gramm Era Dead Space Black", price: 4400, image: PLACEHOLDER },
  { id: "gramm-9",  brand: "gramm", name: "Gramm Era Milky Way Black", price: 4400, image: PLACEHOLDER },
  { id: "gramm-10", brand: "gramm", name: "Gramm Era Nebula Black", price: 4400, image: PLACEHOLDER },
  { id: "gramm-11", brand: "gramm", name: "Gramm Era Proxima Centauri Black", price: 4400, image: PLACEHOLDER },
  { id: "gramm-12", brand: "gramm", name: "Gramm Era Stellar Wind Black", price: 4400, image: PLACEHOLDER },
  { id: "gramm-13", brand: "gramm", name: "Gramm Era Voyager Black", price: 4400, image: PLACEHOLDER },
  { id: "gramm-14", brand: "gramm", name: "Gramm Eco Light Wood", price: 3600, image: PLACEHOLDER },
  { id: "gramm-15", brand: "gramm", name: "Gramm Eco Mini Black", price: 3600, image: PLACEHOLDER },
  { id: "gramm-16", brand: "gramm", name: "Gramm Eco Mini Black'n'Red", price: 3600, image: PLACEHOLDER },
  { id: "gramm-17", brand: "gramm", name: "Gramm Eco Mini Black'n'Silver", price: 3600, image: PLACEHOLDER },
  { id: "gramm-18", brand: "gramm", name: "Gramm Eco Mini Light Wood", price: 3600, image: PLACEHOLDER },
  { id: "gramm-19", brand: "gramm", name: "Gramm Eco Mini Stained Wood", price: 3600, image: PLACEHOLDER },
  { id: "gramm-20", brand: "gramm", name: "Gramm Eco Mini White'n'Black", price: 3600, image: PLACEHOLDER },
  { id: "gramm-21", brand: "gramm", name: "Gramm Eco Mini Wood Gold Black", price: 3600, image: PLACEHOLDER },
  { id: "gramm-22", brand: "gramm", name: "Gramm Eco Mini Black'n'Gold", price: 3750, image: PLACEHOLDER },
  { id: "gramm-23", brand: "gramm", name: "Gramm Ring", price: 3800, image: PLACEHOLDER },
  { id: "gramm-24", brand: "gramm", name: "Gramm Eco Classic", price: 3600, image: PLACEHOLDER }
];

const hookahsEmbery = [
  { id: "embery-1",  brand: "embery", name: "Embery Equal Black-Silver", price: 6900, image: PLACEHOLDER },
  { id: "embery-2",  brand: "embery", name: "Embery Equal Chameleon", price: 7100, image: PLACEHOLDER },
  { id: "embery-3",  brand: "embery", name: "Embery Equal Silver-Black", price: 6900, image: PLACEHOLDER },
  { id: "embery-4",  brand: "embery", name: "Embery MiniMONO 3.0 Silver-Black", price: 5800, image: PLACEHOLDER },
  { id: "embery-5",  brand: "embery", name: "Embery MONO-H 4.0 Defender", price: 7500, image: PLACEHOLDER },
  { id: "embery-6",  brand: "embery", name: "Embery MONO-H 4.0 Silver-Snow", price: 7500, image: PLACEHOLDER },
  { id: "embery-7",  brand: "embery", name: "Embery MONO-H 4.0 Black Edition", price: 7450, image: PLACEHOLDER },
  { id: "embery-8",  brand: "embery", name: "Embery MONO-H 4.0 Silver-Black", price: 7400, image: PLACEHOLDER },
  { id: "embery-9",  brand: "embery", name: "Embery MiniMONO 2.0 Cyber Future", price: 5600, image: PLACEHOLDER },
  { id: "embery-10", brand: "embery", name: "Embery MiniMONO 3.0 Gold", price: 5900, image: PLACEHOLDER },
  { id: "embery-11", brand: "embery", name: "Embery MiniMONO 3.0 Black", price: 5600, image: PLACEHOLDER },
  { id: "embery-12", brand: "embery", name: "Embery MiniMONO 3.0 Lime", price: 5650, image: PLACEHOLDER },
  { id: "embery-13", brand: "embery", name: "Embery MiniMONO 3.0 Raspberry", price: 5650, image: PLACEHOLDER },
  { id: "embery-14", brand: "embery", name: "Embery subMONO-H Yellow-Black", price: 6200, image: PLACEHOLDER },
  { id: "embery-15", brand: "embery", name: "Embery MiniMONO 2.0 Lime", price: 5500, image: PLACEHOLDER },
  { id: "embery-16", brand: "embery", name: "Embery MiniMONO 2.0 Monkey Gangster", price: 5600, image: PLACEHOLDER },
  { id: "embery-17", brand: "embery", name: "Embery MiniMONO 2.0 Black", price: 5450, image: PLACEHOLDER },
  { id: "embery-18", brand: "embery", name: "Embery MONO Wave Lime", price: 7300, image: PLACEHOLDER },
  { id: "embery-19", brand: "embery", name: "Embery MONO-H 4.0 Chameleon", price: 7500, image: PLACEHOLDER },
  { id: "embery-20", brand: "embery", name: "Embery subMONO-H Blue", price: 6150, image: PLACEHOLDER },
  { id: "embery-21", brand: "embery", name: "Embery subMONO-H Black-Silver", price: 6200, image: PLACEHOLDER },
  { id: "embery-22", brand: "embery", name: "Embery subMONO-H Purple-Black", price: 6200, image: PLACEHOLDER },
  { id: "embery-23", brand: "embery", name: "Embery Wood Envolve Hookah", price: 8400, image: PLACEHOLDER },
  { id: "embery-24", brand: "embery", name: "Embery Wood Envolve Gold/Black", price: 8600, image: PLACEHOLDER },
  { id: "embery-25", brand: "embery", name: "Embery Envolve Classic", price: 8100, image: PLACEHOLDER },
  { id: "embery-26", brand: "embery", name: "Embery Hexity", price: 8700, image: PLACEHOLDER },
  { id: "embery-27", brand: "embery", name: "Embery Wave", price: 7200, image: PLACEHOLDER },
  { id: "embery-28", brand: "embery", name: "Embery MiniMONO 2.0 Black Orchid", price: 5550, image: PLACEHOLDER },
  { id: "embery-29", brand: "embery", name: "Embery Eco Series", price: 5200, image: PLACEHOLDER },
  { id: "embery-30", brand: "embery", name: "Embery Classic Mono Line", price: 4950, image: PLACEHOLDER }
];

const hookahsSky = [
  { id: "sky-1",  brand: "sky", name: "Sky Hookah SDM Black", price: 3600, image: PLACEHOLDER },
  { id: "sky-2",  brand: "sky", name: "Sky Hookah SDM Purple", price: 3600, image: PLACEHOLDER },
  { id: "sky-3",  brand: "sky", name: "Sky Hookah SDM Blue Ice", price: 3600, image: PLACEHOLDER },
  { id: "sky-4",  brand: "sky", name: "Sky Hookah SDM Emerald", price: 3600, image: PLACEHOLDER },
  { id: "sky-5",  brand: "sky", name: "Sky Hookah SDM Red Lava", price: 3600, image: PLACEHOLDER },
  { id: "sky-6",  brand: "sky", name: "Sky Hookah Mini Black", price: 3300, image: PLACEHOLDER },
  { id: "sky-7",  brand: "sky", name: "Sky Hookah Mini Clear", price: 3300, image: PLACEHOLDER },
  { id: "sky-8",  brand: "sky", name: "Sky Hookah Mini Blue", price: 3300, image: PLACEHOLDER },
  { id: "sky-9",  brand: "sky", name: "Sky Hookah Mini Green", price: 3300, image: PLACEHOLDER },
  { id: "sky-10", brand: "sky", name: "Sky Hookah Mini Pink", price: 3300, image: PLACEHOLDER },
  { id: "sky-11", brand: "sky", name: "Sky Hookah Dream Black Edition", price: 4100, image: PLACEHOLDER },
  { id: "sky-12", brand: "sky", name: "Sky Hookah Dream White Frost", price: 4100, image: PLACEHOLDER },
  { id: "sky-13", brand: "sky", name: "Sky Hookah Dream Ocean", price: 4100, image: PLACEHOLDER },
  { id: "sky-14", brand: "sky", name: "Sky Hookah Dream Forest", price: 4100, image: PLACEHOLDER },
  { id: "sky-15", brand: "sky", name: "Sky Hookah Dream Ruby", price: 4100, image: PLACEHOLDER },
  { id: "sky-16", brand: "sky", name: "Sky Hookah Clouds Black", price: 3900, image: PLACEHOLDER },
  { id: "sky-17", brand: "sky", name: "Sky Hookah Clouds White", price: 3900, image: PLACEHOLDER },
  { id: "sky-18", brand: "sky", name: "Sky Hookah Clouds Steel", price: 3900, image: PLACEHOLDER },
  { id: "sky-19", brand: "sky", name: "Sky Hookah Clouds Ice Blue", price: 3900, image: PLACEHOLDER },
  { id: "sky-20", brand: "sky", name: "Sky Hookah Clouds Violet", price: 3900, image: PLACEHOLDER },
  { id: "sky-21", brand: "sky", name: "Sky Hookah Origin Black", price: 4000, image: PLACEHOLDER },
  { id: "sky-22", brand: "sky", name: "Sky Hookah Origin White", price: 4000, image: PLACEHOLDER },
  { id: "sky-23", brand: "sky", name: "Sky Hookah Origin Graphite", price: 4000, image: PLACEHOLDER },
  { id: "sky-24", brand: "sky", name: "Sky Hookah Origin Olive", price: 4000, image: PLACEHOLDER },
  { id: "sky-25", brand: "sky", name: "Sky Hookah Origin Burgundy", price: 4000, image: PLACEHOLDER },
  { id: "sky-26", brand: "sky", name: "Sky Hookah Classic Matte Black", price: 3850, image: PLACEHOLDER },
  { id: "sky-27", brand: "sky", name: "Sky Hookah Classic Chrome", price: 3850, image: PLACEHOLDER },
  { id: "sky-28", brand: "sky", name: "Sky Hookah Classic Sand", price: 3850, image: PLACEHOLDER },
  { id: "sky-29", brand: "sky", name: "Sky Hookah Classic Ice White", price: 3850, image: PLACEHOLDER },
  { id: "sky-30", brand: "sky", name: "Sky Hookah Classic Night Blue", price: 3850, image: PLACEHOLDER }
];

// Колекції інших категорій (поки пусто)
const products = {
  hookahs: [
    ...hookahsKarma,
    ...hookahsTotem,
    ...hookahsOdin,
    ...hookahsSky,
    ...hookahsTiaga,
    ...hookahsGramm,
    ...hookahsEmbery
  ],
  heat: [],
  access: [],
  bowls: [],
  vases: []
};

// =======================
// DOM
// =======================
const productsContainer = document.getElementById('products');
const tabs = document.querySelectorAll('.tab');

const brandTabsContainer = document.getElementById('brand-tabs');
const brandTabs = document.querySelectorAll('.brand-tab');

const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const tgOrder = document.getElementById('tg-order');

const adminModal = document.getElementById('admin-modal');
const adminClose = document.getElementById('admin-close');

const adminCategory = document.getElementById('admin-category');
const adminBrandRow = document.getElementById('admin-brand-row');
const adminBrand = document.getElementById('admin-brand');
const adminProductList = document.getElementById('admin-product-list');
const adminName = document.getElementById('admin-name');
const adminPrice = document.getElementById('admin-price');
const adminImage = document.getElementById('admin-image');
const adminSave = document.getElementById('admin-save');
const adminDelete = document.getElementById('admin-delete');

const newName = document.getElementById('new-name');
const newPrice = document.getElementById('new-price');
const newImage = document.getElementById('new-image');
const newAdd = document.getElementById('new-add');

// =======================
// РЕНДЕР ТОВАРІВ
// =======================
function render(category, brandFilter = null) {
  productsContainer.innerHTML = '';

  let list = products[category] || [];

  if (category === 'hookahs' && brandFilter) {
    list = list.filter(p => p.brand === brandFilter);
  }

  list.forEach(p => {
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

// =======================
// ПЕРЕМИКАННЯ КАТЕГОРІЙ
// =======================
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const cat = tab.dataset.category;

    if (cat === 'hookahs') {
      brandTabsContainer.classList.remove('hidden');

      brandTabs.forEach(bt => bt.classList.remove('active'));
      const firstBrandTab = document.querySelector('.brand-tab[data-brand="karma"]');
      if (firstBrandTab) firstBrandTab.classList.add('active');

      render('hookahs', 'karma');
    } else {
      brandTabsContainer.classList.add('hidden');
      render(cat);
    }
  });
});

// =======================
// ПЕРЕМИКАННЯ БРЕНДІВ
// =======================
brandTabs.forEach(btab => {
  btab.addEventListener('click', () => {
    brandTabs.forEach(bt => bt.classList.remove('active'));
    btab.classList.add('active');
    const brandKey = btab.dataset.brand;
    render('hookahs', brandKey);
  });
});

// =======================
// КОШИК
// =======================
let cart = loadCartFromStorage();

cartBtn.addEventListener('click', () => {
  cartModal.classList.remove('hidden');
  updateCart();
});

closeCart.addEventListener('click', () => {
  cartModal.classList.add('hidden');
});

document.addEventListener('click', e => {
  // додати в кошик
  if (e.target.classList.contains('btn-buy')) {
    const id = e.target.dataset.id;

    const item =
      products.hookahs.find(p => p.id === id) ||
      products.heat.find(p => p.id === id) ||
      products.access.find(p => p.id === id) ||
      products.bowls.find(p => p.id === id) ||
      products.vases.find(p => p.id === id);

    if (item) {
      const exist = cart.find(c => c.id === id);
      if (exist) {
        exist.qty++;
      } else {
        cart.push({ ...item, qty: 1 });
      }
      saveCartToStorage();
      updateCart();
    }
  }

  // видалити з кошика
  if (e.target.classList.contains('remove')) {
    const id = e.target.dataset.id;
    cart = cart.filter(c => c.id !== id);
    saveCartToStorage();
    updateCart();
  }
});

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const sum = item.price * item.qty;
    total += sum;

    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <div style="flex:1; min-width:140px;">
        ${item.name} × ${item.qty} — ${sum} грн
      </div>
      <button class="remove" data-id="${item.id}">✖</button>
    `;
    cartItems.appendChild(row);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;

  // текст замовлення
  let message = `🛒 *Новий заказ з Oblako_Team*\n\n`;

  if (cart.length === 0) {
    message += "Кошик порожній 😔";
  } else {
    cart.forEach(item => {
      const sum = item.price * item.qty;
      message += `• ${item.name} × ${item.qty} = ${sum} грн\n`;
    });
    message += `\n💰 *Разом:* ${total} грн\n`;
    message += `📞 Залиште ваш контакт або номер телефону для підтвердження.`;
  }

  const encoded = encodeURIComponent(message);
  tgOrder.href = `https://t.me/Market199?text=${encoded}`;
}

// =======================
// localStorage
// =======================
function saveCartToStorage() {
  localStorage.setItem('oblako_cart', JSON.stringify(cart));
}
function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem('oblako_cart');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(item => ({
      ...item,
      qty: item.qty || 1
    }));
  } catch(e) {
    return [];
  }
}

// =======================
// РІК У ФУТЕРІ
// =======================
document.getElementById('year').textContent = new Date().getFullYear();

// =======================
// АДМІНКА
// =======================

// показати / сховати адмінку
function openAdmin() {
  adminModal.classList.remove('hidden');
  refreshAdminProductList();
  fillAdminFieldsFromSelected();
}
function closeAdmin() {
  adminModal.classList.add('hidden');
}

// хоткей Shift + A
document.addEventListener('keydown', e => {
  if (e.shiftKey && (e.key === 'A' || e.key === 'a')) {
    if (adminModal.classList.contains('hidden')) {
      openAdmin();
    } else {
      closeAdmin();
    }
  }
});

// кнопка закрыть
adminClose.addEventListener('click', closeAdmin);

// при зміні категорії в адмінці
adminCategory.addEventListener('change', () => {
  toggleBrandVisibility();
  refreshAdminProductList();
  fillAdminFieldsFromSelected();
});

// при зміні бренду
adminBrand.addEventListener('change', () => {
  refreshAdminProductList();
  fillAdminFieldsFromSelected();
});

// при виборі товару в списку
adminProductList.addEventListener('change', () => {
  fillAdminFieldsFromSelected();
});

// зберегти зміни існуючого товару
adminSave.addEventListener('click', () => {
  const { arr, index } = getSelectedProductRef();
  if (!arr || index < 0) return;

  arr[index].name = adminName.value.trim();
  arr[index].price = Number(adminPrice.value);
  arr[index].image = adminImage.value.trim() || PLACEHOLDER;

  persistProductsToLocal();
  renderAfterAdminChange();
});

// видалити товар
adminDelete.addEventListener('click', () => {
  const { arr, index, categoryKey } = getSelectedProductRef();
  if (!arr || index < 0) return;

  arr.splice(index, 1);

  // оновити products[categoryKey]
  products[categoryKey] = mergeBackCategory(categoryKey);

  persistProductsToLocal();
  refreshAdminProductList();
  fillAdminFieldsFromSelected();
  renderAfterAdminChange();
});

// додати новий товар
newAdd.addEventListener('click', () => {
  const cat = adminCategory.value;
  const brand = (cat === 'hookahs') ? adminBrand.value : '';

  const nameVal = newName.value.trim();
  const priceVal = Number(newPrice.value);
  const imgVal = newImage.value.trim() || PLACEHOLDER;
  if (!nameVal || !priceVal) return;

  const newId = brand
    ? `${brand}-${Date.now()}`
    : `${cat}-${Date.now()}`;

  const newItem = {
    id: newId,
    brand: brand,
    name: nameVal,
    price: priceVal,
    image: imgVal
  };

  // пушимо у відповідний масив
  if (cat === 'hookahs') {
    getBrandArray(brand).push(newItem);
  } else {
    products[cat].push(newItem);
  }

  products[cat] = mergeBackCategory(cat);
  persistProductsToLocal();

  // очистка полів додавання
  newName.value = "";
  newPrice.value = "";
  newImage.value = "";

  refreshAdminProductList();
  fillAdminFieldsFromSelected();
  renderAfterAdminChange();
});

// допоміжне: показати чи ховати селект бренду
function toggleBrandVisibility() {
  if (adminCategory.value === 'hookahs') {
    adminBrandRow.style.display = 'flex';
  } else {
    adminBrandRow.style.display = 'none';
  }
}

// повертає масив бренду
function getBrandArray(brandKey) {
  switch (brandKey) {
    case 'karma': return hookahsKarma;
    case 'totem': return hookahsTotem;
    case 'odin':  return hookahsOdin;
    case 'sky':   return hookahsSky;
    case 'tiaga': return hookahsTiaga;
    case 'gramm': return hookahsGramm;
    case 'embery':return hookahsEmbery;
    default: return [];
  }
}

// склеюємо бренди назад у products.hookahs
function mergeHookahs() {
  return [
    ...hookahsKarma,
    ...hookahsTotem,
    ...hookahsOdin,
    ...hookahsSky,
    ...hookahsTiaga,
    ...hookahsGramm,
    ...hookahsEmbery
  ];
}

// якщо не кальяни — нічого не ділаємо
function mergeBackCategory(catKey) {
  if (catKey === 'hookahs') {
    return mergeHookahs();
  } else {
    return products[catKey];
  }
}

// оновити випадаючий список товарів в адмінці
function refreshAdminProductList() {
  const cat = adminCategory.value;
  const brand = adminBrand.value;

  let list = [];
  if (cat === 'hookahs') {
    list = mergeHookahs().filter(p => p.brand === brand);
  } else {
    list = products[cat];
  }

  adminProductList.innerHTML = '';
  list.forEach((item, idx) => {
    const opt = document.createElement('option');
    opt.value = item.id;
    opt.textContent = `${item.name} (${item.price} грн)`;
    adminProductList.appendChild(opt);
  });
}

// отримати посилання на вибраний товар
function getSelectedProductRef() {
  const cat = adminCategory.value;
  const brand = adminBrand.value;
  const selId = adminProductList.value;

  let arr;
  let categoryKey = cat;

  if (cat === 'hookahs') {
    arr = getBrandArray(brand);
  } else {
    arr = products[cat];
  }
  const index = arr.findIndex(p => p.id === selId);

  return { arr, index, categoryKey };
}

// заповнити поля редагування з вибраного продукту
function fillAdminFieldsFromSelected() {
  const { arr, index } = getSelectedProductRef();
  if (!arr || index < 0) {
    adminName.value = "";
    adminPrice.value = "";
    adminImage.value = "";
    return;
  }
  const item = arr[index];
  adminName.value = item.name || "";
  adminPrice.value = item.price || "";
  adminImage.value = item.image || "";
}

// після змін в адмінці — оновити UI каталогу
function renderAfterAdminChange() {
  // перезбираємо products.hookahs після редагування брендів
  products.hookahs = mergeHookahs();

  const activeCategoryBtn = document.querySelector('.tab.active');
  const cat = activeCategoryBtn ? activeCategoryBtn.dataset.category : 'hookahs';

  if (cat === 'hookahs') {
    const activeBrandBtn = document.querySelector('.brand-tab.active');
    const brandKey = activeBrandBtn ? activeBrandBtn.dataset.brand : 'karma';
    render('hookahs', brandKey);
  } else {
    render(cat);
  }
}

// зберігаємо оновлені товари в localStorage
function persistProductsToLocal() {
  const data = {
    hookahsKarma,
    hookahsTotem,
    hookahsOdin,
    hookahsSky,
    hookahsTiaga,
    hookahsGramm,
    hookahsEmbery,
    other: {
      heat: products.heat,
      access: products.access,
      bowls: products.bowls,
      vases: products.vases
    }
  };
  localStorage.setItem('oblako_products_custom', JSON.stringify(data));
}

// при старті підгружаємо можливі кастомні зміни з localStorage
function loadCustomProducts() {
  const raw = localStorage.getItem('oblako_products_custom');
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);

    // оновлюємо масиви брендів, якщо є
    if (parsed.hookahsKarma) Object.assign(hookahsKarma, parsed.hookahsKarma) && (hookahsKarma.length = parsed.hookahsKarma.length, parsed.hookahsKarma.forEach((v,i)=>hookahsKarma[i]=v));
    if (parsed.hookahsTotem) Object.assign(hookahsTotem, parsed.hookahsTotem) && (hookahsTotem.length = parsed.hookahsTotem.length, parsed.hookahsTotem.forEach((v,i)=>hookahsTotem[i]=v));
    if (parsed.hookahsOdin)  Object.assign(hookahsOdin,  parsed.hookahsOdin)  && (hookahsOdin.length  = parsed.hookahsOdin.length,   parsed.hookahsOdin.forEach((v,i)=>hookahsOdin[i]=v));
    if (parsed.hookahsSky)   Object.assign(hookahsSky,   parsed.hookahsSky)   && (hookahsSky.length   = parsed.hookahsSky.length,    parsed.hookahsSky.forEach((v,i)=>hookahsSky[i]=v));
    if (parsed.hookahsTiaga) Object.assign(hookahsTiaga, parsed.hookahsTiaga) && (hookahsTiaga.length = parsed.hookahsTiaga.length,  parsed.hookahsTiaga.forEach((v,i)=>hookahsTiaga[i]=v));
    if (parsed.hookahsGramm) Object.assign(hookahsGramm, parsed.hookahsGramm) && (hookahsGramm.length = parsed.hookahsGramm.length,  parsed.hookahsGramm.forEach((v,i)=>hookahsGramm[i]=v));
    if (parsed.hookahsEmbery)Object.assign(hookahsEmbery,parsed.hookahsEmbery)&& (hookahsEmbery.length= parsed.hookahsEmbery.length, parsed.hookahsEmbery.forEach((v,i)=>hookahsEmbery[i]=v));

    if (parsed.other) {
      products.heat   = parsed.other.heat   || [];
      products.access = parsed.other.access || [];
      products.bowls  = parsed.other.bowls  || [];
      products.vases  = parsed.other.vases  || [];
    }

    // оновлюємо зібраний products.hookahs
    products.hookahs = mergeHookahs();
  } catch(e) {
    console.warn("cant load custom products", e);
  }
}

// =======================
// ІНІТ
// =======================
(function init() {
  loadCustomProducts();
  toggleBrandVisibility();
  render('hookahs', 'karma');
  updateCart();
})();
