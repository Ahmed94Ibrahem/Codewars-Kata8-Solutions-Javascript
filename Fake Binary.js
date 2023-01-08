// Fake Binary


// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
//  Return the resulting string.

// Note: input will never be an empty string


// Convert the String into Array
// Loop through the array
// Check each element

function fakeBin(x){
    // return x.split('').map((n) => n < '5' ? '0' : '1').join('');

    // Solution With Regex
    return x.replace(/[1-4]/g, '0').replace(/[5-9]/g, '1');
}
console.log(fakeBin('3514297'));