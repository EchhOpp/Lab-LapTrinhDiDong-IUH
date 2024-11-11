import React, {useState, useEffect} from 'react';
import { Text,Image, SafeAreaView,ScrollView,StyleSheet, TextInput, View, TouchableOpacity, FlatList, ImageBackground} from 'react-native';

const Screen02 = ({navigation, route}) => {
//  const {userName} = route.params;
  const data = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
  ];

  const [items, setItems] = useState(data) 

  const handerleComplete = (itemID) => {
    setItems( (temp) => (temp.filter(item => item.id !== itemID)) )
  };

  
  // Nhận task mới từ Screen03
  useEffect(() => {
    if (route.params?.newTask) {
      setTasks([...tasks, { id: Date.now().toString(), contentTack: route.params.newTask }]);
    }
  }, [route.params?.newTask]);

  return (
    <SafeAreaView style={{backgroundColor: 'white', padding: 12, flex: 1}}>
      <View style={{borderColor: 'grey', borderRadius: 8, borderWidth: 1}}>
        <TextInput style={{padding: 10}} placeholder="Search"/>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={
            ({item}) => (
              <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20, backgroundColor: '#e4e8eb', paddingVertical: 10, borderRadius: 10, marginHorizontal: 20, paddingHorizontal: 10}}>
                <TouchableOpacity onPress={() => handerleComplete(item.id)}>
                  <Image source={require('../assets/images/mdi_marker-tick.png')}/>
                </TouchableOpacity>
                <Text style={{paddingHorizontal: 50}}>{item.text}</Text>
                <TouchableOpacity>
                  <Image source={require('../assets/images/iconamoon_edit-bold.png')}/>
                </TouchableOpacity>
              </View>
            )
          }
        />
      </View>
      <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', margin: 50}}>
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#02bed4', width: 60, height: 60, borderRadius: 50}} onPress={() => navigation.navigate('Screen03')}> 
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 36, color: 'white'}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Screen02;