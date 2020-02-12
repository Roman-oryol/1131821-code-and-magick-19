'use strict';

(function () {
  var userDialogElement = document.querySelector('.setup');
  var similarListElement = userDialogElement.querySelector('.setup-similar-list');
  var userDialogOpenElement = document.querySelector('.setup-open');
  var userDialogCloseElement = userDialogElement.querySelector('.setup-close');
  var userNameElement = userDialogElement.querySelector('.setup-user-name');

  var onUserDialogEscPress = function (evt) {
    if (evt.key === window.util.ESC_KEY && evt.target !== userNameElement) {
      closeUserDialog();
    }
  };

  var openUserDialog = function () {
    userDialogElement.classList.remove('hidden');
    if (similarListElement.children.length === 0) {
      window.backend.load(window.renderWizard.onLoad, window.renderWizard.onError);
    }
    document.addEventListener('keydown', onUserDialogEscPress);
  };

  var closeUserDialog = function () {
    userDialogElement.classList.add('hidden');
    userDialogElement.style = '';
    document.removeEventListener('keydown', onUserDialogEscPress);
    if (document.querySelector('.error-message')) {
      document.querySelector('.error-message').remove();
    }
  };

  userDialogOpenElement.addEventListener('click', function () {
    openUserDialog();
  });

  userDialogOpenElement.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openUserDialog);
  });

  userDialogCloseElement.addEventListener('click', function () {
    closeUserDialog();
  });

  userDialogCloseElement.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closeUserDialog);
  });

  window.dialog = {
    closeUserDialog: closeUserDialog
  };
})();
