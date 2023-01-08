// Complete the solution so that it reverses the string passed into it.


// Declare empty String
// Loop through the string Given as Parameter
// Add The Last Characters to the Empty String
// Return the String

function solution(str) {
    //   let result = '';
    //   for(let i = str.length - 1; i >= 0 ; i--){
    //     result += str[i];
    //   } 
    //   return result;
    return str.split("").reverse().join("");
}

console.log(solution('Hi From '));