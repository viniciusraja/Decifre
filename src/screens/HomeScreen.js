import React from "react";
import { Text, View } from "react-native";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from '../components/Header'

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
          <Text style={styles.h1}>Decifre</Text>
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
  buttons: {
    marginTop:50,
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
  h1: {
    fontSize: 50,
    color:"#fff",
    textAlign: "center",
    marginBottom:80
  },
  h2: {
    fontSize: 18,
    color:'#fff',
    textAlign: "center",
    justifyContent:'center'
  }
});
export default HomeScreen;
