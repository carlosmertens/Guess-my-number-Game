'use strict';

// Create secret number
const number = Math.trunc(Math.random() * 20) + 1;
// TODO: hide number
document.querySelector('.number').textContent = number;

// Event Listener for the Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 Must give a number!';
  }
});
