import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  
} from 'react-native';
import React from 'react'

export default function index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', backgroundColor: '#1da7fc', padding: 10 , justifyContent: 'space-between', alignItems: 'center'}}>
        <Image source={require('../assets/images/Vector.png')} />
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, padding: 5 }}>
          <View style={{ padding: 5, borderRadius: 10 }}>
            <Image source={require('../assets/images/whh_magnifier.png')}/>
          </View>
          <TextInput placeholder='Dây cáp usb' style={{ width: '50%', padding: 5}} placeholderTextColor='#1da7fc' />
        </View>
        <Image source={require('../assets/images/bi_cart-check.png')} />
        <Image source={require('../assets/images/bacham.png')} />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList>
          <Text>Chat</Text>
        </FlatList>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#1da7fc' }}>
        <Image source={require('../assets/images/cd.png')} />
        <Image source={require('../assets/images/Vector.png')} />
        <Image source={require('../assets/images/Vector.png')} />
      </View>
    </SafeAreaView>
  )
}