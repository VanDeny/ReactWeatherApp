import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import * as Constants from "expo-constants";

const SearchScreen = ({navigation}) => {
    const [location, setLocation] = useState('');
    return (
        <View style={styles.view}>
            <Text style={styles.text}>location</Text>
            <TextInput style={styles.textInput}
                       value={location}
                       placeholder='Search'
                       onSubmitEditing={(text) => {
                           setLocation(text);
                           navigation.navigate('Forecast');
                       }}/>
        </View>
    )
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
    }
});

export default SearchScreen;
