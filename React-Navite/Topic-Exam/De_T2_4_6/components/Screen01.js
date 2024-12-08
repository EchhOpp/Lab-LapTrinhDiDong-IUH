import React, {useState, useEffect} from 'react';
import { Text,Image, SafeAreaView,ScrollView,StyleSheet, TextInput, View, TouchableOpacity, FlatList} from 'react-native';
0
const Screen01 = ({navigation}) => {
  const users = [
    {
      email: 'abc',
      pw: '123'
    }
  ];

  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');

  const handleLogin = () => {
    const check = users.find(users => users.email == email && users.pw == password);
    if(check)
      return navigation.navigate('Screen02')
    else
      alert('Sai tai khoan hoac mat khau')
  };

  return (
    <ScrollView style={{backgroundColor: 'white', padding: 12}}>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image source={require('../assets/images/icon.png')} />
        <Text style={{fontSize: 24, fontWeight: 'bold', padding: 14}}>
          Hello Again!
        </Text>
        <Text>
          Log into your account
        </Text>
      </View>
      <View style={{marginVertical: 30}}>
        <View style={{borderColor: 'grey', borderWidth: 1, borderRadius: 8, marginBottom:20, flexDirection: 'row', alignItems: 'center'}}>
          <Image style={{marginHorizontal: 10}} source={require('../assets/images/Vector.png')} />
          <TextInput style={{padding: 10, width: '100%'}} placeholder='Enter your email address'
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={{borderColor: 'grey', borderWidth: 1, borderRadius: 8, marginBottom:20, flexDirection: 'row', alignItems: 'center'}}>
          <Image style={{marginHorizontal: 10}} source={require('../assets/images/lock.png')} />
          <TextInput style={{padding: 10, width: '100%'}} placeholder='Enter your email address'
            value={password}
            onChangeText={setPassWord}
          />
          <Image style={{marginHorizontal: 10}} source={require('../assets/images/eye.png')} />
        </View>
        <View>
          <Text style={{textAlign: 'right', marginVertical: 8}}>
            Fortgot password?
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={{backgroundColor: '#00bed4', padding: 14, borderRadius: 20}} onPress={handleLogin}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{textAlign: 'center', marginVertical: 20}}>or</Text>

      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/images/face.png')}/>
        <Image style={{marginHorizontal: 10}} source={require('../assets/images/google.png')}/>
        <Image source={require('../assets/images/apple.png')}/>
      </View>
    </ScrollView>
  )
}

export default Screen01;