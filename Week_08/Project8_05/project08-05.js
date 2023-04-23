"use strict";
/*    
    Louis Fennell III, February 26, 2023, IST-239-W01, Hands-On Project 8-5

    This file, project08-05.js, contains the JavaScript code for the Interface to replay a chess 
    game stored in the, sample.json, JSON file. This file is the interface code for the project.
    This code will be used to create the interface for the chess game. The interface will allow
    the user to select a JSON file containing a chess game and then replay the game. The interface
    will display the game title, description, and the moves made in the game. The interface will
    also display the captured pieces for each player. The interface will also allow the user to
    move forward and backward through the game.

    JavaScript 7th Edition
    Chapter 8
    Project 08-05

    Interface to replay a chess game stored in a JSON file
    Author: Louis Fennell III
    Date:   02/26/2023

    Filename: project08-05.js
*/


/*--------------------- Interface Code -------------------*/

// Interface Objects
/* Declares the variable, moveLog, and assigns it the value of the ol element with the ID, 
"moveLog". */
let moveLog = document.getElementById("moveLog");         // ol element containing the list of the moves
/* Declares the variable, moveSpans, and assigns it the value of the span elements contained
within the ol element with the ID, "moveLog". */
let moveSpans = moveLog.getElementsByTagName("span");     // span element containing the individual moves
/* Declares the variable, nextButton, and assigns it the value of the button element with the
ID, "nextButton". */
let nextButton = document.getElementById("nextButton");   // button to move forward through the game
/* Declares the variable, prevButton, and assigns it the value of the button element with the
ID, "prevButton". */
let prevButton = document.getElementById("prevButton");   // button to move backward through the game
/* Declares the variable, getLogButton, and assigns it the value of the button element with the
ID, "getLogButton". */
let getLogButton = document.getElementById("getLog");     // button to retrieve game log stored in a JSON file 
/* Declares the variable, blackBox, and assigns it the value of the div element with the ID,
"blackBox". */
let blackBox = document.getElementById("blackBox");       // box containing captured black pieces
/* Declares the variable, whiteBox, and assigns it the value of the div element with the ID,
"whiteBox". */
let whiteBox = document.getElementById("whiteBox");       // box containing captured white pieces
/* Declares the variable, titleBox, and assigns it the value of the h1 element with the ID,
"title". */
let titleBox = document.getElementById("title");          // h1 heading for game title
/* Declares the variable, descBox, and assigns it the value of the p element with the ID,
"description". */
let descBox = document.getElementById("description");     // paragraph for game description

/* Creates an event listener for the getLogButton button element. When the button is clicked,
an anonymous function is called. */
getLogButton.onchange = function() {
    /* Declares the variable, JSONfile, and assigns it the value of the first element in the
    files array of the getLogButton button element. */
    let JSONfile = this.files[0];
    
    // Read the contents of the selected file
    let fr = new FileReader();
    fr.readAsText(JSONfile); 

    // Once the file has finished loading, parse the JSON file
    // and store the contents in the game object literal
    /* Creates an event listener for the fr FileReader object. When the file has finished loading,
    an anonymous function is called. */
    fr.onload=function(){ 
        /* Declares the variable, game, and assigns it the value of the JSON.parse function
        with the fr.result argument. Loading data from the JSON file into the game object. Fixed 
        incorrect non-capitalization of the JSON.parse function from json.parse to JSON.parse. */
        let game = JSON.parse(fr.result);
        
        /* Assigns the value of the game object literal's title property to the textContent
        property of the titleBox variable. */
        titleBox.textContent = game.title;
        /* Assigns the value of the game object literal's description property to the textContent
        property of the descBox variable. */
        descBox.textContent = game.description;
        
        /* Calls the writeMoveLog function with the game object literal's moves array as the
        argument. */
        writeMoveLog(game.moves);
        
        /* Declares the variable, mySet, and assigns it the value of the chessSet function
        with the game object literal as the argument. Added missing new statement.  */
        let mySet = new chessSet(game);
        
        /* Calls the setupBoard function with the mySet variable as the argument. */
        setupBoard(mySet);
      
        /* Creates an event listener for the nextButton button element. When the button is clicked,
        an anonymous function is called. */
        nextButton.onclick = function() {
            /* If the game object literal's move property is less than the length of the game
            object literal's moves array minus 1, then the showNextBoard function is called with
            the game object literal as the argument. */
            if (game.move < game.moves.length - 1) {
                showNextBoard(game);           
            }
        }
        /* Creates an event listener for the prevButton button element. When the button is clicked,
        an anonymous function is called. */
        prevButton.onclick = function() {
            /* If the game object literal's move property is greater than -1, then the showPrevBoard
            function is called with the game object literal as the argument. */
            if (game.move > -1) {
                showPrevBoard(game);           
            }
        }
    }
   
};

