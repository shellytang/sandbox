'use strict';

let app = new Vue({
  el: '#app',
  data: {
    earClass: 'ear-right'
  },
  methods: {
    dragEarRight: function() {
      //change earClass from ear-right to ear-right-active
      this.earClass = 'ear-right-active';
    }
  }
});
