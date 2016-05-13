// Code for the Add Location page.

//Code to add location to Local Storage
function addLocation(latitude, longitude, nickname)
{
    var locationObject = {
                lat: latitude,
                lng: longitude,
                nickname: nickname
            }

            if (typeof(Storage) !== "undefined")
                {
                    for (var i = 1; i < 30; i++)
                        {
                            var flag = false
                            if (localStorage.getItem("location"+i) === null || localStorage.getItem("location"+i) === "")
                                {
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

//Code to remove location from Local Storage
function removeLocation(number, nickname)
{
    localStorage.setItem("location"+number, null)
    alert("Removed " + nickname + " (location " + number + ") from LocalStorage")
}
