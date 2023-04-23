"use strict";
/*    
   Louis Fennell III, February 10, 2023, IST-239-W01, Hands-On Project 6-1

   This file, project06-01.js, is the JavaScript source file for the project06-01.html file. This
   JavaScript file is for Hands-On Project 6-1. This JavaScript file validates the form, contained
   in the project06-01.html file, by checking to see if the password field matches the regular 
   expression (located in the required pattern contained in the input element with the id, "pwd")
   and the password and password confirmation fields match. If the password does not match the 
   expression, a message will be displayed directly below the password field. If the password and
   password confirmation fields do not match, a message will be displayed directly below the
   password confirmation field. If both fields match, the form will be submitted and the HTML file,
   formsubmit.html, will be loaded.

   JavaScript 7th Edition
   Chapter 6
   Project 06-01

   Project to validate a form used for setting up a new account
   Author: Louis Fennell III
   Date:   02/10/2023

   Filename: project06-01.js
*/

/* Declares the variable, submitButton, and assigns it the value of the element with the id 
"submitButton". */
let submitButton = document.getElementById("submitButton");
/* Declares the variable, pwd, and assigns it the value of the element with the id "pwd". */
let pwd = document.getElementById("pwd");
/* Declares the variable, pwd2, and assigns it the value of the element with the id "pwd2". */
let pwd2 = document.getElementById("pwd2");

/* Adds an onclick event listener to the submitButton variable. When the even listener detects the
click event, an anonymous function is executed. */
submitButton.onclick = function() {
   /* If the password field does not match the regular expression, the password field will display
   the message, "Your password must be at least 8 characters with at least one letter and one
   number". */
   if (pwd.validity.patternMismatch) {
      pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
   /* Else if the password and password confirmation fields do not match, the password field will
   display the message, "Your passwords must match". */
   } else if (pwd.value !== pwd2.value) {
      pwd.setCustomValidity("Your passwords must match");
   /* Else both fields match, the password field will display the message, "". */
   } else {
      pwd.setCustomValidity("");
   } 
}

