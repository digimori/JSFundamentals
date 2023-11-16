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
*/
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
};

// Calling the orderDelivery function and passing it an object of options
restaurantPractical.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
