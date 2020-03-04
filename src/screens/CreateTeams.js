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

    this.state = {
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
    return (
      <LinearGradient
      colors={[ "#458299","#23414D"]}
      start={[0, 0]}
      end={[0, 0.8]}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Nome do seu Time"
            placeholderTextColor="#aaa"
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
              modal={this.setModal.bind(this)}
            />
          </Modal>
          <View style={styles.playersBox}>


            <FlatList
              style={styles.listPlayers}
              data={this.props.players}
              renderItem={({ item }) => {
        
                return (
                  <Player
                    playerName={item.playerName}
                    id={item.id}
                  />
                );
              }}
              keyExtractor={item => item.id}
              extraData={this.state.players}
            />
            <View onLayout={this.handleLayout}>
              {this.state.y < 280 ?
                <TouchableOpacity
                style={styles.iconUser}
                onPress={() => this.setModal()}
                >
                  <AntDesign name="adduser" size={30} color="#ccc" />
                </TouchableOpacity>
                :<View/>  
              }
            </View>
            </View>
            <TouchableOpacity style={styles.playButton}  onPress={()=>{this.props.navigation.navigate('Game') }}>
               <MaterialCommunityIcons  name="play-speed" size={75} color='#ccc' />
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
   
  },

  playButton: {
    marginVertical:15,
  },
    playersBox: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    listPlayers: {
      flexGrow: 0
    },
  h1: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff"
  },
  input: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 20,
    width: "80%",
    height: 35,
    borderWidth:2,
    borderRadius:20,
    borderColor:'#4A6F82'
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
    borderColor:"#ccc",
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
      add:(id, playerName)=> dispatch(addPlayer(id, playerName)),
      delete:(id, playerName)=>dispatch(deletePlayer(id, playerName))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeams);
 