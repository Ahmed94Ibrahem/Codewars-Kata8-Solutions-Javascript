// Area or Perimeter
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

// You are given the length and width of a 4-sided polygon.
//  The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Solution

// 1- Check the type of the polygon

const areaOrPerimeter = function (l, w) {
  // Return your answer
  return l === w ? l * w : (l + w) * 2;
};

console.log(areaOrPerimeter(5, 5));
