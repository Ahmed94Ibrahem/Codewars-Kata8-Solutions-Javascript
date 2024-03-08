// Parse nice int from char problem
// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript

// You ask a small girl,"How old are you?" She always says,
//  "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string.
// For example, the test input may be "1 year old"
// or "5 years old".
// The first character in the string is always a number.

// Solution

// Get the first character
// Convert it to Number ( integer )

function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)

  // return Number(inputString.slice(0, 1));

  // return parseInt(inputString.split(" ")[0]);

  return +inputString.match(/\d/)[0];
}

console.log(getAge("9 Years Old"));
