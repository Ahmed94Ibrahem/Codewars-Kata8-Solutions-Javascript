// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Check the Operation then Act

function basicOp(operation, value1, value2) {
  //   if (operation == "+") return value1 + value2;
  //   if (operation == "-") return value1 - value2;
  //   if (operation == "*") return value1 * value2;
  //   if (operation == "/") return value1 / value2;

  return eval(value1 + operation + value2);
}

console.log(basicOp("-", 5, 6));
