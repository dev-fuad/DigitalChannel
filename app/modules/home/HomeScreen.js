/**
 * HomeScreen.js
 * Author: Fuad Mohd. Firoz
 * Created: December 06, 2020
 *
 * @flow
 */

import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Greeting} from '../../components';
import {Screens} from '../../navigation';
import styles from './HomeScreenStyles';

const HomeScreen: () => React$Node = () => {
  const {navigate} = useNavigation();
  const name = useSelector((state) => state.name);

  useEffect(() => {
    if (!name) {
      navigate(Screens.welcome);
    }
  }, [name, navigate]);

  // TODO: Add when native module to check device is ready
  //
  // useEffect(() => {
  //   if (not a real device) {
  //     navigate(Screens.popUp);
  //   }
  // }, [navigate]);

  return (
    <>
      <Greeting />
      <View style={styles.container}>
        <Button title="Change Name" onPress={() => navigate(Screens.welcome)} />
        <Button
          title="View Buttons Showcase"
          onPress={() => navigate(Screens.buttons)}
        />
      </View>
    </>
  );
};

export default HomeScreen;
