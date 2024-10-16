import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen'
import ListBikeScreen from './components/ListBikeScreen'
import DetailBike from './components/DetailBike'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListBike" component={ListBikeScreen} />
        <Stack.Screen name="Detail" component={DetailBike} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;