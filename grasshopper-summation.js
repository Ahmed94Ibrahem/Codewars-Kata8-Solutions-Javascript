// Grasshopper - Summation

// Write a program that finds the summation of every number from 1 to num.
//  The number will always be a positive integer greater than 0.

// Decalre the Result Variable;
// Loop through the Given Number
// Add the Number
// Return the Result

var summation = function (num) {
    // let result = 0;
    // for(let i = 0; i <= num; i++){
    //     result += i;
    // }
    // return result;
    return Array(num).fill(true).reduce((acc, curretValue, index) => acc + index + 1, 0);
  }

  console.log(summation(10));
