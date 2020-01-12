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




class CreateTeams extends React.Component {
  constructor(props) {
    super(props);

    this.DATA = [
      {
        pos:0,
        id:'1',
        playerName: "",
        color:"#300066"
      },
      {
        pos:1,
        id:'2',
        playerName: "Viníciu",
        color:"#5900b3"
      },
      {
        pos:2,
        id:'3',
        playerName: "",
        color:"#8c1aff"
      },
      { 
        pos:3,
        id:'4',
        playerName: "",
        color:"#b366ff"
      },
      { 
        pos:4,
        id:'5',
        playerName: "sdv",
        color:"#bb80ff"
      }
    ];
    
    this.state = {
      playersArray: [],
     
    };

    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(team) {
    this.setState({
      [name]: team
    });
  }
  componentDidMount() {
    
    this.setState({ playersArray: [...this.DATA] })
 
  }

   deletePlayer(pos){
    const players=[...this.state.playersArray]
  
    players[pos].playerName=""
      
      this.setState({ playersArray:players})
  }
  addPlayer(){
    const players=[...this.state.playersArray]
    let index = players.findIndex((item) => item.playerName === "")
    
    players[index].playerName="Joãozinho"
    this.setState({ playersArray:players})

    //this.DATA.push({playersArray});
 
    
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
              data={this.state.playersArray}
              renderItem={({ item }) =>{ 
              if(item.playerName=="")return null

              return <Player playerName={item.playerName} color={item.color} pos={item.pos} delete={this.deletePlayer.bind(this)} />}}
              keyExtractor={item=>item.id}
              extraData={this.state.playersArray}
            />
            </SafeAreaView>

          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.h1} onPress={()=>this.addPlayer(0)}> JOGAR </Text>
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
    alignItems: "center",
    padding:0,
  },
  dropdown: {
    backgroundColor: "#fff",
    width: 180,
    height: 40
  }
});
export default CreateTeams;
