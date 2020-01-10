import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



export default class Header extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        
        
        <AntDesign style={styles.iconUser} name='back' size={37} color='black' onPress={() => this.props.navigation.goBack()}/>
        <Text style={styles.h1}>Jogadores</Text>
        <TouchableOpacity>
        <AntDesign style={styles.iconUser} name='adduser' size={37} color='black'/>
        </TouchableOpacity>
        </View>
        
        )
  }
}


const styles = StyleSheet.create({
    container: {
            backgroundColor:"#fff",
            height:55,
            flexDirection:'row',
            width:"100%",
            justifyContent:'flex-start',
            alignItems:'flex-end',
            padding:10,
            borderBottomLeftRadius:20,
            borderBottomRightRadius:50,
    },
    h1: {
      fontSize:20,
      flex:1,
      marginLeft:10,
      marginBottom:5
    },
    iconUser:{
     
    }
    })