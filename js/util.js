'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var getRandomIntFromRange = function (range) {
    return Math.floor(Math.random() * range);
  };

  var getRandomElementFromArray = function (arr) {
    return arr[getRandomIntFromRange(arr.length)];
  };

  window.util = {
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    getRandomIntFromRange: getRandomIntFromRange,
    getRandomElementFromArray: getRandomElementFromArray
  };
})();
