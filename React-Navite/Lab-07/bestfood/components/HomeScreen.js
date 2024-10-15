import React, {useState, useEffect} from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, View, TouchableOpacity, FlatList} from 'react-native';
import CakeComponent from './CakeComponent'

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectCategroy, setSelectCategroy] = useState('Donut');

  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://66fc94bfc3a184a84d1762e5.mockapi.io/todos');
        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch {
        console.error('Failed to fecth api', error)
      }
    };
    fetchProducts();
  }, []);

  const filterProdct = (category) => {
    if(category === null) {
      return products;
    }
    return products.filter(product => product.category == category)
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%'}}>
        <View style={{margin: 10}}>
          <Text>Welcome, Jala</Text>
        </View>
        <View style={{margin: 10}}>
          <Text>Choice you Best food</Text>
          <View style={{borderColor: 'grey', borderWidth: 1, width: '80%', marginVertical: 8, borderRadius: 4}}>
            <TextInput placeholder="Search food" placeholderTextColor='grey' style={{paddingVertical: 6, textAlign: 'center'}}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.btn, selectCategroy === 'Donut' && { backgroundColor: '#f0af06' }]} onPress={() => setSelectCategroy('Donut')}>
              <Text>Donut</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, {marginHorizontal: 12}]}>
              <Text>Pink Dount</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text>Floating</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex: 1, width: '100%'}}>
        <FlatList 
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={
            ({item}) => (
              <CakeComponent props={item} navigation={navigation}/>
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  btn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderStartColor: 'grey',
    borderRadius: 4, 
    borderWidth: 1,
  },
});

export default HomeScreen;