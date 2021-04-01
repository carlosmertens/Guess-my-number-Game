'use strict';

// Generate secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// TODO: hide  secret number
document.querySelector('.number').textContent = secretNumber;

// Create score variable
let score = 20;

// Event Listener for the Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 Must give a number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '⬇️ Guess lower!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '⬆️ Guess higher!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
