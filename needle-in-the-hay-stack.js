// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// Loop Through the Array
// Check if the element === needle
// Return The Message

function findNeedle(array) {
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] === "needle") {
  //       return "found the needle at position " + i;
  //     }
  //   }

  return "found the needle at position " + array.indexOf("needle");
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
