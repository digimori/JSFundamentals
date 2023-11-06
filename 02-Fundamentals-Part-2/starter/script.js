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