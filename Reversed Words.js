// Reversed Words

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.


function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}
console.log(reverseWords('The greatest victory is that which requires no battle'));