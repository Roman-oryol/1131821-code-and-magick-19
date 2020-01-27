'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomIntFromRange = function (range) {
  return Math.floor(Math.random() * range);
};

var getRandomElementFromArray = function (arr) {
  return arr[getRandomIntFromRange(arr.length)];
};

var createWizard = function (names, surnames, coatColors, eyesColors) {
  var wizard = {};

  wizard.name = getRandomElementFromArray(names) + ' ' + getRandomElementFromArray(surnames);
  wizard.coatColor = getRandomElementFromArray(coatColors);
  wizard.eyesColor = getRandomElementFromArray(eyesColors);

  return wizard;
};

var initApp = function (amountElements) {
  var wizards = [];

  for (var i = 0; i < amountElements; i++) {
    wizards[i] = createWizard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLORS, WIZARD_EYES_COLORS);
  }

  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var getListWizardElement = function (arr) {
  var fragment = document.createDocumentFragment();

  for (var j = 0; j < arr.length; j++) {
    fragment.appendChild(renderWizard(arr[j]));
  }

  return fragment;
};

similarListElement.appendChild(getListWizardElement(initApp(4)));

document.querySelector('.setup-similar').classList.remove('hidden');
