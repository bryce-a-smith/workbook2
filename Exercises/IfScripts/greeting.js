"use strict";

var currentHour = 14;

if (currentHour < 10) {
  console.log("Good morning!");
} else if (currentHour < 17) {
  console.log("Good day!");
} else if (currentHour < 24) {
  console.log("Good evening!");
}
