'use strict';

var userDialogElement = document.querySelector('.setup');
var wizardCoatElement = userDialogElement.querySelector('.wizard-coat');
var wizardEyesElement = userDialogElement.querySelector('.wizard-eyes');
var wizardCoatColorElement = userDialogElement.querySelector('input[name="coat-color"]');
var wizardEyesColorElement = userDialogElement.querySelector('input[name="eyes-color"]');
var wizardFireballElement = userDialogElement.querySelector('.setup-fireball-wrap');
var setupFireballColorElement = wizardFireballElement.querySelector('input[name="fireball-color"]');

window.colorize.changeColor(wizardCoatElement, window.colorize.WIZARD_COAT_COLORS, wizardCoatColorElement);
window.colorize.changeColor(wizardEyesElement, window.colorize.WIZARD_EYES_COLORS, wizardEyesColorElement);
window.colorize.changeColor(wizardFireballElement, window.colorize.WIZARD_FIREBALL_COLORS, setupFireballColorElement);
