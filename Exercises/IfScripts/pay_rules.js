"use strict";

var payRate = 17.3;
var hoursWorked = 45;
//calculate the overtime pay rate, which is 1.5x more than regular pay rate.
var payRateOT = payRate * 1.5;

//will need to keep track of these, but their values depend on the conditionals (if-statements)
var grossPay, hoursOT;

//Check if 40 hours or less.
if (hoursWorked <= 40) {
  //All hours are paid the same rate.
  grossPay = payRate * hoursWorked;
} else {
  //If not 40 hours or less (AKA over 40 hours)
  //Calculate how many hours were overtime hours (anything over 40)
  hoursOT = hoursWorked - 40;
  //Gross pay is 40 hours at regular pay rate + the overtime hours at 1.5x the rate
  grossPay = hoursOT * payRateOT + payRate * 40;
}

//Prints the gross Pay with 2 decimal points
console.log(grossPay.toFixed(2));
