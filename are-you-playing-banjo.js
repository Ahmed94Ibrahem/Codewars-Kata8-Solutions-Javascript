// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

/* Solution */

// Check the Coming Name
// if the name Stars with R or r , return PLays Banjo
// if not return doesn't play banjo

function areYouPlayingBanjo(name) {
  //   if (name.charAt(0) === "R" || name.charAt(0) === "r") {
  //     return `${name} PLays Banjo`;
  //   } else {
  //     return `${name} Doesn't Play Banjo`;
  //   }

  //   return name[0] === "R" || name[0] === "r"
  //     ? `${name} plays banjo`
  //     : `${name} does not pLays Banjo`;

  return /^r/i.test(name)
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
console.log(areYouPlayingBanjo("Rami"));
