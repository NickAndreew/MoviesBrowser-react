import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    resizeMode: 'contain'
  }, 
  inputSearch: {
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  }
});

export { styles };