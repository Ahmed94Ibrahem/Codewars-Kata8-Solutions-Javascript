// Expressions Matter

// Given three integers a ,b ,c, 
// return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] ,
//  and return the Maximum Obtained (Read the notes for more detail about it)



function expressionMatter(a, b, c) {
    return Math.max(
        a + b + c,
        a * b * c,
        a * ( b + c ),
        c * ( a + b)
    );
}
console.log(expressionMatter(3, 5, 7))