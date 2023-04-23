"use strict";
/*    
   Louis Fennell III, January 30, 2023, IST-239-W01, Hands-On Project 4-3

   This project, project04-03.js, is intended to be a simple text review setup.
   The Project takes the users input into a text field and counts the number of
   characters that have been entered. If the user exceeds the character limit,
   the user will be notified that they have exceeded the character limit via an
   error message. As the user types their message into the comment box, the 
   innerHTML of the wordCountBox will be updated to reflect the number of 
   characters that have been entered. The code below contains the corrections
   that were made to the provided code to make it function properly.

   JavaScript 7th Edition
   Chapter 4
   Project 04-03

   Application to count the number of characters in a review comment
   Author: Louis Fennell III
   Date:   01/30/2023

   Filename: project04-03.js
*/

/* Declares the constant, MAX_REVIEW, which will hold the maximum allowed 
length of the review.
*/
const MAX_REVIEW = 1000; // Added extra 0 to 100 to make it 1000.
/* Sets the element with the ID, limit, to the value stored in the constant,
MAX_REVIEW. */
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elements in the web page
/* Declares the variable, wordCountBox, which will hold the element with the 
ID, countValue. Added missing let to initialize the variable. */
let wordCountBox = document.getElementById("countValue"); // 
/* Declares the variable, warningBox, which will hold the element with the ID,
warningBox. Added missing let to initialize the variable. */
let warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
/* Adds an event listener to the element with the ID, comment, which will call
the function, updateCount(), when the user types into the comment box. */
document.getElementById("comment").addEventListener("keyup", updateCount);

/* Declares the function, updateCount(), which will be called when the user 
types into the comment box. */
function updateCount() {
   /* Sets the innerHTML of the warningBox element to an empty string. */
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
   /* Declares the variable, commentText, which will hold the value of the 
   element, comment. This variable will be referenced by the following 
   charCount variable. Corrections made: added let to initialize the variable. */
   let commentText = document.getElementById("comment").value;
   /* Declares the variable, charCount, which will call the function, 
   countCharacters(commentText), which will return the number of characters
   entered into the review text box. Corrections made: added let to initialize
   the variable, removed the s from commentsText to allow this variable to 
   reference the correct variable. */
   let charCount = countCharacters(commentText);
   
   /* Added try catch block to catch the error and display it in the warning 
   box. */
   try {
      /* If the charCount is greater than the MAX_REVIEW, throw an error letting 
      the user know they have exceeded the character count limit. */
      if (charCount > MAX_REVIEW) throw "You have exceeded the character count limit";
      // Catches the error message and displays it in the warningBox innerHTML.
   } catch(err) {
      /* If the error is thrown, display the error in the warningBox. */
      warningBox.innerHTML = err;
      /* Finally, displays the character count, charCount, in the 
      wordCountBox. */
   } finally {
      /* Displays the total character count in the wordCountBox. */
      wordCountBox.innerHTML = charCount;
   }
}









/*=================================================================*/
/* Defines the function, countCharacters(textStr), to count the number of 
characters in a text string. */
function countCharacters(textStr) {
   /* Declares the variable, commentregx, which will hold the regular 
   expression /\s/g. */
   var commentregx = /\s/g;
   /* Declares the variable, chars, which will hold the value of the textStr. */
   var chars = textStr.replace(commentregx, "");
   // Returns the length of the variable, chars.
   return chars.length;
} 