"use strict";
/*    
    Louis Fennell III, February 26, 2023, IST-239-W01, Hands-On Project 8-5

    This file, objects.js, contains the JavaScript code for the Chess Objects used for Chess Games 
    project. This file is linked to the project08-05.html file. This JavaScript code holds the 
    functions for the chess piece and chess set objects. The chessSet(game) function places the 
    chess pieces in their positions and uses switch statements to determine the color and rank of
    each piece. The chessSet(game) function also uses a switch statement to determine the image
    for each piece.


    JavaScript 7th Edition
    Chapter 8
    Project 08-05

    Chess Objects used for Chess Games
    Author: Louis Fennell III
    Date:   02/26/2023

    Filename: project08-05.js
*/

/* Defines the constructor function, piece, which creates a new chess piece object with the 
arguments, color and rank. */
function piece(color, rank) {
    /* The color and rank properties are set to the values of the arguments, color and rank.
    The square and image properties are set to null. Added missing this. statement to the beginning
    of color, rank, square, and image. */
    this.color = color;    // the color of the piece (white or black)
    this.rank = rank;      // the piece rank (Pawn, Knight, Bishop, Rook, Queen, King)
    this.square = null;    // the square the piece occupies
    this.image = null;     // stores the HTML code representing the image of the piece
}

// Constructor Function for a Chess Set
/* Defines the constructor function, chessSet function creates a new chessSet object with the 
argument, game. */
function chessSet(game) {
    /* The pieces property is set to an empty array. */
    this.pieces = []; // empty array of chess pieces used in the game 
    
    /* For loop that loops through the chess board rows. */
    for (let i = 0; i < 8; i++) {         // loop through the chess board rows
        /* Nested for loop that loops through the chess board columns. */
        for (let j = 0; j < 8; j++) {      // loop through the chess board columns
            /* If statement that checks if the length of the string in the game.board array at
            the current row and column is equal to 2. */
            if (game.board[i][j].length === 2) {
                /* Declares the variable, color, and sets it to the color of the chess piece
                at the current row and column. */
                let color = (game.board[i][j].charAt(0) === "B") ? "Black" : "White";
                /* Declares the variable, rank, and sets it to the rank of the chess piece
                at the current row and column. */
                let rank = "";
                /* Switch statement that sets the rank variable to the appropriate rank of the
                chess piece. */
                switch (game.board[i][j].charAt(1)) {
                case "P" : rank = "Pawn"; break;
                case "N" : rank = "Knight"; break;
                case "B" : rank = "Bishop"; break;
                case "R": rank = "Rook"; break;
                case "Q" : rank = "Queen"; break;
                case "K" : rank = "King"; break;
                }
                
                // Define a new chess piece
                /* Declares the variable, chessPiece, and sets it to a new piece object with the
                arguments, color and rank. Fixed the capitalization error in the piece object from
                Piece to piece. */
                let chessPiece = new piece(color, rank);
                /* Sets the square property of the chessPiece object to the appropriate square
                on the chess board. */
                chessPiece.square = String.fromCharCode(j + 97) + (8 - i);
                /* Declares the variable, image, and sets it to an empty string. */
                let image = "";
                /* Switch statement that sets the image property of the chessPiece object to the
                appropriate HTML code for the piece. */
                switch (game.board[i][j]) {
                case "BP" : image = "&#9823;"; break;
                case "BN" : image = "&#9822;"; break;
                case "BB" : image = "&#9821;"; break;
                case "BR" : image = "&#9820;"; break;
                case "BQ" : image = "&#9819;"; break;
                case "BK" : image = "&#9818;"; break;
                case "WP" : image = "&#9817;"; break;
                case "WN" : image = "&#9816;"; break;
                case "WB" : image = "&#9815;"; break;
                case "WR" : image = "&#9814;"; break;
                case "WQ" : image = "&#9813;"; break;
                case "WK" : image = "&#9812;"; break;                  
                }
                /* Sets the image property of the chessPiece object to the value of the image
                variable. */
                chessPiece.image = image;
                /* Adds the chessPiece object to the pieces array of the chessSet object. */
                this.pieces.push(chessPiece);
            }
        }
    }
   
}
