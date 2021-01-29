'use strict';
// game of pig
//Selecting elements
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting coditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

//Rolling dice funcionality
btnRoll.addEventListener('click', function () {
  // 1. Generating Random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEL.classList.remove('hidden');
  diceEL.src = `imagens/dice-${dice}.png`;
  //3. Check for rolled 1: if true, swtich to next player
  if (dice !== 1) {
    score0EL;
  }
});
