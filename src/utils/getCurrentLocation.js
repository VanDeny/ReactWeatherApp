import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';


export function getCurrentLocation() {
    Geolocation.getCurrentPosition((position) => {
        console.log(position);
        Geocoder.from(position.coords.latitude, position.coords.longitude).then(
            (json) => {
                const address = json.results[0].address_components[0];
                console.log(address)
            })
    },
        (error) =>
            console.log(error))
}
