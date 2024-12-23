import React from 'react';
import {View, Text, TextInput, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Screen01 from './components/Screen01'
import Screen02 from './components/Screen02'

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen02">
        <Stack.Screen name="Screen01" component={Screen01} options={{headerShown: false}}/>
        <Stack.Screen name="Screen02" component={Screen02} options={{
          headerTitle: "Electronics",
          headerRight: () => (
            <Image source={require('./assets/codicon_account.png')} style={{marginHorizontal: 10}}/>
          )
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;