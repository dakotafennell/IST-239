"use strict";
/*
   Louis Fennell III, January 29, 2023, IST-239-W01, Hands-On Project 4-1

   This JavaScript project, project04-01.js, is corrected code that was 
   originally intended to be a simple moving cost estimation tool. The way this
   is done is the program takes the value entered by the user into the weight 
   textbox (wgtBox) and multiplies that value by the constant, COST_PER_LB. 
   This value is then displayed in the totalBox textbox with an error asking 
   the user to enter a positive mileage. When the user enters a positive value 
   into the distance textbox (distBox), the value is multiplied by the 
   constant, COST_PER_MILE. This value is then added to the total cost. If the 
   user then checks the checkbox, setupBox, the total cost is then increased by
   the constant, SETUP_COST, which is $500. This value is then added to the 
   totalCost variable and then displayed in the totalBox textbox.
   The original code had a few logic errors that were corrected along with some
   small syntax issues that are documented where they were fixed.

   JavaScript 7th Edition
   Chapter 4
   Project 04-01

   Application to calculate total moving cost
   Author: Louis Fennell III
   Date:   01/30/2023

   Filename: project04-01.js
*/

// Global Constants
/* Sets the constant, COST_PER_LB, for the cost per pound. This constant 
initially had a logic error where the original value, 50, was causing the 
overall calculation to multiply by 50, when the intended way was to multiply by
half. The original amount, 50, was changed to 0.50. */
const COST_PER_LB = 0.50;
/* Sets the constant, COST_PER_MILE, for the cost per mile. This constant 
initially had a logic error, similar to the constant, COST_PER_LB where the 
entered amount was multiplied by 75 instead of getting 3/4 of that value. The 
original amount, 75 was changed to 0.75. */
const COST_PER_MILE = 0.75;
// Sets the constant, SETUP_COST, for the setup cost of $500.
const SETUP_COST = 500;

// Global Variables
/* Sets the variable, wgtBox, to the element with the id of wgtBox. This 
variable is initialized using let.*/
let wgtBox = document.getElementById("wgtBox");
/* Sets the variable, distBox, to the element with the id of distBox. This 
variable is initialized using let.*/
let distBox = document.getElementById("distBox");
/* Sets the variable, msgBox, to the element with the id of msgBox. This 
variable is initialized using let.*/
let msgBox = document.getElementById("msgBox");


/* Event handler that calls the function, calcTotal, when there has been a 
change in the textbox element with the id, wgtBox. When there has been a 
change in this textbox, the total cost is calculated based on the weight 
entered. */
document.getElementById("wgtBox").onchange = calcTotal;
/* Event handler that calls the function, calcTotal, when there has been a 
change in the textbox element with the id, distBox. When there has been a
change in this textbox, the total cost is calculated based on the distance
*/
document.getElementById("distBox").onchange = calcTotal;
/* Event handler that calls the function, calcTotal, when the checkbox 
element, setupBox, has been clicked. When this checkbox is clicked, $500 is
added to the total cost. */
document.getElementById("setupBox").onclick = calcTotal;

/* Defines the function, calcTotal(), to calculate an estimate of the total 
moving cost. This function will then cause the total cost to be displayed in
the textbox, totalBox. If there are any errors, an error message will be 
displayed explaining the issue to the user. */
function calcTotal() {
   
   /* Sets the totalCost variable to 0. This variable will store the calculated
   total cost. */
   let totalCost = 0;
   /* Sets the msgBox variable to an empty string. This variable will store any
   error messages. */
   msgBox.innerHTML = "";  // Erase any warnings in the message box
   
   /* Try catch method that is used to calculate the cost based on the weight
   and displays an error message to the user if the weight is not a positive 
   value. */
   try {
      /* If statement for if the value in the wgtBox variable is not greater
      than 0, Throws the error message "!! Enter a positive weight" */
      if (!(wgtBox.value > 0)) throw "!! Enter a positive weight";
      /* Adds the value of the wgtBox variable multiplied by the constant, 
      COST_PER_LB, to the totalCost variable. */
      totalCost += wgtBox.value * COST_PER_LB;
     // Catches the error message and displays it in the msgBox variable.
   } catch(err) {
      // Displays the error message in the msgBox variable.
      msgBox.innerHTML = err;
   }

   /* Try catch method that is used to calculate the cost based on the distance
   and displays an error message to the user if the distance is not a positive 
   value. */
   try {
      if (!(distBox.value > 0)) throw "!! Enter a positive mileage";
      /* Adds the value of the distBox variable multiplied by the constant, 
      COST_PER_MILE, to the totalCost variable. */
      totalCost += distBox.value * COST_PER_MILE;
      // Catches the error message and displays it in the msgBox variable.
   } catch(err) {
      // Displays the error message in the msgBox variable.
      msgBox.innerHTML = err;
   }

   /* If statement that will add the setup cost, $500 to the totalCost 
   variable, if the setup box is checked.*/
   if (document.getElementById("setupBox").checked) {
      // Adds the constant, SETUP_COST, to the totalCost variable.
      totalCost += SETUP_COST
   }
   
   /* Changes the the totalBox textbox element to display the moving cost 
   estimate, calculated by the previous code, in the totalBox element formatted 
   as currency. */
   document.getElementById("totalBox").innerHTML = formatCurrency(totalCost);
}



 
 /* Defines the function, formatCurrency(value), to format value as a currency.
 Displays the numeric value as a test string with the currency format, $XX.XX. */
 function formatCurrency(value) {
   /* returns the value of the variable, value, formatted as currency with the 
   $ symbol and to two decimal places. */
    return "$" + value.toFixed(2);
 }