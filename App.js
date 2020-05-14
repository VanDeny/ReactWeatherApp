import React, {useState} from 'react';
import {Text} from 'react-native';
import Geocoder from 'react-native-geocoding';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {getCurrentLocation} from './src/utils/getCurrentLocation'

import forecastScreen from './src/screens/forecastScreen'
import listOfCitiesScreen from './src/screens/forecastScreen'
import searchScreen from './src/screens/forecastScreen'

Geocoder.init('AIzaSyC5QtVetrDWZ89XJCV-kz40cC3bCwEKNro');

const Drawer = createDrawerNavigator();


export default function App() {
    const [location, setLocation] = useState();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            setLocation(location);
        });
    } else {
        alert("Geolocation Unavaible!");
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Forecast"
                               component={forecastScreen}
                               {...this.location}/>
                <Drawer.Screen name="List of Cities" component={listOfCitiesScreen} />
                <Drawer.Screen name="Search" component={searchScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


