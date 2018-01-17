'use strict';

$(function() {
  $('.toppings').draggable({
    helper: 'clone'
  });

  $('.pizza-container').droppable({
    drop: function(e, ui) {
      let newClone = $(ui.helper).clone();
      $(ui.helper).remove();
      $(newClone).draggable();
      $(this).after(newClone);
    }
  });
});