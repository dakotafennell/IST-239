"use strict";
/*
   Louis Fennell III, March 11, 2023, IST-239-W01, Hands-On Project 10-3

    This file, project10-03.js, is the JavaScript file for Hands-On Project 10-3. It contains the
    JavaScript code to provide step by step directions for a bicycle ride. This file uses the 
	Google Maps API to call the DirectionsService() and DirectionsRenderer() objects to generate a
	visual route and directions for the users selected starting point and ending point on the map.
	

    JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
    Author: Louis Fennell III
    Date:   3/11/2023

    Filename: project10-03.js
*/

/* Defines the function, showMap, which is called when the user clicks the "Show Map" button. This
function will display the map and directions for the bicycle ride when the user selects a starting
point and an ending point. */
function showMap() {
	
   // Page objects
	/* Declares the variable, bikeMap and assigns it the value of the element with the id, "bikeMap". */
   let bikeMap = document.getElementById("bikeMap");
	/* Declares the variable, bikeDirections and assigns it the value of the element with the id, 
	"bikeDirections". */
   let bikeDirections = document.getElementById("bikeDirections");
	/* Declares the variable, startingPoint and assigns it the value of the element with the id, 
	"startingPoint". */
   let startingPoint = document.getElementById("startingPoint");
	/* Declares the variable, endingPoint and assigns it the value of the element with the id, 
	"endingPoint". */
   let endingPoint = document.getElementById("endingPoint");

	/* Declares the variable, bikeFind and assigns it a new DirectionsService() Google Maps object. */
   let bikeFind = new google.maps.DirectionsService();
	/* Declares the variable, bikeDraw and assigns it a new DirectionsRenderer() Google Maps object. */
   let bikeDraw = new google.maps.DirectionsRenderer();

	/* Declares the variable, Boulder and assigns it the latitude and longitude values for the city
	of Boulder, Colorado. */
   let Boulder = {lat: 40.01753, lng: -105.26496};
	
	/* Declares the variable, myMap amd assigns it the value of a new Google Maps, Map object within
	the bikeMap element, at a 12 zoom level, centered on the city of Boulder, Colorado. */
   let myMap = new google.maps.Map(bikeMap, {
      zoom: 12,
	   center: Boulder,
	});

	/* Adds an event listener, for the "change" event, to the startingPoint element, calling the 
	drawRoute function when the event is detected. */
	startingPoint.addEventListener("change", drawRoute);
	/* Adds an event listener, for the "change" event, to the endingPoint element, calling the 
	drawRoute function when the event is detected. */
	endingPoint.addEventListener("change", drawRoute);
	
	/* Defines the function, drawRoute, which is called when the user selects a starting point and an
	ending point. This function will display the map and directions for the bicycle ride. */
	function drawRoute() {
		/* If statement that checks if the startingPoint element is not equal to the first option in
		the list and if the endingPoint element is not equal to the first option in the list. */
		if (startingPoint.selectedIndex !== 0 && endingPoint.selectedIndex !== 0) {
			
			/* Declares the variable, bikeRoute and assigns it the value of an object containing 
			the origin, destination, and travelMode properties. The origin property is assigned the 
			value of the startingPoint element, the destination property is assigned the value of 
			the endingPoint element and the travelMode property is assigned the value of "BICYCLING". */
			let bikeRoute = {
				origin: startingPoint.value,
				destination: endingPoint.value,
				travelMode: "BICYCLING"
			}
			
			// Generates the bike route
			/* Calls the route method of the bikeFind DirectionsService object, passing the 
			bikeRoute object and a callback function as arguments. The callback function will be 
			called when the route is generated. */
			bikeFind.route(bikeRoute, function(result, status) {
				/* If statement that checks if the status of the route is equal to "OK". If the 
				status matches "OK", then the route is drawn using the setDirections(), setMap(),
				and setPanel() methods each with the arguments result, myMap, and bikeDirections
				respectively. */
				if (status == "OK") {
					/* Calls the setDirections method of the bikeDraw DirectionsRenderer object, 
					passing the result object as an argument. */
					bikeDraw.setDirections(result);
					// Displays the route and directions
					/* Calls the setMap method of the bikeDraw DirectionsRenderer object, passing
					the myMap object as an argument. */
					bikeDraw.setMap(myMap);
					/* Calls the setPanel method of the bikeDraw DirectionsRenderer object, passing
					the bikeDirections object as an argument. */
					bikeDraw.setPanel(bikeDirections);
				/* Else statement that will display the a message to the user informing them that
				directions are unavailable and the status message for the route. */
				} else {
					bikeDirections.textContent = "Directions Unavailable: " + status;
				}
			});
			
		}
	}
}

