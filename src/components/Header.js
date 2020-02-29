import React, { Component } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const navigate= useNavigation
class Header extends React.Component {
  state = {
    fontLoaded: false,
  };
  render() {
    return (
        <>
        <View style={styles.container}>
        <View style={styles.iconUser}>
        <MaterialIcons  name={'keyboard-arrow-left'} size={32} color='#315161' onPress={() => navigate.goBack()}/>
        </View>
        <Text style={styles.h1}>{this.props.screen}</Text>
        </View>
        </>
      )}
}



const styles = StyleSheet.create({
    container: {
            height:45,
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'flex-end',
            borderRadius:30,
         
    },
    h1: {
      fontSize:22,
      flex:1,
      color:"#fff",
      marginVertical:10,
      marginLeft:10,
    }
    
    })

    const mapStateToProps = state =>{
      return{
        players:state.playerReducer.playersList  
      }
    }
    
    export default connect(mapStateToProps) (Header)