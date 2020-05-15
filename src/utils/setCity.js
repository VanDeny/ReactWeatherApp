import Geocoder from "react-native-geocoding";
import { createTwoButtonAlert } from '../components/createTwoButtonAlert';

export function setCity(props, city) {
    Geocoder.from(city).then((success) => {
        props.navigation.getParam('setLocation')(city);
        props.navigation.navigate('Forecast');})
        .catch((error) => { createTwoButtonAlert })

}
