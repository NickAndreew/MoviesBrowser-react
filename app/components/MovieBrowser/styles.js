import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }, 
  titleName: {
    padding: 10,
    paddingBottom: 20,
    fontSize: 40,
    textAlign: 'center'
  }, 
  searchBar: {
    fontSize: 19,
    elevation: 5,
    borderRadius: 20,
    borderColor: 'transparent',
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  searchSection: {
    width: '80%'
  },
});

export { styles };
