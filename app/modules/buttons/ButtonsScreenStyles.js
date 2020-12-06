import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: height * 0.05,
  },
  item: {
    marginBottom: height * 0.02,
  },
});

export default styles;
