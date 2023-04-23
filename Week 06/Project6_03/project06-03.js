"use strict";
/*
   Louis Fennell III, February 10, 2023, IST-239-W01, Hands-On Project 6-3

   This file, project06-03.js, is the JavaScript source file for the project06-03.html file. This
   JavaScript file is for Hands-On Project 6-3. When the user clicks the "Use Shipping Address"
   checkbox, the shipping address information is copied to the billing address information. When
   the user attempts to submit the form without completing all of the required fields, an error
   message is displayed.

   JavaScript 7th Edition
   Chapter 6
   Project 06-03

   Script to complete a form containing billing and shipping address information
   Author: 
   Date:   

   Filename: project06-03.js
*/

/* Declares the variable, useShip and assigns it the value of the element with the id of useShip. */
let useShip = document.getElementById("useShip");
/* Adds a click event listener to the useShip variable and calls the copyShippingToBilling function 
when the event is detected. */
useShip.addEventListener("click", copyShippingToBilling);

/* Defines the function, copyShippingToBilling, which copies the shipping address information to the
billing address information by setting each elements  */
function copyShippingToBilling() {
   /* If statement that checks if the useShip checkbox is checked. */
   if (useShip.checked) {
      /* If useShip is checked, sets element, "firstnameBill", to the value of element, 
      "firstnameShip". */
      document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
      /* Sets the element, "lastnameBill", to the value of element, "lastnameShip". */
      document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
      /* Sets the element, "address1Bill", to the value of element, "address1Ship". */
      document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
      /* Sets the element, "address2Bill", to the value of element, "address2Ship". */
      document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
      /* Sets the element, "cityBill", to the value of element, "cityShip". */
      document.getElementById("cityBill").value = document.getElementById("cityShip").value;
      /* Sets the element, "countryBill", to the value of element, "countryShip". */
      document.getElementById("countryBill").value = document.getElementById("countryShip").value;
      /* Sets the element, "codeBill", to the value of element, "codeShip". */
      document.getElementById("codeBill").value = document.getElementById("codeShip").value;
      /* Sets the element, "stateBill", to the value of element, "stateShip". */
      document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;     
   }   
}

/* Declares the variable, formElements and assigns it the value of the input elements with the type 
text. */
let formElements = document.querySelectorAll("input[type='text']");
/* Declares the variable, elementCount and assigns it the value of the length of the formElements
array. */
let elementCount = formElements.length;
/* Declares the variable, errorBox and assigns it the value of the element with the id of errorBox. */
let errorBox = document.getElementById("errorBox")

/* For loop that loops through the formElements array using i as the counter and while i is less 
than the number of elements stored in elementCount, and adds an event listener to each element. */
for (let i = 0; i < elementCount; i++) {
   /* Adds an event listener to each element in the formElements array and calls the 
   showValidationError function when the event is detected. */
   formElements[i].addEventListener("invalid", showValidationError);
 }

/* Defines the function, showValidationError, which displays an error message when the user
attempts to submit the form without completing all of the required fields. */
function showValidationError(evt) {
   evt.preventDefault();
   /* Sets the text content of the errorBox HTML element to the string, "Complete all highlighted fields". */
   errorBox.textContent = "Complete all highlighted fields";
}