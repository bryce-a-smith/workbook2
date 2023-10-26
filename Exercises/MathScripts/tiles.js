"use strict";

var length = 7;
var width = 5;
var areaOfTilePerBox = 12;
console.log("Length: " + length);
console.log("Width: " + width);

var areaOfRoom = length * width;
console.log("Area of room: " + areaOfRoom);

var areaOfTileNeeded = areaOfRoom * 1.1;
console.log("Area of tile needed: " + areaOfTileNeeded);

var boxesOfTileNeeded = Math.ceil(areaOfTileNeeded / areaOfTilePerBox);
console.log("Number of boxes of tile needed: " + boxesOfTileNeeded);

var totalTileArea = boxesOfTileNeeded * areaOfTilePerBox;
console.log("Total tile needed: " + totalTileArea);
