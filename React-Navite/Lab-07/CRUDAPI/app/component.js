import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const component = ({obj, onDelete}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10, alignItems:'center'}}>
      <Text>{obj.name}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity style={{padding: 8, backgroundColor: 'grey', margin: 10}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 8, backgroundColor: 'grey', margin: 10}} onPress={()=>onDelete(obj.id)}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default component