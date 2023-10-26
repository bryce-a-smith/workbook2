"use strict";

var peopleOnTour = 38;
var seatsPerVan = 15;
var costPerVanPerDay = 250;

var totalVans = Math.ceil(peopleOnTour / seatsPerVan);
console.log("Total vans needed:" + totalVans);

var totalCost = totalVans * costPerVanPerDay;
console.log("Total cost of all vans needed: " + totalCost);

var perPersonCost = totalCost / peopleOnTour;
console.log("Cost per person is: " + perPersonCost.toFixed(2));

var moneyCollected = perPersonCost * peopleOnTour;
console.log(moneyCollected);