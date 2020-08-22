import React from "react";

export function GPSbtn(props) {
    //functions to get current GPS coordinates
    function showLocation(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(latitude);
        console.log(longitude)
     }

     function errorHandler(err) {
        if(err.code === 1) {
           alert("Error: Access is denied!");
        } else if( err.code === 2) {
           alert("Error: Position is unavailable!");
        }
     }
     
     function getLocation(event) {
         event.preventDefault()
        if(navigator.geolocation) {
           // timeout at 60000 milliseconds (60 seconds)
           var options = {timeout:60000};
           navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
        } else {
           alert("Sorry, browser does not support geolocation!");
        }
     }

  return (
    <button id="getCoordinates" className="btn btn-dark" onClick={getLocation}>
        GPS
    </button>
  );
}
