import React from 'react';
import { Feather,FontAwesome } from 'expo-vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pos:this.props.pos,
      playerName:this.props.playerName,
      color:this.props.color
    }
  }

 
  render() {
    
      return(

        <View style={{
                backgroundColor: this.props.color,
                height:55,
                width:255,
                flexDirection:'row',
                justifyContent:'flex-start',
                alignItems:'center',
                padding:10,
                borderRadius:15,
                marginVertical:6,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,
                
                elevation: 5,
                }}  >
            <FontAwesome style={styles.iconUser} name='user-secret' size={30} color='#fff' />
            <Text style={styles.h1}>{this.props.playerName}</Text>
            <TouchableOpacity>
            <Feather style={styles.iconUser} name='x' size={33} color='#fff' onPress={()=>this.props.delete(this.state.pos)}/>
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
      fontWeight: "400"
    },
    iconUser:{
       marginLeft: 10 
    }
    })