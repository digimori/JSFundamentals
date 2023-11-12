'use strict';
// DOM:
// Document Object Model - Structured representation of HTML documents. Allows JS to access HTML elements and styles in order to manipulate them (like changing text, attributes, css etc).

/* Selecting and manipulating elements: querySelector/All with .innerHTML/textContent etc
// Getting the elements
document.querySelector('.message').textContent;
document.querySelector('.score').textContent;
document.querySelector('.highscore').textContent;
document.querySelector('.guess').value;
document.querySelector('.number').textContent;

// Setting/Manipulating, these will be changed using if/else when events happen:
document.querySelector('.message').textContent = 'Correct Number!';*/

const randomNum = Math.trunc(Math.random() * 20) + 1; // Number between 1 and 20;
let initialScore = 20;

let guessMessage = document.querySelector('.message').textContent;
let highScore = document.querySelector('.highscore').textContent;
let numBox = document.querySelector('.number').textContent;

document.querySelector('.check').addEventListener('click', function () {
  let guessNum = Number(document.querySelector('.guess').value);
  let randomizer = (document.querySelector('.number').textContent = randomNum);

  if (!guessNum) {
    document.querySelector('.message').textContent =
      'Please enter a number between 1 and 20';
  } else if (guessNum === randomNum) {
    document.querySelector('.number').textContent = randomNum;
    document.querySelector('.message').textContent = 'Correct number!';

    initialScore++;
    document.querySelector('.score').textContent = initialScore;
  } else if (guessNum < randomNum) {
    if (initialScore > 1) {
      document.querySelector('.number').textContent = randomNum;
      document.querySelector('.message').textContent = 'Guess is too low!';
      initialScore--;
      document.querySelector('.score').textContent = initialScore;
    } else {
      document.querySelector('.message').textContent = 'Game Over! You lose.';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNum > randomNum) {
    if (initialScore > 1) {
      document.querySelector('.number').textContent = randomNum;
      document.querySelector('.message').textContent = 'Guess is too high!';
      initialScore--;
      document.querySelector('.score').textContent = initialScore;
    } else {
      document.querySelector('.message').textContent = 'Game Over! You lose.';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// We need a 0 logic. Can't go lower than zero.
