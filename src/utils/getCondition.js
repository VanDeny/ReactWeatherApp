export async function getCondition (city, setWeather) {
    const API_key = '01c20d8b605d742011860dc9f8512ff7';
    var urls = 'https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + API_key + '&units=metric';
    await fetch(urls)
        .then(response => {
            response.json()
                .then((data) => {
                    setWeather(data.weather[0].main);
                    console.log(data.weather[0].main);
                });
        })
        .catch(error => {})}

export default getCondition;
