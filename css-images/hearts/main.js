let button = document.querySelector('#btn');
let overlay = document.querySelector('.overlay');

button.onclick = function () {
  overlay.classList.add('hide');
  button.classList.add('hide');
}