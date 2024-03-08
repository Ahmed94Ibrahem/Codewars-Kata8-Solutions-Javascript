// Will there be enough space?
// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

// The Story:
// Bob is working as a bus driver. However,
//  he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Solution

// 1- Get the difference between Cap and On
// 2- Compare between the difference and waiting passengers

function enough(cap, on, wait) {
  //   const diff = cap - on;
  //   if (diff >= wait) {
  //     return 0;
  //   } else {
  //     return Math.abs(diff - wait);
  //   }

  return cap - on >= wait ? 0 : Math.abs(cap - on - wait);
}

console.log(enough(20, 10, 14));
