import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

const forecastScreen =  ({location}) => {
    console.log({location});
    const [temperature, setTemperature] = useState('0');
    return (
        <View>
            <Text>test</Text>
        </View>
    )
};

export default forecastScreen;
