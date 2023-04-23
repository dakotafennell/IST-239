"use strict";
/*  
    Louis Fennell III, March 6, 2023, IST-239-W01, Hands-On Project 9-3
    
    In this project you will use web storage on a blogging site that posts news commentary and 
    articles from the world of sports. The website will record the date and time of your last visit
    in a local storage item. Links to articles that have been posted to the website after that date 
    and time will be marked with the text string “New”. Articles that were already posted during 
    your last visit will not be marked. The website will also store the date and time of the user’s
    last visit in a local storage object with the key named “sbloggerVisit”.

    JavaScript 7th Edition
    Chapter 9
    Project 09-03

    Project to retrieve date of last visit from web storage and mark new article
    Author: 
    Date:   

    Filename: project09-03.js
*/

/* Page Objects */

/* Declares the variable, lastVisitDate and assigns it the value of the element with the id of 
lastVisitDate. */
let lastVisitDate = document.getElementById("lastVisitDate");
/* Declares the variable, articleDates and assigns it the value of the elements with the class of
posttime. */
let articleDates = document.getElementsByClassName("posttime");

/* If the local storage object has a key named sbloggerVisit, the following code executes. */
if (localStorage.sbloggerVisit) {
    /* Declares the variable, storedLastDate and assigns it the value of the local storage object
    with the key named sbloggerVisit. */
    let storedLastDate = localStorage.getItem("sbloggerVisit");
    /* Assigns the text content of the element with the id of lastVisitDate to the value of the
    variable, storedLastDate. */
    lastVisitDate.textContent = storedLastDate;
    /* Declares the variable, lastDate and assigns it a new Date object with the argument, 
    storedLastDate. */
    let lastDate = new Date(storedLastDate);
    /* For loop that iterates through the variable, articleDates. */
    for (let items of articleDates) {
        /* Declares the variable, articleDate and assigns it a new Date object with the argument,
        items.textContent. */
        let articleDate = new Date(items.textContent);
        /* If the variable, articleDate is greater than the variable, lastDate, then adds the 
        string, "NEW" to the innerHTML of the variable, items. */
        if (articleDate > lastDate) {
            items.innerHTML += "<strong>NEW</strong>";
        }
    }
/* If the local storage object does not have a key named sbloggerVisit, the following code
executes, setting the "lastVisitDate" element to a welcome message and adds the text "NEW" to each
blog item. */
} else {
    /* Assigns the string, "Welcome to SBlogger!" to the text content of the element with the id 
    lastVisitDate. */
    lastVisitDate.textContent = "Welcome to SBlogger!";
    /* For loop that iterates through the variable, articleDates. */
    for (let items of articleDates) {
        /* Adds the string, "NEW" to the innerHTML of the variable, items. */
        items.innerHTML += "<strong>NEW</strong>";
    }
}

/* Declares the variable, currentDate and assigns it a new Date object with the argument,
"9/12/2024". */
let currentDate = new Date("9/12/2024");
/* Sets the local storage object with the key named sbloggerVisit to the value of the variable,
currentDate. */
localStorage.setItem("sbloggerVisit", currentDate.toLocaleDateString());
 