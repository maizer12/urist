# Start Template: Gulp + WebPack + Babel

Сборку делал по примеру автора [youtube](https://www.youtube.com/watch?v=jU88mLuLWlk) канала: [Фрилансер по жизни](https://www.youtube.com/c/FreelancerLifeStyle)

## Для работы используйте такие комманды

- Для установки всех зависимостей: `$ npm install`;
- Для запуска сборщика Gulp нужно использовать: `$ npm run dev`;
- Для сборки проекта в режиме `"production"`: `$ npm run build`;

## Что делает Gulp?

- сжимает HTML в режиме `production`;
- удаляет комментарии из HTML в режиме `production`;
- собирает SCSS файлы, добавляет вендорные префиксы;
- удаляет комментарии из SCSS файлов;
- в режиме `production` сжимает CSS и делает копию без сжатия;
- конвертирует шрифты в `.ttf`, и из `.ttf` в `woff/woff2`;
- создает файл для подключения шрифтов. Данный файл создается по такому пути: `src/scss/config/fonts.scss`, выглядит это так:

```scss
@font-face {
  font-family: Inter;
  font-display: swap;
  src: url('../fonts/Inter-Bold.woff2') format('woff2'), url('../fonts/Inter-Bold.woff')
      format('woff');
  font-weight: 700;
  font-style: normal;
}
```

### ВНИМАНИЕ!!!

> Если в папке `src/scss/config` - уже есть файл `fonts.scss` - тогда при добавлении новых шрифтов **НУЖНО УДАЛИТЬ** старый файл `fonts.scss`. Не переживай, при повторном запуске сборки Gulp все новые шрифты сконвертирует и создаст новый файл `fonts.scss`.

Дальше, что еще умеет сборка:

- сжимает изображения и конвертирует их дополнительно в формат `.webp` и подключает их если браузер поддерживает этот формат;
- копирует папку `/static` с содержимым в финальную сборку. То есть любые файлы можно поместить в эту папку и она будет добавлена в финальную сборку;
- отдельной коммандой `$ npm run svgSprive` cоздает "svg cпрайты";
- перед каждым запуском сборщика чистит папку с финальным проектом, чтобы не собирать муссор;
- отдельной коммандой `$ npm run zip` можно заархивировать финальную папку для заказчика **с именем проекта**;
- так же для разработи `gulp` запускает сервер с автоматической перезагрузкой окна в браузере при изменении файлов в проекте;
- отдельной коммандой `$ npm run deployFTP` финальный проект выгружается на хостинг. Опции для отправки проекта на нужный хостинг указываются в файле: `gulp/config/ftp.js`.

## Что делает WebPack?

- именно `webpack` в данной сборке занимается обработкой файлов c JavaScript;
- поддерживается модульное подключение скриптов `import/export`;
- при импорте нет необходимости писать расширение файла `.js`, так же если осуществляется импорт из файла `index.js` не обязательно это указывать:

```javascript
import * as flsFunctions from './modules' // './modules/index.js'
```

- `webpack` c помощью `babel` позволяет тебе писать код на любимом **ES6+**;
- в режиме `"production"` при финальной сборке файлы JS сжимаются, а лишние комментарии удаляются.

## Финал

Отдельной вишенкой является плагин `gh-pages` для деплоя папки `/dist` на отдельную ветку GitHub, чтобы красиво развернуть свой проект на GitHub Pages. Для этого в `package.json` укажи в поле **homepage** ссылку на свою страницу gh-pages:

```json
"homepage": "https://{UserName}.github.io/{NameRepo}",
```

По любым вопросам касающихся сборки пишите мне в [Telegram](https://t.me/StarkElessar).
