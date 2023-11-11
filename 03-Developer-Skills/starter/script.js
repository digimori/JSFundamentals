// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Challenge #1:
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Eg:
[17, 21, 23] will print "...17C in 1 days ... 21C in 2 days ... 23C in 3 days..."

Create a function "printForecast" which takes in an array and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub problems.
Test Data 1: [17, 21, 23]
Test Data 2: [12, 5, -5, 0, 4]
 */

// Okay but what iiiifff we wanted to do this for X days, like, otherwise we're going to keep having to alter the string for the day count?
// So could we loop this? Like get the length of the days in relation to the array values?

const forecast1 = [17, 21, 23];
const forecast2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = ''; // Empty string, equivelent of 0 index for arrays;
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days, `; // We're appending the next string onto the array and then moving to the next loop.
  }
  console.log(str);
}
// += is being used in place of '= str + ${}' 

printForecast(forecast1);
printForecast(forecast2);
