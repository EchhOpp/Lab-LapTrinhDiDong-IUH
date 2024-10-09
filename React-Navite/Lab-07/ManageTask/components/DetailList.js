  import {Text, View, SafeAreaView,StyleSheet, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
  import React,  {useState, useEffect}from 'react'


const DetailList = ({navigation}) => {
    const [data, setData] = useState([]);

    useEffect(
      () => {
        fetch('https://66fc94bfc3a184a84d1762e5.mockapi.io/todos')
        .then((response) =>  response.json())
        .then((json) => setData(json))
        .then((error) => console.error(error))
      }
    );  

    const renderItem = ({item}) => (
      <View style={{marginHorizontal: 20, marginVertical: 8}}>
        <View style={{backgroundColor: '#d2d5d9', padding: 10, flexDirection: 'row', justifyContent: 'space-between', borderRadius: 8}}>
            <Image source={require('../assets/images/tick.png')} />
            <View style={{flex:1}}>
              <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
            </View>
            <Image source={require('../assets/images/note.png')} />
        </View>
      </View>
    );

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', borderColor: 'grey', borderWidth: 1, borderRadius: 4, alignItems: 'center', marginHorizontal: 20}}>
          <View style={{paddingHorizontal: 10}}>
            <Image source={require('../assets/images/icon-search.png')}/>
          </View>
          <TextInput placeholder="Search" style={styles.textInput}/>
        </View>
        <View style={{marginTop: 30}}>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
          <TouchableOpacity style={{backgroundColor: '#26c3d9',  height: 50, width: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('AddYourJob')}>
            <Image source={require('../assets/images/add.png')}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    textInput: {
      width: '100%',
      padding: 10
    }
  });

  export default DetailList;