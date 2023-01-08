// Beginner - Reduce but Grow
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:


// Declare Variable = 1
// Loop Through the Integers( Numbers ) Array
// Add the Multiplying result to the Variable
// return the Result

function grow(x){
    // let result = 1;
    // for(let i = 0; i < x.length; i++){
    //     result *= x[i]; 
    // }
    // return result;
    return x.reduce((acc, currentValue) => acc * currentValue);
}

console.log(grow([1,2,3,4]));