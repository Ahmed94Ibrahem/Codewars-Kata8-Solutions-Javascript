// Find the smallest integer in the array

// Given an array of integers your solution should find the smallest integer.


function findSmallestInt(args) {
    return Math.min(...args);
}

console.log(findSmallestInt([34, -345, -1, 100]));