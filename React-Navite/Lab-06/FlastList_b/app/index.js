import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  Image,
  
} from 'react-native';
import React from 'react'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img: require('../assets/images/giacchuyen1.png'),
    content: 'Cáp chuyển từ Cổng USB sang PS2...',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    img: require('../assets/images/giacchuyen1.png'),
    content: 'Cáp chuyển từ Cổng USB sang PS2...',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    img: require('../assets/images/giacchuyen1.png'),
    content: 'Cáp chuyển từ Cổng USB sang PS2...',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    img: require('../assets/images/giacchuyen1.png'),
    content: 'Cáp chuyển từ Cổng USB sang PS2...',
  }
];

const Item = ({obj}) => (
<View style={styles.itemContainer}>
    <Image source={obj.img} style={styles.itemImage} />
    <Text>{obj.content}</Text>
  </View>
);

const index = () => {
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

      <View style={{ flex: 1}}>
        <FlatList
        data={DATA}
        renderItem={({ item }) => <Item obj={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        
        >
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

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#1da7fc',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
  },
  searchIcon: {
    padding: 5,
    borderRadius: 10,
  },
  searchInput: {
    width: '50%',
    padding: 5,
  },
  itemContainer: {
    flex: 1,
    padding: 10,
    width: Dimensions.get('window').width / 2 - 20, // Đảm bảo mỗi item có chiều rộng phù hợp
  },
  itemImage: {
    width: '100%',
    height: 100,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#1da7fc',
  },
});

export default index;