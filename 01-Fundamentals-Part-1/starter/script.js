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