"use strict";
/* 
	Louis Fennell III, March 20, 2023, IST-239-W01, Hands-On Project 11-1

	This file, project11-01.js, is the JavaScript file for the Hands-On Project 11-1. This project 
	is focused on using the fetch() method to call an API from the NASA website to display the 
	Astronomy Picture of the Day (APOD) for the users selected date. The user will select a date
	from the dateBox element and the APOD for that date will be displayed in the nasaImage element.
	The showPicture(json) function is called to display the APOD. The showPicture(json) function
	will check the media_type property of the json object to determine if the APOD is a video or an
	image and will adjust the innerHTML of the imageBox element accordingly.

	JavaScript 7th Edition
	Chapter 11
	Project 11-01

	Project to retrieve the Astronomy Picture of the Day from NASA
	Author: Louis Fennell III
	Date:   3/20/2023

	Filename: project11-01.js
*/

/* Declares the variable, imageBox and assigns it the HTML element, "nasaImage". This variable will
store the image "fetched" from the NASA API. */
let imageBox = document.getElementById("nasaImage");
/* Declares the variable, dateBox and assigns it the HTML element, "dateBox". This variable will
contain the users selected date. */
let dateBox = document.getElementById("dateBox");

/* Anonymouss function that is called with the onchange event listener on the dateBox element. this
function will fetch the Astronomy Picture of the Day from the NASA API. */
dateBox.onchange = function() {  
	// Declares the variable, dateStr and assigns it the value of the dateBox variable.
	let dateStr = dateBox.value;
	/* Calls the fetch() method to retrieve the Astronomy Picture of the Day from the NASA API. The
	fetch() method will return a promise. If the promise is fulfilled, the .then() method will be
	called. If the promise is rejected, the .catch() method will be called. */
	fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateStr}`)
	// Then calls the response method on the json object.
	.then(response => response.json())
	// Then calls the showPicture(json) function with the json object as the parameter.
	.then(json => showPicture(json))
	// Catches any errors and logs them to the console.
	.catch(error => console.log(error));
}

/* Defines the function, showPicture(json) with the parameter, json. This function will assign the
innerHTML of the imageBox element ("nasaImage") the correct HTML code based upon if the APOD is a
video or an image. If there is an issue, with the image/video, the innerHTML of the imageBox 
element ("nasaImage") will be set to display an error message to the user. */
function showPicture(json) {
	/* If the media_type property of the json object is equal to "video", the innerHTML of the
	imageBox element ("nasaImage") will be set to the HTML code to display the video. */
	if (json.media_type === "video") 
	{
		imageBox.innerHTML = `<iframe src="${json.url}"></iframe><h1>${json.title}</h1><p>${json.explanation}</p>`;
	} 
	/* Else if the media_type property of the json object is equal to "image", the innerHTML of the
	imageBox element ("nasaImage") will be set to the HTML code to display the image. */
	else if (json.media_type === "image") 
	{
		imageBox.innerHTML = `<img src="${json.url}" /><h1>${json.title}</h1><p>${json.explanation}</p>`;
	} 
	/* Else the innerHTML of the imageBox element ("nasaImage") will be set to display an error
	message to the user. */
	else 
	{
		imageBox.innerHTML = "Image not Available";
	}
}