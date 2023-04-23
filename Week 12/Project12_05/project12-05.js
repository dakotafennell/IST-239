"use strict";
/*  
	Louis Fennell III, April 06, 2023, IST-239-W01, Hands-On Project 12-5
		
	This file, project12-05.js, is the JavaScript file for the Hands-On Project 12-5. This project
   is a debugging exercise where the project12-05.js file contains jQuery code that is used to 
   validate a user's input on an account creation form. This jQuery code sets the variable, 
   isValid, to false when the user does not enter a valid username, email address, or password. 
	
	JavaScript 7th Edition
	Chapter 12
	Project 12-05

	Project to validate a user form
	Author: Louis Fennell III
	Date:   4/06/2023

	Filename: project12-05.js
*/

/* Selects the form with the id of "userform" and sets the "novalidate" attribute to an empty string. */
$("form.userform")
/* Sets the "novalidate" attribute of the "userform" form to an empty string. Removed the semicolon 
from the end of the line causing the .submit() method to not run */
.attr("novalidate", "")
// run a function when the form is submitted
/* Runs an anonymous function when the submit event is triggered on the form. */
.submit(e => {

   /* Declares the variable, isValid and sets it to the boolean value true. */
   let isValid = true;
   
   /* Declares the variable, username and sets it to the value of the input element with the id of
   "username". This variable is used to confirm that a username has been supplied. */
   let username = $("input#username");
   // test the value of the username input box
   /* If the value (val()) of the username element matches an empty string, then sets the isValid 
   variable to false. Changed .val === "" to .val() === "" to make the if statement a method call. */
   if ($(username).val() === "") { 
      /* Sets the isValid variable to false if the username is missing, displays an error message. */
      isValid = false;
      /* Selects the next sibling of the input element with the id of "username". */
      $(username).next()
      // animate the reveal of the error message
      /* Hides the next sibling of the input element with the id of "username" */
      .hide()
      /* Sets the text of the next sibling of the input element with the id of "username" to the
      string "* You must supply a username". */
      .text("* You must supply a username")
      /* Shows the next sibling of the input element with the id of "username" for 500 milliseconds
      (1/2 of a second). */
      .show(500);
   /* Else if the value of the username element does not match an empty string, then sets the text
   of the next sibling of the input element with the id of "username" to an empty string. */
   } else {
      // display an empty text string
      $(username).next().text("");
   }
   
   /* Declares the variable, email and sets it to the value of the input element with the id of
   "email". This variable is used to confirm that an email address has been supplied. Corrected the
   selector to "input#email" from input#email to select the input element with the id of "email". */
   let email = $("input#email");
   // test the text of the email box is a valid email address
   /* Declares the variable, mailRE and assigns it a regular expression pattern to test if the 
   email variable matches the pattern (Example correct: louistfennell93@gmail.com). Corrected regex 
   pattern enclosed in "" marks and was not enclosed in forward slashes. */
   let mailRE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   /* Declares the variable, validMail and assigns it the boolean value of the test method of the
   mailRE variable. The test method tests if the email variable matches the regular expression
   pattern. */
	let validMail = mailRE.test(email.val()); 
   
   /* if validMail does not match the boolean true, then sets the isValid variable to false. */
   if (validMail !== true) {
      /* If the email address does not match the regular expression pattern, assigns the false 
      boolean to isValid, displaying an error message. */
      isValid = false;
      /* Selects the next sibling of the input element with the id of "email". */
      $(email).next()
      /* Hides the next sibling of the input element with the id of "email" */
      .hide()
      /* Sets the text of the next sibling of the input element with the id of "email" to the
      string "* Not a valid e-mail address". */
      .text("* Not a valid e-mail address")
      /* Shows the next sibling of the input element with the id of "email" for 500 milliseconds
      (1/2 of a second). */
      .show(500);
   /* Else if validMail matches the boolean true, then sets the text of the next sibling of the
   input element with the id of "email" to an empty string. */
   } else {
      // display an empty text string
      $(email).next().text("");
   }
   
   /* Declares the variable, pwd and sets it to the value of the input element with the id of
   "pwd". This variable is used to confirm that a password has been supplied. */
   let pwd = $("input#pwd");
   // test the text of the password box conforms to the password rules
   /* Declares the variable, pwdRE and assigns it a regular expression pattern to test if the
   pwd variable matches the pattern (Example correct: Password1). */
	let pwdRE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   /* Declares the variable, validPwd and assigns it the boolean value of the test method of the
   pwdRE variable. The test method tests if the pwd variable matches the regular expression
   pattern. */
	let validPwd = pwdRE.test(pwd.val());
   
   /* if validPwd does not match the boolean true, then sets the isValid variable to false. */
   if (validPwd !== true) {
      /* If the password does not match the regular expression pattern, assigns the false boolean to
      isValid, displaying an error message. */
      isValid = false;
      /* Selects the next sibling of the input element with the id of "pwd". Removed the semicolons 
      from the end of .next(), .hide(), and .text() causing the .hide(), .text(), and .show(500) 
      methods to not run. */
      $(pwd).next()
      // animate the reveal of the error message
      /* Hides the next sibling of the input element with the id of "pwd" */
      .hide()
      /* Sets the text of the next sibling of the input element with the id of "pwd" to the
      string "* Invalid password". */
      .text("* Invalid password")
      /* Shows the next sibling of the input element with the id of "pwd" for 500 milliseconds
      (1/2 of a second). */
      .show(500);
   /* Else if validPwd matches the boolean true, then sets the text of the next sibling of the
   input element with the id of "pwd" to an empty string. */
   } else {
      // display an empty text string
      $(pwd).next().text("");
   }
   
   
   /* Declares the variable, pwd2 and sets it to the value of the input element with the id of
   "pwd2". This variable is used to confirm that the password matches the password confirmation. */
   let pwd2 = $("input#pwd2");;
   
   /* if the value of the pwd2 variable does not match the value of the pwd variable, then sets the
   isValid variable to false. */
   if (pwd.val() !== pwd2.val()) {
      /* Assigns the false boolean to isValid, displaying an error message. */
      isValid = false;
      /* Selects the next sibling of the input element with the id of "pwd2". */
      $(pwd2).next()
      // animate the reveal of the error message
      /* Hides the next sibling of the input element with the id of "pwd2" */
      .hide()
      /* Sets the text of the next sibling of the input element with the id of "pwd2" to the
      string "* Passwords must match". */
      .text("* Passwords must match")
      /* Shows the next sibling of the input element with the id of "pwd2" for 500 milliseconds
      (1/2 of a second). Changed the .show() method time to the correct 500 milliseconds, to show
      as half a second. */
      .show(500);
   /* Else if the value of the pwd2 variable matches the value of the pwd variable, then sets the
   text of the next sibling of the input element with the id of "pwd2" to an empty string. */
   }  else {
      // display an empty text string
      $(pwd2).next().text("");
   } 
   
   // Confirm that there is no invalid data in the form
   /* If the isValid variable does not match the boolean value of false, then prevent the form
   submission. Corrected = false to === false to make the if statement a comparison operator. */
   if (isValid === false) {
      // if there is invalid data, cancel the form submission
      e.preventDefault();
   }
   
});