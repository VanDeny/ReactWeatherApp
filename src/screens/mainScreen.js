import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StatusBar} from "react-native-web";
import Constants from "expo-constants";

const MainScreen = () => {
    return <View style={styles.view}>
        <StatusBar hidden={true}/>
        <Text style={styles.text}></Text>
        <Text style={styles.temperature}>Here will be temperature</Text>
    </View>
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        flex: 3
    },
    view: {
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff'
    },
    temperature: {
        flex: 1,
        fontSize: 50,
        marginBottom: 10,
        padding: 20
    }
});

export default MainScreen;
