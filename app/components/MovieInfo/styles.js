import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    resizeMode: 'contain',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  infoContainer: {
    width: '100%',
    padding: 5,
    paddingBottom: 20,
  },
  ratingContainer: {
    width: '100%',
    padding: 5,
    paddingBottom: 20,
  },
  rating: {
    fontFamily: "Georgia, serif",
    padding: 5,
  },
  info: {
    fontFamily: "Georgia, serif",
  },
});

export { styles };
