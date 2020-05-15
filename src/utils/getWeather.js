export function getWeather (city, setTemperature) {
    const API_key = '01c20d8b605d742011860dc9f8512ff7'
    let tmp = ''
    var urls = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_key + '&units=metric';
    fetch(urls)
        .then(response => {
            console.log("success");
            response.json().then((data) => {
                setTemperature(data.main.temp);
            });
        })
        .catch(error => {
            console.log(error);
        });
};

export default getWeather;
