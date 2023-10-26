"use strict";

var studentName = "Randy Jackson";
var majorCode = "BIOL"

var nameOfMajor, departmentOffice;

if(majorCode === "BIOL") {
    nameOfMajor = "Biology";
    departmentOffice = "Science Bldg, Room 310";
} else if(majorCode === "CSCI") {
    nameOfMajor = "Computer Science";
    departmentOffice = "Sheppard Hall, Room 314";
} else if(majorCode === "ENG") {
    nameOfMajor = "English";
    departmentOffice = "Kerr Hall, Room 201";
} else if(majorCode === "HIST") {
    nameOfMajor = "History";
    departmentOffice = "Kerr Hall, Room 114";
} else if(majorCode === "MKT") {
    nameOfMajor = "Marketing";
    departmentOffice = "Westly Hall, Room 310";
}

console.log("Student: " + studentName);
console.log("Major: " + nameOfMajor);
console.log("Advising Location: " + departmentOffice);