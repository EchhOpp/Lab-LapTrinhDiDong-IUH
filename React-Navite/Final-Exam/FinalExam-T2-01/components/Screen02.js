import React, {useState} from 'react';
import {Text, TextInput,Image, View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

export default function Screen02() {
  const [selectcategory, setSelectCategory] = useState('smartphone');
  const [type, setType] = useState('bestsales');
  const [show, setShow] = useState(false);
  const category = [
    {id: 1, name: 'smartphone', img: require('../assets/smart.png')},
    {id: 2, name: 'ipad', img: require('../assets/ipad.png')},
    {id: 3, name: 'macbook', img: require('../assets/macbook.png')},
  ];
  const   products = {
    smartphone: {
      bestsales: [
        {id: 1, name: "Dien thoai A", price: "300"},
        {id: 2, name: "Dien thoai B", price: "300"},
        {id: 3, name: "Dien thoai C", price: "300"},
        {id: 31, name: "Dien thoai C", price: "300"},
        {id: 32, name: "Dien thoai C", price: "300"},
        {id: 33, name: "Dien thoai C", price: "300"},
      ],
      bestmatch: [
        {id: 5, name: "Dien thoai AA", price: "300"},
        {id: 6, name: "Dien thoai BB", price: "300"},
        {id: 7, name: "Dien thoai CC", price: "300"},
      ],
      popular: [
        {id: 8, name: "Dien thoai AA1", price: "300"},
        {id: 9, name: "Dien thoai BB1", price: "300"},
        {id: 10, name: "Dien thoai CC1", price: "300"},
      ]
    },
    ipad: {
      bestsales: [
        {id: 1, name: "Dien thoai A", price: "300"},
        {id: 2, name: "Dien thoai B", price: "300"},
        {id: 3, name: "Dien thoai C", price: "300"},
      ],
      bestmatch: [
        {id: 5, name: "Dien thoai AA", price: "300"},
        {id: 6, name: "Dien thoai BB", price: "300"},
        {id: 7, name: "Dien thoai CC", price: "300"},
      ],
      popular: [
        {id: 8, name: "Dien thoai AA1", price: "300"},
        {id: 9, name: "Dien thoai BB1", price: "300"},
        {id: 10, name: "Dien thoai CC1", price: "300"},
      ]
    },
    macbook: {
      bestsales: [
        {id: 1, name: "Dien thoai A", price: "300"},
        {id: 2, name: "Dien thoai B", price: "300"},
        {id: 3, name: "Dien thoai C", price: "300"},
      ],
      bestmatch: [
        {id: 5, name: "Dien thoai AA", price: "300"},
        {id: 6, name: "Dien thoai BB", price: "300"},
        {id: 7, name: "Dien thoai CC", price: "300"},
      ],
      popular: [
        {id: 8, name: "Dien thoai AA1", price: "300"},
        {id: 9, name: "Dien thoai BB1", price: "300"},
        {id: 10, name: "Dien thoai CC1", price: "300"},
      ]
    },
  } 
  const data = show ? products[selectcategory][type] :  products[selectcategory][type].slice(0, 4);
  return (
    <SafeAreaView style={{backgroundColor: 'white', padding: 10, flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#eff1f4', paddingHorizontal: 10, borderRadius: 4}}>
          <Image source={require('../assets/search.png')}/>
          <TextInput placeholder="search" style={{flex: 1,padding: 10, color: 'grey'}} />
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
            <Text style={{fontWeight: 'bold'}}>Category</Text>
            <TouchableOpacity onPress={() => setShow(true)}>
              <Text>See all >></Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList 
              data={category}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
                <TouchableOpacity style={{backgroundColor:'#a0a7c3', marginRight: 24, padding: 10, borderRadius: 10}}>
                  <Image source={item.img}/>
                </TouchableOpacity>
              )}
              horizontal={true}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical: 20}}>
          <TouchableOpacity onPress={() => setType('bestsales')}>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Best sales</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setType('bestmatch')}>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Best matched</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setType('popular')}>
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Popular</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=>(
              <View>
              <Text>{item.name}</Text>
              <Text>{item.id}</Text>
              </View>
            )}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Image source={require('../assets/clarity_home-solid.png')}/>
        <Image source={require('../assets/search.png')}/>
        <Image source={require('../assets/mdi_heart-outline.png')}/>
        <Image source={require('../assets/solar_inbox-outline.png')}/>
        <Image source={require('../assets/codicon_account.png')}/>
      </View>
    </SafeAreaView>
  );
}