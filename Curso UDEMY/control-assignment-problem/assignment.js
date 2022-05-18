const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const otherRandomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if ((randomNumber > 0.7 && otherRandomNumber > 0.7) || randomNumber < 0.2 || otherRandomNumber < 0.2)  {
    alert(`condition met`)
}

console.log(randomNumber + " and " + otherRandomNumber)


let primeNumbers = [2, 3, 5, 7, 11, 13]

for (let pNum = 0; pNum < primeNumbers.length; pNum++) {
    console.log (primeNumbers[pNum])
}

for (let pNum = primeNumbers.length-1; pNum >=0; pNum--) {
    console.log (primeNumbers[pNum])
}

let i=0
while (i < primeNumbers.length) {
    console.log (primeNumbers[i]);
    i++
}