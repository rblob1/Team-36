
// Returns a date in the format "YYYY-MM-DD".
Date.prototype.simpleDateString = function() {
    function pad(value)
    {
        return ("0" + value).slice(-2);
    }
    
    //this.d = new Date();
    //this.year = d.getFullYear();

    var dateString = this.getFullYear() + "-" + 
            pad(this.getMonth() + 1, 2) + '-' + 
            pad(this.getDate(), 2);
    
    return dateString;
}

// Date format required by forecast.io API.
// We always represent a date with a time of midday,
// so our choice of day isn't susceptible to time zone errors.
Date.prototype.forecastDateString = function() {
    return this.simpleDateString() + "T12:00:00";
}


// Code for LocationWeatherCache class and other shared code.

// Prefix to use for Local Storage.  You may change this.
var APP_PREFIX = "weatherApp";
var instance = new LocationWeatherCache() // creates new class instance with a new closure


function LocationWeatherCache()
{
    // Private attributes:

    var locationsArray = []; 
    var callbacks = {};
    var locationWanted = "";

    // Public methods:
    
    // Returns the number of locations stored in the cache.
    //
    this.length = function() {
                
        // use instance.length() to call
        for (var i = 1; i < 30; i++)
            {
                if (localStorage.getItem("location"+i) === null || localStorage.getItem("location"+i) === "" || localStorage.getItem("location"+i) === "null")
                    {
                        //do nothing
                    }
                else
                    {
                        locationsArray[i] = localStorage.getItem("location"+i);
                    }
                
            }
        return locationsArray.length
        
    };
    
    // Returns the location object for a given index.
    // Indexes begin at zero.
    //
    this.locationAtIndex = function(index) {
        
        // use instance.locationAtIndex(index) to call
        //index = number
        var locationData = JSON.parse(localStorage.getItem("location"+index))
        return locationData
    };

    // Given a latitude, longitude and nickname, this method saves a 
    // new location into the cache.  It will have an empty 'forecasts'
    // property.  Returns the index of the added location.
    //
    this.addLocation = function(latitude, longitude, nickname) { 
       
        // use instance.addLocation(latitude, longitude, nickname) to call
        // var locationsArray = [];
        
    var locationObject = {
                lat: latitude,
                lng: longitude,
                nickname: nickname,
                originalLocation: "",
                callback: "",
                forecast: {}
            }

            if (typeof(Storage) !== "undefined")
                {
                    for (var i = 1; i < 30; i++)
                        {
                            var flag = false
                            if (localStorage.getItem("location"+i) === null || localStorage.getItem("location"+i) === "" || localStorage.getItem("location"+i) === "null")
                                {
                                    locationObject.originalLocation = i
                                    var locationAsJSON = JSON.stringify(locationObject) //stringifying locationObject to JSON String
                                    localStorage.setItem("location"+i, JSON.stringify(locationObject)); //storing JSON string to localstorage as key "APP_PREFIX"
                                    alert("Location " + nickname + " added to LocalStorage "+i);
                                    flag = true
                                }
                            if (flag === true)
                                {
                                    break; //breaks out of loop so we dont fill all locations
                                }                
                        }
                                        
                }
            else
                {
                   alert("Error: localStorage is not supported by current browser.");
                }
    
        
    }

    // Removes the saved location at the given index.
    // 
    this.removeLocationAtIndex = function(index)
    {
        if (index === null || index === 'null')
            {
                alert("Cannot remove current location!")
            }
        else
            {
                // use instance.removeLocationAtIndex(index) to call
                //see addlocationPage.js
                //Code to remove location from Local Storage
                var removed = instance.locationAtIndex(index)
                removedNickName = removed.nickname
                localStorage.setItem("location"+index, null)
                alert("Removed " + removedNickName + " (location " + index + ") from LocalStorage")
                location.href = 'index.html';
            }
    }

    // This method is used by JSON.stringify() to serialise this class.
    // Note that the callbacks attribute is only meaningful while there 
    // are active web service requests and so doesn't need to be saved.
    //
    this.toJSON = function() {
        
        //local storage items have already have been stringified, see line 23 of addlocationPage.js
        // or, line 98 of locationWeatherCache.js
        
    };

    // Given a public-data-only version of the class (such as from
    // local storage), this method will initialise the current
    // instance to match that version.
    //
    this.initialiseFromPDO = function(locationWeatherCachePDO) {
                
        // this method retrieves the selected location from localStorage and parses it into an object 
        // TODO: Retrieve the stored JSON string and parse to a variable called PDOLocationForecastObject
        var locationForecastJSON = localStorage.getItem(locationWeatherCachePDO);
        var PDOLocationForecastObject = JSON.parse(locationForecastJSON);
        
        
        
    };

    // Request weather for the location at the given index for the
    // specified date.  'date' should be JavaScript Date instance.
    //
    // This method doesn't return anything, but rather calls the 
    // callback function when the weather object is available. This
    // might be immediately or after some indeterminate amount of time.
    // The callback function should have two parameters.  The first
    // will be the index of the location and the second will be the 
    // weather object for that location.
    // 
    
    this.getWeatherAtIndexForDate = function(index, date, callback) {
                
        // https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE,TIME
        // time should be entered as [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS] i.e 2013-05-06T12:00:00
        
        // e.g. https://api.forecast.io/forecast/bc23b5298009dbc490bc2d751873296a/-37,145,2016-05-17T12:00:00?units=ca&exclude=currently,minutely,hourly
        
        // instance.getWeatherAtIndexForDate("selectedLocation", date, "weatherResponse") --> use this to call
        // selectedLocation is an object
        // date = YYYY-MM-DDT12:00:00
        // index is JSON.parse(localStorage.getItem("selectedLocation"))
        // the callback is weatherResponse
        
        //from location selected we make a jsonpRequest; look at OpenFlightsAPI.html example
        locationWanted = JSON.parse(localStorage.getItem(index))
        
        jsonpRequest("https://api.forecast.io/forecast/bc23b5298009dbc490bc2d751873296a/", locationWanted); // fnc call
     
        function jsonpRequest(url, data)
        {
            // Build URL parameters from data object.
            var params = "";
            // encodeURIComponent() for illegal characters in query string
            // Building query string for request
            params = locationWanted.lat + "," + locationWanted.lng + "," + date + "?units=ca&exclude=currently,minutely,hourly,typeof&callback=" + callback //+ "?"
            
                        
            var script = document.createElement('script');
            script.src = url + params;
            document.body.appendChild(script);
        }
        
    };
    
    // This is a callback function passed to forecast.io API calls.
    // This will be called via JSONP when the API call is loaded.
    //
    // This should invoke the recorded callback function for that
    // weather request.
    //
    weatherResponse = function(response) {
       
        console.log(response)
        var locationIndex = indexForLocation(locationWanted.lat, locationWanted.lng)
        console.log(locationIndex)
        
        var weatherData = {
            tempMin: response.daily.data[0].temperatureMin,
            tempMax: response.daily.data[0].temperatureMax,
            icon: response.daily.data[0].icon
        }
        
        localStorage.setItem("location"+locationIndex+".forcast", JSON.stringify(weatherData))
        
        //var weatherCallback = response.results
        //document.getElementById("summary").innerHTML = response.daily.data[0]
        //Code to update information on the page
        
        document.getElementById("summary").innerHTML = response.daily.data[0].summary
        document.getElementById("minTemp").innerHTML = response.daily.data[0].temperatureMin
        document.getElementById("maxTemp").innerHTML = response.daily.data[0].temperatureMax
        document.getElementById("humidity").innerHTML = response.daily.data[0].humidity
        document.getElementById("windSpeed").innerHTML = response.daily.data[0].windSpeed
                
    };

    // Private methods:
    
    // Given a latitude and longitude, this method looks through all
    // the stored locations and returns the index of the location with
    // matching latitude and longitude if one exists, otherwise it
    // returns -1.
    //
    function indexForLocation(latitude, longitude) {
        for (var i = 0; i < 30; i++)
            {
                var temp = JSON.parse(localStorage.getItem("location"+i)) //creates temp variable
                if (temp.lat === latitude && temp.lng === longitude)
                    {
                        return i //return index of matched location
                    }
                
            }
    }
}

// Restore the singleton locationWeatherCache from Local Storage.
//
function loadLocations()
{
}

// Save the singleton locationWeatherCache to Local Storage.
//
function saveLocations()
{
}

