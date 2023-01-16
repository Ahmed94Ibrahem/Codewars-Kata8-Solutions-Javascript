// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// Loop Through the Array
// Convert every String to a Number
// Sum All The Values

function sumMix(x){
    // let newNumbersArray = [];
    // for(let i = 0; i< x.length; i++){
    //     if(typeof x[i] === 'string'){
    //         newNumbersArray.push(Number(x[i]));
    //     }else{
    //         newNumbersArray.push(x[i]);
    //     }
    // }
    // return newNumbersArray.reduce((acc, currentValue) => acc+currentValue,0);
  return x.map((n) => Number(n)).reduce((acc, currentValue) => acc + currentValue, 0);
}

console.log(sumMix([3,'9',5,'10','13',5]));

