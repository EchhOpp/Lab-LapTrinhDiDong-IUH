import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img: require('./assets/ca_nau_lau.png'),
    content: 'Ca nấu lẩu mì, nấu mì mini',
    nameShope: 'Shop Devang',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    img: require('./assets/do_choi_dang_mo_hinh.png'),
    content: 'Ca nấu lẩu mì, nấu mì mini',
    nameShope: 'Shop Devang',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    img: require('./assets/ga_bo_toi.png'),
    content: 'Ca nấu lẩu mì, nấu mì mini',
    nameShope: 'Shop Devang',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    img: require('./assets/xa_can_cau.png'),
    content: 'Ca nấu lẩu mì, nấu mì mini',
    nameShope: 'Shop Devang',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img: require('./assets/ca_nau_lau.png'),
    content: 'Ca nấu lẩu mì, nấu mì mini',
    nameShope: 'Shop Devang',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    img: require('./assets/do_choi_dang_mo_hinh.png'),
    content: 'Ca nấu lẩu mì, nấu mì mini',
    nameShope: 'Shop Devang',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    img: require('./assets/ga_bo_toi.png'),
    content: 'Ca nấu lẩu mì, nấu mì mini',
    nameShope: 'Shop Devang',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    img: require('./assets/xa_can_cau.png'),
    content: 'Ca nấu lẩu mì, nấu mì mini',
    nameShope: 'Shop Devang',
  },
];

const ListItem = ({obj}) => (
  <View style={styles.item}>
    <View style={styles.flex1}> 
      <Image  source={obj.img}/>
    </View>
    <View style={styles.flex2}>
      <Text style={
      {marginHorizontal: 12}
      }>{obj.content}</Text>
      
      <Text style={
      {marginHorizontal: 12}
      }>{obj.nameShope}</Text>
    </View>
    <View style={
      {
        alignItems: 'center',
        justifyContent: 'center'
      }
    }>
      <TouchableOpacity style={
        {backgroundColor: 'red',
        paddingHorizontal: 18,
        paddingVertical: 8,
        }
      }>
        <Text>Chat</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.containe}>
      <View style={styles.header}>
        <Image  source={require('./assets/ant-design_arrow-left-outlined.png')} />
        <Text style={styles.text}>Chat</Text>
        <Image  source={require('./assets/bi_cart-check.png')} />
      </View>
      <View style={styles.body}>
        <View style={styles.textChat}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</View>
        <FlatList
        data={DATA}
        renderItem = {
          ({item}) => <ListItem obj={item}></ListItem>
        }
        keyExtractor={item => item.id}
        >
        </FlatList>
      </View>
      <View style={styles.footer}>
       <Image source={require('./assets/footer.png')}></Image>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    flex1: {
      flex: 1
    },
    flex2: {
      flex: 2
    },
    containe: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      height: 30,
      backgroundColor: 'blue'
    },
    text: {
      fontWeight: 'bold',
      fontSize: 18,
      color: 'white',
    },
    textChat: {
      margin: 16, borderBottomWidth: 1, paddingBottom: 8, borderColor: 'grey'
    },
    body: {
      flex: 1
    },
    footer: {
      height: 30,
      backgroundColor: 'blue'
    },
    item:{ 
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: 'grey',
      margin: 16,
      paddingBottom: 8
    }
});
export default App;