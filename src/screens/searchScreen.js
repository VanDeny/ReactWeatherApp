import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Constants from "expo-constants";

const searchScreen = () => {
    return <View style={styles.view}>
        <Text>Search Test</Text>
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

export default searchScreen;
