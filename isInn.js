(function() {
  // https://ru.wikipedia.org/wiki/Идентификационный_номер_налогоплательщика
  var isInn = function(inn) {
    if (typeof inn === 'string' || typeof inn === 'number') {
      inn = inn.toString();

      if ((/^\d+$/).test(inn) === false) {
        return false;
      }

      // Проверка контрольных цифр
      if (inn.length === 10) {
        // Для 10-значного ИНН
        return inn.charAt(9) == ((
          2 * inn.charAt(0) +
          4 * inn.charAt(1) +
          10 * inn.charAt(2) +
          3 * inn.charAt(3) +
          5 * inn.charAt(4) +
          9 * inn.charAt(5) +
          4 * inn.charAt(6) +
          6 * inn.charAt(7) +
          8 * inn.charAt(8)
        ) % 11) % 10
      } else if (inn.length === 12) {
        // Для 12-значного ИНН
        return (inn.charAt(10) == ((
          7 * inn.charAt(0) +
          2 * inn.charAt(1) +
          4 * inn.charAt(2) +
          10 * inn.charAt(3) +
          3 * inn.charAt(4) +
          5 * inn.charAt(5) +
          9 * inn.charAt(6) +
          4 * inn.charAt(7) +
          6 * inn.charAt(8) +
          8 * inn.charAt(9)
        ) % 11) % 10) &&
        (inn.charAt(11) == ((
          3 * inn.charAt(0) +
          7 * inn.charAt(1) +
          2 * inn.charAt(2) +
          4 * inn.charAt(3) +
          10 * inn.charAt(4) +
          3 * inn.charAt(5) +
          5 * inn.charAt(6) +
          9 * inn.charAt(7) +
          4 * inn.charAt(8) +
          6 * inn.charAt(9) +
          8 * inn.charAt(10)
        ) % 11) % 10)
      }

      return false;
    }

    return false;
  }

  // Экспортируем модуль
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = isInn;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return isInn;
      });
    } else {
      window.isInn = isInn;
    }
  }

})();
