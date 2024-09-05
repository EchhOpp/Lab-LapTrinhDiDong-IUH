import React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ccf9',
  },
  top: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgTop: {
    width: '50%',
    height: '50%',
  }, 

  body:{
    flex: 2,
  },

  textTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // title
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
},

  textContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    width: '80%',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },

  bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  TOlogin: {
    width: '25%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3c100',
    borderRadius: 10,
  },

  login: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },    
});

