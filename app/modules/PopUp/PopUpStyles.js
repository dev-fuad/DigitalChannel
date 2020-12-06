import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#333',
    shadowOffset: {width: 1, height: 1},
    maxWidth: '90%',
    maxHeight: '90%',
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default styles;
