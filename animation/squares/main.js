'use strict';

$(function () {

  let boxColor = '#EE204D';

  function createBoard() {
    let box = '<div class="box green"></div>';  
    let div = $('#box-container').children();
    for(let col = 0; col < 20; col++) {
      for(var row = 0; row < 15; row++) {
        $(div[col]).append(box);
      }
    }
    addClickOnBox(); //add event listener after box is added to DOM
  }

  function addClickOnBox() {
    $('.box').on('click', function () {
      event.target.style.backgroundColor = boxColor;
    });
  }

  function makePalette() {
    let colorArr = ['#EE204D', '#FF7538', '#FCE883', '#1CAC78', '#1F75FE', '#7B00E4', '#410082','#FFFFFF', '#000000'];
    let swatches = $('#color-palette').children();

    for(let i = 0; i < swatches.length; i++) {
      swatches[i] = $(swatches[i]).css('background-color', colorArr[i]); 
      if(colorArr[i] === '#FFFFFF') {
        swatches[i] = $(swatches[i]).css('border', '1px solid #000000'); //set black border for white swatch
      }
      $(swatches[i]).on('click', function () {
        boxColor = $(event.target).css('background-color');
      });
      $('#color-palette').append(swatches[i]);
    }
  }

  createBoard();
  makePalette();
});
