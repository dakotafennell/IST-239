"use strict";
/*    
    Louis Fennell III, February 05, 2023, IST-239-W01, Hands-On Project 5-3
    
    THis project, project05-03.js, is intended to be a simple project that will create an 
    unordered list out of the HTML heading elements, that will contain the titles of the 
    amendments. This will create a clickable list on the left side of the web page that will
    allow the user to jump directly to the amendment they want to read the details of. This code
    uses a for loop to loop through HTML elements stored in the variable, sourceDoc, and will stop
    when the value of the variable, n, is null. This loop will create this clickable list which at
    the end of the loop will be stored in the variable, toc.

    JavaScript 7th Edition
    Chapter 5
    Project 05-03

    Project to create a table of headings from an article
    Author: 
    Date:   

    Filename: project05-03.js
*/

// Declare variables
/* Declares the variable, sourceDoc, initializing it with the let keyword and setting the variable's
value as the HTML element with the ID, "source_doc". */
let sourceDoc = document.getElementById("source_doc");
/* Declares the variable, toc, initializing it with the let keyword and setting the variable's
value as the HTML element with the ID, "toc". */
let toc = document.getElementById("toc");
/* declares the variable, headingCount, initializing it with the let keyword and setting the 
variable's initial value to 1. */
let headingCount = 1;
/* Declares the constant, heading, initializing it with the const keyword and setting the 
constant's value to the HTML element, h2. */
const heading = "H2";

/* For loop that will loop through the HTML elements in the variable, sourceDoc, and will stop
when the value of the variable, n, is null. */
for (let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
    /* If statement that will check if the value of the variable, n's nodeName attribute is equal
    to the value of the constant, heading. */
    if (n.nodeName === heading) {
        /* Declares the variable, anchor, initializing it with the let keyword and setting the
        variable's value to create the HTML element, "a". */
        let anchor = document.createElement("a");
        /* Sets the value of the anchor's name attribute to the string, "doclink" plus the value of
        the value of the variable, headingCount. */
        anchor.name = "doclink" + headingCount;
        /* Inserts the anchor element before the first child element of the variable, n. */
        n.insertBefore(anchor, n.firstElementChild);
    
        /* Declares the variable, listItem, initializing it with the let keyword and setting the
        variable's value to create the HTML element, "li" which is a list. */
        let listItem = document.createElement("li");
        /* Declares the variable, link, initializing it with the let keyword and setting the
        variable's value to create the HTML element, "a". */
        let link = document.createElement("a");
        /* Appends the variable, link, as a child to the variable, listItem. */
        listItem.appendChild(link);

        /* Sets the value of the link's textContent attribute to the value of the variable, n's
        textContent attribute. */
        link.textContent = n.textContent;
        /* Sets the value of the link's href attribute to the string, "#" plus the string, "doclink"
        plus the value of the variable, headingCount. */
        link.href = "#" + "doclink" + headingCount;
        
        /* Appends the variable, listItem, as a child to the variable, toc. This adds each list item
        to the table of contents ("toc" element). */
        toc.appendChild(listItem);
        
        /* Increments the value of the variable, headingCount by 1. */
        headingCount++;
    }
 }