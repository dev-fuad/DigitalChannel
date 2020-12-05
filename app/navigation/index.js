/**
 * App.js
 * Author: Fuad Mohd. Firoz
 * Created: December 05, 2020
 *
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeScreen} from '../modules/welcome';

export const Screens = {
  welcome: 'Welcome',
};

const Stack = createStackNavigator();

const AppNavigation: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Screens.welcome} component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
