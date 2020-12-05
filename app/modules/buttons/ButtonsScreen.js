/**
 * ButtonsScreen.js
 * Author: Fuad Mohd. Firoz
 * Created: December 06, 2020
 *
 * @flow
 */

import React from 'react';
import {Text, View} from 'react-native';
import {Greeting} from '../../components';
import styles from './ButtonsScreenStyles';

const ButtonsScreen: () => React$Node = () => {
  return (
    <>
      <Greeting />
      <View style={styles.container}>
        <Text>ButtonsScreen</Text>
      </View>
    </>
  );
};

export default ButtonsScreen;
