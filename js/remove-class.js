'use strict';

(function () {
  /* Удаляет класс*/
  window.removeClass = function (elem, elemClass) {
    elem.classList.remove(elemClass);
  };
})();
