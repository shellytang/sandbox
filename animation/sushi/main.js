'use strict';

//make sushi -- create dom element, add random image, add class
$(function() {

  function makeSushiDiv() {
    let sushi = $('<div class="sushi sushi-1"></div>');
    $('#sushi-container').append(sushi);
  }

  function addImageToSushiDiv() {
    makeSushiDiv();
    // generateRandomNum();
    let img = $('<img src="./img/sushi01.png" alt="sushi1">');
    $('.sushi').append(img);
  }

  setInterval(addImageToSushiDiv, 10000);

});
//append to the dom (the conveyor belt) -- the setTimeOut would be every 3000 ms (3 secs)

