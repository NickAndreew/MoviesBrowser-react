import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '95%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  searchAndResultsContainer: {
    flex: 1, 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputSearch: {
    padding: 4,
    minWidth: '40%',
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
