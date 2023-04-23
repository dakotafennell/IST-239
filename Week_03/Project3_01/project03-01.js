/*    
    Louis Fennell III, January 23, 2023, IST-239-W01, Hands-On Project 3-1

    This project is intended to be a simple system for choosing your lunch meal
    order and when each item checkbox is clicked, the total cost of the order 
    is displayed (value stored inside the orderTotal variable). This project
    uses a for loop to loop through an array, menuItems, and determines if an
    item has been checked. If an item has been checked, the value of the item
    is then added to the orderTotal variable and display on the right side of
    the screen.

    JavaScript 7th Edition
	Chapter 3
	Project 03-01

	Application to calculate total order cost
	Author: Louis Fennell III
	Date:   01/23/2023

	Filename: project03-01.js
*/

/* Sets the variable menuItems as an array that contains every item with the
class name "menuItem". */
let menuItems = document.getElementsByClassName("menuItem");

/* For loop that sets i as equal to 0 (let i = 0;), while i is less than the 
length (amount) of items stored in the menuItems variable, and adds 1 to i 
every loop. */
for (let i = 0; i < menuItems.length; i++) {
    /* loops through every item in the menuItems variable and uses an event 
    listener to detect if an item has been clicked and gets the current order
    total (calcTotal) as well. */
	menuItems[i].addEventListener("click", calcTotal)
}

/* This function, calcTotal(), adds the values of the selected check boxes 
together and displays the total. */
function calcTotal() {
    /* Sets the variable orderTotal as equal to 0. */
	let orderTotal = 0;

    /* For loop that sets i as equal to 0 (let i = 0;), while i is less than 
    the length (amount) of items stored in the menuItems variable, and adds 
    1 to i every loop. */
	for (let i = 0; i < menuItems.length; i++) {
        /* If statement to detect if an item in the menuItem array is 
        checked. */
		if (menuItems[i].checked) {
            /* Counter to add the value of the menuItems (if checked), converted
            to a number, to the orderTotal. */
			orderTotal += Number(menuItems[i].value);
		}
	}

    /* Sets the element with the ID, "billTotal" to what the orderTotal value
    is, formatted using the formatCurrency function. */
	document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

/* Function, formatCurrency(value), displays a numeric value as a text string 
in the format $##.##. */
function formatCurrency(value) {
    // Returns the value of the variable, value, formatted as a currency value.
    return "$" + value.toFixed(2);
}