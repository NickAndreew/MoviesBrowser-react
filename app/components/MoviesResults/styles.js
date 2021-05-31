import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: '100%',
    minHeight: windowHeight,
  },
  resultsContainer: {
    minWidth: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  itemInfoContainer: {
    height: 'auto',
    flexDirection: 'row',
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
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
    width: '100%',
    padding: 5,
    margin: 5,
    borderRadius: 10,
    flexDirection: 'column',
    // backgroundColor: '#e4e6e89c',
    backgroundColor: 'rgba(228, 230, 232, 0.18)'
  },
  posterCotainer: {
    flex: 1,
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