import React, {useState} from 'react';
import {View, Text, TextInput, SafeAreaView, Image, TouchableOpacity} from 'react-native';

export default function Screen01({navigation}) {
  const account = [
    {
      username: 'abc',
      pass: 123,
    }
  ];

  const [usename, setUseName] = useState('');
  const [password, setPassWord] = useState('');

  const checklogin = () => {
    const check = account.find(user => user.username == usename && user.pass == password )
    if(check)
      return navigation.navigate('Screen02')
    else
      alert('Nhap thong tin sai')
  }
  return(
    <SafeAreaView style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
        <Image source={require('../assets/icon.png')}/>
        <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>Hello Again!</Text>
        <Text style={{textAlign: 'center', fontSize: 12}}>Log into your account</Text>
      </View>
      <View style={{flex: 2}}>
        <View>
          <View style={{borderWidth: 1, borderColor: 'grey', borderRadius: 8, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10}}>
            <Image source={require('../assets/Vector.png')}/>
            <TextInput placeholder={'enter your email address'} style={{padding: 10, flex: 1}}
              value={usename}
              onChangeText={setUseName}
            />
          </View>
          <View style={{borderWidth: 1, borderColor: 'grey', borderRadius: 8, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginVertical: 10}}>
            <Image source={require('../assets/Vector.png')}/>
            <TextInput placeholder={'enter your password'} style={{padding: 10, flex: 1}}
              value={password}
              onChangeText={setPassWord}
            />
          </View>
          <Text style={{textAlign: 'right'}}>Forgot password?</Text>
          <TouchableOpacity style={{backgroundColor: 'blue',paddingVertical: 10, borderRadius: 8, marginVertical: 10}}
            onPress={checklogin}
          >
            <Text style={{textAlign: 'center', color: 'white'}}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', marginVertical: 20}}>____________ or ____________</Text>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/google.png')}/>
            <Image source={require('../assets/face.png')} style={{marginHorizontal: 10}}/>
            <Image source={require('../assets/apple.png')}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}