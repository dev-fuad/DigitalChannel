/**
 * Button.js
 * Author: Fuad Mohd. Firoz
 * Created: December 06, 2020
 *
 * @flow
 */

import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './ButtonStyles';

type ButtonProps = {
  style?: Object,
  title: string,
  type?: 'text' | 'greyed' | 'primary',
  onPress?: () => void,
};

const contianerStyle = {
  text: styles.container,
  greyed: [styles.container, styles.greyed],
  primary: [styles.container, styles.primary],
};

const textStyle = {
  text: styles.title,
  greyed: styles.title,
  primary: styles.white,
};

const Button = ({
  style,
  title,
  type = 'text',
  onPress = () => {},
}: ButtonProps): React$Node => {
  return (
    <Pressable style={[contianerStyle[type], style]} onPress={onPress}>
      <Text style={textStyle[type]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
