import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    margin: 20,
    resizeMode: 'contain'
  }, 
  itemInfoContainer: {
    flexDirection: 'row'
  },
  infoContainer: {
    width: '65%',
    margin: 20,
  },
  buttonContainer: {
    margin: 20,
  },
  item: {
    padding: 20,
    flexDirection: 'column'
  },
  posterCotainer: {
    width: '45%',
    height: '100%',
  },
  poster: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }, 
  title: {
    margin: 20,
  },
  year: {
    margin: 20,
  }, 
  imdbID:{
    margin: 20,
  },
  type: {
    margin: 20,
  }
});

export { styles };