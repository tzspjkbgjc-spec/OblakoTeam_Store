OblakoUa — готовый сайт магазина (статический фронтенд).

Файлы:
- index.html
- style.css
- script.js

Как запустить локально:
1) Открой папку в VS Code или двойным кликом открой index.html
2) Или в терминале запусти простой сервер (Python3):
   python3 -m http.server 8000
   и открой http://localhost:8000

Как опубликовать (GitHub Pages):
1) Создай новый репозиторий на GitHub (назови myshop или OblakoUa)
2) Залей файлы, затем в Settings -> Pages выбери Branch main (root)
3) Сайт будет доступен по адресу https://ТВОЙ_ЛОГИН.github.io/РЕПОЗИТОРИЙ/

Примечание по Telegram:
- В script.js замени строку const tgUsername = "your_username"; на твой telegram username (без @),
  тогда при нажатии "Оформить через Telegram" будет открываться диалог с готовым текстом заказа.

Если хочешь — могу автоматически залить это в твой GitHub (нужен доступ) или помочь с деплоем — скажи.