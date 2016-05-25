// Code for the Add Location page.

//Code to add location to Local Storage
function addLocation(latitude, longitude, nickname)
{
    /*
    // Can call this function or, instance.addLocation(latitude, longitude, nickname);
    //var locationsArray = [];
    var locationObject = {
                lat: latitude,
                lng: longitude,
                nickname: nickname,
                originalLocation: "",
                forecast: []
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
    */
}

function removeLocation(index)
{
        // Can call this function or instance.removeLocationAtIndex(index)
        // Code to remove location from Local Storage
        var removed = JSON.parse(localStorage.getItem("location"+index))
        removedNickName = removed.nickname
        localStorage.setItem("location"+index, null)
        alert("Removed " + removedNickName + " (location " + index + ") from LocalStorage")
}
