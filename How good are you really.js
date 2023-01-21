// How good are you really?


// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!



function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((acc, currentValue) => acc + currentValue, 0) / classPoints.length ? true : false;
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
  

