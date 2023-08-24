// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
// Sum of Multiples


// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

// Solution

// Return To Video 87

function sumMul(n, m){
    let finalSum = 0;
    for(let i = n; i < m; i += n){
        finalSum += i;
    }
    return finalSum;
}

console.log(sumMul(4, 123));
