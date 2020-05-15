import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import * as Constants from "expo-constants";

import {weatherConditions} from './../utils/weatherConditions';
import {setCity} from "../utils/setCity";

const SearchScreen = props => {
    const [tmp, setTmp] = useState('');
    return (
        <View
            style={[{flex: 1}, {backgroundColor: weatherConditions[props.navigation.getParam('color')].color}, {alignSelf: 'stretch'}]}>
            <View style={styles.view}>
                <Text style={styles.text}>Enter location:</Text>
                <TextInput style={styles.textInput}
                           value={tmp}
                           placeholder='Search'
                           onChangeText={(text) => {
                               setTmp(text);
                           }}/>
                <View style={styles.buttonView}>
                    <Button
                        title='Search'
                        style={styles.button}
                        onPress={() => {
                            setCity(props, tmp)
                        }}/>
                </View>
            </View>
            <View
                style={[{flex: 1}, {backgroundColor: weatherConditions[props.navigation.getParam('color')].color}, {alignSelf: 'stretch'}]}>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff'
    },
    view: {
        justifyContent: 'center',
    },
    buttonView:{
        alignSelf: 'flex-start',
        fontSize: 80,
        alignItems: 'center',
        width: '100%'

    },
    textInput: {
        margin: 10,
        borderColor: '#fff',
        borderWidth: 2,
        height: 50,
        fontSize: 30,
        borderRadius: 20,
        color: '#fff'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        flex: 1,
        width: '40%',
        height: 60,

        alignSelf: 'flex-start'
    }
});

export default SearchScreen;
