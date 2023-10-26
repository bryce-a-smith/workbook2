"use strict";

var a = 2;
var b = 7;
var c = 1;
var min, max;

if(a <= b && a <= c) {
    min = a;
} else if(b <= a && b <= c) {
    min = b;
} else if(c <= a && c <= b) {
    min = c;
}

console.log("The min is: " + min);

if(a >= b && a >= c) {
    max = a;
} else if(b >= a && b >= c) {
    max = b;
} else if(c >= a && c >= b) {
    max = c;
}

console.log("The max is: " + max);