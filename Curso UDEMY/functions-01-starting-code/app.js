const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"
const DEFAULT_USER_CHOICE = ROCK
const RESULT_DRAW = "DRAW"
const RESULT_PLAYER_WINS = "PLAYER WINS"
const RESULT_COMPUTER_WINS = "COMPUTER WINS"

let gameIsRunning = false

const getPlayerChoice = function() {
    const selection = prompt( `${ROCK}, ${PAPER} or ${SCISSORS}?`,"").toUpperCase();
    if (
selection !== ROCK &&
selection !== PAPER &&
selection !== SCISSORS
    ) {
       alert (`Invalidad choice! We chose ${DEFAULT_USER_CHOICE} for you`);
    return DEFAULT_USER_CHOICE;
    }
return selection;
}

const getComputerChoice = function() {
let randomNum = Math.random();
if (randomNum < 0.33) {
    return ROCK;
} else if (randomNum > 0.33) {
   return PAPER; 
} else {
    return SCISSORS
}
}

const getWinner = function(cChoise, pChoise) {
    if (cChoise === pChoise) {
        return RESULT_DRAW
    } else if (
        cChoise === ROCK && pChoise === SCISSORS || 
        cChoise === SCISSORS && pChoise === PAPER || 
        cChoise === PAPER && pChoise === ROCK  ) {
        return RESULT_COMPUTER_WINS
    } else {
        return RESULT_PLAYER_WINS
    }
    }

startGameBtn.addEventListener ("click", function() {
if(gameIsRunning){
    return;
}
    gameIsRunning = true
    console.log ("The game is starting!");
    const playerChoise = getPlayerChoice();
    const computerChoise = getComputerChoice();
    const winner = getWinner(computerChoise, playerChoise);
    let message = `You chose ${playerChoise}, computer chose ${computerChoise}, so you `;
    if (winner === RESULT_DRAW) {
       message = message + `draw`;
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message +  `win`
     } else {
        message = message + `loose`
     }
    alert(message);
    gameIsRunning = false;
});


const sumUp = (...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    console.log (sum)
}

sumUp (10, 10, 11, 1000)
