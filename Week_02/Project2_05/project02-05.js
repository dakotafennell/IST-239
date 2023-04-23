/*
   Louis Fennell III, January 16, 2023, IST-239-W01, Hands-On Project 2-5

   This project is intended to be a simple functioning interactive calculator
   where each element in the HTML table is a separate button. When these 
   buttons are clicked, the code runs the function, runCalculator() with the
   argument passed to it, (based on which element, or button was clicked). Most
   code in this JavaScript file is not original code, but was modified to 
   correct various mistakes.

      JavaScript 7th Edition
      Chapter 2
      Project 02-05

      Application to create an online calculator
      Author: Louis Fennell III
      Date:   01/16/23

      Filename: project02-05.js
 */
 
/* Event handler for each calculator button that sends that buttons value to 
the runCalculator() function when it is clicked. */
document.getElementById("button0").onclick = function() { // Changed .click to .onclick
   // Calls the runCalculator() function with the argument 0.
   runCalculator(0);
}

/* Event handler for each calculator button that sends that buttons value to 
the runCalculator() function when it is clicked. */
document.getElementById("button1").onclick = function() {
   // Calls the runCalculator() function with the argument 1.
   runCalculator(1);
}

/* Event handler for each calculator button that sends that buttons value to 
the runCalculator() function when it is clicked. */
document.getElementById("button2").onclick = function() {
   // Calls the runCalculator() function with the argument 2.
   runCalculator(2);
}
/* Event handler for each calculator button that sends that buttons value to 
the runCalculator() function when it is clicked. */
document.getElementById("button3").onclick = function() {
   // Calls the runCalculator() function with the argument 3.
   runCalculator(3);
}

/* Event handler for each calculator button that sends that buttons value to 
the runCalculator() function when it is clicked. */
document.getElementById("button4").onclick = function() {
   // Calls the runCalculator() function with the argument 4.
   runCalculator(4);
}

/* Event handler for each calculator button that sends that buttons value to 
the runCalculator() function when it is clicked. */
document.getElementById("button5").onclick = function() {
   // Calls the runCalculator() function with the argument 5.
   runCalculator(5);
}

/* Event handler for each calculator button that sends that buttons value to 
the runCalculator() function when it is clicked. */
document.getElementById("button6").onclick = function() {
   // Calls the runCalculator() function with the argument 6.
   runCalculator(6);
}

/* Event handler for each calculator button that sends that buttons value to 
the runCalculator() function when it is clicked. */
document.getElementById("button7").onclick = function() {
   // Calls the runCalculator() function with the argument 7.
   runCalculator(7);
}

/* Event handler for each calculator button that sends that buttons value to 
the runCalculator() function when it is clicked. */
document.getElementById("button8").onclick = function() {
   // Calls the runCalculator() function with the argument 8.
   runCalculator(8);
}

/* Event handler for each calculator button that sends that buttons value to 
the runCalculator() function when it is clicked. */
document.getElementById("button9").onclick = function() {
   // Calls the runCalculator() function with the argument 9.
   runCalculator(9);
}

/* Event handler for each calculator button that sends that buttons value to 
the runCalculator() function when it is clicked. */
document.getElementById("buttonAdd").onclick = function() {
   // Calls the runCalculator() function with the argument "+".
   runCalculator("+");
}

/* Event handler for each calculator button that sends that buttons value to 
the runCalculator() function when it is clicked. */
document.getElementById("buttonMinus").onclick = function() {
   // Calls the runCalculator() function with the argument "-".
   runCalculator("-"); // Corrected runcalculator to runCalculator
}

/* Event handler for each calculator button that sends that buttons value to 
the runCalculator() function when it is clicked. */
document.getElementById("buttonMultiply").onclick = function() {
   // Calls the runCalculator() function with the argument "*".
   runCalculator("*");
}

/* Event handler for each calculator button that sends that buttons value to 
the runCalculator() function when it is clicked. */
document.getElementById("buttonDivide").onclick = function() { // Added missing () to function
   // Calls the runCalculator() function with the argument "/".
   runCalculator("/");
}

/* Event handler for each calculator button that sends that buttons value to 
the runCalculator() function when it is clicked. */
document.getElementById("buttonDecimal").onclick = function() {
   // Calls the runCalculator() function with the argument ".".
   runCalculator(".");
}

// Send an empty text string if the Enter key is clicked
document.getElementById("buttonEnter").onclick = function() {
   // Calls the runCalculator() function with the argument "".
   runCalculator("");
}

/* Clears the calculator window if the C key is clicked by calling the 
clearCalculator function. */
document.getElementById("buttonClear").onclick = clearCalculator; // removed unneeded () from clearCalculator


/* Function, runCalculator(character), enters characters into the calculator
window based on what character or number is clicked. */
function runCalculator(character) {
   // Uses getElementById() to retrieve the value inputted into the calculator window
   let calcValue = document.getElementById("calcWindow").value;
   
   // Add the character to the calculator string or if its empty (the enter key) evaluate the equation
   (character) ? calcValue += character : calcValue += " = " + evalEq(calcValue) + "\n";
   
   // Uses getElementById() to  the characters displayed in the calculator window.
   document.getElementById("calcWindow").value = calcValue; // Changed calc_value to calcValue
}


// Function to clear the calculator window
function clearCalculator() {
   // Uses getElementById() to get the "calcWindow" element and change its value to "".
   document.getElementById("calcWindow").value =""; // Changed calcwindow to calcWindow
}


/* ===================================================================== */

// Function to evaluate a text string containing an equation, returning a numeric value to a specified number of decimals
function evalEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(6);
}  
