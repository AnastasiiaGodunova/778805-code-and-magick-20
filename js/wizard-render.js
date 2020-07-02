'use strict';

(function () {
  var setupSimilar = document.querySelector('.setup-similar');
  var similarListElement = setupSimilar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

  window.removeClass(setupSimilar, 'hidden');

  /* Возвращает мага со случайными значениями*/
  var fillWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizard = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(fillWizard(data[i]));
    }
    setupSimilar.classList.remove('hidden');
  };

  window.wizard = {
    render: renderWizard
  };
})();
