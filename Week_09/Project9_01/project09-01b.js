"use strict";
/*    
    Louis Fennell III, March 6, 2023, IST-239-W01, Hands-On Project 9-1

    This file, project09-01b.js, is the JavaScript file, linked to the project09-01b.html file, for
    the Hands-On Project 9-1. This file creates a Query that is used to access the page, 
    project09-01a.html, and take the data stored in its form, and place it into an array. This 
    array is then looped through using a for of loop to assign the information in it, to the proper
    matching HTML elements inside of the greeting message table (<table id="greeting">).

    JavaScript 7th Edition
    Chapter 9
    Project 09-01

    Project to read field values from a query string
    Author: 
    Date:   

    Filename: project09-01b.js
*/
/* Declares the variable, query, and assigns it the value of the text after the first character of 
the location.search objects, slice() method. */
let query = location.search.slice(1);

// Replace the encoded characters in the query string
query = query.replace(/\+/g, " ");
query = decodeURIComponent(query);

// Split the field=name pairs into separate array items
/* Declares the variable, cardFields and assigns it the value of the query string after splitting 
it and applying the regular expression. */
let cardFields = query.split(/&/g);

/* For of loop that 
*/
for (let items of cardFields) {
    // Extract the field names and values
    let nameValue = items.split(/=/);
    /* Declares the variable, name and assigns it the value of the item in the 0th position of the
    array, nameValue. */
    let name = nameValue[0];
    /* Declares the variable, value and assigns it the value of the item in the 1st position of the
    array, nameValue. */
    let value = nameValue[1];
    
    /* Sets the textContent of the element with the id of the name variable (0th position of the 
    nameValue array), to the value variable (1st position of the nameValue array). */
    document.getElementById(name).textContent = value;
}