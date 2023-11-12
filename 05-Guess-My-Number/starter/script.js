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

let randomNum = Math.trunc(Math.random() * 20) + 1; // Number between 1 and 20;
let initialScore = 20;
// Implementing the High Score save.
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guessNum = Number(document.querySelector('.guess').value);

  // No input
  if (!guessNum) {
    document.querySelector('.message').textContent =
      'Please enter a number between 1 and 20';

    // Correct answer
  } else if (guessNum === randomNum) {
    document.body.style.background = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNum;
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('.score').textContent = initialScore;

    // High score
    if (initialScore > highScore) {
      highScore = initialScore;
      document.querySelector('.highscore').textContent = highScore;
    } else if (initialScore === highScore) {
      highScore = initialScore - 1;
      document.querySelector('.highscore').textContent = highScore - 1;
    }

    // Refactored Else if for incorrect guesses:
  } else if (guessNum !== randomNum) {
    if (initialScore > 1) {
      document.querySelector('.message').textContent =
        guessNum < randomNum ? 'Guess is too low!' : 'Guess is too high!';
      initialScore--;
      document.querySelector('.score').textContent = initialScore;
    }
  } else {
    document.querySelector('.message').textContent = 'Game Over! You lose.';
    document.body.style.background = 'red';
    document.querySelector('.score').textContent = 0;
    document.querySelector('.number').textContent = randomNum;
  }
});

/*
 Code Challenge: 
Implement a game reset function so that the player can start again.

Soooo, we need to select the element that has the again button via its class.
Attach an event click handler
in the handler function, reset all of the values of the score and number variables
Restore the initial conditions of the message/score/input friend
restore the background colour to the grey we have and the div displaying the number back to 15rem.

*/

document.querySelector('.again').addEventListener('click', function () {
  initialScore = 20;
  randomNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = initialScore;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.body.style.background = '#222';
  document.querySelector('.guess').value = '';
});
