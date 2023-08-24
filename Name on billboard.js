// https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
// Name on billboard

// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30,
//  but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

// Solution

// Declare Empty Variable = 0
// Loop through the given name ( string )
// Each loop i will add The price to the empty variable
// Return result

function billboard(name, price = 30) {
  let finalCost = 0;
  let result = name.split("").map((char) => (finalCost += price));
  return result[name.length - 1];
  //   let result = 0;
  //   for (let i = 0; i < name.length; i++) {
  //     result += price;
  //   }
  //   return result;
}
console.log(billboard("ahmed", 50));
