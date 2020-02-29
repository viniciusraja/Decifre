import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
class HomeScreen extends React.Component {

  render() {
    return (
      <LinearGradient
      colors={[ "#458299","#23414D"]}
      start={[0, 0]}
      end={[0, 0.8]}
      style={{ flex: 1}}
      >
        <View style={styles.container}>
          <View style={{height:200,width:200}}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain"/>
          </View>
          <View style={{height:70,width:230}}>
          <Image source={require('../../assets/title.png')} style={styles.title} resizeMode="contain"/>
          </View>
          
          <View style={styles.buttons}>
          
          <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('CreateLobby')}>
            <Text style={styles.h2}> Criar Sala </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('SignInLobby')}>
            <Text style={styles.h2}> Entrar em Sala </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}  onPress={()=>this.props.navigation.navigate('Game')}>
            <Text style={styles.h2}> Instruções </Text>
          </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo:{
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
    },
  title:{
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  buttons: {
    marginTop:15,
    width:'100%',
    alignItems: "center",
    justifyContent:"space-around"

  },
  button: {
    marginVertical:5,
    justifyContent:'center',
    width:248,
    backgroundColor:"transparent",
    height:32,
    padding: 10,
    borderWidth:1.5,
    borderColor:"#4A6F82",
    borderRadius:30,
    shadowColor: "#fff",
    shadowOffset: {
      width: 2,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.68,
  },
   h2: {
    fontSize: 18,
    color:'#fff',
    textAlign: "center",
    justifyContent:'center'
  }
});
export default HomeScreen;
