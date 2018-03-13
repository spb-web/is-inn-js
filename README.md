# is-inn-js

Модуль проверки валидности кода ИНН. Проверка происходит с подсчётом контрольных сумм

### Установка:
##### npm
```sh
npm install is-inn-js --save
```
##### yarn
```sh
yarn add is-inn-js
```

### Пример использования
#### NodeJS
```js
const isInn = require('is-inn-js')
const isInnResult = isInn('4234002402')

console.log(isInnResult) // print: true
```
#### Browser
```html
<script src='/node_modules/is-inn-js/isInn.js'></script>
<script>
    var isInnResult = isInn('4234002402');

    console.log(isInnResult) // print: true
</script>
```

isInn возвращает true для валидного ИНН и false для не валидного.



#### Тестирование:
```sh
$ npm run test
```