/* Defines the function, writeMoveLog, with the moves argument. */
function writeMoveLog(moves) {
    /* For loop that iterates through the moves array. */
    for (let i = 0; i < moves.length; i+=2) {
        /* Declares the variable, newLI, and assigns it the value of the createElement function
        with the "li" argument. */
        let newLI = document.createElement("li");

        /* Declares the variable, whiteMove, and assigns it the value of the createElement function
        with the "span" argument. */
        let whiteMove = document.createElement("span");
        /* Assigns the value of the moves array's i index to the textContent property of the
        whiteMove variable. */
        whiteMove.textContent = moves[i];
        /* Calls the appendChild function with the whiteMove variable as the argument. */
        newLI.appendChild(whiteMove);

        /* Declares the variable, blackMove, and assigns it the value of the createElement function
        with the "span" argument. */
        let blackMove = document.createElement("span");
        /* Assigns the value of the moves array's i+1 index to the textContent property of the
        blackMove variable. */
        blackMove.textContent = moves[i+1];   
        /* Calls the appendChild function with the blackMove variable as the argument. */
        newLI.appendChild(blackMove); 

        /* Calls the appendChild function with the newLI variable as the argument. */
        moveLog.appendChild(newLI);
    }
}

/* Defines the function, setupBoard, with the set argument. */
function setupBoard(set) {
    // Remove any pieces from the current board
    /* Declares the variable, piecesOnBoard, and assigns it the value of the querySelectorAll
    function with the "table#chessboard tr td span" argument. */
    let piecesOnBoard = document.querySelectorAll("table#chessboard tr td span");
    /* For loop that iterates through the piecesOnBoard array. */
    for (let i = 0; i < piecesOnBoard.length; i++) {
        /* Declares the variable, parentCell, and assigns it the value of the parentElement
        property of the piecesOnBoard array's i index. */
        let parentCell = piecesOnBoard[i].parentElement;
        /* Calls the removeChild function with the parentCell variable's lastElementChild
        property as the argument. */
        parentCell.removeChild(parentCell.lastElementChild);
    }
    
    // Place chess pieces on the board.
    /* For loop that iterates through the set object literal's pieces array. */
    for (let i = 0; i < set.pieces.length; i++) {
        /* Declares the variable, pieceImage, and assigns it the value of the createElement
        function with the "span" argument. */
        let pieceImage = document.createElement("span");
        pieceImage.innerHTML = set.pieces[i].image;
        pieceImage.className = set.pieces[i].color;
        /* Declares the variable, chessSquare, and assigns it the value of the getElementById
        function with the set object literal's pieces array's i index's square property as the
        argument. */
        let chessSquare = document.getElementById(set.pieces[i].square);
        /* Calls the appendChild function with the pieceImage variable as the argument. */
        chessSquare.appendChild(pieceImage);
    } 
}


/* Function to update the board when the next move is played */
function showNextBoard(game) {
    game.move++;
    
    // Highlight the move text in the move log
    moveSpans[game.move].className = "highlight";
    
    // Read the notation for the next move 
    let moveStr = game.moves[game.move];
    
    if (moveStr === "1-0") {
        window.alert("Black Resigns");
    } else if (moveStr === "0-1") {
        window.alert("White Resigns");
    } else if (moveStr === "1/2-1/2") {
        window.alert("Draw Accepted");
    } else if (moveStr === "0-0") {
        kingSideCastle();
    } else if (moveStr === "0-0-0") {
        queenSideCastle();
    } else if (moveStr.includes("=")) {
        pawnPromotion();
    } else if (moveStr.includes("x")) {
        capturePiece();
    } else if (moveStr.includes("-")) {
        movePiece();
    }
    
    // Move the piece image from the starting cell to the ending cell
    function moveCell(start, end) {    
        document.getElementById(end).appendChild(document.getElementById(start).firstElementChild);      
    }
   
    // Move the piece image into the cell and move the occupying piece back to the box
    function removeCell(cell) {
        // Moves a captured piece to the box
        if (game.move % 2 === 0) {    // white captured a black piece
            blackBox.appendChild(document.getElementById(cell).firstElementChild);
        } else {                      // black captured a white piece
            whiteBox.appendChild(document.getElementById(cell).firstElementChild);
        }
    }
    
    // Perform a kingside castle
    function kingSideCastle() {
        if (game.move % 2 === 0) {  // white kingside castle
            moveCell("e1", "g1");
            moveCell("h1", "f1");
        } else {                    // black kingside castle
            moveCell("e8", "g8");
            moveCell("h8", "f8");
        }
    }
    
    // Perform a queenside castle
    function queenSideCastle() {
        if (game.move % 2 === 1) {  // white queenside castle
            moveCell("e1", "c1");
            moveCell("a1", "d1");
        } else {                    // black queenside castle
            moveCell("e8", "c8");
            moveCell("a8", "d8");
        }
    }  
   
    // Promote a pawn that reaches the end rank
    function pawnPromotion() {
        let mIndex = moveStr.indexOf("-");
        let startCell = moveStr.substr(mIndex - 2,2);
        let endCell = moveStr.substr(mIndex + 1, 2);
        moveCell(startCell, endCell); 
        let newPiece = moveStr.charAt(moveStr.length - 1);
        let rankNum;
        switch (newPiece) {
            case "P" : rankNum = 9817; break;  // unicode for white pawn
            case "N" : rankNum = 9816; break;  // unicode for white knight
            case "B" : rankNum = 9815; break;  // unicode for white bishop
            case "R": rankNum = 9814; break;   // unicode for white rook
            case "Q" : rankNum = 9813; break;  // unicode for white queen
            case "K" : rankNum = 9812; break;  // unicode for white king
        }   
        if (game.move % 2 === 1) {   // move was made by black change unicode to black piece image
            rankNum+=6;
        }
        
        // Change image to promoted piece
        document.getElementById(endCell).firstElementChild.innerHTML = "&#" + rankNum + ";";
    }
    
    // Retrieve the address of starting cell and ending (occupied) cell
    function capturePiece() {
        let tIndex = moveStr.indexOf("x");
        let startCell = moveStr.substr(tIndex - 2,2);
        let endCell = moveStr.substr(tIndex + 1, 2);
        removeCell(endCell);  // remove piece from the cell
        moveCell(startCell, endCell)
    }   
    
    // Retrieve the address of the starting cell and ending (unoccupied) cell
    function movePiece() {
        let mIndex = moveStr.indexOf("-");
        let startCell = moveStr.substr(mIndex - 2,2);
        let endCell = moveStr.substr(mIndex + 1, 2);
        moveCell(startCell, endCell)
    }
}


