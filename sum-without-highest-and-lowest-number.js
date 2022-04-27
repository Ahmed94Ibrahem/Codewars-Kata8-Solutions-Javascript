// Check if Empty Value return 0
// Find the heighest Number
// Find the Lowest Number
// Filter the Array
// Sum all numbers in the array

function sumWithoutTheHeighestAndLowestNumber(array) {
  if (array == null) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current, 0);

  //   return array
  //     .filter((x) => x !== Math.max(...array) && x !== Math.min(...array))
  //     .reduce((acc, current) => acc + current, 0);

  //   let maxValue = Math.max(...array);
  //   let minValue = Math.min(...array);
  //   let filteredArray = array.filter((x) => x !== maxValue && x !== minValue);
  //   let newArray = filteredArray.reduce((acc, current) => acc + current, 0);
  //   return newArray;
}
console.log(
  sumWithoutTheHeighestAndLowestNumber([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9])
);
