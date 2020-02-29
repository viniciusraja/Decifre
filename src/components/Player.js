import React from "react";
import { Feather, FontAwesome } from "expo-vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { addPlayer, deletePlayer } from "../ducks/actions/players";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: this.props.pos,
      playerName: this.props.playerName,
      color: this.props.color
    };
  }

  render() {
    return (
       <> 
       <View style={styles.player}>

        <FontAwesome
          style={styles.iconUser}
          name="user-secret"
          size={30}
          color="#aaa"
        />
        <Text style={styles.h1}>{this.props.playerName}</Text>
        <TouchableOpacity>
          <Feather
            style={styles.iconUser}
            name="x"
            size={33}
            color="#aaa"
            onPress={() => this.props.delete(this.state.pos)}
          />
        </TouchableOpacity>
       </View>
     
      </>
    )
  }
}

const styles = StyleSheet.create({
  player:{
    height:45,
    width:250,
    borderColor:'#4A6F82',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 6,
    borderRadius:25,
    borderWidth:2,
  
  },
  h1: {
    width: 140,
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 5,
    color: "#aaa",
    fontStyle: "italic",
    fontWeight: "200"
  },
  iconUser: {
    marginLeft: 10
  }
});

const mapStateToProps = state => ({
  players: state.playerReducer.playersList
});

const mapDispatchToProps = dispatch => {
  return {
    add: (name, index) => dispatch(addPlayer(name, index)),
    delete: (name, index) => dispatch(deletePlayer(name, index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
