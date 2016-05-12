# Team-36
Team 36
bc23b5298009dbc490bc2d751873296a = forecast API key

HOW TO ACCESS FLIGHTS API; USE THIS TO ACCESS LOCATION 

this.routesResponse = function(routes)
{
     // YOUR CODE
	// prints the destinationAirport and number of stops (to the usual outputArea div).
	// anonymous fnc
	var output = ""
	for (var i = 1; i < routes.length; i++)
	{
		output += '<p>' + routes[i].destinationAirport + '<br/>' + routes[i].stops + '</p>';
	}
	document.getElementById("outputArea").innerHTML = output;
}

//Make the API request:
var url = "https://eng1003.eng.monash.edu/OpenFlights/routes/?airline=QF&sourceAirport=MEL&callback=this.routesResponse";
var script = document.createElement('script');
script.src = url;
document.body.appendChild(script);

//Make API request to forecast; returns the current forecast (for the next week)
//Enter own lat/lon
https://api.forecast.io/forecast/bc23b5298009dbc490bc2d751873296a/LATITUDE,LONGITUDE

//Make API request to previous weather; returns the observed weather at a given time (for many places, up to 60 years in the past):
https://api.forecast.io/forecast/bc23b5298009dbc490bc2d751873296a/LATITUDE,LONGITUDE,TIME

//Tutorial for using Google maps API
https://developers.google.com/maps/documentation/javascript/tutorial?hl=en#The_Hello_World_of_Google_Maps_v3

//Tutorial for geocoding
//Geocoding = process of converting addresses (like "1600 Amphitheatre Parkway, Mountain View, CA") into geographic coordinates (like latitude 37.423021 and longitude -122.083739)
https://developers.google.com/maps/documentation/javascript/geocoding#Geocoding

//ALL RESOURCES PROVIDED
● http://www.getmdl.io/
(MDL: Material Design Lite documentation)
● https://developer.mozilla.org/en­US/docs/Web/API/Geolocation/Using_geolocation
(Mozilla Developer Network: Reading the GPS sensor)
● https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date
(Mozilla Developer Network: Date documentation)
● https://developer.forecast.io/docs/v2
(The Dark Sky Forecast AI documentation)
● https://developers.google.com/maps/documentation/javascript/tutorial
(Google Maps JavaScript API)
● https://developers.google.com/maps/documentation/javascript/geocoding
(Google Maps JavaScript API: Geocoding Service)

PDO Part 3:
https://www.alexandriarepository.org/reader/eng1003/86861
