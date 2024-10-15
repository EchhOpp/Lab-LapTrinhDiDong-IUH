import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';

const DetailList = ({ navigation }) => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch('https://66fc94bfc3a184a84d1762e5.mockapi.io/todos')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []); 

  const deletetask = (id) => {
    fetch(`https://66fc94bfc3a184a84d1762e5.mockapi.io/todos/${id}`, {
      method: 'DELETE', 
      headers: {
        Accept: 'application/json', // Chấp nhận dữ liệu dạng JSON
        'Content-Type': 'application/json' // Dữ liệu gửi đi là JSON
      }
    })
    .then((response) => response.json())
    .then(
      () => setData((currentData) => currentData.filter(item => item.id !== id))
    )
    .catch((error) => console.error(error));
  };

  const renderItem = ({ item }) => {
    const [text, setText] = useState(item.name); // Khởi tạo trạng thái text với giá trị ban đầu là item.name

    return (
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <TouchableOpacity style={{paddingHorizontal: 10}} onPress={() => deletetask(item.id)}>
            <Image source={require('../assets/images/tick.png')} />
          </TouchableOpacity>
          <View style={styles.itemTextContainer}>
            <TextInput
              key={item.id}
              style={styles.itemText}
              value={text}
              onChangeText={setText}
            />
          </View>
          <Image source={require('../assets/images/note.png')} />
        </View>
      </View>
    );
  };



  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.searchContainer}>
        <View style={styles.searchIcon}>
          <Image source={require('../assets/images/icon-search.png')} />
        </View>
        <TextInput placeholder="Search" style={styles.textInput} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddYourJob')}
        >
          <Image source={require('../assets/images/add.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
  textInput: {
    width: '100%',
    padding: 10,
  },
  listContainer: {
    marginTop: 30,
  },
  itemContainer: {
    marginHorizontal: 20,
    marginVertical: 8,
  },
  item: {
    backgroundColor: '#d2d5d9',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemText: {
    fontWeight: 'bold',
  },
  addButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  addButton: {
    backgroundColor: '#26c3d9',
    height: 50,
    width: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailList;