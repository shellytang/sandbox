'use strict';

$('#ryu-container').append('<img src="http://i.imgur.com/90Mmdcm.png">');

$('#ryu-container img').hover(
  function() {
    this.src = 'http://i.imgur.com/nTj3Fxx.gif'; //hoverIn
  },
  function() {
    this.src = 'http://i.imgur.com/90Mmdcm.png'; //hoverOut
  });

$('#ryu-container img').mousedown(function() {
  this.src = 'http://i.imgur.com/Rfj0a80.png';
});

$('#ryu-container img').mousedown(function () {
  $('.demo-hadouken').remove();
});


$('#ryu-container img').mousedown(function() {
  $('#ryu-container').append('<img class="demo-hadouken" src="http://i.imgur.com/oTyQRvX.gif">');
});

$('#ryu-container img').mousedown(function() {
  $('.demo-hadouken').animate({'margin-left': '600px'}, 1000, 'swing', function () {
    this.remove();
  });
});

$('#ryu-container img').mouseup(function () {
  this.src = 'http://i.imgur.com/90Mmdcm.png';
});