import React, { Component } from 'react';

import  { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

export default class CreatePlayer extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.playerBox}>

            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
           
            flex:1,
    },
    playerBox:{
            backgroundColor:"#fff",
            height:200,
            justifyContent:'center',
            alignItems:'center'
    }
})