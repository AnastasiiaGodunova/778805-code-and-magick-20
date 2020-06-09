'use strict';

var wizardNames = {
  names: ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '],
  surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
};
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var setup = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');
var setupSimilar = document.querySelector('.setup-similar');

/* Удаляет класс*/
var removeClass = function (elem, elemClass) {
  elem.classList.remove(elemClass);
};

/* Возвращает случайный элемент массива*/
var getRandomArrElement = function (arr) {
  var random = Math.floor(Math.random() * arr.length);

  return arr[random];
};

removeClass(setupSimilar, 'hidden');

/* Возвращает мага со случайными значениями*/
var fillWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = getRandomArrElement(wizardNames.names) +
  getRandomArrElement(wizardNames.surnames);
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomArrElement(coatColor);
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomArrElement(eyesColor);

  return wizardElement;
};

/* Отрисовывает объявление*/
var renderWizard = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(fillWizard());
  }
  similarListElement.appendChild(fragment);
};
renderWizard();


var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupName = document.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  evt.preventDefault();
  if (evt.key === 'Escape' && setupName != document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  removeClass(setup, 'hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener ('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});
