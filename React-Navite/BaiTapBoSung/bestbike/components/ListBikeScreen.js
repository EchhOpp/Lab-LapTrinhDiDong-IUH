import React, {useState, useEffect} from 'react';
import { Text,Image, SafeAreaView,ScrollView,StyleSheet, TextInput, View, TouchableOpacity, FlatList} from 'react-native';

const ListBikeScreen = ({ navigation }) => {
const [listBike, setListBike] = useState([
  {id: '1', name: 'Pinarello', img: require('../assets/bike1.png'), price: 100, rate: true, type: 'Roadbike'},
  {id: '2', name: 'Pina Mountai', img: require('../assets/bike2.png'), price: 200, rate: false, type: 'Mountain'},
  {id: '3', name: 'Pina Bike', img: require('../assets/bike3.png'), price: 200, rate: false, type: 'Roadbike'},
  {id: '4', name: 'Pinarello', img: require('../assets/bike4.png'), price: 200, rate: false, type: 'Mountain'},
  {id: '5', name: 'Pina Bike', img: require('../assets/bike5.png'), price: 200, rate: false, type: 'Roadbike'},
  {id: '6', name: 'Pinarello', img: require('../assets/bike6.png'), price: 200, rate: false, type: 'Mountain'},
]);

  const [filteredBikes, setFilteredBikes] = useState(listBike);

  const filterBikes = (type) => {
    if (type === 'All') {
      setFilteredBikes(listBike);
    } else {
      setFilteredBikes(listBike.filter(bike => bike.type === type));
    }
  };


  return (
    <ScrollView style={styles.container}>
      <View style={{width: '100%'}}>
        <Text style={{marginVertical: 20, color: 'red', fontWeight: 'bold', fontSize: 20}}>The world’s Best Bike</Text>
        <View style={{flexDirection: 'row', marginVertical: 20, width: '100%'}}>
            <TouchableOpacity style={styles.btn} onPress={() => filterBikes('All')}>
              <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, {marginHorizontal: 12}]} onPress={() => filterBikes('Roadbike')}>
              <Text>Roadbike</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => filterBikes('Mountain')}>
              <Text>Mountain</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={{flex:1}}>
        <FlatList 
          data={filteredBikes}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={
            ({item}) => (
              <TouchableOpacity style={{justifyContent: 'center', alignItems:'center', margin: 10}} onPress={() => navigation.navigate('Detail', {detailBike: item})}>
                <Image source={item.img}/>
                <Text style={{color: 'rgba(0, 0, 0, 0.6)'}}>{item.name}</Text>
                <Text>${item.price}</Text>
              </TouchableOpacity>
            )
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: 'white',
    width: '100%'
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderStartColor: 'grey',
    borderRadius: 4, 
    borderWidth: 1,
  },
});

export default ListBikeScreen;