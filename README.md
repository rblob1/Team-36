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

// Make the API request:
var url = "https://eng1003.eng.monash.edu/OpenFlights/routes/?airline=QF&sourceAirport=MEL&callback=this.routesResponse";
var script = document.createElement('script');
script.src = url;
document.body.appendChild(script);
