import React from 'react';
import {Text, View,Image, SafeAreaView, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screen01 from './components/Screen01'
import Screen02 from './components/Screen02'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Screen02'>
        <Stack.Screen name="Screen01" component={Screen01} options={{headerShown: false}}/>
        <Stack.Screen name="Screen02" component={Screen02} options={{
          headerTitle: '',
          headerRight: () => (
            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
              <Image source={require('./assets/images/Avatar31.png')}/>
              <View>
              <View style={{flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold'}}>
                  Hi 
                </Text>

                <Text style={{paddingHorizontal: 10, fontWeight: 'bold'}}>
                  Luan
                </Text>
              </View>
                <Text>
                  Have agrate day a head
                </Text>
              </View>
            </View>
          )
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
