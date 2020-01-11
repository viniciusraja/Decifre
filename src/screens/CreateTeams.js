import React from "react";
import { Text, View } from "react-native";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-gesture-handler";
import Player from "../components/Player";

const DATA = [
  {
    id: '1',
    playerName: "Luana",
    color:"#300066"

  },
  {
    id: '2',
    playerName: "Vinícius",
    color:"#5900b3"
  },
  {
    id: '3',
    playerName: "Pablo",
    color:"#8c1aff"
  },
  {
    id: '4',
    playerName: "Yasmim",
    color:"#b366ff"
  },
  {
    id: '5',
    playerName: "Pederneiras",
    color:"#bb80ff"
  },
];


class CreateTeams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: "Java",
      team: ""
    };
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
        colors={["#1a0033", "#330066", "#002699"]}
        start={[0, 0]}
        end={[1, 1.5]}
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
            <SafeAreaView>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Player name={item.playerName} color={item.color} />}
              keyExtractor={item => item.id}
            />
            </SafeAreaView>

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
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.68,
    elevation: 15
  },

  button: {
    width: 160,
    height: 45,
    backgroundColor: "#0099cc",
    margin: 20,
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
    color: "#fff"
  },
  input: {
  
    textAlign: "center",
    fontSize: 25,
    margin: 10,
    width: "80%",
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
  players: {
    flexDirection:"column",
    flex: 1,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center"
  },
  dropdown: {
    backgroundColor: "#fff",
    width: 180,
    height: 40
  }
});
export default CreateTeams;
