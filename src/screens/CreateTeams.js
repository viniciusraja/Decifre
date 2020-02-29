import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign, MaterialCommunityIcons } from "expo-vector-icons";

import {connect} from 'react-redux'
import {addPlayer, deletePlayer} from '../ducks/actions/players'

import Player from "../components/Player";
import CreatePlayer from "../components/CreatePlayer";
class CreateTeams extends React.Component {
  constructor(props) {
    super(props);

    this.DATA = [
      {
        pos: 0,
        id: "1",
        playerName: "",
        color: "#300066"
      },
      {
        pos: 1,
        id: "2",
        playerName: "Viníciu",
        color: "#5900b3"
      },
      {
        pos: 2,
        id: "3",
        playerName: "",
        color: "#8c1aff"
      },
      {
        pos: 3,
        id: "4",
        playerName: "",
        color: "#b366ff"
      },
      {
        pos: 4,
        id: "5",
        playerName: "sdv",
        color: "#bb80ff"
      }
    ];

    this.state = {
      playersArray: [],
      modalVisible: false,
      y: 0
    };

    this.handleChangeText = this.handleChangeText.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handleChangeText(team) {
    this.setState({
      [name]: team
    });
  }

  componentDidMount() {
    this.setState({ playersArray: [...this.DATA] });
  }

  deletePlayer(pos) {
    const players = [...this.state.playersArray];

    players[pos].playerName = "";

    this.setState({ playersArray: players });
  }

  handleLayout = ({ nativeEvent }) => {
    this.setState({ y: nativeEvent.layout.y });
  };

  addPlayer(name) {
    const players = [...this.state.playersArray];
    let index = players.findIndex(item => item.playerName === "");

    players[index].playerName = name;
    this.setState({ playersArray: players });
    this.setModal();
  }

  setModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }
  render() {
    console.log(this.props)
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

          <Modal
            style={styles.modal}
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            presentationStyle="overFullScreen"
          >
            <CreatePlayer
              addPlayer={this.addPlayer.bind(this)}
            />
          </Modal>

          <View style={styles.playersBox}>
            <FlatList
              style={styles.listPlayers}
              data={this.props.players}
              renderItem={({ item }) => {
                if (item.playerName == "") return null;
                return (
                  <Player
                    playerName={item.playerName}
                    color={item.color}
                    pos={item.pos}
                    delete={this.deletePlayer.bind(this)}
                  />
                );
              }}
              keyExtractor={item => item.id}
              extraData={this.state.playersArray}
            />

            <View onLayout={this.handleLayout}>
              {this.state.y < 290 && (
                <TouchableOpacity
                  style={styles.iconUser}
                  onPress={() => this.setModal()}
                >
                  <AntDesign name="adduser" size={30} color="#555" />
                </TouchableOpacity>
              )}
            </View>
          </View>
            <TouchableOpacity style={styles.playButton}  onPress={()=>{this.props.navigation.navigate('Game') }}>
               <MaterialCommunityIcons  name="play-speed" size={75} color='#ddd' />
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

  playButton: {
    marginVertical:15,
  },
  h1: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff"
  },
  input: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
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
  playersBox: {
    flex: 1,
    marginTop: 10,
    flexDirection: "column",
    padding: 5,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  listPlayers: {
    flexGrow: 0
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  iconUser: {
    alignItems: "center",
    width: 37,
    height: 37,
    borderWidth: 2,
    borderColor:"#555",
    borderRadius: 30,
    marginTop: 10
  }
});

 const mapStateToProps = state =>{

  return{
    players:state.playerReducer.playersList  
  }
}

const mapDispatchToProps = dispatch =>{
    return{
      add:(name, index)=> dispatch(addPlayer(name,index)),
      delete:(name,index)=>dispatch(deletePlayer(name,index))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeams);
 