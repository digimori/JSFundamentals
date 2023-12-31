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

// Challenge #1 - Football Betting App:
// Test Data Object:
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);
//2. The first player in any player array is the goalkeeper and the others are field players.
//For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players.
//So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2');
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console,
// along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored.`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator. 
team1 < team2 && console.log('Team 1 is more likely to win.'); // Evaluates first and continues
team1 > team2 && console.log('Team 2 is more likely to win.'); // This will be if we change the betting odds.
*/

// Looping Arrays using For-Of:

// Starter Object to take from:
const restaurantPractical2 = {
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
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {},
  orderPasta: function (ingre1, ingre2, ingre3) {},
  orderPizza: function (mainIngredient, ...otherIngredients) {},
};
restaurantPractical2.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const menu = [
  ...restaurantPractical2.starterMenu,
  ...restaurantPractical2.mainMenu,
]; // Combined menus

// For loop:
// Loops over all of the items in the menu variable defined above, assigning each element to 'item', like how every iteration is 'i' in a traditional for loop.
// Continue and Break can still be used here.
for (const item of menu) {
  //console.log(item);
}

// Getting the index can be cumbersome, though, you need to use the .entries() method;
for (const [i, el] of menu.entries()) {
  // The above [i, el] is a destructure of the index and element.
  //console.log(`${i + 1}: ${el}`);
}
// Each iteration creates a new array with an index and the string.

// Enhanced object literals:
// The Restaurant object we've been using is an example of an object literal as it has been "literally" written.
// Property names can be computed/calculated with the enhanced literals:
const altTitles = ['alternate1', 'alternate2', 'alternate3'];

// So, if we wanted to add another object into an object:
const description = {
  [altTitles[0]]: {
    country: 'France',
  },
  [altTitles[1]]: {
    country: 'Germany',
  },
  bookDescription: 'Long Description goes in here',
};

// Adding it to this object:
const exampleBookObj1 = {
  title: 'Tester',
  author: 'Tester Author',
  description, // Added from the above object
};
//console.log(exampleBookObj1);

// Functions also don't need to be written as, the function keyword can be removed to make the code a bit more concise:
/* 
order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
  */

// Optional Chaining (?.)
// So, say we wanted to get the opening hours array of our restaurant object:
//console.log(restaurantPractical2.openingHours.mon.open); // This property doesn't exist, so it will present an undefined followed by an error as there's no 'open' attached.

// Example WITHOUT Optional Chaining
// So in theory, if we didn't know that mon exists or not, we can optional chain to check for it:
// If mon exists, then console log the opening hours that theoretically should be attached to it.
if (
  restaurantPractical2.openingHours &&
  restaurantPractical2.openingHours.mon
) {
  //console.log(restaurantPractical2.openingHours.mon.open);
}

// Now WITH Optional Chaining:
//console.log(restaurantPractical2.openingHours?.mon?.open);
// The above is basically saying that Only IF the mon property exists, do we continue on to find/read the open property.
// This will return undefined as mon does not exist, but does not continue on so far as to throw an error, which can cause further run issues.
// You can keep changing to essentially ask an if statement at each point.

// More Real World example:
const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Loop over them to see whether or not the restaurant is open on those days using optional chaining.
for (const day of days) {
  //const open = restaurantPractical2.openingHours[day]?.open; // [day] is the iteration, so we're checking against all of them as it loops.
  // Will return undefined on all days not in the object without throwing an error UNLESS we set a default value with the Nullish Coalescing operator:
  const open = restaurantPractical2.openingHours[day]?.open ?? 'closed';
  //console.log(`${day}: ${open}`);
}

// Optional chaining for calling Methods (checking the method exists before execution);
// Below method does exist, so will read the first part and return the 0 and 1 indexes values of the array
//console.log(restaurantPractical2.order?.(0, 1) ?? 'Method does not exist');
// If we call one that doesn't:
//console.log(restaurantPractical2.orderDrinks?.() ?? 'Method does not exist');

// It also works on Arrays, ie: Checking if an array is empty:
const users = [
  {
    name: 'Paige',
    email: 'test@test.com',
  },
];

//console.log(users[0]?.name ?? 'User array empty');

// to review: Optional Chaining tests if the value on the left does exist before continuing the execution. It makes if statements more concise.

// Looping objects: Object Keys, Values, Entries.
// Looping over property names (also known as Keys, Key-Value pairs):

const properties = Object.keys(restaurantPractical2.openingHours);
console.log(properties);

for (const day of properties) {
  console.log(day);
}

// The above gets the properties of the keys from the Object
// So, if we wanted to use this to check if the restaurant is open or not, for example:
console.log(`We are open on: ${properties.length} days`); // This will return the numbers that match the keys in the properties variable.
// So the outcome will be 3 days, as thu, fri, sat are the three property keys available to us

// We can actually put all of this together into a string as a single operation of sorts:
let openStr = `We are open on ${properties.length} days of the week: `;
for (const day of properties) {
  openStr += `${day},`; // This adds each iteration of the loop onto the end of the string above.
}

console.log(openStr);

// Property Values (The Value side of Key-Value pairs):
const values = Object.values(restaurantPractical2.openingHours); // Getting the values of the openingHours object.
console.log(values);

// The method of looping is exactly the same as Keys in concept.

// To loop over the entire object (so the Key and Value parts concurrently), we need Entries, returning the Key and Value:
// Entire Object
const entries = Object.entries(restaurantPractical2.openingHours);
console.log(entries);

// We can now use this to loop over, whilst destructuring the loop:
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// The properties being passed in are the keys from the object,
//and the values, due to them being an object within an object for the open and close times, we're destructuring them by specifying their property names.
// the key part can have any name, but the values must the specifically match to the object

// Challenge, continuation of the football betting app:

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number: ie: Goal 1: Lewandowski

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2. Use a loop to calculate the average odd and log it to the console (Check back over your calculating averages notes, these are when you did the BMI calc and Tip calc)
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
  average /= odds.length;
  console.log(average);
}

/*3. Print the 3 odds to the console, but in a nice formatted way, like:
Odd of victory Bayern Munich: 1.33
Odd of Draw: 3.25
Odd of Victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, no hardcoding except for "draw".
HINT: Note how the odds and the game objects have the same property names
*/

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory: ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

/*
BONUS Challenge:
1. Create an object called 'scorers' which contains the names of the players who scored as properties and the number of goals as the value.
In this game, it should look like this:
{Gnarby: 1,
Hummels: 1,
Lewandowski: 2}
etc.
*/
// Loop over the array, add the array elements as Object properties, then increase the count on the next loop.

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  console.log(scorers);
}
