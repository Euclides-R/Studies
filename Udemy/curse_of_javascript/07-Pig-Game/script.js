'use strict';
// game of pig
//Selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting coditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let playerActive = 0;
let playing = true;
//Rolling dice funcionality
btnRoll.addEventListener('click', function() {
    // 1. Generating Random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `imagens/dice-${dice}.png`;
    //3. Check for rolled 1: if true, swtich to next player
    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(
            `current--${playerActive}`
        ).textContent = currentScore;
    } else {
        switchPlayer();
    }
});

btnNew.addEventListener('click', function() {
    window.location.reload();
});

const switchPlayer = function() {
    currentScore = 0;
    document.getElementById(
        `current--${playerActive}`
    ).textContent = currentScore;
    playerActive = playerActive === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
};

const hold = btnHold.addEventListener('click', function() {
    if (playing) {
        scores[playerActive] += currentScore;
        document.getElementById(`score--${playerActive}`).textContent =
            scores[playerActive];
        if (scores[playerActive] >= 10) {
            playing = false;
            diceEL.classList.add('hidden');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        }
        switchPlayer();
    } else {
        switchPlayer();
    }
});