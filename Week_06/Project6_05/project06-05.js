"use strict";
/*
   Louis Fennell III, February 10, 2023, IST-239-W01, Hands-On Project 6-5

   This file, project06-05.js, is the JavaScript source file for the project06-05.html file. This
   JavaScript file is for the Hands-On Project 6-5, which is to create a form that allows a user
   to register for a conference. The form will have a shopping cart that will display the total
   cost of the registration. The form will use a drop down selection menu displaying the five 
   available packages. The user is able to select a package and the cart will automatically update
   the total cost. There is also a box allowing the user to chose how many attendees there will be
   and a checkbox if they would to select the media pack. The following JavaScript code will take
   all of the user's input and calculate the total cost of the registration.

   JavaScript 7th Edition
   Chapter 6
   Project 06-05

   Project to submit a registration form
   Author: Louis Fennell III
   Date:   02/10/2023

   Filename: project06-05.js
*/

/* Sets a load event listener that will detect if the window has loaded and when detected, will
call the anonymous function located within the curly braces {}. */
window.addEventListener("load", function() {
   // Calculate the shopping cart when the page loads
   calcCart();
   
   /* Calls the sessionTest() function when the user clicks the register, "regSubmit", button. This
   will verify that the user has selected a session to attend and if not, reminds the user to 
   select a session. */
   document.getElementById("regSubmit").onclick = sessionTest;   
   
   /* The following lines of code will call the calcCart() function when each input element loses
   focus, is changed, or modified. */
   
   /* Calls the calcCart() function when the user leaves the first name, "fnBox", text box. 
   Corrected each following piece of code by adding on to the .blur, .change, and .click event 
   handlers changing them each to .onblur, .onchange, and .onclick respectively. */
   document.getElementById("fnBox").onblur = calcCart;
   /* Calls the calcCart() function when the user leaves the last name, "lnBox", text box. */
   document.getElementById("lnBox").onblur = calcCart;
   /* Calls the calcCart() function when the user leaves the group name, "groupBox", text box. */
   document.getElementById("groupBox").onblur = calcCart;
   /* Calls the calcCart() function when the user leaves the email address, "mailBox", text box. */
   document.getElementById("mailBox").onblur = calcCart;
   /* Calls the calcCart() function when the user leaves the phone number, "phoneBox", text box. */
   document.getElementById("phoneBox").onblur = calcCart;
   /* Calls the calcCart() function when the user leaves the banquet guest number, "banquetBox", text box. */
   document.getElementById("sessionBox").onchange = calcCart;
   /* Calls the calcCart() function when the user leaves the session package, "sessionBox", drop down menu. */
   document.getElementById("banquetBox").onblur = calcCart;
   /* Calls the calcCart() function when the user clicks the media release, "mediaCB", check box. */
   document.getElementById("mediaCB").onclick = calcCart;
});


/* Defines the function, sessionTest(), which uses an if else to verify that the user has selected
a session package. */
function sessionTest() {
   /* Declares the variable, confSession, assigning it to the value of the element, "sessionBox", 
   drop down menu. */
   var confSession = document.getElementById("sessionBox");
   /* If the selected index of the confSession variable is equal to -1, then the custom validity
   of the confSession variable is set to "Select a Session Package". changed .setValidity to 
   .setCustomValidity. */
   if (confSession.selectedIndex === -1) {
      confSession.setCustomValidity("Select a Session Package");
   /* Else, the custom validity of the confSession variable is set to an empty string. changed 
   .setValidity to .setCustomValidity. */
   } else {
      confSession.setCustomValidity("");
   }
}

/* Defines the function, calcCart(), which calculates the total of the shopping cart items. */
function calcCart() {
   
   /* Declares the variable, guestCost, which is assigned to the value of the number of banquet 
   guests multiplied by 55. This will be used to calculate the total cost based on the number of
   guests. */
   let guestCost = document.forms.register.elements.banquetGuests.value*55;
   /* Sets the text content of the "regBanquet" element to the value of the number of banquet
   guests. */
   document.getElementById("regBanquet").textContent = document.forms.register.elements.banquetGuests.value;
   
   // Determine the cost of the selected session
   /* Declares the variable, sessionCost, initially assigning it to the value of 0. */
   let sessionCost = 0;
   /* Declares the variable, sessionChoice, initially assigning it to an empty string. */
   let sessionChoice = "";

   /* Declares the variable, selectedSession, assigning it to the value of the selected index from
   the "sessionBox" drop down menu. Changed .index to .selectedIndex */
   let selectedSession = document.getElementById("sessionBox").selectedIndex;
   
   /* If the selectedSession variable is not equal to -1, then the sessionChoice variable is
   assigned to the text of the selected session and the sessionCost variable is assigned to the
   value of the selected session. */
   if (selectedSession !== -1) {
      sessionChoice = document.forms.register.elements.sessionBox[selectedSession].text;
      sessionCost = document.forms.register.elements.sessionBox[selectedSession].value;
   }
   
   /* Declares the variable, mediaCost, initially assigning it to the value of 0. These two variables are 
   used to determine the cost of the media pack. */
   let mediaCost = 0;
   /* Declares the variable, mediaChoice, initially assigning it to an empty string. */
   let mediaChoice = "";
   
   /* If the mediaCB check box is checked, then the mediaChoice variable is assigned to "yes" and
   the mediaCost variable is assigned to 115. Changed .check to .checked */
   if (document.forms.register.elements.mediaCB.checked) {
      // Assigns mediaChoice the string, "yes".
      mediaChoice = "yes";
      // Assigns mediaCost the value, 115.
      mediaCost = 115;
   }
   
   /* Declares the variable, totalCost, assigning it to the value of the guestCost variable
   multiplied by 1, plus the sessionCost variable multiplied by 1, and plus the mediaCost variable
   multiplied by 1. Each variable, guestCost, sessionCost, and mediaCost is multiplied by 1 to 
   convert them to numeric values from text strings. */
   let totalCost = guestCost*1 + sessionCost*1 + mediaCost*1;
   
   /* This following block of code will be displayed on the right side of the screen in the, 
   Shopping Cart, section of the web page. The first line sets the text content of the "regName" 
   element to the value of the first name and last name. */
   document.getElementById("regName").textContent = document.forms.register.elements.firstName.value + " " + document.forms.register.elements.lastName.value;
   /* Sets the text content of the "regGroup" element to the value of the group name. */
   document.getElementById("regGroup").textContent = document.forms.register.elements.group.value;
   /* Sets the text content of the "regEmail" element to the value of the email address. */
   document.getElementById("regEmail").textContent = document.forms.register.elements.email.value;
   /* Sets the text content of the "regPhone" element to the value of the phone number. */
   document.getElementById("regPhone").textContent = document.forms.register.elements.phoneNumber.value;
   /* Sets the text content of the "regSession" element to the value of the sessionChoice variable. */
   document.getElementById("regSession").textContent = sessionChoice;
   /* Sets the text content of the "regBanquet" element to the value of the number of banquet
   guests. */
   document.getElementById("regBanquet").textContent = document.forms.register.elements.banquetGuests.value; 
   /* Sets the text content of the "regPack" element to the value of the mediaChoice variable. */
   document.getElementById("regPack").textContent = mediaChoice;
   /* Sets the text content of the "regTotal" element to the value of the totalCost variable
   formatted as US currency (USD). Added missing braces {} in front of style and after, "USD". */
   document.getElementById("regTotal").textContent = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
}
