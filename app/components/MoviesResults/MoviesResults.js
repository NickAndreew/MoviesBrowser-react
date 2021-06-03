import * as React from 'react';
import { View, Text, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
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
          <Image 
            style={styles.poster} 
            source={{ uri: movie.Poster }} />
        </View>
        
        <View style={styles.infoContainer}>
          <View style={styles.infoTitlesContainer}><Text style={styles.infoTitle}>Title: <Text style={styles.info}>{movie.Title}</Text></Text></View>
          <View style={styles.infoTitlesContainer}><Text style={styles.infoTitle}>Year: <Text style={styles.info}>{movie.Year}</Text></Text></View>
          <View style={styles.infoTitlesContainer}><Text style={styles.infoTitle}>Type: <Text style={styles.info}>{movie.Type}</Text></Text></View>
        </View>
      </View>
    </ TouchableOpacity>
  )
}

function MovieResultsList ({ data, uuidFunction }) {

  const renderItem = ({ item }) => (
    <MovieResultsItem key={item.imdbID} movie={item} />
  );

  return (
    <View style={styles.resultsContainer}>
      <SafeAreaView>
        <FlatList
          data={data}
          extraData={data}
          renderItem={renderItem}
          keyExtractor={ item => uuidFunction() } 
        />
      </SafeAreaView>
    </View>
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
