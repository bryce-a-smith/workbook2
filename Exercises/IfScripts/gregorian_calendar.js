"use strict";

var year = 2000;

function isLeapYear(y) {
    return y % 100 === 0 ? y % 400 === 0: y % 4 === 0;
}


if (year % 100 == 0) {
  if (year % 400 == 0) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
} else if (year % 4 == 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

console.log(isLeapYear(year));