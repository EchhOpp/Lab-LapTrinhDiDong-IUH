import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from '@/components/style'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function index() {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
        <Ionicons name="git-commit" style={styles.icon} />
        </View>
        <View style={styles.body}>
        <FontAwesome name="home" size={20} color="#000" />
        </View>
        <View style={styles.footer}></View>
      </View>
    </ScrollView>
  )
}