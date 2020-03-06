import React, { Component } from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Feather, FontAwesome } from "expo-vector-icons";

import { connect } from "react-redux";
import { addPlayer, deletePlayer } from "../ducks/actions/players";

class CreatePlayer extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      playerName: ""
    }
  }
  
  render() {
    const index= (this.props.players.length)
 console.log(this.props.players)
    return (
      <View style={styles.container}>
        <View style={styles.playerBox}>
          <FontAwesome
            style={styles.iconUser}
            name="user-secret"
            size={37}
            color="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="Digite o Nome do jogador"
            placeholderTextColor="grey"
            maxLength={15}
            onChangeText={playerName =>
              this.setState({ playerName: playerName })
            }
            value={this.player}
          />
          <TouchableOpacity onPress={() =>{ this.props.add({id:`${Math.random()}`,playerName:this.state.playerName}); this.props.modal()}}>
            <Feather
              style={styles.iconUser}
              name="check"
              size={37}
              color="green"
              
            />
          </TouchableOpacity>
        </View>
      </View>
        )
        
      }   
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  playerBox: {
    backgroundColor: "#ddd",
    flexDirection: "row",
    height: 80,
    width: "90%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5
  },
  input: {
    backgroundColor: "#fff",
    height: 35,
    width: "60%",
    borderRadius: 8,
    textAlign: "center",
    elevation: 5
  },
  iconUser: {
    marginHorizontal: 10
  }
});

const mapStateToProps = state => ({
  players: state.playerReducer.playersList
});

const mapDispatchToProps = dispatch => {
  return {
    add: ( player) => dispatch(addPlayer( player)),
    delete: ( player) => dispatch(deletePlayer( player))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlayer);
