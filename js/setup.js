'use strict';

var wizardNames = {
  names: ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '],
  surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
};
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var setup = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var setupSimilar = document.querySelector('.setup-similar');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupName = setup.querySelector('.setup-user-name');
var setupWizard = setup.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardCoatColor = setup.querySelector('input[name=coat-color]');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardEyesColor = setup.querySelector('input[name=eyes-color]');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var wizardFireballColor = setup.querySelector('input[name=fireball-color]');
var counters = {
  coat: 1,
  eyes: 1,
  fireball: 1
};

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

/* Отрисовывает магов*/
var renderWizard = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(fillWizard());
  }
  similarListElement.appendChild(fragment);
};
renderWizard();

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && setupName !== document.activeElement) {
    evt.preventDefault();
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

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var getColor = function (obj, arr, input, cssTxt, count) {
  obj.setAttribute('style', cssTxt + arr[counters[count]]);
  input.value = obj.style.cssTxt;
  counters[count]++;
  if (counters[count] > arr.length - 1) {
    counters[count] = 0;
  }
};

wizardCoat.addEventListener('click', function () {
  getColor(wizardCoat, coatColor, wizardCoatColor, 'fill:', 'coat');
});

wizardEyes.addEventListener('click', function () {
  getColor(wizardEyes, eyesColor, wizardEyesColor, 'fill:', 'eyes');
});

wizardFireball.addEventListener('click', function () {
  getColor(wizardFireball, fireballColor, wizardFireballColor, 'background-color:', 'fireball');
});
