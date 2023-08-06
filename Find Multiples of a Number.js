// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
// Find Multiples of a Number

// In this simple exercise, you will build a program that takes a value, integer ,
//  and returns a list of its multiples up to another value, limit . If limit is a multiple of integer,
//   it should be included as well. There will only ever be positive integers passed into the function,
//  not consisting of 0. The limit will always be higher than the base.

// Solution

// Create The function
// Create empty Array
// Loop Through Limit
// Create Variable To Get Multiply
// Check if the Multiply === limit
// if equal Add it then break the Loop
// if not Add and continue
// Result the final Array

function findMultiples(integer, limit) {
    // Solution 1

    // let finalArr = [];
    // for(let i = 1; i <= limit ; i++){
    //     let multiply = integer * i;
    //     if(multiply === limit){
    //         finalArr.push(multiply);
    //         break;
    //     }else if(multiply > limit){
    //         break;
    //     }else{
    //         finalArr.push(multiply);
    //     }
    // }
    // return finalArr;

    // Solution 2

    let finalArr = [];
    for(let i = integer; i <= limit; i += integer){
        finalArr.push(i);
    }
    return finalArr;
}
console.log(findMultiples(5, 7));
  