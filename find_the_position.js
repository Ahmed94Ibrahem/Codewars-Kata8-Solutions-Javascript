// When provided with a letter, return its position in the alphabet.

// 1- Create a String with the Alphapet
// 2- Loop through this String
// 3- Check if the Loopring CHaracter equal the Provided Letter
// 4- Return the Position



function position(letter){
    const alphpet = 'abcdefghijklmnopqrstuvwxyz';
    // for(let i =0; i<alphpet.length; i++){
    //     if(alphpet[i] === letter){
    //         return `Position of alphabet: ${i + 1}`;
    //     }
    // }
    return `Position of alphabet: ${alphpet.indexOf(letter) + 1}`;
}
console.log(position('c'));