import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
  },
  contentContainer: {
    width: '100%',
    padding: 5,
    resizeMode: 'contain',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
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
  ratingTitle: {
    fontFamily: "Georgia, serif",
    color: 'rgb(196, 169, 22)',
    padding: 5,
  },
  rating: {
    fontFamily: "Georgia, serif",
    padding: 5,
  },
  title: {
    color: 'rgb(207, 157, 96)',
  },
  info: {
    fontFamily: "Georgia, serif",
    color: 'black',
  },
});

export { styles };
