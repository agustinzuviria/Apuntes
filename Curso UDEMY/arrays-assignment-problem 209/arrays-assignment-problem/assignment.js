const arrayOfNumbers = [1,3,5,7,9,11,13]
console.log(arrayOfNumbers);

const arrayOfBigNum = arrayOfNumbers.filter(number => number > 5);
console.log(arrayOfBigNum);

let plusTax = arrayOfBigNum.map(x => x * 1.38);
console.log(plusTax);

const totalValue = plusTax.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(totalValue);
console.log(...arrayOfNumbers);

function findMax(...a) {
    a.concat
    ; 
    a.sort((small, big) => {
    if (small<big) {
        return 1;
    } else if (small===big) {
        return 0;
    } else {
        return -1;
    }
    });
console.log(a[0]);
return a[0];
};

    findMax(...arrayOfNumbers);
 
    //up to here, I solved tasks 1 & 2 of the assignment