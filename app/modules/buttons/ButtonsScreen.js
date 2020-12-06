/**
 * ButtonsScreen.js
 * Author: Fuad Mohd. Firoz
 * Created: December 06, 2020
 *
 * @flow
 */

import React from 'react';
import {Text, View, SafeAreaView, Alert} from 'react-native';
import {Button, Greeting} from '../../components';
import SlideButton from '../../components/SlideButton';
import styles from './ButtonsScreenStyles';

const ButtonsScreen: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Greeting />
      <View style={styles.content}>
        <Text style={styles.item}>4 variations of a button</Text>
        <Button
          style={styles.item}
          type="text"
          title="Press me"
          onPress={() => Alert.alert('First Button Pressed')}
        />
        <Button
          style={styles.item}
          type="greyed"
          title="Press me"
          onPress={() => Alert.alert('Second Button Pressed')}
        />
        <Button
          style={styles.item}
          type="primary"
          title="Press me"
          onPress={() => Alert.alert('Third Button Pressed')}
        />
        <SlideButton
          style={styles.item}
          title="Slide me to continue"
          onSwipeSuccess={() => Alert.alert('Fourth Button Slided')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ButtonsScreen;
