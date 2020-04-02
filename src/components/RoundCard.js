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
import ScrollPicker from "react-native-wheel-scroll-picker";

import { connect } from "react-redux";
import { addPassword, addGuessAnswer } from "../ducks/actions/gameSheet";

class RoundCard extends React.Component {
  static WIDTH = Dimensions.get("window").screenHeight - 270;
  constructor(props) {
    super(props);
    this.state = {
      roundNumber: "",
      codeId1: "",
      codeId2: "",
      codeId3: "",
      password1: "",
      password2: "",
      password3: "",
      guessAnswer1: 1,
      guessAnswer2: 1,
      guessAnswer3: 1
    };
  }

  render() {
    const index = this.props.teamA.length || 0;
    return (
      <>
        <View style={styles.cardContainer}>
          <View style={styles.header}>
            <Text style={styles.correctAnswer}></Text>
          </View>
          <View style={styles.passwordsContainer}>
            <View style={styles.roundNumberContainer}>
              <Text style={styles.h1}>{this.props.roundNumber}</Text>
            </View>
            <View style={styles.passwords}>
              <View style={styles.password}>
                <TextInput
                  style={styles.input}
                  placeholder="Digite a Dica para sua Equipe"
                  placeholderTextColor="grey"
                  onChangeText={password1 => this.setState({ password1 })}
                  value={this.player}
                  maxLength={20}
                  onEndEditing={() => {
                    this.props.add({
                      roundNumber: this.props.roundNumber,
                      codeId1: this.state.codeId1,
                      codeId2: this.state.codeId2,
                      codeId3: this.state.codeId3,
                      password1: this.state.password1,
                      password2: this.state.password2,
                      password3: this.state.password3
                    });
                  }}
                />
                <View style={styles.guessBox}>
                  <ScrollPicker
                    dataSource={["?", 1, 2, 3, 4]}
                    selectedIndex={0}
                    renderItem={(data, index, isSelected) => {}}
                    onValueChange={(data, selectedIndex) => {
                      this.setState({ guessAnswer1: data });
                    }}
                    wrapperHeight={30}
                    wrapperWidth={30}
                    wrapperBackground={"#FFFFFF"}
                    itemHeight={30}
                    highlightColor={"#fff"}
                    highlightBorderWidth={0}
                    activeItemColor={"#222121"}
                    itemColor={"#B4B4B4"}
                  />
                </View>
              </View>
              <View style={styles.password}>
                <TextInput
                  style={styles.input}
                  placeholder="Digite a Dica para sua Equipe"
                  placeholderTextColor="grey"
                  onChangeText={password2 => this.setState({ password2 })}
                  value={this.player}
                  maxLength={20}
                  onEndEditing={() => {
                    this.props.add({
                      roundNumber: this.props.roundNumber,
                      codeId1: this.state.codeId1,
                      codeId2: this.state.codeId2,
                      codeId3: this.state.codeId3,
                      password1: this.state.password1,
                      password2: this.state.password2,
                      password3: this.state.password3
                    });
                  }}
                />
                <View style={styles.guessBox}>
                  <ScrollPicker
                    dataSource={["?", 1, 2, 3, 4]}
                    selectedIndex={0}
                    renderItem={(data, index, isSelected) => {}}
                    onValueChange={(data, selectedIndex) => {
                      this.setState({ guessAnswer2: data });
                    }}
                    wrapperHeight={30}
                    wrapperWidth={30}
                    wrapperBackground={"#FFFFFF"}
                    itemHeight={30}
                    highlightColor={"#fff"}
                    highlightBorderWidth={0}
                    activeItemColor={"#222121"}
                    itemColor={"#B4B4B4"}
                  />
                </View>
              </View>
              <View style={styles.password}>
                <TextInput
                  style={styles.input}
                  placeholder="Digite a Dica para sua Equipe"
                  placeholderTextColor="grey"
                  onChangeText={password3 => this.setState({ password3 })}
                  value={this.player}
                  maxLength={20}
                  onEndEditing={() => {
                    this.props.add({
                      roundNumber: this.props.roundNumber,
                      codeId1: this.state.codeId1,
                      codeId2: this.state.codeId2,
                      codeId3: this.state.codeId3,
                      password1: this.state.password1,
                      password2: this.state.password2,
                      password3: this.state.password3
                    });
                  }}
                />
                <View style={styles.guessBox}>
                  <ScrollPicker
                    dataSource={["?", 1, 2, 3, 4]}
                    selectedIndex={0}
                    renderItem={(data, index, isSelected) => {}}
                    onValueChange={(data, selectedIndex) => {
                      this.setState({ guessAnswer3: data });
                    }}
                    wrapperHeight={30}
                    wrapperWidth={30}
                    wrapperBackground={"#FFFFFF"}
                    itemHeight={30}
                    highlightColor={"#fff"}
                    highlightBorderWidth={0}
                    activeItemColor={"#222121"}
                    itemColor={"#B4B4B4"}
                  />
                </View>
              </View>
            </View>
          </View>
            <TouchableOpacity
              style={styles.iconCheck}
              onPress={() => {
                this.props.addGuess({
                  roundNumber: this.props.roundNumber,
                  guessAnswer1: this.state.guessAnswer1,
                  guessAnswer2: this.state.guessAnswer2,
                  guessAnswer3: this.state.guessAnswer3
                });
              }}
            >
              <Feather name="check" size={28} color="green" />
            </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer:{
    height: 210,
    width: "100%",
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  passwordsContainer: {
    width: "100%",
    height:"70%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  passwords: {
    justifyContent: "space-evenly",
    alignItems: "center",
    height:"100%",
    width:"75%"
  },
  roundNumberContainer: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRightWidth:1,
    borderRightColor:"#aaa"
  },
  header: {
    height:"15%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center"
  },
  password: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    height: 30,
    width: 200,
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: 15
  },
  guessBox: {
    backgroundColor: "#fff",
    height: 30,
    width: 60,
    borderRadius: 15
  },
  correctAnswer: {
    backgroundColor: "#fff",
    width: 60,
    height:20,
    borderRadius: 15,
    textAlign: "center"
  },
  iconCheck: {
    alignSelf: "flex-end",
    justifyContent:"center",
    height:"15%",
    paddingRight: 10,
    width: 35,
  },
  h1: {
    fontFamily: "orbitron-regular",
    width: "100%",
    textAlign: "center",
    fontSize: 90,
    opacity:0.2,
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(RoundCard);
