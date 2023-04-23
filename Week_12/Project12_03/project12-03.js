"use strict";
/* 
	Louis Fennell III, April 06, 2023, IST-239-W01, Hands-On Project 12-3

	This file, project12-03.js, is the JavaScript file for the Hands-On Project 12-3. This jQuery
	JavaScript code will display the contents of the two lists, Ingredients or Directions (both
	displayed in heading elements (h2)) when the user clicks on the heading element using a click 
	event handler that then calls an anonymous function to display the contents of the two lists 
	using the slideToggle() method.
	
   JavaScript 7th Edition
	Chapter 12
	Project 12-03

	Project to show a recipe with expanding/contracting content
	Author: Louis Fennell III
	Date:   4/06/2023

	Filename: project12-03.js
*/

/* Click event listener that runs an anonymous function when the event (click) is detected. This 
function will display the contents of the two lists, Ingredients or Directions (both displayed in 
heading elements (h2). */
$("article > h2").click(e => {
	
	/* Declares the variable, heading and assigns it to reference the target of the click event. */
	let heading = $(e.target);
	/* Declares the variable, list and assigns it to reference the next (.next()) sibling element of 
	the heading variable. */
	let list = $(heading).next();
	/* Declares the variable, list and assigns it to reference the children of the heading variable
	that's tag name is "img". */
	let headingImage = $(heading).children("img");
	
	/* Alternates between showing and hiding the contents of the lists by applying the 
	slideToggle() method to the list over a half a second (500 milliseconds). */
	$(list).slideToggle(500);
	
	/* If the src attribute value of headingImage matches "plus.png", it is changed to "minus.png". */
	if ($(headingImage).attr("src") === "plus.png") {
		$(headingImage).attr("src", "minus.png");
	/* Else, change the src attribute value of headingImage to "plus.png". */
	} else {
		$(headingImage).attr("src", "plus.png");
		}
	
});
