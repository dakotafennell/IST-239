/*    
      Louis Fennell III, January 16, 2023, IST-239-W01, Hands-On Project 2-3

      This JavaScript code will change the HTML element with the ID "feedback",
      to display a message of which shape that the mouse is hovered over. When 
      the user moves their mouse off of the current element, ("square", 
      "triangle", "circle"), the "feedback" element text will be reset back to
      blank.


      JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Louis Fennell III
      Date:   01/16/23

      Filename: project02-03.js
 */

/* Gets the HTML element with the ID "square", and uses an event listener to 
detect when that element is moused over. When that is detected an anonymous 
function changing the "feedback" element text. */
document.getElementById("square").onmouseover = function() {
      /* Changes the element with the ID "feedback" to let the user know what shape they
      are hovering over. */
      document.getElementById("feedback").innerHTML = "You're hovering over the square.";
}

/* Gets the HTML element ID square, when the mouse is moved away from, calls an anonymous function changing the 
"feedback" element text back to nothing. */
document.getElementById("square").onmouseout = function() {
      /* Changes the element with the ID "feedback" back to blank when the user
      moves their mouse away. */
      document.getElementById("feedback").innerHTML = "";
}

/* Gets the HTML element ID triangle, when moused over, and calls an anonymous function changing the 
"feedback" element text. */
document.getElementById("triangle").onmouseover = function() {
      /* Changes the element with the ID "feedback" to let the user know what shape they
      are hovering over. */
      document.getElementById("feedback").innerHTML = "You're hovering over the triangle.";
}

/* Gets the HTML element ID square, when the mouse is moved away from, calls an anonymous function changing the 
"feedback" element text back to nothing. */
document.getElementById("triangle").onmouseout = function() {
      /* Changes the element with the ID "feedback" back to blank when the user
      moves their mouse away. */
      document.getElementById("feedback").innerHTML = "";
}

/* Gets the HTML element ID circle, when moused over, and calls an anonymous function changing the 
"feedback" element text. */
document.getElementById("circle").onmouseover = function() {
      /* Changes the element with the ID "feedback" to let the user know what shape they
      are hovering over. */
      document.getElementById("feedback").innerHTML = "You're hovering over the circle.";
}

/* Gets the HTML element ID square, when the mouse is moved away from, calls an anonymous function changing the 
"feedback" element text back to nothing. */
document.getElementById("circle").onmouseout = function() {
      /* Changes the element with the ID "feedback" back to blank when the user
      moves their mouse away. */
      document.getElementById("feedback").innerHTML = "";
}