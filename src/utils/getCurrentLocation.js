import Geocoder from 'react-native-geocoder';

export function getCurrentLocation(setLocation) {
     navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const pos = {lat: lat, lng: lon};
            Geocoder.geocodePosition(pos)
                .then(data => data.json()
                    .then((json)=> {
                setLocation(json.locality);}))
    },
        (error) =>
        {})
}
