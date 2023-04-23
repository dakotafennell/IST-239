"use strict";
/*  
	Louis Fennell III, March 11, 2023, IST-239-W01, Hands-On Project 10-5

   This file, cross.js, is one of the two JavaScript files for Hands-On Project 10-5. It contains 
	code used in the display and operation of the crossword puzzle. This JavaScript code is sourced 
   in the project10-05.html file. This JavaScript file formats the appearance of the puzzle given
   the selected puzzle square, toggles the typing direction between right and down, shows all
   errors in the puzzle in red but only for 1 second. It also shows the crossword puzzles solution.
   The code in this file is unchanged but documented for the purpose of this assignment.

	JavaScript 7th Edition
   Chapter 10
   Project 10-05

   Crossword Puzzle Functions
    
   Author: Louis Fennell III
   Date:   3/11/2023

   Filename: cross.js

   Global Variables
   ================
   allLetters
      References all of the letter squares in the crossword puzzle
   
   currentLetter
      References the letter currently selected in the crossword puzzle
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle square
      
      
   switchTypeDirection()
      Toggles the typing direction between right and down     

*/

/* Declares the five variables, allLetters, currentLetter, wordLetters, acrossClue, downClue 
without assigning any an initial value. */
let allLetters, currentLetter, wordLetters, acrossClue, downClue;
/* Declares the variable, typeDirection and assigns it the value of the string, "right". */
let typeDirection = "right";

// Event handler that runs the function, init, when the window loads.
window.onload = init;


/* Defines the function, init(). */ 
function init() {
	// Assigns the variable, allLetters the query, "table#crossword span".
   allLetters = document.querySelectorAll("table#crossword span");
	// Assigns the variable, currentLetter to the value of the first index position in the allLetters array.
   currentLetter = allLetters[0];
	/* Declares the variable, acrossID and assigns it the value of the dataset method clueA. */
   let acrossID = currentLetter.dataset.clueA;
	/* Declares the variable, downID and assigns it the value of the dataset method clueA. */
   let downID = currentLetter.dataset.clueD;
	/* Assigns the acrossClue variable the element that contains currentLetter attribute, clueA. */
   acrossClue = document.getElementById(currentLetter.dataset.clueA);
	/* Assigns the downClue variable the element that contains currentLetter attribute, clueD. */
   downClue = document.getElementById(currentLetter.dataset.clueD);
   
   // Format the initial appearance of the puzzle to highlight the
   // first row, column, and square
   formatPuzzle(currentLetter);
   
   // Every time the pointer presses down on a letter, reformat the puzzle
   // to highlight the current row, column, and square
	/* For of loop that loops through the letters in the allLetters variable. */
   for (let letters of allLetters) {     
		/* Event handler that runs an anonymous function on the e node, when the onpointerdown event 
      is detected. */
      letters.onpointerdown = function(e) {
         // Runs the formatPuzzle function and passes the e node as an argument.
         formatPuzzle(e.target);
      };
   }
   
   // typeImage shows the typing direction (horizontal or vertical)
	/* Declares the variable, typeImage and assigns it the element with the ID, "directionImg". */
   let typeImage = document.getElementById("directionImg");
   
   // Toggle the typing direction when the pointer presses down on the typeImage
   /* Event handler for typing direction that detects when the user clicks (onpointerdown) on the
   typeImage element and assigns it the function, switchTypeDirection. */
   typeImage.onpointerdown = switchTypeDirection;
   
   // Show all errors in the puzzle in red but only for 1 second
   /* Onclick event handler that runs when the user clicks on the "showErrors" element and then 
   calls an anonymous function that shows all of the errors in the puzzle for 1 second
   (1000 milliseconds). */
   document.getElementById("showErrors").onclick = function() {
      // For of loop that loops through each letter in the allLetters array.
      for (let letters of allLetters) {
         /* If the textContent of the letter is not equal to the dataset letter then the letter is
         colored red and then the color is removed after 1 second. */
         if (letters.textContent !== letters.dataset.letter) {
            letters.style.color = "red";
            /* Calls the setTimeout function on the anonymous function to set the color of the 
            letter back to "" every 1000 milliseconds. */
            setTimeout(function() {
               /* For of loop that loops through each letter in the allLetters array. */
               for (let letters of allLetters) {
                  // Sets the style color of the letter to "" every 1000 milliseconds (1 second).
                  letters.style.color = "";
               }
            }, 1000); // every 1000 milliseconds (1 second).
         }
      }
   }
   
   /* Event handler that runs an anonymous function on the "showSolution" element, when the onclick 
   event is detected. This function will show the crossword puzzles solution. */
   document.getElementById("showSolution").onclick = function() {
      // For of loop that loops each letters in the allLetters array.
      for (let letters of allLetters) {
         // Sets the textContent of the letters in the allLetters array to the dataset letter.
         letters.textContent = letters.dataset.letter;
      }
   };
}

