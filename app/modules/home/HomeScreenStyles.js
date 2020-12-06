import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    marginVertical: 10,
  },
  message: {
    color: '#5EAC0D',
    fontSize: 18,
  },
});

export default styles;
