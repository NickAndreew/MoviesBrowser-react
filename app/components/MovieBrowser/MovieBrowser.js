import * as React from 'react';
import { View, Text, TextInput, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { styles }  from './styles'

import MovieInfo from '../MovieInfo/MovieInfo'
import MovieSearch from '../MovieSearch/MovieSearch'

const Stack = createStackNavigator()

const image = {uri: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"}

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.searchSection}>
          <Text style={styles.titleName}>MOOVIELE</Text>
          <TextInput
            style={styles.searchBar}
            placeholder=" Search for any movie.."
            onSubmitEditing={(nativeObject) => navigation.navigate('Movie Search', {
              input: nativeObject.nativeEvent.text
            })}/>
        </View>
      </ImageBackground>
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
        <Stack.Screen name="Movie Search" component={MovieSearch} options={{
          headerStyle: {
            backgroundColor: '#e4e6e89c',
          }
        }} />
        <Stack.Screen name="Movie Info" component={MovieInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MovieBrowser;
