// Write a function that checks if a given string (case insensitive) is a palindrome.

// Convert the String to Lower Case
// Convert the String into Array
// Reverse the array
// Convert Into String
// Check The Given String To The One i created
function isPalindrome(x) { 'Abba' 
    // your code here
    return x.toLowerCase() == x.toLowerCase().split('').reverse().join(''); 
  }

  console.log(isPalindrome('Hello'));