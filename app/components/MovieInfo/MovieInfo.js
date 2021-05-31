import  React, {Component} from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';

const movieInfoUrl = "http://www.omdbapi.com/?apikey=490ffdb4&i="

const image = {uri: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80"}

class MovieImage extends Component  {
  constructor () {
    super()

    this.state = {
      width: null,
      height: null
    }
  }

  componentDidMount() {
    Image.getSize(this.props.poster, (width, height) => {this.setState({width: width, height: height})});
  }
  
  render() {
    console.log("Width: " + this.state.width + ", Height: " + this.state.height)
    if (this.state.width && this.state.height) {
      return (
        <View style={styles.imageContainer}>
          <View style={{width: this.state.width, height: this.state.height}}>
            <Image 
              style={styles.imageStyle}
              source={{uri: this.props.poster}} />
          </ View>
        </ View>
      )
    } else {
      return (
        <View style={styles.imageContainer}>
          <Text style={{width: '100%',}}>Image loading...</Text>
        </ View>
      )
    }
  }
}

function MovieInfoData({state}) {
  return(
    <View style={styles.infoContainer}>
      <MovieImage poster={state.poster} />
      
      <Text style={styles.title}>Title : <Text style={styles.info}>{state.title}</Text></Text>
      <Text style={styles.title}>Year : <Text style={styles.info}>{state.year}</Text></Text>
      <Text style={styles.title}>Rated : <Text style={styles.info}>{state.rated}</Text></Text>
      <Text style={styles.title}>Released : <Text style={styles.info}>{state.released}</Text></Text>
      <Text style={styles.title}>Runtime : <Text style={styles.info}>{state.runtime}</Text></Text>
      <Text style={styles.title}>Genre : <Text style={styles.info}>{state.genre}</Text></Text>
      <Text style={styles.title}>Director : <Text style={styles.info}>{state.director}</Text></Text>
      <Text style={styles.title}>Actors : <Text style={styles.info}>{state.actors}</Text></Text>
      <Text style={styles.title}>Language : <Text style={styles.info}>{state.language}</Text></Text>
      <Text style={styles.title}>Country : <Text style={styles.info}>{state.country}</Text></Text>
      <Text style={styles.title}>Awards : <Text style={styles.info}>{state.awards}</Text></Text>
      <Text style={styles.title}>Metascore : <Text style={styles.info}>{state.metascore}</Text></Text>
      <Text style={styles.title}>imdbRating : <Text style={styles.info}>{state.imdbRating}</Text></Text>
      <Text style={styles.title}>imdbVotes : <Text style={styles.info}>{state.imdbVotes}</Text></Text>
      <Text style={styles.title}>imdbID : <Text style={styles.info}>{state.imdbID}</Text></Text>
      <Text style={styles.title}>DVD : <Text style={styles.info}>{state.dvd}</Text></Text>
      <Text style={styles.title}>BoxOffice : <Text style={styles.info}>{state.boxOffice}</Text></Text>
      <Text style={styles.title}>Production : <Text style={styles.info}>{state.production}</Text></Text>
      <Text style={styles.title}>Website : <Text style={styles.info}>{state.website}</Text></Text>
      <Text style={styles.title}>Response : <Text style={styles.info}>{state.response}</Text></Text>
      <Text style={styles.title}>Plot : <Text style={styles.info}>{state.plot}</Text></Text>

      <MovieRatingsInfo ratings={state.ratings} />
    </View>
  )
}

const RatingInfo = ({ rating }) => {
  const ratingInfo = rating

  return (
    <View style={styles.ratingContainer}>
      <Text style={styles.ratingTitle}>{ratingInfo.Source}</Text>
      <Text style={styles.rating}>{ratingInfo.Value}</Text>
    </View>
  )
}

class MovieRatingsInfo extends Component {
  render() {
    if (this.props.ratings != null) {
      return(
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>Ratings:</Text>
          { this.props.ratings.map((rating, index) => <RatingInfo key={index} rating={rating} />) }
        </View>
      )
    } else {
      return(
        <View style={styles.ratingContainer}>
          <Text style={styles.info}>Ratings: Loading...</Text>
        </ View>
      )
    }
  }
}

class MovieInfoPage extends Component {
  constructor() {
    super()
    
    this.state = {
      title: null,
      year: null, 
      rated: null,
      released: null,
      runtime: null,
      genre: null,
      director: null,
      actors: null,
      plot: null, 
      language: null, 
      country: null,
      awards: null,
      poster: null,
      ratings: null,
      metascore: null,
      imdbRating: null,
      imdbID: null,
      dvd: null,
      boxOffice: null,
      production: null,
      website: null,
      response: null,
      loaded: false
    }
  }

  componentDidMount() {
    fetch(movieInfoUrl + this.props.imdbID)
    .then((response) => response.json())
    .then((json) => {
      this.setState({ 
        title: json.Title,
        year: json.Year, 
        rated: json.Rated,
        released: json.Released,
        runtime: json.Runtime,
        genre: json.Genre,
        director: json.Director,
        actors: json.Actors,
        plot: json.Plot, 
        language: json.Language, 
        country: json.Country,
        awards: json.Awards,
        poster: json.Poster,
        ratings: json.Ratings,
        metascore: json.Metascore,
        imdbRating: json.imdbRating,
        imdbVotes: json.imdbVotes,
        imdbID: json.imdbID,
        dvd: json.DVD,
        boxOffice: json.BoxOffice,
        production: json.Production,
        website: json.Website,
        response: json.Response,
        loaded: true
      });
    })
    .catch((error) => console.error(error))
    .finally(() => {
      this.props.navigation.setOptions({ 
        title: this.state.title, 
        headerStyle: {
          backgroundColor: '#e3eaea',
        }})
      console.log("Movie info has been loaded")
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        <MovieInfoData state={this.state} />
      )
    } else {
      return (
        <Text>Loading...</Text>
      )
    }
  }
}

function MovieInfo ({ route, navigation }) {
  const { imdbID } = route.params;

  return(
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <MovieInfoPage imdbID={imdbID} navigation={navigation}/>
      </ImageBackground>
    </View>
  )
}

export default MovieInfo;
