import * as React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import mainScreen from "../screens/mainScreen";
import locationListScreen from "../screens/locationListScreen";
import searchScreen from "../screens/searchScreen";


const Drawer = createDrawerNavigator();

export default function drawer() {
    return (
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={mainScreen} />
                <Drawer.Screen name="Locations" component={locationListScreen} />
                <Drawer.Screen name="Search" component={searchScreen} />
            </Drawer.Navigator>
    );
}
