/**
 * App.js
 * Author: Fuad Mohd. Firoz
 * Created: December 05, 2020
 *
 * @flow
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {PopUp} from '../modules/PopUp';
import {ButtonsScreen} from '../modules/buttons';
import {HomeScreen} from '../modules/home';
import {WelcomeScreen} from '../modules/welcome';

export const Screens = {
  homeStack: 'HomeStack',
  home: 'Home',
  welcome: 'Welcome',
  buttons: 'Buttons',
  popUp: 'PopUp',
};

const HomeStack = createStackNavigator();
const AppStack = createStackNavigator();

const HomeNavigation: () => React$Node = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={Screens.home} component={HomeScreen} />
      <HomeStack.Screen name={Screens.welcome} component={WelcomeScreen} />
      <HomeStack.Screen name={Screens.buttons} component={ButtonsScreen} />
    </HomeStack.Navigator>
  );
};

const AppNavigation: () => React$Node = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        mode="modal"
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: 'transparent'},
          cardOverlayEnabled: true,
        }}>
        <AppStack.Screen name={Screens.homeStack} component={HomeNavigation} />
        <AppStack.Screen name={Screens.popUp} component={PopUp} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
