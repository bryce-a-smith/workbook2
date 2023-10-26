"use strict";

var amount = 12.50;
var taxExempt = true;

var tax;
var totalDue;

if (taxExempt == false) {
 tax = amount * 0.08; // 8% tax rate
}
else {
 tax = 0;
}

totalDue = amount + tax; 
console.log(totalDue);