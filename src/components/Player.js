import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from 'expo-vector-icons';



export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pos:this.props.pos,
      id:this.props.id,
      playerName:this.props.playerName,
      color:this.props.color
    }
  }

 
  render() {
    if(this.state.playerName==false)
    return (
      <></>
    )  
      return(

        <View style={{
                backgroundColor: this.props.color,
                height:60,
                width:255,
                flexDirection:'row',
                justifyContent:'flex-start',
                alignItems:'center',
                padding:10,
                borderRadius:15,
                marginTop:15,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,
                
                elevation: 7,
                }}  >
            <FontAwesome style={styles.iconUser} name='user-secret' size={37} color='#fff' />
            <Text style={styles.h1}>{this.state.playerName}</Text>
            <TouchableOpacity>
            <Feather style={styles.iconUser} name='x' size={37} color='#fff' onPress={()=>this.props.delete([this.state.pos,this.state.id,this.state.playerName,this.state.color])}/>
            </TouchableOpacity>
            </View>
            
        )
  }
}


const styles = StyleSheet.create({

    h1: {
      width:140,
      fontSize:20,
      marginLeft:10,
      marginBottom:5,
      color:"#fff",
      fontStyle: "italic",
      fontWeight: "700"
    },
    iconUser:{
       marginLeft: 10 
    }
    })