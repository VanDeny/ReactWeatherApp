const mapsApi = '';

function getLatLong(location) {
    return fetch('https://maps.googleapis.com/maps/' + mapsApi + '/geocode/outputFormat?json')
        .then((result) => {

        })
}

function setMyLocation(position)
{
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    getWeather(lat,lon);
    getWeatherForecast(lat,lon);
}

function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setMyLocation);
    } else {
        alert("Geolocation Unavaible!");
    }
}



