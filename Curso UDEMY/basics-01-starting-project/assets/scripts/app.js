const defaultResult = 0
let currentResult = 0;

function getUserNumberInput() {
    return parseInt(userInput.value)
}
function calculateText (beforeCalc, operator, calcNum) {
    `${beforeCalc} ${operator} ${calcNum}`
}



//PROBLEM: Function calculateText is giving me a number instead of a string 
// chapter 39 of Udemy


function add() {
    const enteredNumber = getUserNumberInput();
    const calcDescription = calculateText (currentResult, "+", enteredNumber);
    currentResult = currentResult + enteredNumber; 
    outputResult (currentResult, calcDescription)
    }
    cd
    addBtn.addEventListener("click", add);

function multiply() {
    const enteredNumber = getUserNumberInput();
    const calcDescription = calculateText (currentResult, "*", enteredNumber);
    currentResult = currentResult * enteredNumber; 
    outputResult (currentResult, calcDescription)
    }
    
    multiplyBtn.addEventListener("click", multiply);
