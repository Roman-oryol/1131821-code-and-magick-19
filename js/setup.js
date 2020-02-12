'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var formElement = userDialog.querySelector('.setup-wizard-form');
  var wizardCoatElement = formElement.querySelector('.wizard-coat');
  var wizardEyesElement = formElement.querySelector('.wizard-eyes');
  var wizardCoatColorElement = formElement.querySelector('input[name="coat-color"]');
  var wizardEyesColorElement = formElement.querySelector('input[name="eyes-color"]');
  var wizardFireballElement = formElement.querySelector('.setup-fireball-wrap');
  var setupFireballColorElement = wizardFireballElement.querySelector('input[name="fireball-color"]');

  window.colorize.changeColor(wizardCoatElement, window.colorize.WIZARD_COAT_COLORS, wizardCoatColorElement);
  window.colorize.changeColor(wizardEyesElement, window.colorize.WIZARD_EYES_COLORS, wizardEyesColorElement);
  window.colorize.changeColor(wizardFireballElement, window.colorize.WIZARD_FIREBALL_COLORS, setupFireballColorElement);


  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(formElement), window.dialog.closeUserDialog, window.renderWizard.onError);
  });

})();
