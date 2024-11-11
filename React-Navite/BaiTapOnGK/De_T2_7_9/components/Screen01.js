import React, {useState, useEffect} from 'react';
import { Text,Image, SafeAreaView,ScrollView,StyleSheet, TextInput, View, TouchableOpacity, FlatList} from 'react-native';

const Screen01 = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white', padding: 12}}>
      <View style={{justifyContent: 'center', alignItems: 'center', margin: 20}}>
        <Image source={require('../assets/images/Image95.png')}/>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', margin: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color:'#7a5bc4'}}>
          MANAGE YOUR
        </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', color:'#7a5bc4'}}>
          TASK  
        </Text>
      </View>
      <View style={{borderColor: 'grey', borderWidth: 1, borderRadius: 8}}>
        <TextInput style={{padding: 10}} placeholder="Enter your name"/>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 40}}>
        <TouchableOpacity style={{backgroundColor: '#02bed4', width: '40%', padding: 10, borderRadius: 8}} onPress={() => navigation.navigate('Screen02')}>
          <Text style={{textAlign: 'center'}}>
            GET STARTED
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Screen01;