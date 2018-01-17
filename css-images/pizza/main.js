'use strict';

$(function() {
  $('.toppings').draggable({
    helper: 'clone'
  });

  $('.right-container').droppable({
    drop: function(e, ui) {
      let newClone = $(ui.helper).clone();
      $(ui.helper).remove();
      $(newClone).draggable({
        revert: true,
      });
      $(this).after(newClone);
      checkIfNewTopping(newClone);
    }
  });

  const order = {};

  //only update order if new topping
  function checkIfNewTopping(topping) {
    let toppingType = $(topping).attr('class').split(' ')[0];
    if(!order[toppingType]) {
      order[toppingType] = '$1.50';
      updateOrder(toppingType);
    }
  }

  function updateOrder(topping) {
    if (topping === 'mushroom-box') {
      topping = 'mushroom';
    }
    if (topping === 'olives-outer') {
      topping = 'olives';
    }
    if (topping === 'bell-pepper') {
      topping = 'bell pepper'; 
    }
    let toppingAddedToOrder = $('<p class="order-item">' + topping + '</p>');
    $('.total').before(toppingAddedToOrder);
    updateTotal();
  }

  function updateTotal() {
    let count = Object.keys(order).length;
    let total = ((count * 1.50)+16).toFixed(2);
    $('.total').text('Total: $'+total);
  }

});