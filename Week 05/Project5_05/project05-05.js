"use strict";
/*    
     Louis Fennell III, February 05, 2023, IST-239-W01, Hands-On Project 5-5

     This file, project05-05.js, is the JavaScript file for the Hands-On Project 5-5. This code is
     provided as a debugging exercise. This code initially contained several errors that prevented
     the Concentration Game from executing properly. This code is intended to randomly scramble the
     order of the tiles so that the player cannot easily predict the location of the matching tiles.
     The code also contains a function that will flip the tiles back over if they do not match.

     JavaScript 7th Edition
     Chapter 5
     Project 05-05

     Project to create a Concentration game with flipping tiles
     Author: Louis Fennell III
     Date:   02/05/2023

     Filename: project05-05.js
*/

// Reference to the game board
/* Declares the variable, board, and assigns it the value of the element with the id of "board". */
let board = document.getElementById("board");

// Reference to the tiles within the game board
/* Declares the variable, allTiles, and assigns it the value of the elements with the class of
"tile". */
let allTiles = document.getElementsByClassName("tile");

/* Declares the variable, firstFlipped, and assigns it the value of null. This variable will be used
to store the first tile clicked by the player. */
let firstFlipped;
/* Declares the variable, firstFlipped, and assigns it the value of null. This variable will be used
to store the first tile clicked by the player. */
let secondFlipped;

// Variable containing the id of a timed command
/* Declares the variable, timeID, and assigns it the value of null. This variable will be used to
wait for a certain time before flipping the tiles back over (if incorrect). */
let timeID;

/* Declares the variable, tilesFlipped, and assigns it to the initial value of 0. This variable 
will be used to count the amount of tiles that are currently flipped. */
let tilesFlipped = 0;

// Functions to run when the page is loaded
/* Adds an event listener to the window object that will run the function, scrambleTiles, when the
window is loaded. */
window.addEventListener("load", scrambleTiles);
/* Adds an event listener to the window object that will run the function, playConcentration, when
the window is loaded. Added a missing semicolon to the end of the line. */
window.addEventListener("load", playConcentration)

// Function that scrambles the order of the tiles within the board
/* Defines the function, scrambleTiles, that will randomly scramble the order of the tiles within
the board. This function will iterate through each available tile on the page. */
function scrambleTiles() {
   for (let i = 0; i < allTiles.length; i++) {
      
      /* Declares the variable, randomIndex, and assigns it the value of a random number between 0
      and the number of tiles minus 1. */
      let randomIndex = Math.floor(allTiles.length*Math.random());

      // Randomly insert a tile before the current tile in the loop
      /* Inserts a tile at the random index before the current tile in the loop. Added Before 
      after .insert to correct this code block. */
      board.insertBefore(board.children[randomIndex], board.children[i]);
   }
}


// Function that sets up the game play
/* Defines the function, playConcentration, that will set up the game play. This function will
iterate through each available tile on the page. */
function playConcentration() {
   // Create event handlers for all tiles in the game board
   for (let i = 0; i < allTiles.length; i++) {

      // Run when a tile is clicked
      /* Adds an event listener to each tile that will run an anonymous function when the tile is
      clicked. */
      allTiles[i].onclick = function() {
         /* Test to see if the back of the tile is displayed // Changed This. to this. and changed 
         the = (assignment) sign to the === (comparison) sign. The (===) sign compares both value
         and type of the data. */
      if (this.lastElementChild.className === "back") {

         /* Adds one to the flipped tiles counter, tilesFlipped. */
         tilesFlipped++;  // increase the flip count by 1

            /* If statement that will check to see if the tilesFlipped variable matches the value 
            of 1. Corrected the if statement to check if 1 matches tilesFlipped instead of 
            assigning tilesFlipped the value 1. (changed = to ===) */
            if (tilesFlipped === 1) {
               /* Assigns the value of the, this, element to the variable, firstFlipped. Fixed
               incorrect case of This to this. */
               firstFlipped = this;
               /* Flips the tile by moving the image to the back of the tile. */
               firstFlipped.appendChild(firstFlipped.firstElementChild);
            /* Else if statement that will run if the tilesFlipped variable does not match the value
            of 1 and tilesFlipped value matches 2. (changed = to ===) */
            } else if (tilesFlipped === 2) {
               // if this is the second tile clicked then flip it
               // and then flip both tiles back after 1 second
               /* Assigns the value of the, this, element to the variable, secondFlipped. 
               Fixed incorrect case of This to this. */
               secondFlipped = this;
               /* Flips the second tile by moving the image to the back of the tile. */
               secondFlipped.appendChild(secondFlipped.firstElementChild);
               /* Sets the timeID variable to the value of a timed command that will run the
               flipBack function after 1 second. (Originally set as 1 millisecond instead of 
               1000 milliseconds which equals 1 second.) */
               timeID = window.setTimeout(flipBack, 1000);
            }
         }
      }
   }  

   /* Function to flip the two tiles if they don't match */
   /* Defines the function, flipBack, that will flip the two tiles back over if they do not match. */
   function flipBack() {
      // test to determine whether the tile images don't match
      /* If statement that will run if the src attribute of the firstFlipped element does not
      match the src attribute of the secondFlipped element. */
      if (firstFlipped.lastElementChild.src !== secondFlipped.lastElementChild.src) {
         
         // if they don't match, then flip each one
         /* Flips the first tile by moving the "back" image to the front of the tile. */
         firstFlipped.appendChild(firstFlipped.firstElementChild);
         /* Flips the second tile by moving the "back" image to the front of the tile. */
         secondFlipped.appendChild(secondFlipped.firstElementChild);
      }
      
      // Reset the tiles flipped counter to zero
      /* Assigns the tilesFlipped variable the value 0. Corrected variable name error by changing
      titlesFlipped (incorrect) to tilesFlipped (correct). */
      tilesFlipped = 0;
   }   
}