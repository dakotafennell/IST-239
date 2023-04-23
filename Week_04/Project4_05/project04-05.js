// Strict usage of JavaScript.
"use strict";
/*    
   Louis Fennell III, January 30, 2023, IST-239-W01, Hands-On Project 4-5

   This project, project04-05.js, is intended to be a Degrees to Radians and 
   Radians to Degrees converter. This is accomplished by taking the user input
   from the input boxes and converting the values to the opposite unit. The 
   user can enter a value in either the Degrees or Radians input box and the
   other input box will be updated with the converted value. This is done by
   using an event handler that calls an anonymous function when either of the
   input boxes, rValue or aValue, are changed.

   JavaScript 7th Edition
   Chapter 4
   Project 04-05

   Degrees <-> Radians Converter
   Author: Louis Fennell III
   Date:   01/30/2023

   Filename: project04-05.js
 */


/* Defines the function, degreesToRadians(degrees), that takes the parameter
degrees. This function is used to convert degrees to radians. Corrections made:
Added the missing Math. to PI/80. and changed 80 to 180. */
function degreesToRadians(degrees) {
   // Returns degrees to radians by multiplying degrees by Math.PI/180.
   return degrees*Math.PI/180;
}

/* Defines the function, radiansToDegrees(radians), that takes the parameter
radians. This function is used to convert radians to degrees. Corrections Made:
Added the missing Math. to PI. */
function radiansToDegrees(radians) {
   /* Returns radians to degrees by multiplying radians by 180/Math.PI. 
   Correction made: Added missing Math. to PI. */
   return radians*180/Math.PI; // Added missing Math. to PI.
}

/* Event handler that calls the anonymous function when the input box, rValue, 
is changed. Correction made: Added missing closing parentheses to the function. */
document.getElementById("rValue").onchange = function() {
   /* Declares the variable, radians, and assigns it the value of the input 
   box, rValue. */
   let radians = document.getElementById("rValue").value;
   /* Writes the degrees value to the debugger console as "Radians = radians" */
   console.log("Radians = " + radians); 
   /* Writes the degrees value to the input box, aValue, by calling the
   function, formatValue3, and passing the value of the function,
   radiansToDegrees(radians). Corrected the spelling error, radian to radians. */
   document.getElementById("aValue").value = formatValue3(radiansToDegrees(radians));
}

/* Event handler that calls the anonymous function when the input box, aValue, 
is changed. */
document.getElementById("aValue").onchange = function() {
   /* Declares the variable, degrees, and assigns it the value of the input
   box, aValue. */
   let degrees = document.getElementById("aValue").value;
   /* Writes the degrees value to the debugger console as "Degrees = degrees" */
   console.log("Degrees = " + degrees) // Added console log to see the value of degrees.
   /* Writes the degrees value to the input box, rValue, by calling the
   function, formatValue3, and passing the value of the function,
   degreesToRadians(degrees). Added a missing closing parenthesis to the statement. */
   document.getElementById("rValue").value = formatValue3(degreesToRadians(degrees));
}





/* ================================================================= */
/* Defines the function, formatValue3(value), that takes the parameter
   value. This function is used to display a numeric value in the format ##.###. */
 function formatValue3(value) {
    /* Returns the value of the function, value.toFixed(3), which formats the
    value to 3 decimal places. */
    return value.toFixed(3);
 }