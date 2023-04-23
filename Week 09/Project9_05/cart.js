"use strict";
/*   
   Louis Fennell III, March 6, 2023, IST-239-W01, Hands-On Project 9-5
   
   This file, cart.js, is one of two JavaScript files for the Hands-On Project 9-5. This JavaScript 
   file will pull data from a local storage object and display it in a table on the cart.html page.
   This local storage object is created and updated in the order.js file. This file will use the 
   function, displayCart() to create the table using an if statement and then a for loop to iterate
   through the local storage object to create a new row for each product in the cart.

   JavaScript 7th Edition
   Chapter 9
   Project 09-05

   Project to add orders to shopping cart web storage
   Author: Louis Fennell III
   Date:   03/06/2023

   Filename: cart.js
*/

/* Declares the variable, cartContainer, and assigns it the value of the element with the id
"cartContainer". */
let cartContainer = document.getElementById("cartContainer");

/* Adds an event handler that will call the displayCart() function when the page loads. */
window.addEventListener("load", displayCart);

/* Defines the function, displayCart(). This function will construct the table containing items
placed in the shopping cart. */
function displayCart() {

   /* If statement that determines if the getItem() method returns "itemsInCart", then
   the itemTotal variable is assigned the value of the sessionStorage item, itemsInCart. If
   the getItem() method does not return "itemsInCart", then the itemTotal variable is assigned
   the value of 1. Corrected method, get(itemsInCart) to, getItem("itemsInCart"), adding the 
   required "" marks around the key and correcting the get() method to getItem(). */
   if (sessionStorage.getItem("itemsInCart")) {
      /* Declares the variable, itemTotal, and assigns it the value of the sessionStorage
      item, itemsInCart. */
      let itemTotal = sessionStorage.getItem("itemsInCart");
      
      /* Declares the variable, cartTable, and assigns it a new table element in the document. */
      let cartTable = document.createElement("table");
      // Assigns the cartTable elements id to "cartTable".
      cartTable.id = "cartTable";
      /* Declares the variable, tableHeader, and assigns it the value of a table row element in the
      document containing the item descriptors, Product, Description, Quantity, and Price. */
      let tableHeader = `<tr><th>Product</th><th>Description</th><th>Qty</th><th>Price</th>`;
      // Assigns the tableHeader variable to the cartTable variables innerHTML.
      cartTable.innerHTML = tableHeader;
      
      // For each item in the shopping cart, write a table row
      /* For loop that iterates through the items in the shopping cart and writes a table row for
      each item. */
      for (let i = 1; i <= itemTotal; i++) {
         
         // Retrieve information about a product added to the cart
         /* Declares the variable, productArr, and assigns it the value of the sessionStorage
         item, cartItem + i splitting each item with an ampersand (&). Corrected 
         session.getItem("cartItem" + i).split(";") to sessionStorage.getItem("cartItem" + i).split(" & ") */
         let productArr = sessionStorage.getItem("cartItem" + i).split(" & ");
         /* Declares the variable, newRow, and assigns it a new table row element in the document. */
         let newRow = document.createElement("tr");
         
         // Display the name of the product
         /* Declares the variable, productCell, and assigns it a new table data element in the
         document. */
         let productCell = document.createElement("td");
         /* Sets the textContent of the productCell variable to the first item ( [0] )  in the productArr
         array. */
         productCell.textContent = productArr[0];
         /* Appends the productCell variable to the newRow variable. */
         newRow.appendChild(productCell);
         
         // Display a description of the product (size and color)
         /* Declares the variable, descriptionCell, and assigns it a new table data element in the
         document. */
         let descriptionCell = document.createElement("td");
         /* Sets the textContent of the descriptionCell variable to the fourth and fifth items ( [3] and
         [4] ) in the productArr array separated by a comma. */
         descriptionCell.textContent = productArr[3] + ", " + productArr[4];
         /* Appends the descriptionCell variable to the newRow variable. */
         newRow.appendChild(descriptionCell);
         
         // Display the quantity ordered
         /* Declares the variable, qtyCell, and assigns it a new table data element in the
         document. */
         let qtyCell = document.createElement("td");
         /* Sets the textContent of the qtyCell variable to the third item ( [2] ) in the productArr
         array. */
         qtyCell.textContent = productArr[2];
         /* Appends the qtyCell variable to the newRow variable. */
         newRow.appendChild(qtyCell); 
         
         // Display the price of the item
         /* Declares the variable, priceCell, and assigns it a new table data element in the
         document. */
         let priceCell = document.createElement("td");
         /* Sets the textContent of the priceCell variable to the second item ( [1] ) in the productArr
         array. */
         priceCell.textContent = productArr[1];
         /* Appends the priceCell variable to the newRow variable. */
         newRow.appendChild(priceCell); 
         
         /* Appends the newRow variable to the new table stored in the cartTable variable. */
         cartTable.appendChild(newRow);
      }
      
      /* Appends the cartTable variable to the cartContainer variable. */
      cartContainer.appendChild(cartTable);
   }
}