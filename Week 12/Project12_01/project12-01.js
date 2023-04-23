"use strict";
/*    
	Louis Fennell III, April 06, 2023, IST-239-W01, Hands-On Project 12-1
		
	This file, project12-01.js, is the JavaScript file for the Hands-On Project 12-1. This 
	JavaScript code is jQuery code used to display a dropdown menu of 3 to 4 options when the user
	hovers over a menu item (visually, the menu items are Cruises, Rates, and Directions). This
	jQuery code uses the mouseover and mouseout events to call the show() and hide() methods on
	the submenu's children (ul) to display and hide the submenus.
	
	JavaScript 7th Edition
	Chapter 12
	Project 12-01

	Project to display a dropdown menu
	Author: Louis Fennell III
	Date:   4/06/2023

	Filename: project12-01.js
*/

/* Window load event listener that runs an anonymous function when the event (load) is detected.
This function runs once the page is loaded and ready. */
$( () => {
	
	/* Runs another anonymous function when the mouseover event is detected on the list submenu 
	("li.submenu"). */
	$("li.submenu")
	/* Runs an anonymous function when the mouseover event is detected on the list submenu that 
	will cause the submenu's ("li.submenu" or e) children ("ul") to be displayed (show()). */
    .mouseover(e => {
		$(e.currentTarget).children("ul").show();
	})
    
	/* Runs another anonymous function when the mouseover event is detected on the list submenu 
	(e or, "li.submenu"). */
	.mouseout(e => {
		/* Runs an anonymous function when the mouseout event is detected on the list submenu that
		will cause the submenu's ("li.submenu" or e) children ("ul") to be hidden (hide()). */
		$(e.currentTarget).children("ul").hide();
	});
	
});
