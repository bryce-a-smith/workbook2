"use strict";

function greetUser() {
  const inputField = document.getElementById("input-field");
  const userName = inputField.value;
  const displayText = document.getElementById("display-text");
  displayText.innerText = "Hello " + userName;
}

//commit