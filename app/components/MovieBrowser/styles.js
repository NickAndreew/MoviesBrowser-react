import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  }, 
  titleName: {
    padding: 10,
    paddingBottom: 20,
    fontSize: 40,
    textAlign: 'center',
    color: 'white'
  }, 
  searchBar: {
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'white',
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
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export { styles };
