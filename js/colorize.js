'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
    'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupWizard = window.setup.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardCoatColor = window.setup.querySelector('input[name=coat-color]');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardEyesColor = window.setup.querySelector('input[name=eyes-color]');
  var wizardFireball = window.setup.querySelector('.setup-fireball-wrap');
  var wizardFireballColor = window.setup.querySelector('input[name=fireball-color]');
  var counters = {
    coat: 1,
    eyes: 1,
    fireball: 1
  };
  var wizard = {
    onCoatChange: function (color) {},
    onEyesChange: function (color) {}
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
    getColor(wizardCoat, COAT_COLORS, wizardCoatColor, 'fill', 'coat');
    var newColor = this.style.fill;
    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    getColor(wizardEyes, EYES_COLORS, wizardEyesColor, 'fill', 'eyes');
    var newColor = wizardEyes.style.fill;
    wizard.onEyesChange(newColor);
  });

  wizardFireball.addEventListener('click', function () {
    getColor(wizardFireball, FIREBALL_COLORS, wizardFireballColor, 'background-color', 'fireball');
  });

  window.wizard = wizard;
})();
