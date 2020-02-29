import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default class RoundsHistory extends Component {
  render() {
    return (
        
    <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.h1}>{`1: àbobora, \nmelão,\ncarro, \nprincesa`}</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.h1}>{`1: àbobora, \nmelão,\ncarro, \nprincesa`}</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.h1}>{`1: àbobora, \nmelão,\ncarro, \nprincesa`}</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.h1}>{`1: àbobora, \nmelão,\ncarro, \nprincesa`}</Text>
        </View>
    </View>
    )}
}

const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:"#fff",
        height:90,
    },
    item:{
        backgroundColor:"#ccc",
        width:'25%',
        padding:5,
        borderWidth:1.5,
        borderColor:'#fff'
    },
    h1:{
        fontSize:15,
        textAlign:'right'
    }
})