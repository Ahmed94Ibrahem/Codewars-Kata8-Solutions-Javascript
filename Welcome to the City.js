// https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/javascript
// Welcome to the City

// Create a method that takes as input a name, city, and state to welcome a person.
// and the length of the name array in test cases will vary.
// Note that name will be an array consisting of one or more values that should be joined together with one space between each,

function sayHello(name, city, state) {
  //   return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
  let fullName = "";
  for (let i = 0; i < name.length; i++) {
    fullName += name[i] + " ";
  }
  fullName = fullName.substring(0, fullName.length - 1);
  return "Hello, " + fullName + "! Welcome to " + city + ", " + state + "!";
}

console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"));
