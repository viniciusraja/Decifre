import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  
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
        </View>
        <DroppableRoundsHistory style={styles.roundsHistory} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:"85%",
    width:"100%",
    backgroundColor: "#333",
    alignContent:"center",
    justifyContent:"flex-end",
  },

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
