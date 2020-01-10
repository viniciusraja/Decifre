import React from "react";
import { Text, View } from "react-native";
import { ScrollView, StyleSheet, TouchableOpacity, Picker } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-gesture-handler";
import Player from '../components/Player'

class CreateTeams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          players: 'Java',
          team:'',
        }
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(team) {
    this.setState({
      [name]: team
    });
  }

  render() {
    return (
      <LinearGradient
        colors={["#480875", "#000000", "#03aacc"]}
        starts={[0.6, 0.2]}
        ends={[0.7, 0.7]}
        style={{ flex: 1 }}
      >
      
        <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Nome do seu Time"
              placeholderTextColor="grey"
              onChangeText={team => this.setState({ team })}
              value={this.state.team}
              />

           <View style={styles.players}>
             <Player/>
           </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.h1}> JOGAR </Text>
            </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
  },

  button: {
    width: 160,
    height: 45,
    backgroundColor: "purple",
    margin: 15,
    padding: 10,
    borderRadius: 15,
    alignContent: "center",
    justifyContent: "flex-end",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.68,
    elevation: 5
  },
  h1: {
    fontSize: 20,
    textAlign: "center",
    color:"#fff"
  },
  input: {
    textAlign:"center",
    fontSize: 25,
    margin:10,
    width:"80%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5
  },
  players:{
    flex:1,
    width:"80%",
    backgroundColor:'#fff',
    borderRadius:15,
    alignItems:'center'
  },
  dropdown:{
      backgroundColor:'#fff',
      width:180,
      height:40,
  },

});
export default CreateTeams;
