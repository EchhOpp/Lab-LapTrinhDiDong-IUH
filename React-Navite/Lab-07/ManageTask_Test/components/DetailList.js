import { Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

const DetailList = ({ navigation }) => {
  return (
    <View>
      <Text>Detail List</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailList;