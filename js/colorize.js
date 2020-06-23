'use strict';

(function () {
  var setupWizard = window.setup.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardCoatColor = window.setup.querySelector('input[name=coat-color]');
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
    'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardEyesColor = window.setup.querySelector('input[name=eyes-color]');
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
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
    getColor(wizardCoat, coatColor, wizardCoatColor, 'fill', 'coat');
  });

  wizardEyes.addEventListener('click', function () {
    getColor(wizardEyes, eyesColor, wizardEyesColor, 'fill', 'eyes');
  });

  wizardFireball.addEventListener('click', function () {
    getColor(wizardFireball, fireballColor, wizardFireballColor, 'background-color', 'fireball');
  });
})();
