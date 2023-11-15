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


// This 'this' Keyword in practice.

console.log(this); // This will point to the "global object", which here, is the browser window

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); // Undefined, as it's not pointing to anything in this object and cannot go up to global scope
};

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this); // This will go to global and point to the browser window. Because Arrow functions don't have their own this ownership.
};

calcAge(1992);
calcAgeArrow(1985);

const profile = {
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year); // this will reference the object and get the value of the year key
  },
};
profile.calcAge(this); // this will point to the object, as the object has its own this keyword that can be used

const james = {
  year: 2017,
};

james.calcAge = profile.calcAge; // This is copying the function from profile object over to the james object. This is "Method borrowing".
james.calcAge(this); // Result will be 6, as it's pointing to the borrowed method


const profile = {
  firstName: 'Paige',
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
  greet: () => console.log(`Hey, ${this.firstName}`),
  // This will be "Hey, undefined" as arrow functions do not get their own 'this' keyword, the parent scope is not the object, it is global
};
profile.greet();*/

const profile = {
  firstName: 'Paige',
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    const self = this;
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
      //console.log(this.year >= 1981 && this.year <= 1996);
      // year property cannot be read (undefined), it acts like it's pointing to global and therefore cannot access the year key
      // This can be circumvented by defining this outside of the isMillenial function, but still within calcAge as: const self = this, and then point to self.
      // It would then be written as self,year >= 1981 && self.year <= 1996 instead.
    };
    isMillenial();
  },
  greet: () => console.log(`Hey, ${this.firstName}`),
  // This will be "Hey, undefined" as arrow functions do not get their own 'this' keyword, the parent scope is not the object, it is global
};
profile.greet();
profile.calcAge();

// arguments keyword - only available in regular functions

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

// This is useful for if we have more than the 2 arguments passed through the function, ie:
addExpr(2, 5, 8, 12);

// Primitives vs Objects (Primitives vs Reference types):
/*let age = 30;
let oldAge = age; // preserving the previous value in a variable, as it gets re-assigned below.
age = 31;

// Object:
const me = {
  name: 'Paige',
  age: 30,
};

const friend = me;
friend.age = 27; // This will change the age on both me and friend to 27.

*/

// Primitives cont.

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davies'; // mutated and will take on the value of Davies. oldLastName will still save 'Williams' due to the stack.

// Object as a reference value:
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica; // Copying the reference that is pointing to the object
marriedJessica.lastName = 'Davies'; // This will mutate the original object also
// This is because marriedJessica is not a new object in itself, it is just a reference to the original jessica object.
// They both point to the same memory address in the heap.

// marriedJessica = {}; // This will not work as it is const and therefore cannot be assigned to a new memory address. If it was let, we could re-assign.

// If we wanted to copy the object so that it IS mutable:
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['alice', 'bob'], // The values cannot be wholly re-assigned via Object.assign
};

// object.assign, merges two objects and returns a new one:
const jessicaCopy = Object.assign({}, jessica2); // Created a new object where everything from jessica2 is copied.
jessicaCopy.lastName = 'Davies'; // This will now change the lastName value as we are no longer referencing, but actually re-assigning the value. jessica2 still exists in its original form.

// This will add the names to BOTH the original and the copy due to the array being an object within an object.
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

// Object.assign only works on the top-level, so if there is an object within an object, it will not work (It only shallow copies)

// Array Destructuring:
// Example is simulating a food delivery service

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruscetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring is a way to unpack arrays and complex data structures into variables.

// Basic retrieval of elements in an array
const numberArr = [2, 3, 4];
const a = numberArr[0];
const b = numberArr[1];
const c = numberArr[2];

// With destructuring, we can retrieve these at the same time instead of separating them out:
const [x, y, z] = numberArr; // This is the same as writing the above.
// x is now assigned to numberArr[0], y assigned to numberArr[1] etc
console.log(x, y, z);

// Destructuring the above restaurant object:
let [firstMain, second] = restaurant.categories; // This will take the first two elements out of the categories array and assign them to first, second.
console.log(firstMain, second);

// So, for skipping elements that we don't want, we leave gaps. Ie if we only wanted the Foccacia and Garlic Bread from the starterMenu:
const [firstMenu, , secondMenu] = restaurant.starterMenu;

// Using this, it means we don't have to use the elements we don't need.

// Say we wanted to change the categories around, so Italian and Vegetarian to switch places in the index.
// In basic non-destructuring, we would write it as:
const temp = firstMain; // Temporary variable
firstMain = second;
second = temp; // Due to temp being where we stored the first value or firstMain.

// The same written as a destructure, this eliminates the need for a temporary variable in the middle.
[firstMain, second] = [second, firstMain];

// Ordering from the function above, passing in the index positions to retrieve the information
console.log(restaurant.order(2, 0));

// Receiving 2 return values from a function
const [starter, main] = restaurant.order(2, 0); // This will destructure the values into starter and main variables

// Now, nested destructuring
const nested = [2, 4, [5, 6]];

const [firstNest, , secondNest] = nested; // Returns 2 and then the array as we left a gap to omit 4

// Destructuring within destructing (getting specific nested values)
const [i, , [j, k]] = nested; // This returns 2, 5, 6 as separate variables.

// Default values can be set if we don't know the length of the array.
// So, say we have an array like [8, 9], but we don't know the actual length of the array.
const [p, q, r] = [8, 9]; // The r variable will return undefined as there is nothing on the second index.

// Instead, we can assign some defaults to take care of that:
const [xx = 1, yy = 1, zz = 1] = [8, 9]; // Now the value at index 2 (zz), will be 1, giving us a default value, whilst xx and yy are assigned 8 and 9 respectively.
console.log(xx, yy, zz);
