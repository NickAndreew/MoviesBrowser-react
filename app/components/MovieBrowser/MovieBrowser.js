import * as React from 'react';
import { View, Text, Button, Icon, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { styles }  from './styles'

import MovieInfo from '../MovieInfo/MovieInfo'
import MovieSearch from '../MovieSearch/MovieSearch'
import MoviesResults from '../MoviesResults/MoviesResults'

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleName}>MOOOOVIELE</Text>
      <View style={styles.searchSection}>
        <TextInput
            style={styles.searchBar}
            placeholder="Search for any movie.."
            onSubmitEditing={(nativeObject) =>  navigation.navigate('Movie Search', {
              input: nativeObject.nativeEvent.text
            })}
        />
      </View>
    </View>
  );
}

const Stack = createStackNavigator()

function MovieBrowser() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Page">
        <Stack.Screen name="Home Page" component={HomePage} />
        <Stack.Screen name="Movie Search" component={MovieSearch} />
        <Stack.Screen name="Movie Info" component={MovieInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MovieBrowser;
