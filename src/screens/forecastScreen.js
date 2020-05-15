import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Constants from "expo-constants";
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import {getWeather} from "../utils/getWeather";
import {getCurrentLocation} from "../utils/getCurrentLocation";
import { weatherConditions } from './../utils/weatherConditions';
import {getCondition} from "../utils/getCondition";

const ForecastScreen = ({navigation}) => {

    const [location, setLocation] = useState('Praha');
    const [temperature, setTemperature] = useState('0');
    const [weather, setWeather] = useState('Clouds');

    // useEffect(() => getCurrentLocation(),[]);
    useEffect(() => {navigation.setParams({location: location, setLocation: setLocation, color: weather})}, [location]);
    useEffect(() => {
        getCondition(location, setWeather);
        getWeather(location, setTemperature);},
        [location]);

    console.log(weather);

    return (
        <View style={[styles.container, {backgroundColor: weatherConditions[weather].color}]}>
            <View style={styles.header}>
                <MaterialCommunityIcons size={80} name={weatherConditions[weather].icon} color={'#fff'} />
                <Text style={styles.text} >{location} </Text>
            </View>
            <View style={styles.temperatureContainer}>
                <Text style={styles.temperature}>{temperature} °C</Text>
            </View>
        </View>
    )
};

ForecastScreen.navigationOptions = props => {
    return {
        headerRight: () =>
            <TouchableOpacity
                style={styles.fontAwesome}
                onPress={() =>
                    props.navigation.navigate('Search', {
                        location: props.navigation.getParam('location'),
                        setLocation: props.navigation.getParam('setLocation'),
                        color: props.navigation.getParam('color')})}>
                <FontAwesome style={styles.fontAwesome} name="search" size={30} color="black"/>
            </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 40,
        color: '#fff'
    },
    view: {
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight
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
        flex: 1
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    fontAwesome: {
        margin: 10
    },
    temperature: {
        textAlign: 'center',
        fontSize: 60,
        color: '#fff'
    },
    temperatureContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingRight: 20,
        marginBottom: 40
    }
});

export default ForecastScreen;
