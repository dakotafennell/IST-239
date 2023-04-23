"use strict";
/*    
	Louis Fennell III, March 23, 2023, IST-239-W01, Hands-On Project 11-5
		
	This file, project11-05.js, is the JavaScript file for the Hands-On Project 11-5. This project 
	is a debugging challenge involving an xml file, a Perl script file, a JavaScript file, a json 
   file and an html file. The goal of this project is a debugging challenge to fix the errors in 
   the websites code.
	
	JavaScript 7th Edition
	Chapter 11
	Project 11-05

	Project to retrieve content for a SF blog
	Author: Louis Fennell III
	Date:   3/28/2023

	Filename: project11-05.js
*/

/* Adds an event listener for the "load" event that will call the init function when the 
project11-05.html page has loaded. */
window.addEventListener("load", init);

/* Defines the function, init() with no parameters.. */
function init() {
   // Page Objects
	/* Declares the variable, selectionList and assigns it the element with the ID, "authorList". */
   let selectionList = document.getElementById("authorList");
	/* Declares the variable, bookReview and assigns it the element with the ID, "review". */
   let bookReview = document.getElementById("review");
	/* Declares the variable, podList and assigns it the element with the ID, "podcastList". */
   let podList = document.getElementById("podcastList")
   
   // Fetch a list of authors from the server
   /* Fetches the authorlist.json file and returns a promise. removed Unnecessary semicolon ; */
   fetch("authorlist.json")
   /* Then calls the response method on the json object. Corrected arrow function from > to => . */
   .then(response => response.json())
   .then(json => {
         // Place the authors in a selection list
         /* For of loop that iterates through the authorlist property of the json object. */
         for (let authors of  json.authorlist) {
            /* Declares the variable, newOpt and assigns it the value of a new option element. */
            let newOpt = document.createElement("option");
            /* Sets the value property of the newOpt variable to the initials property of the 
            authors object. */
            newOpt.value = authors.initials;
            /* Sets the textContent property of the newOpt variable to the name property of the
            authors object. */
            newOpt.textContent = authors.name;
            /* Appends the newOpt variable to the selectionList variable. */
            selectionList.appendChild(newOpt);
         }
      
         // Create an onchange event handler that displays a review by the selected author
         selectionList.onchange = function() {
            /* Fetches the sfreviews.pl file and returns a promise. Corrected & symbol to ? symbol. */
            fetch("sfreviews.pl?author="+selectionList.value)
            /* Then calls the response method on the json object. changed .json to .text to return 
            response as a text string.. */
            .then(response => response.text())
            /* Then sets the innerHTML property of the bookReview variable to the review property of
            the json object. */
            .then(review => bookReview.innerHTML = review)
            /* Catches any errors and logs them to the console. */
            .catch(error => console.log(error))
            }
         })
      /* Catches any errors and logs them to the console. */
      .catch(error => console.log(error));
   
   // Fetch the list of podcasts from an XML document
   fetch("sfpod.xml")
   /* Then calls the text() method on the response. */
   .then(response => response.text())
   /* Then calls the parseFromString() method on the DOMParser() object. Corrected Parser() to 
   DOMParser(). */
   .then(str => new DOMParser().parseFromString(str, "text/xml"))
   /* Then calls the following code block on the dom object. */
   .then(dom => {
      // Rewrite the XML structure into an HTML fragment
      /* Declares the variable, podcasts and assigns it the value of the querySelectorAll() method
      on the dom variable. */
      let podcasts = dom.querySelectorAll("item");
      /* For of loop that iterates through the podcasts variable. */
      for (let show of podcasts) {
         /* Declares the variable, title and assigns it the value of the textContent property of the
         first [0] child of the show variable. */
         let title = show.children[0].textContent;
         /* Declares the variable, summary and assigns it the value of the textContent property of the
         second [1] child of the show variable. */
         let summary = show.children[1].textContent;
         /* Declares the variable, link and assigns it the value of the textContent property of the
         third [2] child of the show variable. */
         let link = show.children[2].textContent;
         /* Declares the variable, article and assigns it the value of a template literal. 
         Corrected the mistake of using an apostrophe ' instead of a single quotation mark `. */
         let article = `<article><h1><a href=${link}>${title}</a></h1><p>${summary}</p></article>`;
         /* Appends the article variable to the podList variable. */
         podList.insertAdjacentHTML("beforeEnd", article)
      }
   })
   /* Catches any errors and logs them to the console. */
   .catch(error => console.log(error))
}