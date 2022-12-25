// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Create an Array includes the 5 Letters (a, e, i, o, u)
// Loop Through the String given
// Check if the string includes any of the 5 Letters
// Return the result


function shortcut (string) {
    // const vowels = ['a', 'e', 'i', 'o', 'u'];
    // let result = [];
    // for(let i =0; i < string.length ; i++){
    //     if(!vowels.includes(string[i])){
    //         result.push(string[i]);
    //     }
    // }
    // return result.join('');

    return string.replace(/[aeiou]/g, "");
}

console.log(shortcut('hello'));