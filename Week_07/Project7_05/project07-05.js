"use strict";
/*    
   Louis Fennell III, February 19, 2023, IST-239-W01, Hands-On Project 7-5

   This file, project07-05.js, is the JavaScript file for Hands-On Project 7-5. This file is 
   sourced to the HTML file, project07-05.html, and is used to compare the distribution of
   word lengths between two authors. This file will allow the user to upload two files with 
   snippets of text from two different authors. The program will then compare the distribution
   of word lengths between the two authors and display the results in a table. The program will
   use a FileReader object to read the contents of the selected file and display a word frequency
   chart for the length of words from 1 to 15 characters in length. The chart will display the 
   calculated word lengths formatted as percentages.

   JavaScript 7th Edition
   Chapter 7
   Project 07-05

   Project to compare the distribution of word lengths between two authors
   Author: Louis Fennell III
   Date:   02/19/2023

   Filename: project07-05.js
*/

/* Event handler that listens for a change (.onchange) in the "button1" HTML element. When a change
occurs, an anonymous function will be called. */
document.getElementById("button1").onchange = function() {
   /* Declares the variable, file, and assigns it the value of the first file in the files
   array. Changed this.file[0] to this.files[0] */
   let file = this.files[0];
   /* Declares the variable, doc, and assigns it the value of the element with the id of
   "document1". */
   let doc = document.getElementById("document1");
   /* Declares the variable, count, and assigns it the value of the element with the id of
   "count1". */
   let count = document.getElementById("count1");
   
   /* Calls the generateWordFreq function and passes the file, doc, and count variables as
   arguments. This function will generate the word frequency table for the first document. */
   generateWordFreq(file, doc, count);
};

/* Event handler that listens for a change (.onchange) in the "button2" HTML element. When a change
occurs, an anonymous function will be called. */
document.getElementById("button2").onchange = function() {
   // Retrieve the selected file for author 2
   /* Declares the variable, file, and assigns it the value of the first file in the files
   array. */
   let file = this.files[0];
   /* Declares the variable, doc, and assigns it the value of the element with the id of
   "document2". */
   let doc = document.getElementById("document2");
   /* Declares the variable, count, and assigns it the value of the element with the id of
   "count2". */
   let count = document.getElementById("count2");
   
   /* Calls the generateWordFreq function and passes the file, doc, and count variables as
   arguments. This function will generate the word frequency table for the second document. */
   generateWordFreq(file, doc, count);
};


// Function that generates a table of frequencies for words
// of 1 to 15 characters in length

function generateWordFreq(inputFile, outputDoc, outputCount) {
   // Read the contents of the selected file
   /* Declares the variable, fr, and assigns it the value of a new FileReader object.  */
   let fr = new FileReader(); // corrected Reader() to FileReader()
   
   fr.readAsText(inputFile); // corrected fr.read() to fr.readAsText()

   // Once the file has finished loading, display the document in the page
   fr.onload=function() { 
      outputDoc.innerHTML = fr.result;
      
   
      /* Declares the variable, sourceText, and assigns it the value of the textContent of the
      outputDoc variable. Corrected logic error that used the files HTML and text instead of just 
      the documents textContent. Changed outputDoc.innerHTML to outputDoc.textContent. */
      let sourceText = outputDoc.textContent;
      
      // Remove any character that is not alphabetic or whitespace
      /* Declares the variable, alphaRegx, and assigns it the value of a regular expression
      that matches any character that is not alphabetic or whitespace. Corrected syntax error of ""
      marks surrounding the regular expression. */
      let alphaRegx = /[^a-zA-Z\s]/g;
      /* Replaces any character stored in the sourceText variable that is not alphabetic or
      whitespace with an empty string. */
      sourceText = sourceText.replace(alphaRegx, "");

      /* Declares the variable, words, and assigns it the value of the sourceText variable
      split at each occurrence of one or more whitespace characters. Added a missing g at the end
      of the expression to search globally through the entire document. */
      let words = sourceText.split(/\s+/g);

      /* Declares the variable, freqs, and assigns it the value of an array with 16 entries. This
      will be the word frequency array. */
      let freqs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      // Loop through every word in the words array
      /* For loop that iterates through the words array and increments the value of the ith entry
      in the freqs array by 1. Removed unnecessary = from i <= words.length. */
      for (let i = 0; i < words.length; i++) {
         
         /* If a word has 15 or more characters, add it to the count of words with 15 or more
         characters. */
         if (words[i].length >= 15) {
            // Add to the count of words with 15 or more characters
            freqs[15]++;
         /* Else, if a word has less than 15 characters, add that character length to the 
         respective entry in the freqs array. */
         } else {
            // Add to the count of words of length i by increasing
            // the value of the ith entry in the freqs array
            /* Adds 1 to the freqs array  Increments the value of the ith entry in the freqs array by 1. */
            freqs[words[i].length]++;
         }
      }

      /* Declares the variable, totalWords, and assigns it the value of the length of the words 
      array. This variable stores the total number of words from the sample file. */
      let totalWords = words.length;
      
      /* Declares the variable, outputPara, and assigns it the "p" elements (<p>) of the 
      outputCount. */
      let outputPara = outputCount.getElementsByTagName("p");
      /* For loop that iterates through the freqs array and calculates the percent of words of
      each length. */
      for (let i = 1; i <= 15; i++) {
         /* Declares the variable, percent, and assigns it the value of the frequency of the ith
         entry in the freqs array divided by the total number of words in the sample file,
         multiplied by 100. The value is then rounded to 1 decimal place with a percent symbol at 
         its end. Fixed the logic error that was dividing the total number of words by the
         frequency of the ith entry in the freqs array by swapping positions of freqs[i] and 
         totalWords. */
         let percent = (freqs[i]/totalWords*100).toFixed(1)+"%"
         /* Sets the textContent of the current index minus 1, entry in the outputPara array to the
         percent variable. This displays the percent of words of each length. */
         outputPara[i - 1].textContent = percent;
      }      
      
   } 
   
}