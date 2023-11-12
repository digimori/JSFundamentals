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

User Resets game:
Reset all scores back to 0, 
Set player 1 as starting player
 */

// Selecting the elements
const score_0 = document.querySelector('#score--0');
const score_1 = document.querySelector('#score--1');
const diceHidden = document.querySelector('.dice');

// Starting conditions:
score_0.textContent = 0;
score_1.textContent = 0;
diceHidden.classList.add('hidden');

// Getting the random dice number:
let diceRoll = Math.trunc(Math.random() * 6) + 1;
