import { View, Text, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import styles from '@/components/style'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function index() {
return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text  style={styles.title}>LOGIN</Text>
    </View>
    <View style={styles.body}>
      <View style={styles.login}>
        <View style={styles.input}>
          <View style={styles.username}>
            <TextInput style={styles.inputusername} placeholder="Email" placeholderTextColor={'#000000'}/>
          </View>
          <View style={styles.password}>
            <TextInput style={styles.inputpassword } placeholder="Password" placeholderTextColor={'#000000'}/>
            <View style={styles.contaiIcon}>
              <FontAwesome style={styles.icon} name="eye"/>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textLogin}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.fotget}>
        <Text style={styles.text}>When you agree to term and conditions</Text>
        <Text style={[styles.text, styles.textblue]}>For got your password?</Text>
        <Text style={styles.text}>Or login with</Text>
      </View>
    </View>
    <View style={styles.footer}>
      <View style={styles.iconfooter}>
        <Ionicons style={styles.icon_f} name="logo-facebook"/>
      </View>
      <View style={styles.iconfooter}>
        <Ionicons style={styles.icon_f} name="logo-twitter"/>
      </View>
      <View style={styles.iconfooter}>
        <Ionicons style={styles.icon_f} name="logo-google"/>
      </View>
    </View>
</View>
)
}