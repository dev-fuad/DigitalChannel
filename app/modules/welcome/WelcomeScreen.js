/**
 * WelcomeScreen.js
 * Author: Fuad Mohd. Firoz
 * Created: December 05, 2020
 *
 * @flow
 */

import React from 'react';
import {Text, View} from 'react-native';
import styles from './WelcomeScreenStyles';

const WelcomeScreen: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
    </View>
  );
};

export default WelcomeScreen;
