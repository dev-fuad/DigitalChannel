/**
 * PopUp.js
 * Author: Fuad Mohd. Firoz
 * Created: December 06, 2020
 *
 * @flow
 */

import React from 'react';
import {Text, View} from 'react-native';
import styles from './PopUpStyles';

const PopUp: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Text>PopUp</Text>
    </View>
  );
};

export default PopUp;
