import Geocoder from 'react-native-geocoder';

export function getCurrentLocation(setLocation) {
     navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            // console.log('Lat: ' + lat + ', Long: ' + lon);
            const pos = {lat: lat, lng: lon};
            Geocoder.geocodePosition(pos)
                .then(data => {
                    console.log(data);
                })
    },
        (error) =>
        {})
}
