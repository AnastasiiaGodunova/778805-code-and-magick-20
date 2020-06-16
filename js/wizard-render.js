'use strict';

(function () {
  var setupSimilar = document.querySelector('.setup-similar');
  var similarListElement = setupSimilar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
  var wizardNames = {
    names: ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '],
    surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
  };
  window.wizardRender = {
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'],
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
  };

  window.removeClass(setupSimilar, 'hidden');

  /* Возвращает случайный элемент массива*/
  var getRandomArrElement = function (arr) {
    var random = Math.floor(Math.random() * arr.length);

    return arr[random];
  };

  /* Возвращает мага со случайными значениями*/
  var fillWizard = function () {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = getRandomArrElement(wizardNames.names) +
    getRandomArrElement(wizardNames.surnames);
    wizardElement.querySelector('.wizard-coat').style.fill = getRandomArrElement(window.wizardRender.coatColor);
    wizardElement.querySelector('.wizard-eyes').style.fill = getRandomArrElement(window.wizardRender.eyesColor);

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
})();
