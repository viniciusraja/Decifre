import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default class RoundsHistory extends Component {
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.h1}>`1`</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.h1}>`2`</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.h1}>`3`</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.h1}>`4`</Text>
        </View>
    </View>
    )}
}

const styles= StyleSheet.create({
    container:{
        flexWrap:'wrap',
        backgroundColor:"#fff"
    },
    item:{
        backgroundColor:"#ccc"
    }
})