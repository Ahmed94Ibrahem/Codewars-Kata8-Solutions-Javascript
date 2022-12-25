// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.



function removeExclamationMarks(s) {
    // return s.replace(/[!]/g, "");
    return s.split("").filter((e) => e !== '!').join('');
}
console.log(removeExclamationMarks('H!ell!o !! Wo!rld! F!ro!m F!il!e !!'));