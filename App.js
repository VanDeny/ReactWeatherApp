import React from 'react';
import { StyleSheet } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigation from "./src/components/drawer";


export default function App() {
    return (
        <NavigationContainer>
            <DrawerNavigation/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({});
