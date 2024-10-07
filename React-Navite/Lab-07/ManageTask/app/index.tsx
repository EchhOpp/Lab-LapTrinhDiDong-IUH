import { Text, View, SafeAreaView, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>MANAGE YOUR</Text>
        <Text style={[styles.headerText, styles.headerTextMargin]}>TASK</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.textInputContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/images/Frame.png')} />
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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