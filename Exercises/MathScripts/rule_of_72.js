"use strict";

var xSavings, interestRate, years, xSavingsDoubled;

xSavings = 500000;
interestRate = 5;

xSavingsDoubled = xSavings * 2;
years = 72/interestRate;

console.log("At a " + interestRate + "% interest rate, your savings account will be worth $"
+ xSavingsDoubled.toFixed(2) + " in " + years.toFixed(1) + " years");