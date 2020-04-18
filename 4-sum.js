/*
Sum
If we sum all even numbers between 50 and 100 what is the result?
Build a function, that calculates the sum of all even numbers between a start number and end number
*/


function sum(first, last){
    var sumeven = 0;

    for (let i = first; i <= last; i++) {
        if (i%2 === 0) {
            sumeven = sumeven + i;
        }
    }

    return sumeven;
}

var sum50to100 = sum(50, 100);

console.log(sum50to100);