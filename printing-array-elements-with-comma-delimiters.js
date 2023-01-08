// Printing Array elements with Comma delimiters


// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"



function printArray(array){
    return array.join(",");
}
console.log(printArray(["h","o","l","a"]));