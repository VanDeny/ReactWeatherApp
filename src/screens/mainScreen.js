import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import drawer from "../components/drawer";
import {NavigationContainer} from '@react-navigation/native';

const mainScreen = () => {
    return (<View>
        <NavigationContainer>
            <drawer />
        </NavigationContainer>
    </View>)
};

const styles = StyleSheet.create({});

export default mainScreen;
