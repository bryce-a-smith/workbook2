"use strict";

var foodBill, tipPercent, tipAmount;

foodBill = 56.0;
tipPercentAsDecimal = 0.2;

tipAmount = foodBill * tipPercentAsDecimal;

console.log("The tip on $" + foodBill.toFixed(2) + " food bill is $" + tipAmount.toFixed(2));
