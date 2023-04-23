"use strict";
/*  
	Louis Fennell III, March 11, 2023, IST-239-W01, Hands-On Project 10-5

   This file, project10-05.js, is one of the two JavaScript files for Hands-On Project 10-5. It 
   contains the code that will be used to navigate the crossword puzzle. The main part of this code
   is the function, selectLetter(e), which will be called when the user presses a key on the
   keyboard. This function will use the user's key press to select a letter or to help navigate the
   puzzle using the arrow keys or by pressing the spacebar to change the typing direction. When the 
   user types a letter (and are in the across typing direction), the function will move the user to
   the next letter in the puzzle. When the user types a letter (and are in the down typing 
   direction), the function will move the user down to the next letter in the puzzle. If the user
   presses the backspace or delete key, the function will delete the letter in the current space.

   JavaScript 7th Edition
   Chapter 10
   Project 10-05

   Crossword Puzzle Code for Keyboard Actions
    
   Author: Louis Fennell III
   Date:   3/11/2023

   Filename: project10-05.js
*/


/* Event handler that listens for the onkeydown event inside the document and calls the 
selectLetter function when detected. Changed the deprecated .onkeypress event to .onkeydown. */
document.onkeydown = selectLetter;

/* Defines the function, selectLetter(e). This function takes the event object as a parameter. This
function will apply the users keyboard presses to select a letter or to help navigate the puzzle. */
function selectLetter(e) {
   
   e.preventDefault(); // Changed the deprecated event.preventDefault() to e.preventDefault()
   
	/* Declares the variable, leftLetter and assigns it the value of the element with the id, 
   "currentLetter" and the data-left attribute. */ 
   let leftLetter = document.getElementById(currentLetter.dataset.left);
   
   /* Declares the variable, upLetter and assigns it the value of the element with the id,
   "currentLetter" and the data-up attribute. */
   let upLetter = document.getElementById(currentLetter.dataset.up);
   
   /* Declares the variable, rightLetter and assigns it the value of the element with the id,
   "currentLetter" and the data-right attribute. */
   let rightLetter = document.getElementById(currentLetter.dataset.right); 
   
   /* Declares the variable, downLetter and assigns it the value of the element with the id,
   "currentLetter" and the data-down attribute. */
   let downLetter = document.getElementById(currentLetter.dataset.down); 
   
	/* Declares the variable, userKey and assigns it the value of the event object's key property.
   Corrected the mistake, e.code to e.key. */
   let userKey = e.key;

   /* If the user presses the left arrow key, the leftLetter variable is passed to the formatPuzzle
   function, moving the user left a space. */
   if (userKey === "ArrowLeft") { // Move left 
      // Calls the formatPuzzle function and passes the leftLetter variable as an argument.
      formatPuzzle(leftLetter);
   
   /* Else if the user presses the up arrow key, the upLetter variable is passed to the formatPuzzle
   function, moving the user up a space. */
   } else if (userKey === "ArrowUp") { // Move up
      // Calls the formatPuzzle function and passes the upLetter variable as an argument.
      formatPuzzle(upLetter);

   /* Else if the user presses the right arrow key or the tab key, the rightLetter variable is
   passed to the formatPuzzle function, moving the user right a space. */
   } else if (userKey === "ArrowRight" || userKey === "Tab") { // Move right
      // Calls the formatPuzzle function and passes the rightLetter variable as an argument.
      formatPuzzle(rightLetter);

   /* Else if the user presses the down arrow key or the enter key, the downLetter variable is
   passed to the formatPuzzle function, moving the user down a space. */
   } else if (userKey === "ArrowDown" || userKey === "Enter") { // Move down
      // Calls the formatPuzzle function and passes the downLetter variable as an argument.
      formatPuzzle(downLetter);

   /* Else if the user presses the backspace or delete key, the currentLetter variable is set to an
   empty string. */
   } else if (userKey === "Backspace" || userKey === "Delete") { // Delete the character
      // Sets the textContent of the currentLetter variable to an empty string.
      currentLetter.textContent = "";

   /* Else if the user presses the spacebar, the switchTypeDirection function is called changing 
   the typeDirection variable from right to down or down to right. Fixed user typo of "Space" to " "
   to correctly catch the onkeypress event */
   } else if (userKey === " ") { // Toggle the typing direction
      // Calls the switchTypeDirection function.
      switchTypeDirection();

   /* Else if the user presses a letter key, the currentLetter variable is set to the user's key
   press. */
   } else if (userKey >= "a" && userKey <= "z") { // Write the character
      /* Sets the textContent of the currentLetter variable to the user's key press and converts it
      to uppercase. */
      currentLetter.textContent = userKey.toUpperCase();

      /* If the typeDirection variable is equal to "right", the rightLetter variable is passed to the
      formatPuzzle function, moving the user right a space. */
      if (typeDirection === "right") {
         // Calls the formatPuzzle function and passes the rightLetter variable as an argument.
         formatPuzzle(rightLetter);  // Move right after typing the letter
      /* Else the downLetter variable is passed to the formatPuzzle function, moving the user down a
      space. */
      } else {
         // Calls the formatPuzzle function and passes the downLetter variable as an argument.
         formatPuzzle(downLetter);  // Move down after typing the letter
      }
   }

}

