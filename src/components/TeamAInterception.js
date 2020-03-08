import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { ScreenOrientation } from "expo";

import DroppableRoundsHistory from "./DroppableRoundsHistory";
import DraggablePassword from "./DraggablePassword"

import ScrollPicker from "react-native-wheel-scroll-picker";
import { connect } from "react-redux";
import { addPassword, addGuessAnswer } from "../ducks/actions/gameSheet";

class TeamAInterception extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessInterception1: "",
      guessInterception2: "",
      guessInterception3: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}></Text>
          <DraggablePassword/>
          <View  style={styles.guessBox}>
           
          </View>
        </View>
        <DroppableRoundsHistory style={styles.roundsHistory} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:300,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent:'flex-end'
  },
  guessBox: {
    backgroundColor: "#fff",
    height: 30,
    width: 60,
    borderRadius:15,
  },
  
  roundsHistory: {
    justifyContent: "flex-end"
  },

  h1: {
    height: 30,
    width: 200,
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    fontSize: 30
  }
});

const mapStateToProps = state => ({
  teamA: state.playerReducer.teamAList
});

const mapDispatchToProps = dispatch => {
  return {
    add: round => dispatch(addPassword(round)),
    delete: round => dispatch(addGuessAnswer(round))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamAInterception);
