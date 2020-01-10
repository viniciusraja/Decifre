import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';



export default class Header extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.h1}>Jogadores</Text>
        <AntDesign name='adduser' size={30} color='black'/>
        </View>
        
        )
  }
}


const styles = StyleSheet.create({
    container: {
            backgroundColor:"#fff",
            height:80,
            width:"100%",
            
    },
    h1: {
      fontSize:20,
    }
    })