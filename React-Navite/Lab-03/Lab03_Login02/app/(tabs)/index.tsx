import {Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { styles } from '../../components/style'

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.imgTop} 
         source={require('../../assets/images/imgTop.png')}
          resizeMode='contain'
        ></Image>
      </View>
      <View style={styles.body}>
        <View style={styles.textTitle}>
          <Text style={styles.title}>GROW</Text>
          <Text style={styles.title}>YOUR BUSINESS</Text>
        </View>
        <View style={styles.textContent}>
          <Text style={styles.content}>We will help you to grow your business using
          online server</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.TOlogin}>
            <Text style={styles.login}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TOlogin}>
            <Text style={styles.login}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textBtn}>HOW ME WORKS?</Text>
        </View>
      </View>

    </View>
  )
}