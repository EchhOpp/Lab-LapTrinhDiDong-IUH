import { View, Text, Image, TextInput,TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import styles from '../../components/style'
import NumberCode from './numberCode'

const index = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const changeCode = (index, value) => {
    const copyArr = [...code];
    copyArr[index] = value;
    setCode(copyArr);
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.titleTop} >CODE</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.title}>
          <Text style={styles.titleText}>VERIFICATION</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>Enter ontime password sent on ++849092605798</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.input}>
          <NumberCode/>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.TObtn}>
            <Text style={styles.TextBtn}>SEND</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
// Remove the extra closing curly brace
}
export default index;