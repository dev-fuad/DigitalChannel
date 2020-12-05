/**
 * Greeting.js
 * Author: Fuad Mohd. Firoz
 * Created: December 06, 2020
 *
 * @flow
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Greeting: () => React$Node = () => {
  const name = useSelector((state) => state.name);

  return <Text style={styles.name}>{!!name && `Hello, ${name}`}</Text>;
};

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    color: '#2A2A2A',
    marginVertical: 8,
    marginHorizontal: 12,
    textAlign: 'right',
  },
});

export default Greeting;
