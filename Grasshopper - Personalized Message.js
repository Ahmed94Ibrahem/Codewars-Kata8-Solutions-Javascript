// Grasshopper - Personalized Message

// Create a function that gives a personalized greeting.
//  This function takes two parameters: name and owner.

// Solution

function greet(name, owner) {
  return name === owner ? `Hello boss` : `Hello guest`;
}

console.log(greet("ahmed", "yasser"));
