import React from 'react';
import {Text, View,Image, SafeAreaView, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screen01 from './components/Screen01'
import Screen02 from './components/Screen02'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01">
        <Stack.Screen name="Screen01" component={Screen01}/>
        <Stack.Screen name="Screen02" component={Screen02}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;