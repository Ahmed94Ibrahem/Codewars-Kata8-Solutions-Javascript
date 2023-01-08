// Sum Arrays

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer.
//  If the array does not contain any numbers then you should return 0.


// Return 0 if the Array is Empty
// Loop through the numbers
// Sum the Array

// Sum Numbers
function sum (numbers) {
    "use strict";
    if(numbers.length < 0){
        return 0;
    }
    return numbers.reduce((acc, currentValue) => acc + currentValue, 0);
    // let sum = 0;
    // for(let i = 0; i <numbers.length; i++){
    //     sum += numbers[i];
    // }
};
console.log(sum([2,3,5,-1]));