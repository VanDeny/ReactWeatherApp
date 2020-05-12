import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Constants from "expo-constants";

const locationListScreen = () => {
    return <View style={styles.view}>
        <Text>Location test</Text>
    </View>
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    },
    view: {
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
    }
});

export default locationListScreen;
