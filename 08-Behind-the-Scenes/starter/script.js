'use strict';
/*
// Defined in global scope. Creates its own function/local scope.
function calcAge(birthYear) {
  const age = 2023 - birthYear;
  // This will work, as firstName is global scoped and accessible, this will still be Paige, despite having this same variable name in the printAge function, due to variable look up.
  // console.log(firstName);

  function printAge() {
    // This works as it is using variable lookup to go into the parent scope to find the age and birthYear variables
    let output = `You are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'James'; // firstName in the below string will be 'James' as it looks up the scope once, finds it, and stops.
      // This is block scope.
      const str = `Congrats, ${firstName}, you're a millenial!`;
      console.log(str);

      function addNums(a, b) {
        return a + b;
      }
      output = 'New Output'; // This will change the output, as we're going up into the parent scope to access and mutate it.
    }
    console.log(millenial); // This will work however as var is function scoped, so ignores the block
    //console.log(str); // This will throw a reference error, as str is block scoped to the if statement.
    // console.log(add(2, 3)); // This will not run, as again, this function sits inside of a block scope (If statement) and is inaccessible from outside.
    // NOTE: This function call will work outside of strict mode, but this is bad practice
    console.log(output); // This will run with the newly assigned "new output"
  }
  printAge();
  return age;
}

// Parent scope of the function is global scope, which is why it's accessible.
const firstName = 'Paige';
calcAge(1992);
console.log(age); // This will NOT work, as the age variable is function scoped.
printAge(); // This will also not work as we cannot access this within the function from the outside.

// Hoisting and TDZ Examples:
console.log(me); // Undefined
console.log(job); // Uncaught Reference Error: Cannot access 'job' Before initialization
console.log(year); // Code does not reach here due to the ref error, but if it could, would produce the same ref error as job
var me = 'Paige';
let job = 'Teacher';
const year = 1992;
*/
// Functions:
console.log(addDeclaration(2, 3)); // This will run, because you can call a function prior to declaration
console.log(addExpression(2, 3)); // Cannot access prior to defining as it's a const variable and in the temporal dead zone
console.log(addArrows(2, 3)); // Cannot access, again, due to being const

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

var addArrows = (a, b) => a + b; // Implicit return

// If we changed the consts to var, the error will be different, as an Uncaught TypeError. This is because of hoisting abd it will be like trying to call undefined.


