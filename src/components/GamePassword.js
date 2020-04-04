import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Feather } from "expo-vector-icons";

import { connect } from "react-redux";
import { addPassword, addGuessAnswer } from "../ducks/actions/gameSheet";

class GamePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <View style={styles.passwordContainer}>
          <Text style={styles.passwordCode}>{this.props.passwordCode}</Text>
          <Text style={styles.passwordName}>{this.props.passwordName}</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  passwordContainer: {
    width:"25%",
    height:"100%",
    flexDirection:"row",
    justifyContent: "space-evenly",
    alignItems:"center",
    backgroundColor: "#aaa",
    borderRadius:10,
    borderRightWidth:2,
    borderColor:"#000",
  },
  passwordCode: {
    fontFamily:'orbitron-regular',
    fontSize:17,
    width:20,
    textAlign:"center",
    textAlignVertical:"center",
    borderRightColor:"#ddd",
    borderRightWidth:1,
    marginRight:2
  },
  passwordName: {
    fontFamily:'orbitron-regular',
    textAlign:"center",
    textAlignVertical:"center",
    fontSize:18,
  },
});

const mapStateToProps = state => ({
  teamA: state.teamAReducer
});

const mapDispatchToProps = dispatch => {
  return {
    add: round => dispatch(addPassword(round)),
    addGuess: round => dispatch(addGuessAnswer(round))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePassword);
