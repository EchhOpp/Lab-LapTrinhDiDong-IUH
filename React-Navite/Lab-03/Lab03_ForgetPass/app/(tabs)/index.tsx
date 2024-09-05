import { View, Text, Image, TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from '../../components/style'

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require('../../assets/images/iconLock.png')} resizeMode='contain' style={styles.icon}></Image>
      </View>
      <View style={styles.body}>
        <View style={styles.title}>
          <Text style={styles.titleText}>FORGET PASSWORD</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>Provide your account's email for which you want to reset your password</Text>
        </View>
      </View>
      <View style={styles.bottom}>

        <View style={styles.input}>
          <TextInput style={styles.textInput} placeholder='Email' placeholderTextColor='black'></TextInput>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.TObtn}>
            <Text style={styles.TextBtn}>SEND</Text>
          </TouchableOpacity>
        </View>

        
      </View>
      <Text style={styles.shawdow}></Text>
    </View>
  )
}