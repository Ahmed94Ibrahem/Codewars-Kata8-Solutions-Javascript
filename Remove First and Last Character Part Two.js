// Remove First and Last Character Part Two
// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences
// except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty,
//  return an empty value (represented as a generic value NULL in the examples below).

// Solution
// Check on the COming string to make sure that it is more than or equal 3 Charater
// Split the String into Array
// Loop through the array To remove the first and last element
// Join the array into String Space sperated

function array(string) {
  let splittedStr = string.split(",");
  //   if (!splittedStr || splittedStr.length < 3) return null;
  //   let newArr = [];
  //   for (let i = 1; i < splittedStr.length - 1; i++) {
  //     newArr.push(splittedStr[i]);
  //   }
  //   return newArr.join(" ");
  if (!splittedStr || splittedStr.length < 3) return null;
  return string.split(",").slice(1, -1).join(" ");
}
console.log(array("ahmed,mona,ehab,mohamed"));
