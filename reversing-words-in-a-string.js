// You need to write a function that reverses the words in a given string.
//  A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

/* Solution */

// Turn the String into Array
// Reverse the Array
// Turn the Array into String

function reverse(string) {
  return string.split(" ").reverse().join(" ");
}
console.log(reverse("hello World"));