/* Function to update the board when the current move is undone */
function showPrevBoard(game) {
    // Remove highlighting from the move
    moveSpans[game.move].classList.remove("highlight");
    
    // Read the notation for of current move 
    let moveStr = game.moves[game.move];
    
    if (moveStr === "1-0") {
        // Do nothing in reverse
    } else if (moveStr === "0-1") {
        // Do nothing in reverse
    } else if (moveStr === "1/2-1/2") {
        // Do nothing in reverse
    } else if (moveStr === "0-0") {
        kingSideCastle();
    } else if (moveStr === "0-0-0") {
        queenSideCastle();
    } else if (moveStr.includes("=")) {
        pawnDemotion();
    } else if (moveStr.includes("x")) {
        addPiece();
    } else if (moveStr.includes("-")) {
        movePiece();
    }
    
    // Reduce the move number by 1
    game.move--;
    
    // Move the piece back from its ending cell to its starting cell
    function moveCell(start, end) {    
        document.getElementById(end).appendChild(document.getElementById(start).firstElementChild);      
    }
    
    // Move a captured piece from its box back to the board
    function addCell(cell) {
        // Moves a captured piece to the box
        if (game.move % 2 === 0) {    // move the black piece back to the board
            document.getElementById(cell).appendChild(blackBox.lastElementChild);
        } else {                      // move the white piece back to the board
            document.getElementById(cell).appendChild(whiteBox.lastElementChild);
        }
    }
    
    // Perform a kingside caste in reverse
    function kingSideCastle() {
        if (game.move % 2 === 0) {  // white kingside castle
            moveCell("g1", "e1");
            moveCell("f1", "h1");
        } else {                    // black kingside castle
            moveCell("g8", "e8");
            moveCell("f8", "h8");
        }
    }
    
    // Perform a queenside castle in reverse
    function queenSideCastle() {
        if (game.move % 2 === 1) {  // white queenside castle
            moveCell("c1", "e1");
            moveCell("d1", "a1");
        } else {                    // black queenside castle
            moveCell("c8", "e8");
            moveCell("d8", "a8");
        }
    }
    
    // Demote a pawn that had reached the end rank
    function pawnDemotion() {
        let mIndex = moveStr.indexOf("-");
        let startCell = moveStr.substr(mIndex + 1,2);
        let endCell = moveStr.substr(mIndex - 2, 2);
        moveCell(startCell, endCell); 
        let newPiece = moveStr.charAt(moveStr.length - 1);
        let rankNum;   
        if (game.move % 2 === 1) {   // move was made by black change unicode to black piece image
            rankNum = 9823;
        } else {
            rankNum = 9817;
        }
        
        // Change image to promoted piece
        document.getElementById(endCell).firstElementChild.innerHTML = "&#" + rankNum + ";";
        
    }
    
    // Find the addresses of the starting and ending cell during a capture
    function addPiece() {
        let tIndex = moveStr.indexOf("x");
        let startCell = moveStr.substr(tIndex + 1,2);
        let endCell = moveStr.substr(tIndex -2, 2);
        moveCell(startCell, endCell);
        addCell(startCell);
    }
    
    // Find the addresses of the starting and ending cell during a move
    function movePiece() {
        let mIndex = moveStr.indexOf("-");
        let startCell = moveStr.substr(mIndex + 1,2);
        let endCell = moveStr.substr(mIndex -2, 2);
        moveCell(startCell, endCell);
    }
}


