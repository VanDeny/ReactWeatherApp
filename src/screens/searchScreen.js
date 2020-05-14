import React from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

const searchScreen = ({ navigation }) => {
    return (
        <View>
            <Text>test</Text>
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

export default searchScreen;
