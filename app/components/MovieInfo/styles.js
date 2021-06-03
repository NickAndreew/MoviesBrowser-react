import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    resizeMode: 'contain',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  infoContainer: {
    minWidth: '70%',
    flex: 1,
    padding: 5,
    paddingBottom: 20,
    backgroundColor: 'rgba(228, 230, 232, 0.28)'
  },
  ratingContainer: {
    flex: 1,
    width: 'auto',
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
    color: 'white',
  },
  infoDetailsContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: 'rgb(207, 157, 96)',
  },
  info: {
    fontFamily: "Georgia, serif",
    color: 'white',
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
