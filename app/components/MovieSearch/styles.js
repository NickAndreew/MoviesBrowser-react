import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    resizeMode: 'contain'
  }, 
  inputContainer: {
    padding: 10
  },
  inputSearch: {
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    image: {
      flex: 1,
      resizeMode: 'repeat',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
  }
});

export { styles };