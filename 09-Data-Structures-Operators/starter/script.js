'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

// Object Destructuring
const restaurantCont = {
  resName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Similar concept as arrays.
// Except we use the keys and extract them. Object order does not matter, so neither does the destructure unlike Arrays
// For the below example, we want: name, categories, opening hours
const { resName, openingHours, categories } = restaurantCont;
console.log(resName, openingHours, categories);

// We can use this, for example, in an API call to extract data from objects that are returned.

// If we want the variable names to be different to the property names, we still need to reference the object that we're extracting from
const {
  resName: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurantCont;
console.log(restaurantName, hours, tags);

// We can also set default values assigned like in array destructuring:
const { menu = [], starterMenu: starters = [] } = restaurantCont;
// In the above, we've given starterMenu a new name, and given it a default of [] just in case the object doesn't exist
console.log(menu, starters);

// Mutating variables whilst destructuring the objects:
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// We want to achieve a becoming 23 and b becoming 7:
({ a, b } = obj); // Must be in parentheses, otherwise it will throw an unexpected token error (because of the =)
console.log(a, b);

// Nested Object destructuring, say we want to create two variables, one for open and one for close (in the opening hours section of the object)
// openingHours is an object inside of the restaurant object and the days of the week are also objects within opening hours.
const { fri } = openingHours; // {open: 11, close: 23}

const {
  fri: { open: openTime, close: closeTime },
} = openingHours;
console.log(openTime, closeTime); // 11, 23 are now assigned to these variables.

// A practical application for destructuring:

const restaurantPractical = {
  resName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Passing an argument which has the key names destructured as arguments
  // We can also set defaults, ie, if the arguments cannot be destructured: starterIndex = 1, mainIndex = 0, time = '20:00'
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // A function to create pasta using precisely 3 ingredients:
  orderPasta: function (ingre1, ingre2, ingre3) {
    console.log(`Here is your pasta with ${ingre1}, ${ingre2}, ${ingre3}. `);
  },

  //Minimum 1 ingredient, the rest optional:
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Calling the orderDelivery function and passing it an object of options
restaurantPractical.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Spread operator: Expanding arrays and unpacking all of its elements:

// ex, if we want to get an array and unpack it, whilst also adding some new ones at the start:
const arr = [7, 8, 9];

// Normally, we would have to loop over the array and add the value to it on each loop to achieve the following:
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];

// Instead, we use the spread operator:
const newArr = [1, 2, ...arr]; // This will expand the original arr into the new elements
console.log(newArr); // 1, 2, 7, 8, 9

// Fetching/Logging the values of the new array created through the spread operator:
console.log(...newArr); // This will log the individual elements of the array. This is different from just passing newArr as on its own, it also shows the brackets []

// Going back to the restaurant object, if we wanted to add a new menu item:
const newMenu = [...restaurantPractical.mainMenu, 'Gnocci'];
console.log(newMenu);
// This isn't manipulating the array, a new array is created here. This is how it differs from destructuring, as destructuring assigns the elements to new variables, spread does not.

// Spread operator use cases:
// Shallow copies of arrays, merge arrays together:

// Copy array:
const mainMenuCopy = [...restaurantPractical.mainMenu]; // Shallow copy of the mainMenu array in the restaurant object

// Join 2 arrays:
const mainMenuJoined = [
  ...restaurantPractical.starterMenu,
  ...restaurantPractical.mainMenu,
];
console.log(mainMenuJoined);
// In the above, we basically took all of the elements out of both arrays, copied them, and then merged them into one menu array

// Spread works on all iterables IE: arrays, strings, maps, sets and as of ES2018, Objects

// String example, separating out values and adding one to the end::
const str = 'Cee';
const letters = [...str, '', 'S.']; // "C", "e", "e", "S."
console.log(letters); // As before, this will log as an array []
console.log(...str); // Will log C e e S.

// This CANNOT also be used to build a template literal:
//console.log(`${...str}`); // This will error.

// Functions using Spread operator:

/*
const ingredients = [
  prompt('Lets make Pasta! Ingredient 1?'),
  prompt('Lets make Pasta! Ingredient 2?'),
  prompt('Lets make Pasta! Ingredient 3?'),
];
console.log(ingredients);


// Spreads the prompts and passes them as arguments through the orderPasta function.
restaurantPractical.orderPasta(...ingredients); // This also accounts for the fact we may have an array that we're unsure how many elements are in it


// Objects with Spread, make a new shallow copy of restaurant object with more info:
const newRestaurant = {
  foundingYear: 1999,
  ...restaurantPractical,
  founder: 'Lil Gui',
}; // Order does not matter

console.log(newRestaurant);

const newRestaurantCopy = {
  ...restaurantPractical,
};
newRestaurantCopy.name = 'Ristorante Roma';
console.log(newRestaurantCopy.name);
console.log(restaurantPractical.resName);

// Rest operator looks similar to the Spread operator. It's like saying "And the rest of the object", thus doing the opposite of Spread.
// It is to collect multiple elements and compress them into a single array, rather than unpack them into multiple parts.

// This is SPREAD as it is on the right side of the assignment operator, this is combined with a destructure:
const restArray = [1, 2, ...[3, 4]];

// REST w/DESTRUCTURING
// REST due to being on left side of operator (=)
const [firstNum, secondNum, ...others] = [1, 2, 3, 4, 5]; // firstNum = 1, secondNum = 2, others = [3, 4, 5]
console.log(firstNum, secondNum, others);

// Further example using the restaurant objects:
const [pizza, , risotto, ...otherFood] = [
  ...restaurantPractical.mainMenu,
  ...restaurantPractical.starterMenu,
];
console.log(pizza, risotto, otherFood); // Remember, this will collect all of the variables after the last one declared, so will not pick up any that have been left out by destructuring
// REST must always be the last parameter therefore there can only ever be one REST in any one destructuring assignment.

// REST with Objects further:
const { sat, ...weekdays } = restaurantPractical.openingHours;
console.log(weekdays); // This will return Friday and Thursday as Saturday is defined in its own variable.
// Remember: Object order does not matter, which is why it did not immediately stop after Saturday!

// REST w/ FUNCTIONS:
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // Add the current loop to the 'sum' variable:
    sum += numbers[i];
    console.log(`ADDITION TIME: ${sum}`);
  }
};

// Sample data:
add(2, 3); // [2, 3]
add(6, 7, 8, 3);
add(4, 5, 3, 7, 2, 7, 1);

// The data is passed through the function and then packed into an array called 'numbers'

// Another example:
const x = [23, 5, 7];
add(...x); // Calling the function with the above array spread, this will then be collected by the function and passed as an array again like the above example.

// Edge cases - In the restaurant object, we'll be making an orderingPizza() function call and doing the following:
restaurantPractical.orderPizza('Tomato', 'Olives', 'Anchovies'); // Olives and Anchovies are in an array on their own due to REST.

// Short-Circuiting with && and ||:
// || example:
console.log(3 || 'Paige'); // 3 is the result, this means the result of || Doesn't have to be a boolean

// If the first value is a truthy value (ie, not null, 0, NaN, undefined etc) it will be returned.
// The second value, if truthy, will not be evaluated at all. It stops after the first truthy.
console.log('' || 'Paige'); // 'Paige' as an empty string is falsy
console.log(true || 0); // True as it stopped at true. If we swapped them, it would still be true as 0 is falsy
console.log(undefined || null); // undefined, neither are truthy

// restaurantPractical.numGuests // We currently don't know if numGuests exists.
const guests1 = restaurantPractical.numGuests
  ? restaurantPractical.numGuests
  : 10;
console.log(guests1); // 10 will be the result as numGuests doesn't exist. So it takes on the first truthy value.

// If we had previously set the numGuests value to say 23, then the result of the above ternary would be 23, as it would be the first truthy in the chain.
// We can now short-circuit the above ternary into the following:
const guests2 = restaurantPractical.numGuests || 10; // So, basically saying "numGuests exists, or if it doesn't, 10 is the result"
console.log(guests2);

// if numGuests is 0, it will still default to 10, despite being technically defined, as 0 is falsy

console.log('------- && examples start here -------');
// && Example, this works in the opposite way to the OR operator. It instead returns the first Falsy :
console.log(0 && 'Paige'); // Result would be 0, as it returns the first Falsy value and stops.
console.log(7 && 'Paige'); // 'Paige' is the result here as it evaluates the first truthy, doesn't find a falsy, and so keeps evaluating until the last value and returns it or it hits a falsy.
console.log('Hello' && 23 && null && 'Paige'); // null is the result, as it's a falsy and stops here and returns this value

// Practical Example, so first we're checking if the function value exists, and if it does, then it executes the code block:
if (restaurantPractical.orderPizza) {
  restaurantPractical.orderPizza('Tomato', 'Spinach');
}

// In a simpler way, ie: with Short-circuiting:
restaurantPractical.orderPizza &&
  restaurantPractical.orderPizza('Tomato', 'Spinach');

// Evaluates the left side, if true, executes the right side. It's a shorter version of the above if statement.
// This is useful for short, concise evaluation. Do not turn all of your If/Else into these as it will make the code harder to read!

// Nullish Coalescing operator (??) - Introduced in ES2020, might not be in older code bases:
restaurantCont.numGuests = 0; // Falsy value
const guestsCorrect = restaurantPractical.numGuests ?? 10;
console.log(guestsCorrect); // Will return 0 and thus the correct value instead of undefined as we're using a nullish operator.

// Evaluates it as if 0 or empty strings '' are truthy instead.
// If, however the numGuests was undefined or null, the evaluation would continue and return 10 as this only works to make 0 and empty strings into truthy.

// Logical Assignment Operators:

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// Say we got the above information from an API and want to add a property to them, ie, we want all of the objects to have the numGuests property:
/*
rest1.numGuests = rest1.numGuests || 10; // Returns 20, as rest1 already has the property numGuests with a truthy value
rest2.numGuests = rest2.numGuests || 10; // Returns 10 as rest2 does not have the property and so creates it and assigns it 10.

// Writing the same as above, but more concise:
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;


// The issue we run into here is that if we set any of the numGuests to 0, it's going to return 10, which will be inaccurate for what we want.
// This is explained above in the original Short-circuiting notes.
// This can be resolved via Nullish assignment:
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// && operations, for example, to anonymise a value in the object:
rest2.owner = rest2.owner && '<Anonymous>';
// This works because of short circuit. It evaluated the first, found it truthy, so instead returned as '<Anonymous>';
// More concise again:
rest2.owner &&= '<Anonymous>';
*/
