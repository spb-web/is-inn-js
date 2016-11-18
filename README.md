# is-inn-js

Модуль проверки валидности кода ИНН.

### Установка:
```sh
$ npm install is-inn-js --save
```

### Пример использования
#### NodeJS
```js
const isInn = require('is-inn-js');
let isInnResult = isInn("4234002402");
console.log( isInnResult ) // print: true
```
#### Browser
```html
<script src="/node_modules/is-inn-js/isInn.js"></script>
<script>
    var isInnResult = isInn("4234002402");
    console.log( isInnResult ) // print: true
</script>
```

isInn возвращает true для валидного ИНН и false для не валидного. Проверка идет с подсчётом контрольных сумм