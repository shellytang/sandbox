'use strict';


$('#add').click(function (e) {
  e.preventDefault();
  $('#prototype').clone().removeAttr('id').removeClass('prototype').addClass('cloned').appendTo('#img-grid');
});

$('#remove').click(function (e) {
  e.preventDefault();
  $('.cloned:last-of-type').remove();
}); 

// add and remove with vanilla JS 

// let addBtn = document.getElementById('add');
// let removeBtn = document.getElementById('remove');
// addBtn.addEventListener('click', addCat);
// removeBtn.addEventListener('click', removeCat);

// function addCat() {
//   let clone = document.getElementById('prototype').cloneNode(true);
//   clone.removeAttribute('id');
//   document.getElementById('img-grid').appendChild(clone);
// }

// function removeCat() {
//   let element = document.getElementsByClassName('grid-item');
//   let cat = element[1];
//   let length = element.length;
//   while(length > 1) {
//     cat.remove();
//     length--;
//   }
// }

