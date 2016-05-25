// Code for the main app page (locations list).

// This is sample code to demonstrate navigation.
// You need not use it for final app.

function viewLocation(locationName)
{
    /*
    // Save the desired location to local storage
    localStorage.setItem(APP_PREFIX + "-selectedLocation", locationName); 
    // And load the view location page.
    location.href = 'viewlocation.html';
    */
    
    // locationName = index of location
    // Save the desired location to local storage
    var wantedLocation = JSON.parse(localStorage.getItem("location"+locationName))
    localStorage.setItem("selectedLocation", JSON.stringify(wantedLocation))
    // And load the view location page.
    location.href = 'viewlocation.html';
    
}

function viewCurrentLocation(locationName)
{
    // Code to view Users Current Location
    var wantedLocation = JSON.parse(localStorage.getItem("locationName"))
    localStorage.setItem("selectedLocation", JSON.stringify(wantedLocation))
    // And load the view location page.
    location.href = 'viewlocation.html';
}
