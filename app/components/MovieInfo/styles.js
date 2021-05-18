import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    resizeMode: 'contain',
  }, 
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  ratingContainer: {
    padding: 5,
    paddingBottom: 20,
  },
  rating: {
    padding: 5,
  },
  infoContainer: {
    padding: 5,
    paddingBottom: 20,
  },
  info: {
    fontFamily: "Georgia, serif",
  },
});

export { styles };
