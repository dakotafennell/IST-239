"use strict";
/*    
   Louis Fennell III, February 05, 2023, IST-239-W01, Hands-On Project 5-1

   This project, project05-01.js, is intended to be a simple five question Algebra quiz that 
   includes a countdown of the time the user has left to complete it, a system that checks if the 
   answers are correct, and a way to display which of the answers the user has gotten right or 
   wrong (wrong answers are displayed in red at the end of the timer). The setup has limitations 
   such as no way to submit the quiz early if the user completes it before the timer runs out.

   JavaScript 7th Edition
   Chapter 5
   Project 05-01

   Project to present an online quiz with a countdown clock
   Author: Louis Fennell III
   Date:   02/05/2023

   Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
/* Declares and sets the constant, quizTime as equal to 90 seconds. */
const quizTime = 90;
/* Declares and sets the constant, correctAnswers. This constant holds an array that contains the 
correct answers to each of the quizzes questions. */
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
/* Declares the variable, startQuiz, initializing it with the let keyword. Setting the variable
equal to the HTML element with the "startquiz" ID. */
let startQuiz = document.getElementById("startquiz");
/* Declares the variable, quizClock, initializing it with the let keyword. Setting the variable
equal to the HTML element with the "quizclock" ID. */
let quizClock = document.getElementById("quizclock");
/* Declares the variable, overlay, initializing it with the let keyword. Setting the variable
equal to the HTML element with the "overlay" ID. */
let overlay = document.getElementById("overlay");

// Sets the value of the variable, quizClock, equal to the constant, quizTime (90 seconds).
quizClock.value = quizTime;
/* Declares the variable, timeLeft, initializing it with the let keyword. Setting the variable
initially equal to the value in the constant, quizTime (90 seconds). */
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
/* Declares the variable, timeID, initializing it with the let keyword. This variable is only 
declared with no value set currently. */
let timeID;
/* Declares the variable, questionList, initializing it with the let keyword. Storing it in the 
node list with the CSS selector, "div#quiz input". */
let questionList = document.querySelectorAll("div#quiz input");

/* Anonymous function for the startQuiz variable using the envent handler, onclick. This function
will then change the className of the overlay variable from, "overlay" to "showquiz", unhiding the
quiz questions. then setting the timeID variable to call the setInterval() function with the 
parameters, countdown, 1000. countdown being the function that will change the time counting down
and 1000 being the "time" value (1 second = 1000 milliseconds).  */
startQuiz.onclick = function() {
   /* changes the className of the overlay variable from "overlay" to "showquiz". */
   overlay.className = "showquiz";
   /* Changes the value of timeID to the function, setInterval() with the parameters, countdown and
   1000. */
   timeID = setInterval(countdown, 1000);
}

/* Defines the function, countdown(). This function is used to both change the visible countdown 
clock, to visually change the input textboxes to show which answers are correct/wrong, and to display
a message letting the user know how many answers they got correct. */
function countdown() {
   /* If statement for, if the value of the variable, timeLeft matches 0, then clears the interval 
   from the timeID variable, declares and sets the totalCorrect variable to call the function, 
   checkAnswers(), and execute an if/else statement to display the amount of answers gotten correct. */
   if (timeLeft === 0) {
      // Calls the clearInterval() function on the timeID variable.
      clearInterval(timeID);
      /* Declares and sets the totalCorrect variable to call the function checkAnswers(), which 
      shows the user which answers were correct. */
      let totalCorrect = checkAnswers();
      /* Nested if/else pair. If statement that displays a user message if the totalCorrect variable 
      matches the length of correctAnswers. */
      if (totalCorrect === correctAnswers.length) {
         // Window alert if the user gets all answers correct.
         window.alert("Congratulations! You got 100% correct. Good job!")
      /* Nested if/else pair. Else statement that will display a message showing the user how many 
      out of the total length of questions the user got correct. Else statement only executes if the 
      totalCorrect variable does not match correctAnswers.length. */
      } else {
         // Window alert displaying how many out the 5 questions the user got correct.
         window.alert("You got " + totalCorrect + " correct out of " + correctAnswers.length);
         // Resets the timeLeft variable back to the quizTime constant (90 seconds).
         timeLeft = quizTime;
         // Resets the value of the quizClock back to the constant, quizTime (90 seconds)
         quizClock.value = quizTime;
         // Resets the className of the overlay variable back to "hidequiz".
         overlay.className = "hidequiz";
      }
      /* Else statement that counts down the timeLeft variable by 1 (1000 milliseconds), then sets 
      the quizClock value equal to the timeLeft variable. */
   } else {
      timeLeft--;
      quizClock.value = timeLeft;
   }
}
















/*------------- Function to check the student answers ----------------*/
/* Defines the function, checkAnswers(). Used to display which questions the user got right or wrong. */
function checkAnswers() {
   // Declares the variable, correctCount and sets its initial value as 0.
   let correctCount = 0;
   
   /* For loop that loops through the length of the questionList variable, adding 1 to the 
   iterator, i, on each loop. */
   for (let i = 0; i < questionList.length; i++) {
      /* If/else pair. If the value of the current item in the questionList[i] array matches the 
      item in the correctAnswers[i] array, adds 1 to the correctCount variable and sets that items 
      className to a blank string. */
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      /* If/else pair. Else that current items, questionList[i], className is set to "wronganswer"
      changing the interior color of the textbox to red. */
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   // Returns the variable, correctCount on completion of the for loop, ending the function.
   return correctCount;
}

