import React from "react";
import { Text, View } from "react-native";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from '../components/Header'

class HomeScreen extends React.Component {

  render() {
    return (
      <LinearGradient
      colors={[ "#1a0033","#330066","#002699"]}
      start={[0, 0]}
      end={[1, 1.5]}
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
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttons: {
    marginBottom:10,
    width:'100%',
    alignItems: "center",
    justifyContent:"space-around"

  },
  button: {
    margin:10,
    width:'65%',
    height:60,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.68,
    elevation: 8
  },
  h1: {
    fontSize: 80,
    color:"#fff",
    textAlign: "center",
    marginBottom:80
  },
  h2: {
    fontSize: 25,
   
    textAlign: "center"
  }
});
export default HomeScreen;
