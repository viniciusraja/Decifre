import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



export default class Header extends React.Component {
  render() {
    if(this.props.nameIcon2==null){
      return (
        <>
        <View style={styles.container}>
        <AntDesign style={styles.iconUser} name={this.props.name} size={37} color='black' onPress={() => this.props.navigation.goBack()}/>
        <Text style={styles.h1}>{this.props.screen}</Text>
        </View>
        </>
      )}
    return (
        <>
        <View style={styles.container}>
        <AntDesign style={styles.iconUser} name={this.props.name} size={37} color='black' onPress={() => this.props.navigation.goBack()}/>
        <Text style={styles.h1}>{this.props.screen}</Text>
        <TouchableOpacity onPress={()=>this.props.addPlayer()}>
        <AntDesign style={styles.iconUser} name={this.props.nameIcon2} size={37} color='black'/>
        </TouchableOpacity>
        </View>
        </>
        )}
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
         
    },
    h1: {
      fontSize:22,
      flex:1,
      marginLeft:15,
      marginBottom:5
    },
    iconUser:{
     
    }
    })