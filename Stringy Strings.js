// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript
// Stringy Strings

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.


// Solution

// Create Function Stringy and pass ( Size )
// Create Empty String
// Loop Through the Given Size
// Check on the number
// if number is odd return 1 else return 0
// Return the final String

function stringfy(size){
    // let strResult = '';
    // for(let i = 1; i <= size; i++){
    //     if(i % 2 === 0){
    //         strResult += '0';
    //     }else{
    //         strResult += '1';
    //     }
    //     strResult += i % 2 === 0 ? '0' : '1';
    // }
    // return strResult;
    let strArr = Array.from({length: size}, (_, index) => (index + 1) % 2 === 0 ? '0': '1');
    return strArr.join('');
}

console.log(stringfy(12));