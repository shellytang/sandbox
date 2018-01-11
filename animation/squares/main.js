'use strict';

$(function () {
  let box = '<div class="box green"></div>';
  let cell = $('#box-container').children();
  for(let col = 0; col < 20; col++) {
    for(var row = 0; row < 15; row++) {
      $(cell[col]).append(box);
    }
  }
});

// function handleClick(e) {
//   e.preventDefault();
//   alert('HI!');
// }

$('body').on('click', '.box', function () {
  let box = this;
  $(box).toggleClass('green');
  $(box).toggleClass('red');
});

$('#color-form').submit(function(e) {
  e.preventDefault();
  alert('SUBMIT!');
});