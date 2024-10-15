import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

const CakeComponent = ({props, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1, flexDirection: 'row', width: '100%',marginVertical: 10}}>
        <View style={{marginHorizontal: 10}}>
          <Image source={require('../assets/donut_yellow.png')} />
        </View>
        <View style={{flex:1, width: '70%', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text>{props.name}</Text>
          <Text>{props.name}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{props.name}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {  id: props.id })}>
              <Image source={require('../assets/plus_button.png')}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3dedd',
    margin: 10,
  },
});

export default CakeComponent;