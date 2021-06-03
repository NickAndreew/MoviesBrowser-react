import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    minWidth: '95%',
    minHeight: windowHeight,
  },
  resultsContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  itemInfoContainer: {
    height: 'auto',
    flexDirection: 'row',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  infoContainer: {
    flex: 1,
    padding: 5,
    height: 210,
    justifyContent: 'flex-start'
  },
  buttonContainer: {
    padding: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonLoadMore: {
    padding: 20,
    color: 'blue',
    textAlign: 'center'
  },
  item: {
    padding: 5,
    margin: 5,
    borderRadius: 10,
    flexDirection: 'column',
    backgroundColor: 'rgba(228, 230, 232, 0.60)'
  },
  posterCotainer: {
    flex: 1,
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'flex-end',
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
    color: 'black',
  },
  info: {
    color: 'black',
    fontStyle: 'italic',
  },
});

export { styles };
