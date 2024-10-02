import { View, Text ,SafeAreaView, TouchableOpacity, TextInput, FlatList} from 'react-native'
import React, {useEffect, useState} from 'react'

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

  return (
    <SafeAreaView>
      <View>
        <TextInput placeholder='Nhập tên'style={{borderWidth:1, borderColor:'black', padding : 10, margin: 10}}/>
        <TouchableOpacity style={{backgroundColor:'blue', padding: 10, margin: 10}}>
          <Text style={{color:'white', textAlign:'center', fontWeight:'bold'}}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={
            ({id}, index) => id
          }
          renderItem={
            ({item}) => <Text>
                           {item.name}
                        </Text>
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default index;