import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import DraggablePassword from "./DraggablePassword";

export default class DroppableRoundsHistory extends Component {
   

  render() {
    return (
 <View style={styles.mainContainer}>
        <View style={styles.dropZone}>
          <Text style={styles.text}>Drop them here!</Text>
        </View>
        <View style={styles.ballContainer} />
        <View style={styles.row}>
          <DraggablePassword />
          <DraggablePassword />
          <DraggablePassword />
          <DraggablePassword />
        </View>
      </View>
    



  /*   <View style={styles.container}>
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
    </View> */
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
    },


    mainContainer: {
        flex: 1
      },
      ballContainer: {
        height:200
      },
      row: {
        flexDirection: "row"
      },  
      dropZone: {
        height: 200,
        backgroundColor: "#00334d"
      },
      text: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        textAlign: "center",
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold"
      }
})