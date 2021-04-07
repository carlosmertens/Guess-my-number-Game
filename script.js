'use strict';

// Generate secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Create score and highscore variable
let score = 20;
let highscore = 0;

// Event Listener for the Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    // Check for empty input
    if (!guess) {
      document.querySelector('.message').textContent = '🚫 Must give a number!';
      // Check for winner
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      // Check and set highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      // Check for wrong guess
    } else if (guess !== secretNumber) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '⬇️ Guess lower!' : '⬆️ Guess higher!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    // Lose game
  } else {
    document.querySelector('.message').textContent = '☹️ Game over';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#FF0000';
  }
});

// Event Listener for the play Again! button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
