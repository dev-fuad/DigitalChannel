/**
 * SlideButton.js
 * Author: Fuad Mohd. Firoz
 * Created: December 06, 2020
 *
 * @flow
 */

import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import SwipeButton from 'rn-swipe-button';

const {height, width} = Dimensions.get('screen');

const CONTAINER_HEIGHT = height * 0.06;
const CONTAINER_WIDTH = width * 0.9;
const BORDER_RADIUS = width * 0.015;

type SlideButtonProps = {
  style?: Object,
  title: string,
  onSwipeSuccess?: Function,
};

const SlideButton = ({
  style,
  title,
  onSwipeSuccess = () => {},
}: SlideButtonProps): React$Node => {
  return (
    <View style={styles.container}>
      <SwipeButton
        containerStyles={styles.container}
        thumbIconStyles={styles.thumb}
        railBackgroundColor="transparent"
        railBorderColor="#34424A"
        railStyles={styles.rail}
        titleColor="#145999"
        height={CONTAINER_HEIGHT}
        width={CONTAINER_WIDTH}
        thumbIconBackgroundColor="#6FB1F7"
        swipeSuccessThreshold={60}
        title={title}
        onSwipeStart={() => console.log('Swipe started!')}
        onSwipeFail={() => console.log('Incomplete swipe!')}
        onSwipeSuccess={onSwipeSuccess}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: CONTAINER_HEIGHT,
    width: CONTAINER_WIDTH,
    borderRadius: BORDER_RADIUS,
    margin: 0,
  },
  rail: {
    height: CONTAINER_HEIGHT,
    borderRadius: BORDER_RADIUS,
    borderWidth: 0,
    margin: 0,
    backgroundColor: '#6FB1F7BB',
  },
  thumb: {
    borderRadius: BORDER_RADIUS,
    borderWidth: 0,
    marginVertical: 0,
    marginRight: -4,
  },
});

export default SlideButton;
