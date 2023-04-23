"use strict";
/*    
    Louis Fennell III, March 11, 2023, IST-239-W01, Hands-On Project 10-1

    This file, project10-01.js, is the JavaScript file for Hands-On Project 10-1. It contains the 
    JavaScript code that will create the drag and drop jigsaw puzzle. This file is referenced in
    the project10-01.html file and will take the 48 puzzle piece images and randomize the order in 
    which they appear on the puzzle board. This is accomplished by creating a new array with a
    length of 48, assigning each array position a value of i + 1, and then sorting the array in
    random order. Each pieces draggable attribute is set to false to prevent the user from being
    able to drag multiple pieces at once. The pieces are then appended to the puzzleBoard element
    to complete the puzzle board.    

    JavaScript 7th Edition
    Chapter 10
    Project 10-01

    Project to create a drag and drop jigsaw puzzle
    Author: Louis Fennell III
    Date:   3/11/2023

    Filename: project10-01.js
*/

/* Declares the variable, puzzleBoard, and assigns it the value of the element with the id, 
"puzzleBoard". */
let puzzleBoard = document.getElementById("puzzleBoard");
/* Declares the variable, zCounter, and assigns it a value of 1. */
let zCounter = 1;
/* Declares the variable, intList, and assigns it a value of a new array with a length of 48. */
let intList = new Array(48);
// Declares the variables, pointerX, pointerY, pieceX, and pieceY without assigning them any value.
let pointerX, pointerY, pieceX, pieceY;

/* For loop that iterates 48 times. The variable, i, is initialized to 0 and incremented by 1 each
iteration. The loop will continue to iterate until the value of i is 48. */
for (let i = 0; i < 48 ; i++) {
   /* Assigns the current array position [i] of the intList array the value of i + 1. */
   intList[i] = i+1;
}
/* Sorts the intList array in random order. */
intList.sort(function() {
   /* Returns a random number between 0 and 1. */
   return 0.5 - Math.random();
});

/* For loop that iterates 48 times. The variable, i, is initialized to 0 and incremented by 1 each
iteration. The loop will continue to iterate until the value of i is 48. */
for (let i = 0; i < 48; i++) {
   /* Declares the variable, piece and assigns it the value of a new image element. */
   let piece = document.createElement("img");
   /* Assigns the src attribute of the piece variable the value of the string "piece" concatenated
   with the current array position [i] of the intList array concatenated with the string ".png". */
   piece.src = "piece" + intList[i] + ".png";
   /* Declares the variable, rowNum and assigns it the value of the current array position i plus 
   1 then divided by 8 using the Math.ceil method to round the value up to the next whole number. */
   let rowNum = Math.ceil((i+1)/8);
   /* Declares the variable, colNum and assigns it the value of the current array position i plus
   1 minus the value of rowNum minus 1 multiplied by 8. */
   let colNum = (i + 1) - (rowNum - 1)*8;
   /* Assigns the top and left style attributes of the piece variable the value of the string
   rowNum minus 1 multiplied by 98 plus 7 concatenated with the string "px" and the string
   colNum minus 1 multiplied by 98 plus 7 concatenated with the string "px", respectively. */
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   /* Assigns the draggable attribute of the piece variable the value of false, overriding the 
   default draggability of images. */
   piece.draggable = false;
   // Adds the piece element to the puzzleBoard element.
   puzzleBoard.appendChild(piece);
}

/* Declares the variable, pieces and assigns it the value of the document.querySelectorAll method
called on the document object with the string "div#puzzleBoard img" passed as an argument. */
let pieces = document.querySelectorAll("div#puzzleBoard img");

/* For of loop that iterates through each item in the pieces array. This for loop will add an event
listener for each puzzle piece on the pointerdown (mouse click) event. When the event occurs, the
grabPiece function will be called. */
for (let items of pieces) {
   items.addEventListener("pointerdown", grabPiece);
}

/* Defines the function, grabPiece and passes the event object, e, as an argument. This function
will be called when the pointerdown event occurs on a puzzle piece. */
function grabPiece(e) {
   /* Sets the value of the pointerX and pointerY variables to the clientX and clientY properties 
   of the event object, respectively. This will allow the piece to be moved relative to the 
   pointer's position on the piece. */
   pointerX = e.clientX;
   pointerY = e.clientY;
   /* Sets the touchAction style attribute of the target element of the event object to the string
   "none". This will prevent the browser from scrolling the page when the user drags a piece. */
   e.target.style.touchAction = "none";
   // Increments the zCounter variable by 1.
   zCounter++;
   /* Sets the z-index style attribute of the target element of the event object to the value of
   the zCounter variable. This will allow the piece to be moved above other pieces. */
   e.target.style.zIndex = zCounter;

   /* Sets the value of the pieceX and pieceY variables to the offsetLeft and offsetTop properties
   of the target element of the event object, respectively. This will allow the piece to be moved
   relative to the pointer's position on the piece. */
   pieceX = e.target.offsetLeft;
   pieceY = e.target.offsetTop;

   /* Adds an event listener to the target element of the event object for the pointermove event.
   When this event occurs, the movePiece function will be called. */
   e.target.addEventListener("pointermove", movePiece);
   /* Adds an event listener to the target element of the event object for the pointerup event.
   When this event occurs, the dropPiece function will be called. */
   e.target.addEventListener("pointerup", dropPiece);
} 

/* Defines the function, movePiece and passes the event object, e, as an argument. This function
will be called when the pointermove event occurs on a puzzle piece. */
function movePiece(e) {
   /* Declares the variable, diffX and assigns it the value of the clientX property of the event
   object minus the value of the pointerX variable. */
   let diffX = e.clientX - pointerX;
   /* Declares the variable, diffY and assigns it the value of the clientY property of the event
   object minus the value of the pointerY variable. */
   let diffY = e.clientY - pointerY;

   /* Sets the left and top style attributes of the target element of the event object to the value
   of the pieceX and pieceY variables plus the value of the diffX and diffY variables, respectively,
   concatenated with the string "px". */
   e.target.style.left = pieceX + diffX + "px";
   e.target.style.top = pieceY + diffY + "px";
} 

/* Defines the function, dropPiece and passes the event object, e, as an argument. This function
will be called when the pointerup event occurs on a puzzle piece. */
function dropPiece(e) {
   // Removes the event listener from the target element of the event object for the pointermove event.
   e.target.removeEventListener("pointermove", movePiece);
   // Removes the event listener from the target element of the event object for the pointerup event.
   e.target.removeEventListener("pointerup", dropPiece);
}