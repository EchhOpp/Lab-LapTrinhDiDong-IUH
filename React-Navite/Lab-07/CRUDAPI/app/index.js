import { View, Text ,SafeAreaView, TouchableOpacity, TextInput, FlatList} from 'react-native'
import React, {useEffect, useState} from 'react'
import Component from './component';

const index = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState([]);

  useEffect(
    () => {
      fetch('https://6458c5718badff578efa564b.mockapi.io/api/todos')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
    }, []
  );

  const handleAdd = () => {
    const newData = { 
      name: 'New User', 
      avatar: 'https://example.com/new-avatar.jpg', 
      createdAt: new Date().toISOString() 
    };
  
    fetch('https://6458c5718badff578efa564b.mockapi.io/api/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
    .then((response) => response.json())
    .then((json) => {
      setData((currentData) => [...currentData, json]);
      setInput('');
    })
    .catch((error) => console.error(error));
  };


  return (
    <SafeAreaView style={{flex: 1}}> 
      <View>
        <TextInput placeholder='Nhập tên'style={{borderWidth:1, borderColor:'black', padding : 10, margin: 10}}/>
        <TouchableOpacity style={{backgroundColor:'blue', padding: 10, margin: 10}} onPress={handleAdd}>
          <Text style={{color:'white', textAlign:'center', fontWeight:'bold'}}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          keyExtractor={
            ({id}, index) => id
          }
          renderItem={
            ({item}) => <Component obj={item}></Component>
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default index;