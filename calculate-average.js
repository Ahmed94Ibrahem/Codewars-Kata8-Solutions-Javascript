// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

/* Solution */

// Create Variable = 0
// Loop through the array
// Divide the Varible to the Array length

function find_average(array) {
  //   let sum = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     sum += array[i];
  //   }
  //   let finalAnswer = sum / array.length;
  //   return finalAnswer;

  return array.reduce((acc, current) => acc + current, 0) / array.length;
}

console.log(find_average([2, 3, 4, 5]));
