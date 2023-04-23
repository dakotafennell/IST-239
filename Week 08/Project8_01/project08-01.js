"use strict";
/*    
   Louis Fennell III, February 26, 2023, IST-239-W01, Hands-On Project 8-1
   
   This file, project08-01.js, contains the JavaScript code for the timer object. The timer object 
   is used to create a timer that can be run and paused. The timer object contains the parameters, 
   min and sec, which represent the minutes and seconds of the timer. The timer object also contains
   the method, runPause, which is used to run and pause the timer. The runPause method contains the
   function, countdown, which is used to count down the timer. The runPause method also contains the
   if statements that are used to determine if the timer has reached zero. If the timer has reached
   zero, the timer is stopped. 

   JavaScript 7th Edition
   Chapter 8
   Project 08-01

   Project to create a timer object
   Author: Louis Fennell III
   Date:   02/26/2023

   Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

/* Defines the constructor function, timer, which contains the two parameters, min and sec. Min and 
sec represent the minutes and seconds of the timer object. */
function timer(min, sec) {
   /* Sets the minutes and seconds of the timer object to the values of the parameters, min and sec.
   */
   timer.minutes = min;
   timer.seconds = sec;
   timer.timeID = null;
}

/* Defines the method, runPause, which is used to run and pause the timer. The runPause method
contains the function, countdown, which is used to count down the timer. The runPause method also
contains if statements that are used to determine if the timer has reached zero. If the timer
has reached zero, the timer is stopped. */
timer.prototype.runPause = function(timer, minBox, secBox) {
   if (timer.timeID) {
      window.clearInterval(timer.timeID);
      timer.timeID = null;
   } else {
      timer.timeID = window.setInterval(countdown, 1000);
   }

   function countdown() {
      if (timer.seconds > 0) {
         timer.seconds--;
      } else if (timer.minutes > 0) {
         timer.seconds = 59;
         timer.minutes--;
      } else {
         window.clearInterval(timer.timeID);
         timer.timeID = null;
      }

      minBox.value = timer.minutes;
      secBox.value = timer.seconds;
   }
}



/*---------------Interface Code -----------------*/

/* Interface Objects */
/* Declares the variable, minBox, ad assigns it the element with the ID, "minutesBox". */
let minBox = document.getElementById("minutesBox");
/* Declares the variable, secBox, and assigns it the element with the ID, "secondsBox". */
let secBox = document.getElementById("secondsBox");
/* Declares the variable, runPauseTimer, and assigns it the element with the ID, "runPauseButton: */
let runPauseTimer = document.getElementById("runPauseButton");

/* Instantiate the timer object */
let myTimer = new timer(minBox.value, secBox.value);

/* Set the minutes value */
minBox.onchange = function() {
   myTimer.minutes = minBox.value;
}

/* Set the seconds value */
secBox.onchange = function() {
   myTimer.seconds = secBox.value;
}

runPauseTimer.onclick = function() {
   myTimer.runPause(myTimer, minBox, secBox);
}