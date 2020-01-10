import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from 'expo-vector-icons';



export default class Player extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        
        
        <FontAwesome style={styles.iconUser} name='user-secret' size={37} color='#fff' />
        <Text style={styles.h1}>Jogadores</Text>
        <TouchableOpacity>
        <Feather style={styles.iconUser} name='x' size={37} color='#fff'/>
        </TouchableOpacity>
        </View>
        
        )
  }
}


const styles = StyleSheet.create({
    container: {
            backgroundColor:"purple",
            height:60,
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
            padding:10,
            borderRadius:15,
            margin:8,
    },
    h1: {
      fontSize:20,
      flex:1,
      marginLeft:10,
      marginBottom:5,
      color:"#fff"
    },
    iconUser:{
        
    }
    })