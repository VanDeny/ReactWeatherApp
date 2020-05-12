const APIkey = '01c20d8b605d742011860dc9f8512ff7';

function getWeather(location) {
    return fetch('api.openweathermap.org/data/2.5/weather?q={' + location + '}&appid={' + APIkey + '}')
        .then((response) => response.json())
}
