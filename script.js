'use strict';

// Function to create a random number between 1 and x
const getRandomNumber = function (number) {
  return Math.trunc(Math.random() * number) + 1;
};

// Function to display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Function to display body color
const bodyBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

// Create secret number, score and highscore variables
let secretNumber = getRandomNumber(20);
let score = 20;
let highscore = 0;

// Event Listener for the Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    // Check for empty input
    if (!guess) {
      displayMessage('🚫 Must give a number!');
      // Check for winner
    } else if (guess === secretNumber) {
      displayMessage('🎉 Correct number!');
      bodyBackground('#60b347');
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      // Check and set highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      // Check for wrong guess
    } else if (guess !== secretNumber) {
      displayMessage(
        guess > secretNumber ? '⬇️ Guess lower!' : '⬆️ Guess higher!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    }
    // Lose game
  } else {
    displayMessage('☹️ Game over');
    document.querySelector('.score').textContent = 0;
    bodyBackground('#FF0000');
  }
});

// Event Listener for the play Again! button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = getRandomNumber(20);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  bodyBackground('#222');
});
