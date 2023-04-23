"use strict";
/*    
    Louis Fennell III, February 19, 2023, IST-239-W01, Hands-On Project 7-3

    This file, project07-03.js, is the JavaScript file for the Hands-On Project 7-3. This 
    JavaScript file is intended to display a countdown clock on the project07-03.html page. The 
    clock will update every second (1000 milliseconds) and will display the current time, the 
    number of days (daysLeft), hours (hrsLeft), minutes (minsLeft), and seconds (secsLeft) until 
    the next New Year's Eve (Set as January 1, 2024). The current date and time is displayed above
    the countdown timer and is stored in the div element (<div>), "timeBox". This element is 
    modified by the variable, currentTime, which uses a Date() object to set the textContent of the 
    "currentTime" element. This time is updated every 1000 milliseconds (1 second) and uses the 
    user's local time. This time is formatted as "MM/DD/YYYY HH:MM:SS". The countdown timer is 
    displayed below the current time and is formatted as "DD:HH:MM:SS". The timer is updated every 
    1000 milliseconds (1 second) and will display the time remaining until the next new year. The 
    timer will display "00:00:00:00" when the new year has arrived.

    JavaScript 7th Edition
    Chapter 7
    Project 07-03

    Project to create a New Year's Eve countdown clock
    Author: Louis Fennell III
    Date:   02/19/2023

    Filename: project07-03.js
*/

/* Declares the variable, currentTime, and assigns it the value of the "currentTime" span element. */
let currentTime = document.getElementById("currentTime");
/* Declares the variable, daysLeftBox, and assigns it the value of the element with the id of 
"days". */
let daysLeftBox = document.getElementById("days");
/* Declares the variable, hrsLeftBox, and assigns it the value of the element with the id of 
"hours". */
let hrsLeftBox = document.getElementById("hours");
/* Declares the variable, minsLeftBox, and assigns it the value of the element with the id of
"minutes". */
let minsLeftBox = document.getElementById("minutes");
/* Declares the variable, secsLeftBox, and assigns it the value of the element with the id of
"seconds". */
let secsLeftBox = document.getElementById("seconds");

/* Calls the setInterval() function, which will call the countdown() function every second
(1000 milliseconds), on the window. */
window.setInterval(countdown, 1000);

/* Defines the function, countdown(), which will be called every second (1000 milliseconds) by the
setInterval() function. The function will display the current time, and the number of days,
hours, minutes, and seconds until the next New Year's Eve (Set as January 1, 2024). */
function countdown() {
    /* Declares the variable, now, and assigns it the value of the current date and time. */
    let now = new Date();   
    /* Sets the textContent of the "currentTime" span element to the current date and time. */
    currentTime.textContent = now.toLocaleString();
    
    /* Declares the variable, newYear, and assigns it the value of the date and time of the next
    New Year's Eve (Set as January 1, 2024). */
    let newYear = new Date("January 1, 2024");
    /* Declares the variable, nextYear, and assigns it the value of the current year plus one. */
    let nextYear = now.getFullYear()+1;

    /* Sets the year of the newYear variable to the value of the nextYear variable. */
    newYear.setFullYear(nextYear);
    
    /* Declares the variable, daysLeft, and assigns it the value of the number of days until the
    next New Year's Eve (Set as January 1, 2024). */
    let daysLeft = (newYear - now)/(24*60*60*1000);
    /* Declares the variable, hrsLeft, and assigns it the value of the number of hours until the
    next New Year's Eve (Set as January 1, 2024). */
    let hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
    /* Declares the variable, minsLeft, and assigns it the value of the number of minutes until the
    next New Year's Eve (Set as January 1, 2024). */
    let minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
    /* Declares the variable, secsLeft, and assigns it the value of the number of seconds until the
    next New Year's Eve (Set as January 1, 2024). */
    let secsLeft = (minsLeft - Math.floor(minsLeft))*60;
    
    /* Sets the textContent of daysLeftBox ("days" <span> element) to the value of the daysLeft 
    variable rounded down to the nearest integer. */
    daysLeftBox.textContent = Math.floor(daysLeft);
    /* Sets the textContent of hrsLeftBox ("hours" <span> element) to the value of the hrsLeft
    variable rounded down to the nearest integer. */
    hrsLeftBox.textContent = Math.floor(hrsLeft);
    /* Sets the textContent of minsLeftBox ("minutes" <span> element) to the value of the minsLeft
    variable rounded down to the nearest integer. */
    minsLeftBox.textContent = Math.floor(minsLeft);
    /* Sets the textContent of secsLeftBox ("seconds" <span> element) to the value of the secsLeft
    variable rounded down to the nearest integer. */
    secsLeftBox.textContent = Math.floor(secsLeft);
}