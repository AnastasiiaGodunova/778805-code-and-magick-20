'use strict';

(function () {
  var setupWizard = window.setup.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardCoatColor = window.setup.querySelector('input[name=coat-color]');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardEyesColor = window.setup.querySelector('input[name=eyes-color]');
  var wizardFireball = window.setup.querySelector('.setup-fireball-wrap');
  var wizardFireballColor = window.setup.querySelector('input[name=fireball-color]');
  var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var counters = {
    coat: 1,
    eyes: 1,
    fireball: 1
  };

  var getColor = function (obj, arr, input, cssTxt, count) {
    obj.style[cssTxt] = arr[counters[count]];
    input.value = obj.style.cssTxt;
    counters[count]++;
    if (counters[count] > arr.length - 1) {
      counters[count] = 0;
    }
  };

  wizardCoat.addEventListener('click', function () {
    getColor(wizardCoat, window.wizardRender.coatColor, wizardCoatColor, 'fill', 'coat');
  });

  wizardEyes.addEventListener('click', function () {
    getColor(wizardEyes, window.wizardRender.eyesColor, wizardEyesColor, 'fill', 'eyes');
  });

  wizardFireball.addEventListener('click', function () {
    getColor(wizardFireball, fireballColor, wizardFireballColor, 'background-color', 'fireball');
  });
})();
