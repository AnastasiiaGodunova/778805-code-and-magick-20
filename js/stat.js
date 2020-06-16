'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var FONT_GAP = 20;
  var BAR_MAX_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var GAP = 50;

  var colors = ['#0000FF', '#00BFFF', '#00008B', '#4169E1', '#191970'];

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  // Вычисление максимального значения
  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y * 2, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP, FONT_GAP);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, FONT_GAP * 2);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      var barHeight = (BAR_MAX_HEIGHT * times[i]) / maxTime;
      var columnX = CLOUD_X + GAP + (BAR_WIDTH + GAP) * i;

      ctx.fillStyle = '#000000';
      ctx.fillText(Math.round(times[i]), columnX, BAR_MAX_HEIGHT + GAP + FONT_GAP - barHeight);
      ctx.fillText(names[i], columnX, BAR_MAX_HEIGHT + CLOUD_X);

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = colors[(Math.floor(Math.random() * colors.length))]; // Определение цвета
      }

      ctx.fillRect(columnX, FONT_GAP + GAP + FONT_GAP + BAR_MAX_HEIGHT, BAR_WIDTH, -barHeight); // Построение гистограммы
    }
  };
})();
