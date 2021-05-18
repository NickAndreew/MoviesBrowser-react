import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    resizeMode: 'contain'
  }, 
  itemInfoContainer: {
    flexDirection: 'row'
  },
  infoContainer: {
    width: '65%',
    padding: 5,
  },
  buttonContainer: {
    padding: 5,
  },
  buttonLoadMore: {
    padding: 20,
    
    
  },
  item: {
    padding: 5,
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
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  year: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  }, 
  imdbID:{
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  type: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export { styles };