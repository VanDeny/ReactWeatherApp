import React, {useState} from 'react';
import Geocoder from 'react-native-geocoding';

import forecastScreen from "./src/screens/forecastScreen";
import listOfCitiesScreen from "./src/screens/listOfCitiresScreen";
import searchScreen from "./src/screens/searchScreen";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

Geocoder.init('AIzaSyC5QtVetrDWZ89XJCV-kz40cC3bCwEKNro');

const navigator = createStackNavigator({
    Forecast: forecastScreen,
    ListOfCities: listOfCitiesScreen,
    Search: searchScreen
},
    {initialRouteName: 'Forecast',
    defaultNavigationOptions: {title: 'Forecast'}});

export default createAppContainer(navigator);




