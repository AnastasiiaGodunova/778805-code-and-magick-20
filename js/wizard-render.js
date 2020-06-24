'use strict';

(function () {
  var setupSimilar = document.querySelector('.setup-similar');
  var similarListElement = setupSimilar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
  var form = window.setup.querySelector('.setup-wizard-form');

  window.removeClass(setupSimilar, 'hidden');

  /* Возвращает случайный элемент массива*/
  var getRandomArrElement = function (arr) {
    var random = Math.floor(Math.random() * arr.length);

    return arr[random];
  };

  /* Возвращает мага со случайными значениями*/
  var fillWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  /* Отрисовывает магов*/
  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(fillWizard(getRandomArrElement(wizards)));
    }
    similarListElement.appendChild(fragment);
    setupSimilar.classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  var submitHandler = function (evt) {
    window.backend.save(new FormData(form), function () {
      window.setup.classList.add('hidden');
    });
    evt.preventDefault();
  };
  form.addEventListener('submit', submitHandler, errorHandler);
})();
