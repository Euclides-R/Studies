'use strict';

// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value;

let numberOfMachine = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highScore = 0;

const displayMassage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('.number').textContent = '?';
    displayMassage('Start guessing...');
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    numberOfMachine = Math.trunc(Math.random() * 100) + 1;
});

document.querySelector('.check').addEventListener('click', function() {
    const numberOfSelect = document.querySelector('.guess').value;
    if (!numberOfSelect) {
        displayMassage('📛 No number!');
    } else if (numberOfSelect == numberOfMachine) {
        displayMassage('🎉 Correct Number!');
        document.querySelector('.number').textContent = numberOfMachine;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        } else {
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (numberOfSelect !== numberOfMachine) {
        if (score > 1) {
            displayMassage(
                numberOfSelect > numberOfMachine ? '⬆ Too high' : '⬇ Too low'
            );
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMassage('💣 You lost the game');
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.score').textContent = 0;
        }
    }
});