/**
 * WelcomeScreen.js
 * Author: Fuad Mohd. Firoz
 * Created: December 05, 2020
 *
 * @flow
 */

import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateName} from '../../store/actions/UserActions';
import styles from './WelcomeScreenStyles';

import type {UserState} from '../../types/store';

const WelcomeScreen: () => React$Node = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: UserState) => state.name);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.greeting}>Welcome,</Text>
          <TextInput
            autoFocus
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={(text) => dispatch(updateName(text.trimStart()))}
          />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
