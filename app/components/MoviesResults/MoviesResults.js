import * as React from 'react';
import { View, Text, FlatList, ScrollView, SafeAreaView, Image, Button } from 'react-native';
import { styles } from './styles'

import { useNavigation } from '@react-navigation/native';

const MovieResultsItem = ({ movie }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.item}>

      <View style={styles.itemInfoContainer}>
        <View style={styles.posterCotainer}>
          <Image style={styles.poster} source={{uri: movie.Poster }}/>
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Title: {movie.Title}</Text>
          <Text style={styles.year}>Year: {movie.Year}</Text>
          <Text style={styles.imdbID}>IMDB ID: {movie.imdbID}</Text>
          <Text style={styles.type}>Type: {movie.Type}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Info about this movie.."
          onPress={() => navigation.navigate('Movie Info', {
            imdbID: movie.imdbID
          })}
        />
      </View>
    </View>
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
            <Button style={styles.buttonLoadMore}
              title="Load more results.."
              color="gray"
              onPress={() => loadMoreResults()} />
          </ View>
        </View>
      )
    } else {
      return(
        <View style={styles.container}>
          <Text>Hello, I am your component MovieResults!</Text>
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
