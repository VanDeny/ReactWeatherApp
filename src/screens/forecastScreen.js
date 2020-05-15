import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Constants from "expo-constants";
import { FontAwesome } from '@expo/vector-icons';
import { getWeather } from "../utils/getWeather";
import { getCurrentLocation } from "../utils/getCurrentLocation";
import {getActiveChildNavigationOptions} from "react-navigation";

const ForecastScreen =  ({navigation}) => {

    const [location, setLocation] = useState('Praha')
    const [temperature, setTemperature] = useState('0');

    useEffect(() => {getWeather(location, setTemperature)},[location]);
    useEffect(() => getCurrentLocation(),[]);
    useEffect(() => { navigation.setParams({setLoc: setLocation})})

    return (
        <View style={styles.view}>
            <Text style={styles.text}></Text>
            {location != undefined ? <Text style={styles.text}>{location} temp is {temperature}</Text> : <Text style={styles.text}>Undefined</Text>}
        </View>
    )
};

ForecastScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () =>
            <TouchableOpacity
                style={styles.fontAwesome}
                onPress={() =>
                    navigation.navigate('Search')}>
                <FontAwesome style={styles.fontAwesome} name="search" size={30} color="black" />
            </TouchableOpacity>
            };
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
    },
    view: {
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
    },
    textInput: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        height: 50,
        fontSize: 30,
        borderRadius: 20
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        flex: 1,
        width: '40%',
        height: 60
    },
    fontAwesome: {
        margin: 10
    }
});

export default ForecastScreen;
