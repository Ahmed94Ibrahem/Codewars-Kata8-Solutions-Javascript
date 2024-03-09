// Well of Ideas - Easy Version
// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas,
//  as is often the case, return 'Fail!'.

// Solution

// Filter the Array to get the new Filtered One
// Check the length of the new array
// Return The proper message

function well(x) {
  const filteredArrayLength = x.filter((idea) => idea === "good").length;
  //   if (filteredArrayLength === 0) {
  //     return "Fail!";
  //   } else if (filteredArrayLength <= 2) {
  //     return "Publish!";
  //   } else {
  //     return "I smell a series!";
  //   }
  return filteredArrayLength === 0
    ? "Fail!"
    : filteredArrayLength <= 2
    ? "Publish!"
    : "I smell a series!";
}

console.log(well(["bad", "bad", "bad", "bad", "bad"]));
