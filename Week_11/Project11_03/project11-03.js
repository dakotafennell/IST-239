"use strict";
/*    
	Louis Fennell III, March 23, 2023, IST-239-W01, Hands-On Project 11-3
		
	This file, project11-03.js, is the JavaScript file for the Hands-On Project 11-3. This project
	is an application that retrieves customer orders for a fireworks and pyrotechnics brand, 
	Wizard Works. This JavaScript code will retrieve the orders from the Perl script file,
   wworders.pl. Once the orders are retrieved, the javascript will create a table that displays 
   each item ordered (description), the quantity (qty), the price (price) for each item, and the
   total price (total).

	JavaScript 7th Edition
	Chapter 11
	Project 11-03

	Project to retrieve order history from a web server
	Author: Louis Fennell III
	Date:   3/28/2023

	Filename: project11-03.js
*/

/* Declares the variable, orderResult and assigns it the value of the element with the id, 
"orderResult". */
let orderResult = document.getElementById("orderResult");
/* Declares the variable, userIDBox and assigns it the value of the element with the id, "userID". */
let userIDBox = document.getElementById("userID");
/* Declares the variable, pwdBox and assigns it the value of the element with the id, "pwd". */
let pwdBox = document.getElementById("pwd");


// Retrieve order history when the View Orders button is clicked
/* Calls an anonymous function when the onclick event handler is detected on the viewOrders 
element. */
viewOrders.onclick = function() {
   /* Declares the variable, user and assigns it the value of the userIDBox. */
	let user = userIDBox.value;
   /* Declares the variable, pwd and assigns it the value of the pwdBox. */
   let pwd = pwdBox.value;
   /* Fetches the users order history from the JSON data stored inside the Perl script file, 
   wworders.pl. Uses the user and pwd (password) objects to retrieve the specific users JSON data. */
   fetch(`wworders.pl?id=${user}&pwd=${pwd}`)
   // Then calls the response method on the json object
   .then(response => response.json())
   // Then calls the buildOrderTable function with the json object as the parameter.
   .then(json => buildOrderTable(json))
   // Catches any errors and logs them to the console
   .catch(error => console.log(error));
}


// Function to display order history within web tables
function buildOrderTable(obj) {
   /* If the object status matches "Orders Not Found", sets the innerHTML of the orderResult 
   element to a message letting the user know there are no orders found for the inputted 
   information */
	if (obj.status === "Orders Not Found") {
      orderResult.innerHTML = "No orders found for this user id and password";
   /* Else, declares the variable, htmlCode and assigns it the value of a table with the id, 
   "summary" and a table row with a table header and table data element. The table header element
   has the text, "Name" and the table data element has the value of the username property of the
   object. The table row is closed and another table row is opened with a table header and table 
   data element. The table header element has the text, "Total Charges" and the table data element 
   has the value of the totalCharges property of the object the table is then closed. */

   /* Else, declares the variable, htmlCode and assigns it the value of a table with the id,
   "summary". The first section of the table displays the users name and the total charges for
   all of their orders. */
   } else {
      let htmlCode = `<table id="summary">
                   <tr><th>Name</th><td>${obj.username}</td>
                   <tr><th>Total Charges</th><td>${obj.totalCharges}</td></tr>
                   </table>`;
      
      /* For of loop that loops through each item in the orderHistory property of the object. */
      for (let orders of obj.orderHistory) {
         /* Adds a new table element to the htmlCode variable. The table element has a class of
         "orderList". This section of the table will display the date of the order on the top left 
         and the total cost of the order on the top right. The next row displays the table headers,
         Description, Qty, Price, and Total. */
         htmlCode += `<table class="orderList">
                      <tr><th colspan="2">${orders.orderDate}</th><th colspan="2">${orders.orderCost}</th></tr>
                      <tr><th>Description</th><th>Qty</th><th>Price</th><th>Total</th></tr>`
         /* For of loop for each item in the products property of the orders object, a new table 
         row with an item description cell, an item quantity cell, an item price cell, and an item 
         total cell is added to the htmlCode variable. */
         /* For of loop that loops through each item in the products property of the orders object. */
         for (let items of orders.products) {
            /* Adds a new table row to the htmlCode variable. This table row will display each item
            in the order along with its description, quantity, price, and total. */
            htmlCode += `<tr><td>${items.description}</td><td>${items.qty}</td><td>${items.price}</td><td>${items.total}</td></tr>`;
         }
         // Adds a closing table element (</table>) to the end of the htmlCode variable.
         htmlCode += `</table>`
      }
      
      // Sets the innerHTML of the orderResult element to the htmlCode variable.
      orderResult.innerHTML = htmlCode;
   }
}

