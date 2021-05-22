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
  }, 
  titleName: {
    padding: 10,
    paddingBottom: 20,
    fontSize: 40,
  }, 
  searchBar: {
    fontSize: 17,
    elevation: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  }
});

export { styles };
