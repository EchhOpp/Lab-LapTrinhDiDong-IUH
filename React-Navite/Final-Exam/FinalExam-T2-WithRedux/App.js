import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store} from './store';
import Screen01 from './components/Screen01';
import Screen02 from './components/Screen02';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen01">
          <Stack.Screen name="Screen01" component={Screen01} options={{headerShown: false}} />
          <Stack.Screen name="Screen02" component={Screen02} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
