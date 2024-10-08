import {Text, View, SafeAreaView,StyleSheet, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import React,  {useState, useEffect}from 'react'

const index = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', borderColor: 'grey', borderWidth: 1, borderRadius: 4, alignItems: 'center'}}>
        <View style={{paddingHorizontal: 10}}>
          <Image source={require('../assets/images/icon-search.png')}/>
        </View>
        <TextInput placeholder="Search" style={styles.textInput}/>
      </View>
      <View>
        <FlatList>

        </FlatList>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    padding: 10
  }
});

export default index;