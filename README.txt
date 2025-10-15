<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>OblakoUa — Магазин / Каталог</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="shop-header">
    <a class="logo" href="index.html">OblakoUa</a>
    <nav class="shop-nav">
      <a href="index.html">Главная</a>
      <a href="#catalog">Каталог</a>
    </nav>
  </header>

  <main class="shop-main" id="catalog">
    <section class="tabs">
      <button class="tab-btn active" data-tab="hookahs">Кальяны</button>
      <button class="tab-btn" data-tab="vases">Колбы</button>
    </section>

    <section class="tab-content" id="hookahs">
      <div class="product-grid" id="hookah-list"></div>
    </section>

    <section class="tab-content hidden" id="vases">
      <div class="product-grid" id="vase-list"></div>
    </section>
  </main>

  <template id="product-template">
    <div class="product-card">
      <div class="img-wrap"><img alt=""></div>
      <div class="product-body">
        <h3 class="prod-title"></h3>
        <p class="prod-price"></p>
        <div class="prod-actions">
          <a class="btn btn-buy" target="_blank" rel="noopener">Купить</a>
        </div>
      </div>
    </div>
  </template>

  <script src="script.js"></script>
</body>
</html>