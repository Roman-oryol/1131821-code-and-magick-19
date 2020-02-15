'use strict';

(function () {
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  var SAVE_URL = 'https://js.dump.academy/code-and-magick';
  var TIMEOUT_IN_MS = 10000;
  var StatusCode = {
    OK: 200
  };

  var createRequest = function (requestMethod, url, onLoad, onError, data) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Долгое ожидание загрузки');
    });

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open(requestMethod, url);

    if (data) {
      xhr.send(data);
    } else {
      xhr.send();
    }
  };

  var load = function (onLoad, onError) {
    createRequest('GET', LOAD_URL, onLoad, onError);
  };

  var save = function (data, onLoad, onError) {
    createRequest('POST', SAVE_URL, onLoad, onError, data);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
