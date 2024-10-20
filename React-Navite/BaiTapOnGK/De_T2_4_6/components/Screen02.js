import React, {useState, useEffect} from 'react';
import { Text,Image, SafeAreaView,ScrollView,StyleSheet, TextInput, View, TouchableOpacity, FlatList} from 'react-native';

const products = {
  smartphone: {
    bestsales: [
      {id: 1, img: require('../assets/images/1.png'), name: 'Smartphone', price: '$899'},
      {id: 2, img: require('../assets/images/1.png'), name: 'Smartphone', price: '$899'},
      {id: 3, img: require('../assets/images/1.png'), name: 'Smartphone', price: '$899'},
      {id: 4, img: require('../assets/images/1.png'), name: 'Smartphone', price: '$899'},
      {id: 5, img: require('../assets/images/1.png'), name: 'Smartphone', price: '$899'},
    ],
    bestmatch: [
      {id: 1, img: require('../assets/images/2.png'), name: 'Smartphone', price: '$899'},
      {id: 2, img: require('../assets/images/2.png'), name: 'Smartphone', price: '$899'},
      {id: 3, img: require('../assets/images/2.png'), name: 'Smartphone', price: '$899'},
      {id: 4, img: require('../assets/images/2.png'), name: 'Smartphone', price: '$899'},
    ],
    poplar: [
      {id: 1, img: require('../assets/images/3.png'), name: 'Smartphone', price: '$899'},
      {id: 2, img: require('../assets/images/3.png'), name: 'Smartphone', price: '$899'},
      {id: 3, img: require('../assets/images/3.png'), name: 'Smartphone', price: '$899'},
      {id: 4, img: require('../assets/images/3.png'), name: 'Smartphone', price: '$899'},
    ]
  },
  macbook: {
    bestsales: [
      {id: 1, img: require('../assets/images/1.png'), name: 'macbook', price: '$899'},
      {id: 2, img: require('../assets/images/1.png'), name: 'macbook', price: '$899'},
      {id: 3, img: require('../assets/images/1.png'), name: 'macbook', price: '$899'},
      {id: 4, img: require('../assets/images/1.png'), name: 'macbook', price: '$899'},
    ],
    bestmatch: [
      {id: 1, img: require('../assets/images/2.png'), name: 'macbook', price: '$899'},
      {id: 2, img: require('../assets/images/2.png'), name: 'macbook', price: '$899'},
      {id: 3, img: require('../assets/images/2.png'), name: 'macbook', price: '$899'},
      {id: 4, img: require('../assets/images/2.png'), name: 'macbook', price: '$899'},
    ],
    poplar: [
      {id: 1, img: require('../assets/images/3.png'), name: 'macbook', price: '$899'},
      {id: 2, img: require('../assets/images/4.png'), name: 'macbook', price: '$899'},
      {id: 3, img: require('../assets/images/3.png'), name: 'macbook', price: '$899'},
      {id: 4, img: require('../assets/images/4.png'), name: 'macbook', price: '$899'},
    ]
  },
  ipad: {
    bestsales: [
      {id: 1, img: require('../assets/images/1.png'), name: 'ipad', price: '$899'},
      {id: 2, img: require('../assets/images/1.png'), name: 'ipad', price: '$899'},
      {id: 3, img: require('../assets/images/1.png'), name: 'ipad', price: '$899'},
      {id: 4, img: require('../assets/images/1.png'), name: 'ipad', price: '$899'},
    ],
    bestmatch: [
      {id: 1, img: require('../assets/images/2.png'), name: 'ipad', price: '$899'},
      {id: 2, img: require('../assets/images/2.png'), name: 'ipad', price: '$899'},
      {id: 3, img: require('../assets/images/2.png'), name: 'ipad', price: '$899'},
      {id: 4, img: require('../assets/images/2.png'), name: 'ipad', price: '$899'},
    ],
    poplar: [
      {id: 1, img: require('../assets/images/3.png'), name: 'ipad', price: '$899'},
      {id: 2, img: require('../assets/images/3.png'), name: 'ipad', price: '$899'},
      {id: 3, img: require('../assets/images/3.png'), name: 'ipad', price: '$899'},
      {id: 4, img: require('../assets/images/3.png'), name: 'ipad', price: '$899'},
    ]
  }
}

const Screen01 = ({navigation}) => {
  const [category, setCateories] = useState('smartphone');
  const [type, setType] = useState('bestsales');
  const [showAll, setShowALL] = useState(false);

  const data = showAll ? products[category][type] : products[category][type].slice(0,4);

  return (
    <SafeAreaView style={{backgroundColor: 'white', padding: 12, flex: 1}}>
      <View style={{flex: 1}}>
        <View>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={{fontWeight: 'bold'}}>Categories</Text>
            <TouchableOpacity onPress={() => setShowALL(true)}>
              <Text>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent:'space-between', marginVertical: 20}}>
            <TouchableOpacity style={{backgroundColor: '#d7c8f3', borderRadius: 4}} onPress={() => setCateories('smartphone')}>
              <Image source={require('../assets/images/smart.png')}/>
            </TouchableOpacity>          
            <TouchableOpacity style={{backgroundColor: '#d7c8f3', borderRadius: 4}} onPress={() => setCateories('ipad')}>
              <Image source={require('../assets/images/ipad.png')}/>
            </TouchableOpacity>          
            <TouchableOpacity style={{backgroundColor: '#d7c8f3', borderRadius: 4}} onPress={() => setCateories('macbook')}>
              <Image source={require('../assets/images/macbook.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-between', marginVertical: 20,alignItems: 'center'}}>
          <TouchableOpacity onPress={() => setType('bestsales')}>
            <Text>
              Best Sales
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setType('bestmatch')}>
            <Text>
              Best Matched
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setType('poplar')}>
            <Text>
              Poplar
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList 
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={
            ({item}) => (
              <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Image source={item.img}/>
                  <View style={{flex: 1}}>
                    <Text>
                      {item.name}
                    </Text>
                    <Image source={require('../assets/images/Rating.png')}/>
                  </View>
                  <View>
                    <Text>+</Text>
                    <Text>{item.price}</Text>
                  </View>
                </View>
              </View>
            )
          }
          />
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Image source={require('../assets/images/clarity_home-solid.png')}/>
        <Image source={require('../assets/images/search.png')}/>
        <Image source={require('../assets/images/mdi_heart-outline.png')}/>
        <Image source={require('../assets/images/solar_inbox-outline.png')}/>
        <Image source={require('../assets/images/codicon_account.png')}/>
      </View>
    </SafeAreaView>
  )
}

export default Screen01;