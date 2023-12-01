'use strict';

// document.querySelector('.message').textContent; // to get the text
// document.querySelector('.message').textContent='Correct Number!';

// document.querySelector('.number').textContent;
// ducument.querySelector('.score').textContent;

// document.querySelector('.guess').value; // to get the value

let secretNumber = Math.trunc(Math.random() * 6) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {  //addEventLisener to add an event to perform some actions
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    // when guess is 0, its a falsy value i.e. when guess is empty its a falsy value .Now !guess for boolean is true , (!guess means nothing in guess). this implement when condition is true i.e. guess is empty (No Input)
    //When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number!';
        displayMessage('No Number!');
    }

    //When Player Wins
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number';
        displayMessage(' Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60B347'
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //when guess is different
    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too Low';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = 'You lost the game';
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }

    //When guess is too high
    // else if (guess > secretNumber) {
    // if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too High';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    // }
    // else {
    //     document.querySelector('.message').textContent = 'You lost the game';
    //     document.querySelector('.score').textContent = 0;
    // }
    // }
    // //When guess is too low
    // else if (guess < secretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = 'Too Low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 6) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222'
    // document.querySelector('.message').textContent = ' Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
})