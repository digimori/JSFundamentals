'use strict';
/*
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

// Breaking down the functions further, Functions within functions:

// So this will be dividing the fruits "sent" to the processor into pieces
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples); // 8
    const orangePieces = cutFruitPieces(oranges); // 12
 
    const juice = `Making a juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(2, 3));

/* So, what's happening here is that we're passing the apples and oranges values through the fruitProcessor function, 
which is then calling the cutFruitPieces function, passing each parameter individually through as "fruit", then executing the return with this fruit parameter 

const calcAge = function(birthYear) {
    return 2023 - birthYear;
}

const yearsUntilRetirement2 = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}

console.log(yearsUntilRetirement2(1940, 'Paige'));

// return statement immediately exits the function, so anything placed after will not run.

// Function exercise - A team only wins if it has at least double the average score of the other team. Otherwise, no team wins:

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3 
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log("No team wins")
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Arrays - Lists containing values - Literal Syntax
const friends = ['Michael', 'Steven', ' Peter'];
console.log(friends);

// Creating a new array with parameters from the Array object:
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

// Extracting array values, we use square brackets and index numbers:
console.log(friends[0]);

// Getting number of elements in array using .length property:
console.log(friends.length); 

// Getting the index of certain elements in the array, such as the last one:
console.log(friends[friends.length - 1])

// .length is not zero-based, so we need to subtract 1 to get the final index, otherwise it will try finding an index of 3, which does not exist in this particular array.

// Replacing/ Mutating the array:
friends[2] = 'Jason';
// This will replace "Peter" in the array with "Jason" by getting the 3rd index in the array and re-assigning it.
// We can mutate parts of the array one piece at a time, but we cannot reassign the entire array at once.
// ie: friends = ['Bob', 'Alice'] will not work.

// Arrays can also take on variables and even more arrays, such as:
const nameAgain = 'Paige';
const paige = [nameAgain, 'Bendall', 2023 - 1992, 'Web Dev', friends];

// Here we've passed the nameAgain variable, used a string, made a calculation and also inserted the friends array.

// Exercise:
const calculateAge = function (birthYear1) {
    return 2023 - birthYear1
}

const years2 = [1990, 1991, 2002, 2010, 2018];

console.log(calculateAge(years2)); // This will produce NaN as we're trying to subtract a whole array object from a number, so we need to extract the specific number:
const age3 = calculateAge(years2[2]);
console.log(age3)
const age4 = calculateAge(years2[years2.length - 1]);
console.log(age4);

// We can store these results in a new array:
const ageArray = [calculateAge(years2[0]), calculateAge(years2[years2.length - 1])]
console.log(ageArray);

// Array operations (Methods):
// push() Method: Adding elements onto the end of arrays
const friends2 = ['Jemma', 'Lyney', 'Lynette'];
const newLength = friends2.push('Arleccino');
console.log(newLength);

// unshift() method: Adding elements to the front of the array:
const unshifting = friends2.unshift('Lorenzo');
console.log(friends2)

// pop() method: Removing elements from the end of an array
const poppingOff = friends2.pop() // returns the popped value, stored in a variable
console.log(friends2);

// shift() method: Removing element from front of the array 
const shiftingoff = friends2.shift();
console.log(shiftingoff);

// Finding index of a specified value: Returns -1 if the value does not exist
console.log(friends2.indexOf('Lyney'));

// includes(): returns true if the value exists, false if it does not using strict equality:
console.log(friends2.includes('Lynette'));
console.log(friends2.includes('Bob'));

if (friends2.includes('Lyney')) {
    console.log("You have a friend called Lyney")
}

// Code will run as Lyney exists in the array and therefore is true.

// Calculating tips exercise:
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totals);

// Objects - packages of data:
// Example, written in object literal syntax with key-value pairs:
const myProfile = {
    firstName: 'Paige',
    lastName: 'Bendall',
    age: 2023 - 1992,
    job: 'Web developer',
    hobbies: ['Knitting', 'Painting', ' Video Games'],
}

// Data retrieval from an object:
// Dot Notation:
console.log(myProfile.job); // returns 'Web Developer'
// Bracket notation:
console.log(myProfile['lastName']); 

const nameKeys = 'Name'; // This is a repeating property from the object. ie: firstName and lastName, they both contain 'Name'
console.log(myProfile['first' + nameKeys]);
console.log(myProfile['last' + nameKeys]);

// This is bracket notation only. This can be used to concatenate file names and such.
// Dot notation is the more common method

// Using prompts to take in user input:
// const interestedIn = prompt("What do you want to extract? firstName, lastName, age, job, hobbies?")
// console.log(myProfile[interestedIn]);

// If the user inputs 'firstName' then this will return 'Paige'

// Adding new properties to objects:
// Dot notation:
myProfile.location = 'Wales';
myProfile['faveDrink'] = 'Tea';
console.log(myProfile);

// Challenge: Paige has 3 hobbies, and her favourite is Painting
const challenge1 = console.log(`${myProfile.firstName} has ${myProfile.hobbies.length} hobbies, and her favourite is ${myProfile.hobbies[1]}`);

// Object Methods:
// Functions can be used as key-value pairs also:

const anotherProfile = {
    firstName: 'Cee',
    lastName: 'Williams',
    birthYear: 1992,
    job: 'Web Developer',
    hobbies: ['Knitting', 'Painting', 'Cooking'],
    hasDegree: true,
    //calculateAge: function(birthYear) {
    //    return 2023 - birthYear;
    //}
    // Accessing the object properties without mutating it by using 'this':
    // calculateAge: function() {
        // console.log(this); // this refers to the object being called
       // return 2023 - this.birthYear;
    //}

    // Another example of the function using this to add a new property:
    calculateAge: function() {
        this.age = 2023 - this.birthYear
        return this.age;
    },
    // Object challenge: 
// "Cee is a 31 year old Web developer and has a degree"
    getSummary: function() {
        console.log(`${this.firstName} is a ${this.calculateAge()} year old ${this.job} and has ${this.hasDegree ? 'a' : 'no'} degree.`)
    }
}

console.log(anotherProfile.getSummary());

// Accessing the function within the object using dot and bracket notation is the same principle as above, mutating the value
// console.log(anotherProfile.calculateAge(1985));
// console.log(anotherProfile['calculateAge'](1996));
//console.log(anotherProfile.calculateAge());

// This now has the calculation built into the object and so can be used to make multiple profiles without having to individually write everything again.
// The function must be an expression, defined as a value, with the function's name written as the key

// Second Challenge: Creating a BMI function within an object to calculate and return each persons BMI:
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
   
  const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
   
  mark.calcBMI();
  john.calcBMI();
   
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
  }

  // For Loop - Iteration
// Initial value, Stop condition - Once the rep count hits 10, Iteration, repeating once each loop
// For loop will keep running whilst the stop condition is True.
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Rep those weights! Counter: ${rep}`);
}

// Looping arrays, breaking and continuing:
const looperArray = ['CeeCee', 'Williams', 2023 - 1992, ['Lyney, Lynette, Jemma, Lorenzo']];

// We will be putting the results of typechecking the array loop into this:
const types = []; // string, string, number, object 

// Looping through the array to its length, rather than hardcoding the index
// Typeof is getting the type of each array value
for(let i = 0; i <= looperArray.length - 1; i++) {
    console.log(looperArray[i], typeof looperArray[i]);
    // Filling types array
    // types[i] = typeof looperArray[i];

    // Pushing them onto the end of the array instead:
    types.push(typeof looperArray[i]);
};
console.log(types);

// Another example:
const years = [1992, 2009, 1900, 1320];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
};

console.log(ages);

// Continue and Break statements:
// Continue - To exit the current iteration of the loop and then continue onto the next part

for(let i = 0; i <= looperArray.length - 1; i++) {
    // Below is basically saying that if the value is not a string, then continue.
    // Everything that is a string will be logged, and everything else skipped.
    if(typeof looperArray[i] !== 'string') continue;

    console.log(looperArray[i], typeof looperArray[i]);
};

// Break - Completely terminates the entire loop:
console.log("Once a number is found, break");

for(let i = 0; i <= looperArray.length - 1; i++) {
    if(typeof looperArray[i] === 'number') break;

    console.log(looperArray[i], typeof looperArray[i]);
};
*/


