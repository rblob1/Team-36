
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

function LocationWeatherCache()
{
    // Private attributes:

    var locationsArray = []; 
    var callbacks = {};

    // Public methods:
    
    // Returns the number of locations stored in the cache.
    //
    this.length = function() {
                
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
        //index = number
        var locationData = JSON.parse(localStorage.getItem("location"+index))
        return locationData
    };

    // Given a latitude, longitude and nickname, this method saves a 
    // new location into the cache.  It will have an empty 'forecasts'
    // property.  Returns the index of the added location.
    //
    this.addLocation = function(latitude, longitude, nickname) { 
       
        //see addlocationPage.js
        
    }

    // Removes the saved location at the given index.
    // 
    this.removeLocationAtIndex = function(index)
    {
        //see addlocationPage.js
    }

    // This method is used by JSON.stringify() to serialise this class.
    // Note that the callbacks attribute is only meaningful while there 
    // are active web service requests and so doesn't need to be saved.
    //
    this.toJSON = function() {
        
        //local storage items have already have been stringified, see line 23 of addlocationPage.js
        
    };

    // Given a public-data-only version of the class (such as from
    // local storage), this method will initialise the current
    // instance to match that version.
    //
    this.initialiseFromPDO = function(locationWeatherCachePDO) {
                
        //TODO: Retrieve the stored JSON string and parse to a variable called PDOLocationForecastObject
        var locationForecastJSON = localStorage.getItem(locationWeatherCachePDO);
        var PDOLocationForecastObject = JSON.parse(locationForecastJSON);
        // parse restores the object
        
        
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
        //https://api.forecast.io/forecast/bc23b5298009dbc490bc2d751873296a/LATITUDE,LONGITUDE?units=ca&exclude=currently,minutely,hourly use to make API request
        
        //https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE,TIME
        // time should be entered as [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS] i.e 2013-05-06T12:00:00
        
        // e.g. https://api.forecast.io/forecast/bc23b5298009dbc490bc2d751873296a/-37,145,2016-05-17T12:00:00?units=ca&exclude=currently,minutely,hourly
        
        //from location selected we make a jsonpRequest; look at OpenFlightsAPI.html example
        //this returns JSON
        //we must then 
        //
        
        function callback(index, weatherObject)
        {
            
        }
        
    };
    
    // This is a callback function passed to forecast.io API calls.
    // This will be called via JSONP when the API call is loaded.
    //
    // This should invoke the recorded callback function for that
    // weather request.
    //
    this.weatherResponse = function(response) {
        
    };

    // Private methods:
    
    // Given a latitude and longitude, this method looks through all
    // the stored locations and returns the index of the location with
    // matching latitude and longitude if one exists, otherwise it
    // returns -1.
    //
    function indexForLocation(latitude, longitude) {
        
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

