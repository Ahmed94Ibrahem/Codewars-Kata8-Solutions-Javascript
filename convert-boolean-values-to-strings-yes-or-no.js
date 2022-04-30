// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

/* Solution */

// Check if the Argument , if True Return 'yes' , if not return 'no'
function boolToWord(bool) {
  //   if (bool == true) {
  //     return "Yes";
  //   } else {
  //     return "No";
  //   }

  return bool ? "Yes" : "No";
}
console.log(boolToWord(true));