// Looping backwards and Loops within Loops:

// Looping backwards:
const looperArray = ['CeeCee', 'Williams', 2023 - 1992, ['Lyney, Lynette, Jemma, Lorenzo']];
for(let i = looperArray.length - 1; i >= 0; i--) {
    console.log(i, looperArray[i]); // i by itself is just giving us an index for reference
}

// Loop within a Loop: 
//In this example we are starting an exercise, say lifting weights and doing the reps, then starting another exercise and doing the reps for that
for(let exercise = 1; exercise < 3; exercise++) {
    console.log(`Starting Exercise: ${exercise}`)

    for(let reps = 1; reps < 6; reps++) {
        console.log(`Reps for exercise ${exercise}: ${reps}`)
    }
}

// While Loops: Unlike for loops, only the condition can be specified, so whilst this condition is true, the code block runs:
// The conditions have to be explicitly stated
let exercise = 1;

while(exercise <= 3) {
    //console.log(`Exercise count: ${exercise}`);
    exercise++;
}

// Another example without a counter, depending on a random variable. IE: A dice roll:
// While the dice roll is different to 6, keep rolling. As we don't know how many rolls this will take, while is a better use case here than for loops:

let dice = Math.trunc(Math.random() * 6) + 1; // +1 is like with .length, needs the addition so it doesn't stop before the end due to zero-basing.

while(dice !== 6) {
    console.log(`You rolled: ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) {
        console.log("Loop is about to end");
        console.log(dice);
    }
}

// REMEMBER TO NOT JUST PUT THE MATH METHOD IN WITHOUT ASSIGNMENT TO VARIABLE. IT WILL INFINITE!!!

// For Loop exercise:
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  /* Write your code below. Good luck! 🙂 */
  
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];
  
  for(let i = 0; i <= bills.length -1; i++) {
     // const tips = calcTip(bills[i]); // Not entirely necessary as we've defined it below
      tips.push(calcTip(bills[i]));
      totals.push(bills[i] + tips[i]);
  }
  console.log(tips);
  console.log(totals);

  