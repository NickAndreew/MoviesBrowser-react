import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { styles }  from './styles'

import MovieInfo from '../MovieInfo/MovieInfo'
import MovieSearch from '../MovieSearch/MovieSearch'
import MoviesResults from '../MoviesResults/MoviesResults'

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello, it's a home page!</Text>
      <Button
        title="Go to Movie Search"
        onPress={() => navigation.navigate('Movie Search')}
      />
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
