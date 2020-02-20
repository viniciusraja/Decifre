import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



export default class Header extends React.Component {
  render() {
      return (
        <>
        <View style={styles.container}>
        <View style={styles.iconUser}>
        <AntDesign  name={this.props.name} size={32} color='#ddd' onPress={() => this.props.navigation.goBack()}/>
        </View>
        <Text style={styles.h1}>{this.props.screen}</Text>
        </View>
        </>
      )}
}



const styles = StyleSheet.create({
    container: {
            backgroundColor:"#aaa",
            height:45,
            flexDirection:'row',
            width:"100%",
            justifyContent:'flex-start',
            alignItems:'flex-end',
            
         
    },
    h1: {
      fontSize:22,
      flex:1,
      color:"#fff",
      marginVertical:10,
      marginLeft:10
    },
    iconUser:{
      backgroundColor:"#777",
      height:45,
      width:45,
      justifyContent:"center",
      alignItems:"center",
      borderRightWidth:2,
      borderRightColor:"#ccc",
    }
    
    })