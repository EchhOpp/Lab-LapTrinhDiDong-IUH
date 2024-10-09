import * as React from 'react';
import { Text, View, SafeAreaView, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailList from './components/DetailList';
import AddYourJob from './components/AddYourJob';


const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>MANAGE YOUR</Text>
        <Text style={[styles.headerText, styles.headerTextMargin]}>TASK</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.textInputContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/images/Frame.png')} />
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DetailList')}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{headerShown: false, headerTitle: ''}}
        />
        <Stack.Screen 
        name ='DetailList' 
        component={DetailList} 
        options={{
          headerTitle: '',
          headerRight: () => (
            <View style={{flexDirection: 'row', justifyContent:'center',alignItems: 'center'}}>
              <View style={{marginHorizontal: 10}}>
                <Image source={require('./assets/images/imguser.png')}/>
              </View>
              <View>
                <Text>
                  Hi ThanhLuan
                </Text>
                <Text>
                  Have agreat day a head
                </Text>
              </View>
            </View>
           ),
          
        }}
        />

        <Stack.Screen name='AddYourJob'
        component={AddYourJob}
        options={{
          headerTitle: ''
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#d5b6ff',
  },
  headerTextMargin: {
    marginTop: 8,
  },
  body: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInputContainer: {
    borderColor: 'grey',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 35,
    alignItems: 'center',
    width: '90%',
  },
  imageContainer: {
    padding: 10,
  },
  textInput: {
    width: '100%',
    height: 35,
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#00bdd5',
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
  },
});