// Lario and Muigi Pipe Problem
// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.

// Task
// Given a list of unique numbers sorted in ascending order,
//  return a new list so that the values increment by 1
//  for each index from the minimum value up to the maximum value (both included).

// Solution

// Create a New Empty Array
// Loop through the given Array
// Add Numbers to the New Array

function pipeFix(numbers) {
  let newArr = [];
  //   for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
  //     newArr.push(i);
  //   }
  //   return newArr;

  let [start, end] = [Math.min(...numbers), Math.max(...numbers)];

  while (start <= end) {
    newArr.push(start);
    start++;
  }
  return newArr;
}
console.log(pipeFix([-1, 4]));
