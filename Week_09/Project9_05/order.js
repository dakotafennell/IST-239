"use strict";
/*    
   Louis Fennell III, March 6, 2023, IST-239-W01, Hands-On Project 9-5

   This file, order.js, is one of two JavaScript files for the Hands-On Project 9-5. This JavaScript
   file will create and update a local storage object that will store the information (product, 
   price, quantity, color, and size) of the items added to the users shopping cart. This local
   storage object is then accessed by the cart.js file to display the items in the shopping cart in
   a new table element on the cart.html page.

   JavaScript 7th Edition
   Chapter 9
   Project 09-05

   Project to add orders to shopping cart web storage
   Author: Louis Fennell III
   Date:   03/06/2023

   Filename: orders.js
*/

// Page Objects
/* Declares the variable, submitButton, and assigns it the value of the element with the id 
"submitButton". */
let submitButton = document.getElementById("submitButton");
/* Declares the variable, product, and assigns it the value of the element with the id
"product". */
let product = document.getElementById("product");
/* Declares the variable, price, and assigns it the value of the element with the id
"price". */
let price = document.getElementById("price");
/* Declares the variable, quantity, and assigns it the value of the element with the id
"quantity". */
let quantity = document.getElementById("quantity");
/* Declares the variable, size, and assigns it the value of the element with the id
"size". */
let size = document.getElementById("size");
/* Declares the variable, color, and assigns it the value of the element with the id
"color". */
let color = document.getElementById("color");

/* Creates an event handler that will call an anonymous function on the submitButton element when
the submitButton element is clicked. */
submitButton.onclick = function() {
   // Declares the variable, itemTotal. Assigning the variable no initial value.
   let itemTotal;
   /* If statement that checks if the sessionStorage object item, itemsInCart has a value. If a 
   value is returned, then 1 is added to the current value stored in the itemTotal variable. 
   Corrected the coding error that the itemsInCart is not surrounded by quotation marks. */
   if (sessionStorage.getItem("itemsInCart")) {
      /* Converts the string value of the "itemsInCart" item into an integer and adds 1 to that 
      integer.  Corrected itemsInCart to "itemsInCart" since the key in a key: value pair must be
      surrounded in quotation marks., changing getItem(itemsInCart) to getItem("itemsInCart"). */
      itemTotal = parseInt(sessionStorage.getItem("itemsInCart")) + 1;
   /* Else getItem() method returns null, then itemTotal is assigned the value of 1. */
   } else {
      // Assigns the value of 1 to the variable, itemTotal.
      itemTotal = 1;
   }
   
   // Store the number of items in the shopping cart
   /* Calls the setItem() method on the sessionStorage object, passing the arguments, "itemsinCart"
   and itemTotal. Corrected itemsInCart to "itemsInCart" since the key in the key: value pair must
   be surrounded in quotation marks. */
   sessionStorage.setItem("itemsInCart", itemTotal); // Changed itemsInCart to "itemsInCart".
   
   /* Declares the variable, itemText and assigns it the value of the product variable plus the 
   text string, " & " to separate the product.value from the following value. Fixed text string
   to add space between each value, changing "&" to " & ". This variable will store a text string
   that describes the product added to the cart. */
   let itemText = product.value + " & ";
   /* Adds the value of the price variable plus the text string " & ", to separate the price.value 
   from the following value, to the itemText variable. Fixed text string to add space between each 
   value, changing "&" to " & ". */
   itemText += price.value + " & ";
   /* Adds the value of the quantity variable plus the text string " & ", to separate the 
   quantity.value from the following value, to the itemText variable. Fixed text string to add 
   space between each value, changing "&" to " & ". */
   itemText += quantity.value + " & ";
   /* Adds the value of the size variable plus the text string " & ", to separate the size.value
   from the following value, to the itemText variable. Fixed text string to add space between each
   value, changing "&" to " & ". */
   itemText += size.value + " & ";
   /* Adds the value of the color variable to the itemText variable. */
   itemText += color.value;

   /* Create a new shopping cart storage item with the key name "cartItem" plus the item number
   by calling the setItem() method on the sessionStorage object with the key value, "cartItem" plus
   the values in the variables, itemTotal and itemText. */
   sessionStorage.setItem("cartItem" + itemTotal, itemText);
   
}