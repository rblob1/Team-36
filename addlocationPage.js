// Code for the Add Location page.
function = addLocation(latitude, longitude, nickname)
{
    var locationObject = {
                lat: latitude,
                lng: longitude,
                nickname: nickname
            }

            if (typeof(Storage) !== "undefined")
                {
                    var locationAsJSON = JSON.stringify(locationObject) //stringifying locationObject to JSON String
                    localStorage.setItem(APP_PREFIX, JSON.stringify(locationObject)); //storing JSON string to localstorage as key "APP_PREFIX"
                }
            else
                {
                   alert("Error: localStorage is not supported by current browser.");
                }
}
