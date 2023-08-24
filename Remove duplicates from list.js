// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
// Remove duplicates from list


// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Solution

// Create the Function
// Create Empty Array
// Loop through the given array
// Check on the number
// If exits ignore it, if not push it to our array
// Return the finalArray

function distinct(a) {
    // let finalArray = [];
    // for(let i = 0; i < a.length; i++){
    //     if(finalArray.indexOf(a[i]) == -1){
    //         finalArray.push(a[i]);
    //     }
    // }
    // return finalArray;

    return [...new Set(a)];
}

console.log(distinct([1,1,2,2,3,3,4,4,5,5]))