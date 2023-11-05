/* // Value types:
// Objects:
let myProfile = {
    name: 'Cee',
    age: 31,
    hobbies: ['Knitting', 'Painting', 'Programming'],
    currentWork: 'Pharmacy Dispenser',
}

// Primitives: 
let name = "Cee";
let age = 31;

//Data types:

// Boolean (True or False/ Yes or No answers)
let booBoolean = true;

//Strings
let stringDataType = "This is a string";

// Numbers
let thisIsANumber = 31;

// Arrays
let thisIsAnArray = ['Seventy Three', 74, false];

// Undefined, null, symbol, bigInt
let person; // This is undefined, or "Empty value"
 null is similar.
    symbol is a unique and unchangeable value
    BigInt is a larger number than what the number type can hold.


// Math Operators:
const now = 2023;
const myAge = now -1992;
const husbandAge = now - 1985;
console.log(myAge, husbandAge);

console.log(myAge * 2, myAge / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3, ie: 2 x 2 x 2;

// Assignment operators:
let x = 10 + 5; // 15
x += 10 // x = x + 10 = 25
x *= 4 // x = x * 4 = 100 : This was reassigned above to 25, which is why it's not 15 x 4
x++ // Incrementor by 1, so x = x + 1
x-- // Decrementor by 1, so x = x - 1

// Comparison operators - used to produce boolean values:
myAge > husbandAge // This will return false, as husbandAge is greater. >, <. >=, <=
// >=  this is greater or equal to, <= less than or equal to.


*/

// Operator Precedence:
const now = 2023;
const myAge = now -1992;
const husbandAge = now - 1985;

console.log(now - 1992 > now - 1985); // This results in False.
// The numbers on both sides are evaluated first, so it will calculate the values on either side of the comparison operator first, then initiate the comparison.
// This is due to operator precedence, as subtraction has a higher precedence than the comparison.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence for further information and reference

let x, y; // Empty values
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (myAge + husbandAge) / 2;
console.log(myAge, husbandAge, averageAge);

/* Both of the x and y values will be equal to 10. The order starts with the minus operators
 it will calculate those first, then apply it to the variables as assignment is lower down on the precedence.
 Assignment precedence is right-to-left, so it will take the value to the right first.
 Grouping ( ... ) will always be evaluated first, like mathematics with BODMAS. */

 //Example of precedence, using a BMI calculator:
 // BMI = mass / (height * height) 

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn)

const markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI);


// Strings and Template literals:
const firstName = 'Paige';
const lastName = 'Bendall';
const birthYear = 1992;
const year = 2023;

console.log(`Hi, my name is ${firstName} ${lastName}, and I was born in ${birthYear}. This makes me ${year - birthYear} years old.`)
// This could also be used with basic concatenation and subtraction ie: 'I am ' + ' ' + (year - birthYear) + ' ' + 'years old.'

// If/Else statements:
const age = 15;

if (age >= 18) {
    console.log("Yes, they are old enough.");
} else {
    console.log("Not old enough!");
}

// Type Conversion and Coercion
// Conversion - Manually convert from one data type to another, like in TypeScript
// Coercion - JS automatically converts types 

// Conversion: 
const inputYear = '1991';
console.log(inputYear + 18) // This will log 199118 as it's just adding the number to the end of the string.

// To convert a string to a number: Number()
console.log(Number(inputYear) + 18)

// The variable inputYear however is still a string. So if we log inputYear again by itself, it will log the string again.
// Converting strings to numbers that aren't a number will return NaN. It will still register as a number if we run typeof, so what it's actually saying is that it's an invalid number.

console.log(String(23), 23);
// The first will be logged as a string, the second a number.


// Coercion:
console.log('I am ' + 31 + ' years old.')
// When there is a plus operation between strings, in this case + 31 +, it will automatically figure out that it is a different type (number).
// This is because the + is causing JS to see it as a string concatenation.

let n = '1' + 1; // 11
n = n - 1;
// This will equate to 10. The fact that there isn't an additional + after the 1, makes it a number, so JS will add them together as 1 + 1 = 11.

console.log('23' - '10' - 3)
// Coercion here triggers the opposite as the operation is minus, so it will convert to numbers


// Truthy and Falsy values:
/* Falsy values are not completely false until we try to convert them into Boolean values. ie:
 There are FIVE Falsy values: 0, '', undefined, null, NaN
 Everything else is "Truthy".
*/
console.log(Boolean(0)); // Falsy
console.log(Boolean(undefined)); // Falsy
console.log(Boolean('Paige')); // Truthy as it's not empty
console.log(Boolean({})); // Truthy

const money = 0;
if (money) {
    console.log("Don't spend it all at once.");
} else {
    console.log("Get a job, dude.")
}

// Logically speaking, this will run the else, as money is set to 0, which is a falsy value.

let height;
if(height) {
    console.log("Height is defined, woo")
} else {
    console.log("Height is undefined. Cut that out. No hoisting for you.")
}

// Height is undefined as it has no value.

// Equality operators: == vs ===:
const newAge = 18;
if(newAge === 18) console.log('You just hit 18')
// Strict equality - True will only be returned if the value of both sides of the operator are exactly the same - Strict does NOT perform type coercion.

if (newAge == 18) console.log('You just loosely hit 18')
// Loose equality - will return true whether or not the value is string or number. So '18' and 18 will be considered as equal due to type coercion


// Booleans - And, Or, Not
// Example: A and B - "Sarah has a drivers license, AND good vision", A and B must be true.
// A or B - "Sarah has a drivers license, or has good vision" - either condition must be true, but at least one
// A not B - "Sarah has a drivers license and NOT good vision" - condition to the left must be true, condition to the right must be false
// Not A, Not B - Is an inversion to And. So none of the conditions are true.
// && - And , || - or, !! - not

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = true;

if (hasDriversLicense && hasGoodVision) {
    console.log("You can drive")
} else if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Can still drive")
}


