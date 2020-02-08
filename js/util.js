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

  var isEscEvent = function (evt, action) {
    if (evt.key === ESC_KEY) {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.key === ENTER_KEY) {
      action();
    }
  };

  window.util = {
    ESC_KEY: ESC_KEY,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getRandomIntFromRange: getRandomIntFromRange,
    getRandomElementFromArray: getRandomElementFromArray
  };
})();
