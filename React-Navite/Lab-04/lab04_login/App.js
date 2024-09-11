import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput,Button,TouchableOpacity} from 'react-native';



import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyInput}>
          <TextInput style={styles.textInput} 
          placeholder="Name"
          placeholderTextColor='black'
          />
          <TextInput style={styles.textInput}
          placeholder="Password"
          placeholderTextColor='black'
          />
        </View>
        <TouchableOpacity style={styles.bodyButton}>
          <View style={styles.btnA}>
            <Text style={styles.btn}>LOGIN</Text>
          </View>
        </TouchableOpacity>
       </View>
      <View style={styles.footer}>
        <Text>Forget Your Password</Text>
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FBCB00',
    padding: 8,
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 2,
    padding: 16,
  },
  bodyInput:{
    flex: 2,
    justifyContent: 'space-around',
  },
  textInput: {
    height: '24%',
    padding: 10,
    borderColor: 'white',
    color: 'white',
    borderWidth: 2,
  },
  bodyButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  btnA: {
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "black",
    height: '40%',
    width: '100%',
  },
  btn: {
    color: 'white',
    fontWeight: 'bold'
  },
  footer: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
});
