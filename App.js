import React from 'react';

import Geocoder from 'react-native-geocoding';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import forecastScreen from './src/screens/forecastScreen'
import listOfCitiesScreen from './src/screens/forecastScreen'
import searchScreen from './src/screens/forecastScreen'

Geocoder.init('AIzaSyC5QtVetrDWZ89XJCV-kz40cC3bCwEKNro');

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Forecast" component={forecastScreen} />
                <Drawer.Screen name="List of Cities" component={listOfCitiesScreen} />
                <Drawer.Screen name="Search" component={searchScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


