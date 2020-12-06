import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height: height * 0.06,
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.015,
  },
  greyed: {
    backgroundColor: '#34424A',
  },
  primary: {
    backgroundColor: '#6FB1F7',
  },
  title: {
    color: '#145999',
  },
  white: {
    color: '#FFF',
  },
});

export default styles;