/* Defines the function, formatPuzzle(puzzleLetter) which is used to format the appearance of the
puzzle given the selected puzzle square. */
function formatPuzzle(puzzleLetter) {
   // Sets the currentLetter variable to the puzzleLetter variable.
   currentLetter = puzzleLetter; 
   
   // For of loop that loops through each letter in the allLetters array.
   for (let letters of allLetters) {
      // Sets the background color of each letter in the allLetters array to "".
      letters.style.backgroundColor = "";
   }
   
   // Sets the style color of the acrossClue and downClue variables to "".
   acrossClue.style.color = "";
   downClue.style.color = "";
   
   /* If statement for if the currentLetter dataset clueA is not undefined then the acrossClue variable
   is assigned the element that contains the currentLetter attribute, clueA. */
   if (currentLetter.dataset.clueA !== undefined) {
      /* Assigns the acrossClue variable the element that contains currentLetter attribute, clueA. */
      acrossClue = document.getElementById(currentLetter.dataset.clueA);
      // Sets the style color of the acrossClue variable to "blue".
      acrossClue.style.color = "blue";
      /* Assigns the wordLetters variable the querySelectorAll method that selects all of the
      elements that contain the currentLetter attribute, clueA. */
      wordLetters = document.querySelectorAll("[data-clue-a = " + currentLetter.dataset.clueA + "]");
      // For of loop that loops through each word in the wordLetters array.
      for (let words of wordLetters) {
         // Sets the background color of each word in the wordLetters array to "rgb(231, 231, 255)".
         words.style.backgroundColor = "rgb(231, 231, 255)";
      }
   }

   /* If statement for if the currentLetter dataset clueD is not undefined then the downClue variable
   is assigned the element that contains the currentLetter attribute, clueD. */
   if (currentLetter.dataset.clueD !== undefined) {
      /* Assigns the downClue variable the element that contains currentLetter attribute, clueD. */
      downClue = document.getElementById(currentLetter.dataset.clueD);
      // Sets the style color of the downClue variable to "red".
      downClue.style.color = "red";
      /* Assigns the wordLetters variable the querySelectorAll method that selects all of the
      elements that contain the currentLetter attribute, clueD. */
      wordLetters = document.querySelectorAll("[data-clue-d = " + currentLetter.dataset.clueD + "]");
      // For of loop that loops through each word in the wordLetters array.
      for (let words of wordLetters) {
         // Sets the background color of each word in the wordLetters array to "rgb(255, 231, 231)".
         words.style.backgroundColor = "rgb(255, 231, 231)";
      }
   }
   
   /* If statement for if the typeDirection variable matches the string, "right" then the background
   color of the currentLetter variable is set to "rgb(191, 191, 255)". */
   if (typeDirection === "right") {
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   /* Else statement for if the typeDirection variable does not match the string, "right" then the
   background color of the currentLetter variable is set to "rgb(255, 191, 191)". */
   } else {
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   }
}


/* Defines the function, switchTypeDirection() which is used to adjust the direction the user is 
typing the crossword clues in. */
function switchTypeDirection() {
	/* Declares the variable, typeImage and assigns it the element with the ID, "directionImg". */
   var typeImage = document.getElementById("directionImg");
	/* If typeDirection matches the string, "right", changes the typeDirection variable to "down" 
	and changes the typeImage source attribute to "pc_down.png" and finally changing style 
   background color to "rgb(255, 191, 191)". */
   if (typeDirection === "right") {
      typeDirection = "down";
      typeImage.src = "pc_down.png";
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   /* Else typeDirections does not match the string, "right", changes the typeDirection variable to
   "right" and changes the typeImage source attribute to "pc_right.png" and finally changing style
   background color to "rgb(191, 191, 255)". */
   } else {
      typeDirection = "right";
      typeImage.src = "pc_right.png";
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   }   
}
