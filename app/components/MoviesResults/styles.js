import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    resizeMode: 'contain'
  },
  itemInfoContainer: {
    height: 'auto',
    flexDirection: 'row',
    resizeMode: 'contain',
    // justifyContent: 'space-between',
  },
  infoContainer: {
    flex: 1,
    // width: '65%',
    padding: 5,
    height: 210,
  },
  buttonContainer: {
    padding: 5,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonLoadMore: {
    padding: 20,
    width: '100%',
    color: 'blue',
    textAlign: 'center'
  },
  item: {
    padding: 5,
    flexDirection: 'column'
  },
  posterCotainer: {
    flex: 1,
    // width: '45%',
    height: '100%',
    resizeMode: 'contain',
  },
  poster: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  infoTitlesContainer: {
    flexDirection: 'row',
    padding: 10
  },
  infoTitle: {
    color: 'gray',
  },
  info: {
    color: 'black',
  },
});

export { styles };