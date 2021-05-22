import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { styles }  from './styles'

import MovieInfo from '../MovieInfo/MovieInfo'
import MovieSearch from '../MovieSearch/MovieSearch'

const Stack = createStackNavigator()

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Text style={styles.titleName}>MOOVIELE</Text>
        <TextInput
          style={styles.searchBar}
          placeholder=" Search for any movie.."
          onSubmitEditing={(nativeObject) => navigation.navigate('Movie Search', {
            input: nativeObject.nativeEvent.text
          })}/>
      </View>
    </View>
  );
}

function MovieBrowser() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Page">
        <Stack.Screen name="Home Page" component={HomePage} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Movie Search" component={MovieSearch} />
        <Stack.Screen name="Movie Info" component={MovieInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MovieBrowser;
