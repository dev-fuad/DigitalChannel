/**
 * PopUp.js
 * Author: Fuad Mohd. Firoz
 * Created: December 06, 2020
 *
 * @flow
 */

import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './PopUpStyles';

const PopUp: () => React$Node = () => {
  const {goBack} = useNavigation();
  const {params = {}} = useRoute();
  const {message, style} = params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={style}>{message}</Text>
        <Button title="OK" onPress={() => goBack()} />
      </View>
    </View>
  );
};

export default PopUp;
