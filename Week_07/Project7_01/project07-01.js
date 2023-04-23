"use strict";
/*
    Louis Fennell III, February 13, 2023, IST-239-W01, Hands-On Project 7-1

    This file, project07-01.js, is the JavaScript file for the project07-01.html file. Its
    purpose is to validate the form used for setting up a new account. The password must be at least
    8 characters long, include an uppercase letter, include a number, and include one of the
    following symbols: !$#%. If the password does not meet these requirements, the user is alerted
    with a message. If the password meets the requirements, the form is submitted and the file, 
    formsubmit.html, is loaded displaying the username and password entered by the user.
    
    JavaScript 7th Edition
    Chapter 7
    Project 07-01

    Project to validate a form used for setting up a new account
    Author: Louis Fennell III
    Date:   02/19/2023

    Filename: project07-01.js
*/

/* Declares the variable, signupForm, and assigns it the value of the element with the id of 
"signup". */
let signupForm = document.getElementById("signup");

/* Adds an event listener to the signupForm variable. The event listener is for the submit event.
The event listener calls an anonymous function that takes the event object as a parameter. */
signupForm.addEventListener("submit", function(e) { 
    /* Declares the variable, pwd, and assigns it the value of the element with the id of "pwd". */
    let pwd = document.getElementById("pwd").value;
    /* Declares the variable, feedback, and assigns it the value of the element with the id of
    "feedback". */
    let feedback = document.getElementById("feedback");

    /* Prevents the submit event from completely firing when the form is submitted. This allows the
    function to run validation on the password field. */
    e.preventDefault();

    /* Declares the variable, regex1, and assigns it a regular expression literal with a character 
    class that matches any uppercase letter A through Z. */
    let regex1 = /[A-Z]/;
    /* Declares the variable, regex1, and assigns it a regular expression literal that matches any
    single digit. */
    let regex2 = /\d/;
    /* Declares the variable, regex1, and assigns it a regular expression with a character class 
    containing the symbols !$#%. */
    let regex3 = /[!\$#%]/;

    /* If the length of the password variable (pwd) is less than 8, displays the
    textContent field of the "feedback" element with a message saying the password must have at least
    8 characters. */
    if (pwd.length < 8) {
        feedback.textContent = "Your password must have at least 8 characters.";
    /* Else if the regular expression, regex1, is tested on the pwd variable and does not match 
    false displays the textContent field of the "feedback" element with a message saying the 
    password must include an uppercase letter. */
    } else if (regex1.test(pwd) === false) {
    feedback.textContent = "Your password must include an uppercase letter.";
    /* Else if the regular expression in the variable, regex2, ran on the pwd variable, does not 
    match the boolean false displays the textContent field of the "feedback" element with a message 
    saying the password must include an uppercase letter. */
    } else if (regex2.test(pwd) === false) {
    feedback.textContent = "Your password must include number.";
    /* Else if the regular expression in the variable, regex3, ran on the pwd variable, does not 
    match the boolean false, displays the textContent field of the "feedback" element with a 
    message saying the password must include one of the following symbols: !$#%. */
    } else if (regex3.test(pwd) === false) {
    feedback.textContent = "Your password must include one of the following: !$#%.";
    /* Else, the password is valid, so the submit event is allowed to complete. */
    } else {
    signupForm.submit();
    }
}
);