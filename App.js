import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer,  } from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";

import mainScreen from "./src/screens/mainScreen";

  const navigator = createStackNavigator({
    main: mainScreen
  },
      {
        initialRouteName: 'main',
        defaultNavigationOptions: {
          title: ''
        }
      });

export default createAppContainer(navigator);
