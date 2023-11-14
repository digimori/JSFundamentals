'use strict';

// Defined in global scope. Creates its own function/local scope.
function calcAge(birthYear) {
  const age = 2023 - birthYear;
  // console.log(firstName); // This will work, as firstName is global scoped and accessible

  function printAge() {
    // This works as it is using variable lookup to go into the parent scope to find the age and birthYear variables
    const output = `You are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // This is block scope.
      const str = `Congrats, ${firstName}, you're a millenial!`;
      console.log(str);

      function addNums(a, b) {
        return a + b;
      }
    }
    console.log(millenial); // This will work however as var is function scoped, so ignores the block
    //console.log(str); // This will throw a reference error, as str is block scoped to the if statement.
    console.log(add(2, 3)); // This will not run, as again, this function sits inside of a block scope (If statement) and is inaccessible from outside.
    // NOTE: This function call will work outside of strict mode, but this is bad practice
  }
  printAge();
  return age;
}

// Parent scope of the function is global scope, which is why it's accessible.
const firstName = 'Paige';
calcAge(1992);
console.log(age); // This will NOT work, as the age variable is function scoped.
printAge(); // This will also not work as we cannot access this within the function from the outside.
