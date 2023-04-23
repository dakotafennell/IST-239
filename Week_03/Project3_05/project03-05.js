/*    
   Louis Fennell III, January 23, 2023, IST-239-W01, Hands-On Project 3-5

   This project is a website that uses two arrays to generate a horizontal bar 
   chart of phone sales. The first array contains the names of the phone models
   sold by the company. The second array contains the number of units sold for
   each phone model in the previous quarter. The total number of units sold is
   calculated using the forEach() method. The bar chart is generated using a 
   for loop. The bar chart is inserted into the first tbody element in the web
   document. The bar chart is created using a table with one row for each phone
   model. The first column of each row contains the name of the phone model and
   the total number of units sold. The second column contains a bar chart of 
   the percentage of total sales for each phone model. The bar chart is created
   using a table cell for each percentage value in the barPercent variable. The
   class of the table cell is determined using a switch statement. The bar 
   chart is formatted using CSS.

   JavaScript 7th Edition
   Chapter 3
   Project 03-05

   Application to generate a horizontal bar chart
   Author: Louis Fennell III
   Date:   01/23/2023

   Filename: project03-05.js
*/

/* Sets the array, phones, initial value of phone models sold by the company. 
Changed () to [] */
let phones = ["Photon 6E", "Photon 6X", "Photon 7E", "Photon 7X", "Photon 8P"]; // 

/* Sets the array, sales, initial value of the units sold in the previous 
quarter. */
let sales = [10281, 12255, 25718, 21403, 16142]; // Changed () to []

/* Sets the initial value of the variable, totalSales as 0. totalSales is used 
to calculate total sales. */
let totalSales = 0;

/* Uses the forEach() method to sum the sales for each phone model and add that
value to the totalSales variable. */
sales.forEach(addToTotal); // changed from addtoTotal to addToTotal.

/* For loop that will be used to generate the bar chart of phone sales. Error
fixed by changing, i = 1 to i = 0 and <= to <. */ 
for (let i = 0; i < phones.length; i++) {
   
   /* Sets the initial value of the variable, barChart, to an empty string.
   This variable is used to store HTML code for table cells used to create bar
   chart. */
   let barChart = "";
   
   /* Lets the variable, barPercent, be the percent of total sales for a 
   particular phone model by multiplying the value in the [i] position of the 
   sales array by 100, then dividing the value in the totalSales from that 
   value. */
   let barPercent = 100*sales[i]/totalSales;
   
   /* Sets the initial value of the variable, cellTag, to an empty string. This
   variable is used to store the class of td elements used in creating the bar 
   */
   let cellTag; // Variable that will define the class of td elements used in creating the bar chart cells.
   
   /* Switch statement to determine the table cell based on the value of the 
   phone model. */
   switch (phones[i]) {
      /* If the value of the phone model is "Photon 6E", the value of the 
      cellTag will be "<td class='group1'>". Added missing : between the case
      statement and cellTag variable. */
      case "Photon 6E" : cellTag = "<td class='group1'>"; break;
      /* If the value of the phone model is "Photon 6X", the value of the 
      cellTag will be "<td class='group2'>". Added missing : between the case
      statement and cellTag variable. */
      case "Photon 6X" : cellTag = "<td class='group2'>"; break;
      /* If the value of the phone model is "Photon 7E", the value of the 
      cellTag will be "<td class='group3'>". Added missing : between the case
      statement and cellTag variable. */
      case "Photon 7E" : cellTag = "<td class='group3'>"; break;
      /* If the value of the phone model is "Photon 7X", the value of the 
      cellTag will be "<td class='group4'>". Added missing : between the case
      statement and cellTag variable. */
      case "Photon 7X" : cellTag = "<td class='group4'>"; break;
      /* If the value of the phone model is "Photon 8P", the value of the 
      cellTag will be "<td class='group5'>". Added missing : between the case
      statement and cellTag variable. */
      case "Photon 8P" : cellTag = "<td class='group5'>"; break;
   }
   
   /* Table cell containing information on phone and total sales (formatted 
      using a thousands-separator). */
   barChart += "<tr><th>" + phones[i] + " (" + formatNumber(sales[i]) + ")</th>";
   
   /* For loop to create a table cell, 1 for each percentage value in the 
   barPercent variable */
   for (let j = 0; j <= barPercent; j++) {
      // Adds the table cell to the barChart variable.
      barChart += cellTag + "</td>";
   }
   // Closes the table row.
   barChart += "</tr>";

   /* Inserts the barChart HTML code into the first tbody element in the HTML. 
   Added a missing [0] after ("tbody"). */
   document.getElementsByTagName("tbody")[0].insertAdjacentHTML("beforeEnd", barChart);
}


/* The function, addToTotal(arrValue), is a callback function that adds the 
value of each array element to the totalSales variable. */
function addToTotal(arrValue) {
   // Adds the value of the arrValue variable to the totalSales variable.
   totalSales += arrValue;
}


/* Function, formatNumber(value), takes a number value and returns it as a text
string with a thousands separator */
function formatNumber(value) {
   return value.toLocaleString();
}