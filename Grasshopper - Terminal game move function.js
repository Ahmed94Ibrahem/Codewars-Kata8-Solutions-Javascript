// Grasshopper - Terminal game move function


// Terminal game move function
// In this game, the hero moves from left to right.
//  The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.



function move(position, roll) {
    return (roll * 2) + position;
}