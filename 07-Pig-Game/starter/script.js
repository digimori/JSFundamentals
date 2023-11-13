'use strict';

/*
 How Pig works:
 - Player rolls as many dice as they choose and can choose to hold their score and pass to the next player, retaining their current score
 - If they roll a 1, they lose accumulated points on that round and pass to the next player
 - First to 100 wins

 so to flowchart/pseudo-code this:
 User rolls dice (generate random dice roll) > Display roll:
 if dice roll is 1:
 Switch player, do not add to current score
else if dice roll is not 1:
Add dice roll to current score 
Display new score

User holds score:
Add current score to total score,
If score >= 100 : Player wins, End game
Else: Switch player
So I guess this would be getting the other players assets and then running the whole process again? 

User Resets game:
Reset all scores back to 0, 
Set player 1 as starting player
 */

// Selecting the elements
const score_0 = document.querySelector('#score--0');
const score_1 = document.querySelector('#score--1');
const diceHidden = document.querySelector('.dice');
const currentPlayer0Score = document.querySelector('#current--0');
const currentPlayer1Score = document.querySelector('#current--1');
const playerBackground1 = document.querySelector('.player--0');
const playerBackground2 = document.querySelector('.player--1');

// Starting conditions:
score_0.textContent = 0;
score_1.textContent = 0;
diceHidden.classList.add('hidden');

// Buttons for selection:
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Holding the score total:
let currentScore = 0;

// Holding dice rolls in array:
let scores = [0, 0]; // Zero basing means that the player scores will be exchanged with the values in this array

// Holding the game state - Stop buttons being pressed once game is over
let playingGame = true; // Beginning of game, set to false when game is over

// Active player:
let activePlayer = 0;

// Switching player function (as it needs to be used more than once):
let switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // If active player is 0, change to one and vice-versa
  currentScore = 0;
  // Changing the background via toggle
  playerBackground1.classList.toggle('player--active');
  playerBackground2.classList.toggle('player--active');
};

// Getting the random dice number:
btnRoll.addEventListener('click', function () {
  if (playingGame) {
    // Generating a random dice roll
    let diceRoll = Math.trunc(Math.random() * 6) + 1;

    // Display the dice roll via removing the hidden class
    diceHidden.classList.remove('hidden');

    // Changing the image to match the roll
    diceHidden.src = `/07-Pig-Game/starter/dice-${diceRoll}.png`; // Dynamically loading the image that correlates with the dice number

    // Check for roll of 1, if true, next player switch:
    if (diceRoll !== 1) {
      // Append the total, hold the score
      currentScore += diceRoll; // currentScore = currentScore + diceRoll;
      // Dynamically changing which target we're using based on the activePlayer variable index
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Button hold score handler:
btnHold.addEventListener('click', function () {
  if (playingGame) {
    // Add current score to active player's score
    // Score at current active player position [activePlayer]
    scores[activePlayer] += currentScore;
    // As an example:
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check score is >=100:
    if (scores[activePlayer] >= 20) {
      // Winner!
      playingGame = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceHidden.classList.add('hidden');
    } else {
      // switch next player
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', function () {
  score_0.textContent = 0;
  score_1.textContent = 0;
  diceHidden.classList.add('hidden');
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playingGame = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});
