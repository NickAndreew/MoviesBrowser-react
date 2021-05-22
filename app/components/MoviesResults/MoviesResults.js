import * as React from 'react';
import { View, Text, FlatList, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles'

import { useNavigation } from '@react-navigation/native';

function MovieResultsItem ({ movie }) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Movie Info', {
      imdbID: movie.imdbID
    })} >

      <View style={styles.itemInfoContainer}>
        <View style={styles.posterCotainer}>
          <Image style={styles.poster} source={{ uri: movie.Poster }}/>
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Title: {movie.Title}</Text>
          <Text style={styles.year}>Year: {movie.Year}</Text>
          <Text style={styles.imdbID}>IMDB ID: {movie.imdbID}</Text>
          <Text style={styles.type}>Type: {movie.Type}</Text>
        </View>
      </View>
{/* 
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Info about this movie.."
          onPress={}
        />
      </View> */}
    </ TouchableOpacity>
  )
}

function MovieResultsList ({ data, uuidFunction }) {

  const renderItem = ({ item }) => (
    <MovieResultsItem key={item.imdbID} movie={item} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        extraData={data}
        renderItem={renderItem}
        keyExtractor={ item => uuidFunction() } 
      />
    </SafeAreaView>
  )
}

function MovieResults ({ data, totalResults, error, page, uuidFunction, loadMoreResults }) {

  if (data !== null) { 
    if ((parseInt(totalResults) / 10) > parseInt(page)) {
      return(
        <View style={styles.container}>
          <Text>Hello, I am your component MovieResults!</Text>
          <Text>There are {totalResults} results :))</Text>
          <MovieResultsList data={data} page={page} uuidFunction={uuidFunction} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              color='transparent'
              onPress={() => loadMoreResults()}>
                <Text style={styles.buttonLoadMore} >
                  Load more results..
                </Text>
              </TouchableOpacity>
          </ View>
        </View>
      )
    } else {
      return(
        <View style={styles.container}>
          <Text>There are {totalResults} results :))</Text>
          <MovieResultsList data={data} page={page} uuidFunction={uuidFunction} />
        </View>
      )
    }
  } else if (error !== null && error !== undefined) {
    return (
      <View style={styles.container}>
        <Text>Hello, I am your component MovieResults!</Text>
        <Text>Error: {error}</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text>Search results would be shown here :)</Text>
      </View>
    )
  }
}

export default MovieResults;
