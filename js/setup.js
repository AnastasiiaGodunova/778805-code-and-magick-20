'use strict';

var wizardNames = {
  names: ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '],
  surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
};

var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

/* Возвращает случайный элемент массива*/
var getRandomArrElement = function (arr) {
  var random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

/* Возвращает мага со случайными значениями*/
var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = getRandomArrElement(wizardNames.names) +
  getRandomArrElement(wizardNames.surnames);
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomArrElement(coatColor);
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomArrElement(eyesColor);

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard());
}
similarListElement.appendChild(fragment);

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
