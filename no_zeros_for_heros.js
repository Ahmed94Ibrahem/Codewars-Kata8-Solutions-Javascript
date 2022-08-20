// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.


// 1- Convert the Number into String
// 2- Check if the LastIndex === 0
// 3- Remove the 0

function noBoringZeros(n) {
    // your code
    let stringParam = String(n);
    while(stringParam.endsWith(0)){
        stringParam = stringParam.slice(0, stringParam.length - 1)
    }
    return Number(stringParam);
}

console.log(noBoringZeros(12345000000))