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

document.querySelector('.check').addEventListener('click', function () {
  let guessNum = document.querySelector('.guess').value;
  if (guessNum <= 0 || guessNum > 20) {
    console.log('Please enter a number between 1 and 20 only!');
  } else if (guessNum <= 15) {
    console.log('Too low!');
  } else if (guessNum >= 17) {
    console.log('Too high!');
  } else {
    console.log('Just right.');
  }
});
