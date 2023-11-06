'use strict';

// A function is reusable code
// Where a variable holds one value, functions can run multiple lines of code within it as a block

// apples, oranges will be defined once the function is called with the arguments passed through them
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

// Invoking, calling, running the function
fruitProcessor(3, 7); // {apples} will now be 3, and {oranges} will now be 7

// If we want to store the result of a function call into a variable, we can write the following:
const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);
const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);

// So the function runs, taking the arguments and processing them, giving us a return statement of the variable 'juice'

function calcAge1 (birthYear) {
    const age = 2023 - birthYear;
    return age;
}

// We can also just return it as a single statement: return 2023 - birthYear;

console.log(calcAge1(1992));

// Function expression - Anonymous function: (The above is declaration)
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
} 

const age2 = calcAge2(1992);
console.log(age2);

// Arrow functions, a function exression and is shorter than the above:
const arrowBirthYear = birthYear => 2023 - birthYear;
// The return is implicit, so the keyword isn't needed here.

const loggedArrow = arrowBirthYear(1992);
console.log(loggedArrow)

// More complex arrow functions with one parameter, but multiple lines of code:
const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1992));

// Arrow functions with multiple parameters:
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} will retire in ${retirement} years.`
}

console.log(yearsUntilRetirement2(1992, 'Paige'));