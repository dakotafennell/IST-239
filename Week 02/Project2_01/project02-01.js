/*    
      Louis Fennell III, January 16, 2023, IST-239-W01, Hands-On Project 2-1

      This JavaScript code is intended to convert Fahrenheit to Celsius and
      back. This code will automatically adjust the values stored in the text
      boxes with the element IDs of cValue and fValue.

      JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Fahrenheit Converter
      Author: Louis Fennell III
      Date:   01/16/23

      Filename: project02-01.js
 */

/* This function, FahrenheitToCelsius(degree), converts Fahrenheit temperatures
 to Celsius. */
function FahrenheitToCelsius(degree) {
      /* Calculates the Celsius temperature based on the given Fahrenheit 
      temperature and stores the value in the degree variable. */
      return (degree - 32) / 1.8;
}

/* This function, CelsiusToFahrenheit(degree), converts Celsius temperatures
 to Fahrenheit. */
function CelsiusToFahrenheit(degree) {
      /* Calculates the Fahrenheit temperature based on the given Celsius 
      temperature and stores the value in the degree variable. */
      return degree * 1.8 + 32;
}

/* This gets the element, "cValue", and when changed by the user, calls the 
anonymous function. */
document.getElementById("cValue").onchange = function() {
      /* Sets the variable, cDegree as the value stored in the HTML element
      cValue. */
      let cDegree = document.getElementById("cValue").value;
      /* Sets the HTML element, fValue as the value returned by the function,
      CelsiusToFahrenheit(cDegree) */
      document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
}

// This gets the element, "fValue", and when changed calls the function.
document.getElementById("fValue").onchange = function() {
      /* Sets the variable, cDegree as the value stored in the HTML element
      fValue. */
      let fDegree = document.getElementById("fValue").value;
      /* Sets the HTML element, cValue as the value returned by the function,
      CelsiusToFahrenheit(cDegree) */
      document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
}