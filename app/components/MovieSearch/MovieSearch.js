import React, {Component} from 'react';
import { View, Text, TextInput, Button, TouchableHighlightBase } from 'react-native';

import { styles } from './styles'

import MoviesResults from '../MoviesResults/MoviesResults'

const searchUrlBase = 'http://www.omdbapi.com/?apikey=490ffdb4&s='

class MovieSearchBar extends Component {
  constructor() {
    super()

    this.state = {
      input: null,
      movies: null,
      totalResults: null,
      error: null,
      page: null
    }
  }
  
  componentDidMount() {
    if (this.props.inputSearch != null) {
      this.sendSearchRequest(this.props.inputSearch)
    }
  }

  sendSearchRequest(text) {
    console.log("sendSearchRequest(" + text + ")")
    fetch(searchUrlBase + text)
      .then((response) => response.json())
      .then((json) => {
        console.log("JSON : " + json)

        if (json.Error !== undefined) {
          this.setState({ 
            movies: null, 
            totalResults: null, 
            error: json.Error, 
            page: null 
          })
        } else {
          this.setState({ 
            movies: json.Search, 
            totalResults: json.totalResults, 
            error: null, 
            page: '1' 
          });
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        console.log("Movie search results have been loaded - " + this.state.page)
        this.props.updateResults(text, this.state.movies, this.state.totalResults, this.state.error, this.state.page)
      });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>Hello, I am your component MovieSearch!</Text>
        <TextInput 
          style={styles.inputSearch}
          placeholder="Type Movie you want to find..."
          defaultValue={this.props.inputSearch}
          onChangeText={(text) => this.setState({
            input: text
          })}
          onSubmitEditing={(nativeObject) => this.sendSearchRequest(nativeObject.nativeEvent.text)}
        />
        <Button title="Search" onPress={() => this.sendSearchRequest(this.state.input)}/>
      </ View>
    )
  }
}

class MovieSearch extends Component {
  constructor () {
    super()
    this.pagePrefix = '&page='

    this.state = {
      text: null,
      movies: null,
      totalResults: null,
      error: null,
      page: null
    }
  }

  updateResults(text, movies, totalResults, error, page) {
    this.setState({
      text: text,
      movies: movies,
      totalResults: totalResults,
      error: error,
      page: page
    })
  }

  loadMoreResults() {
    fetch(searchUrlBase + this.state.text + this.pagePrefix + (parseInt(this.state.page) + 1))
    .then((response) => response.json())
    .then((json) => {
      console.log("JSON : " + json)

      if (json.Error !== undefined) {
        this.setState({
          movies: null, 
          totalResults: null, 
          error: json.Error,
          page: null 
        })
      } else {
        let moviesList = this.state.movies.slice()
        json.Search.map(item => {
          moviesList.push(item)
        })
        
        this.setState((prevState) => ({
          movies: moviesList, 
          totalResults: json.totalResults, 
          error: null,
          page: parseInt(prevState.page) + 1
        }));
      }
    })
    .catch((error) => console.error(error))
    .finally(() => {
      console.log("Movie search page : " + this.state.page)
      console.log("Movies loaded: " + this.state.movies)
      this.updateResults(this.state.text, this.state.movies, this.state.totalResults, this.state.error, this.state.page)
    });
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    })
  }

  render() {
    const { input } = this.props.route.params

    console.log(">>>>>>>>>>> " + input)

    return(
      <View style={styles.container}>
        <MovieSearchBar 
          inputSearch={input}
          updateResults={(text, movies, totalResults, error, page) => this.updateResults(text, movies, totalResults, error, page)} />
        <MoviesResults 
          data={this.state.movies} 
          totalResults={this.state.totalResults}
          error={this.state.error} 
          page={this.state.page}
          uuidFunction={() => this.uuidv4()} 
          loadMoreResults={() => this.loadMoreResults()}/>        
      </View>
    )
  }
}

export default MovieSearch;
