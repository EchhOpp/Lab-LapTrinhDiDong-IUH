import React, {useState, useEffect} from 'react';
import { Text,Image, SafeAreaView,ScrollView,StyleSheet, TextInput, View, TouchableOpacity, FlatList} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{margin: 20}}>
        <Text style={{textAlign:'center'}}>A premium online store for sporter and their stylish choice</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
        <Image source={require('../assets/bifour_-removebg-preview.png')}/>
        <Text style={{fontWeight: 'bold'}}>POWER BIKE</Text>
        <Text style={{fontWeight: 'bold'}}>SHOP</Text>
      </View>
      <View style={{margin: 20, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={{backgroundColor: 'red', paddingHorizontal: 60, paddingVertical: 10, borderRadius: 10}} onPress={() => navigation.navigate('ListBike')}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Get start</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default HomeScreen;