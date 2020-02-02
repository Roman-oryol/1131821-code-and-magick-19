'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var userDialogElement = document.querySelector('.setup');
var userDialogOpenElement = document.querySelector('.setup-open');
var userDialogCloseElement = userDialogElement.querySelector('.setup-close');
var userNameElement = userDialogElement.querySelector('.setup-user-name');
var wizardCoatElement = userDialogElement.querySelector('.wizard-coat');
var wizardEyesElement = userDialogElement.querySelector('.wizard-eyes');
var wizardCoatColorElement = userDialogElement.querySelector('input[name="coat-color"]');
var wizardEyesColorElement = userDialogElement.querySelector('input[name="eyes-color"]');
var wizardFireballElement = userDialogElement.querySelector('.setup-fireball-wrap');
var setupFireballColorElement = wizardFireballElement.querySelector('input[name="fireball-color"]');

var onUserDialogEscPress = function (evt) {
  if (evt.key === ESC_KEY && evt.target !== userNameElement) {
    closeUserDialog();
  }
};

var openUserDialog = function () {
  userDialogElement.classList.remove('hidden');

  document.addEventListener('keydown', onUserDialogEscPress);
};

var closeUserDialog = function () {
  userDialogElement.classList.add('hidden');
  document.removeEventListener('keydown', onUserDialogEscPress);
};

var changeCoatColor = function () {
  var coatColor = getRandomElementFromArray(WIZARD_COAT_COLORS);
  wizardCoatElement.style.fill = coatColor;
  wizardCoatColorElement.value = coatColor;
};

var changeEyesColor = function () {
  var eyesColor = getRandomElementFromArray(WIZARD_EYES_COLORS);
  wizardEyesElement.style.fill = eyesColor;
  wizardEyesColorElement.value = eyesColor;
};

var changeFireballColor = function () {
  var fireballColor = getRandomElementFromArray(WIZARD_FIREBALL_COLORS);
  wizardFireballElement.style.backgroundColor = fireballColor;
  setupFireballColorElement.value = fireballColor;
};

userDialogOpenElement.addEventListener('click', function () {
  openUserDialog();
});

userDialogOpenElement.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openUserDialog();
  }
});

userDialogCloseElement.addEventListener('click', function () {
  closeUserDialog();
});

userDialogCloseElement.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closeUserDialog();
  }
});

wizardCoatElement.addEventListener('click', function () {
  changeCoatColor();
});

wizardEyesElement.addEventListener('click', function () {
  changeEyesColor();
});

wizardFireballElement.addEventListener('click', function () {
  changeFireballColor();
});

var similarListElement = userDialogElement.querySelector('.setup-similar-list');

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
