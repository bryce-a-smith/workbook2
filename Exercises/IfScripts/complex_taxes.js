"use strict";

var payRate = 17.3;
var hoursWorked = 45;
var filingStatus = "Single";

var payRateOT = payRate * 1.5;

var weeklyGrossPay, hoursOT, taxRateDecimal, taxWithheldWeekly;

if (hoursWorked <= 40) {
  weeklyGrossPay = payRate * hoursWorked;
} else {
  hoursOT = hoursWorked - 40;
  weeklyGrossPay = hoursOT * payRateOT + payRate * 40;
}

var annualGrossIncome = weeklyGrossPay * 52;

if (annualGrossIncome < 12000) {
  if (filingStatus === "Single") {
    taxRateDecimal = 0.05;
  } else if (filingStatus === "Joint") {
    taxRateDecimal = 0;
  }
} else if (annualGrossIncome < 25000) {
  if (filingStatus === "Single") {
    taxRateDecimal = 0.1;
  } else if (filingStatus === "Joint") {
    taxRateDecimal = 0.6;
  }
} else if (annualGrossIncome < 75000) {
  if (filingStatus === "Single") {
    taxRateDecimal = 0.15;
  } else if (filingStatus === "Joint") {
    taxRateDecimal = 0.11;
  }
} else {
  if (filingStatus === "Single") {
    taxRateDecimal = 0.2;
  } else if (filingStatus === "Joint") {
    taxRateDecimal = 0.2;
  }
}

taxWithheldWeekly = weeklyGrossPay * taxRateDecimal;

console.log("Hours worked this week: " + hoursWorked);
console.log("Salary: $" + payRate.toFixed(2) + " per hour");
console.log("Weekly gross pay is: $" + weeklyGrossPay);
console.log("Filing status: " + filingStatus);
