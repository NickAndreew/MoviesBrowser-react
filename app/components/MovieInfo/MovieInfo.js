import  React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles'

const movieInfoUrl = "http://www.omdbapi.com/?apikey=490ffdb4&i="

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
        <View style={{width: this.state.width, height: this.state.height}}>
          <Image 
            style={styles.imageStyle}
            source={{uri: this.props.poster}} />
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
      <Text style={styles.info}>Title : {state.title}</Text>
      <Text style={styles.info}>Year : {state.year}</Text>
      <Text style={styles.info}>Rated : {state.rated}</Text>
      <Text style={styles.info}>Released : {state.released}</Text>
      <Text style={styles.info}>Runtime : {state.runtime}</Text>
      <Text style={styles.info}>Genre : {state.genre}</Text>
      <Text style={styles.info}>Director : {state.director}</Text>
      <Text style={styles.info}>Actors : {state.actors}</Text>
      <Text style={styles.info}>Plot : {state.plot}</Text>
      <Text style={styles.info}>Language : {state.language}</Text>
      <Text style={styles.info}>Country : {state.country}</Text>
      <Text style={styles.info}>Awards : {state.awards}</Text>
      <Text style={styles.info}>Metascore : {state.metascore}</Text>
      <Text style={styles.info}>imdbRating : {state.imdbRating}</Text>
      <Text style={styles.info}>imdbVotes : {state.imdbVotes}</Text>
      <Text style={styles.info}>imdbID : {state.imdbID}</Text>
      <Text style={styles.info}>DVD : {state.dvd}</Text>
      <Text style={styles.info}>BoxOffice : {state.boxOffice}</Text>
      <Text style={styles.info}>Production : {state.production}</Text>
      <Text style={styles.info}>Website : {state.website}</Text>
      <Text style={styles.info}>Response : {state.response}</Text>
    </View>          
  )
}

const RatingInfo = ({ rating }) => {
  const ratingInfo = rating

  return (
    <View style={styles.ratingContainer}>
      <Text style={styles.rating}>{ratingInfo.Source}</Text>
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
      console.log("Movie info has been loaded")
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        <View style={styles.container}>        
          <MovieImage poster={this.state.poster} />
          <MovieInfoData state={this.state} />
          <MovieRatingsInfo ratings={this.state.ratings} />
        </ View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </ View>
      )
    }
  }
}

function MovieInfo ({ route }) {
  const { imdbID } = route.params;

  return(
    <MovieInfoPage imdbID={imdbID} />
  )
}

export default MovieInfo;
