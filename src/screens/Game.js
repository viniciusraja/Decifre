import React from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { ScreenOrientation } from "expo";

import Round from "../components/Round";
import RoundsHistory from "../components/RoundsHistory";
import {PanGestureHandler, State} from 'react-native-gesture-handler'


export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.DATA = [
      {
        round: "1",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      },
      {
        round: "2",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      },
      {
        round: "3",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      },
      {
        round: "4",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      },
      {
        round: "5",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      },
      {
        round: "6",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      },
      {
        round: "7",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      },
      {
        round: "8",
        password1: "",
        password2: "",
        password3: "",
        teamGuess1: "",
        teamGuess2: "",
        teamGuess3: "",
        answer1: "",
        answer2: "",
        answer3: ""
      }
    ];

    this.state = {
      currentIndex: 0,
      sreenRotated: false,
      width: 0
    };
    this.handleViewableItemsChanged = this.handleViewableItemsChanged.bind(this)
    this.viewabilityConfig = {viewAreaCoveragePercentThreshold: 50}
  };

  componentDidMount = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE);
    this.setState({ screenRotated: true });
  };

  componentWillUnmount() {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT);
  };

  handleViewableItemsChanged(info) {
    console.log(info)
}


  render() {
    return !this.state.screenRotated ? (
      <View
        style={[
          styles.waitScreen,
          { justifyContent: "center", alignItems: "center" }
        ]}
      >
        <ActivityIndicator color="blue" />
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.round}>
        
        <FlatList 
        data={this.DATA}
        keyExtractor={item => item.round}
        horizontal={true}
     
        renderItem={({ item }) =>{
          return(
          <Round
          id={item.round}
          
          />
          )}}/>
          </View>
        <RoundsHistory></RoundsHistory>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "blue",

  },
  round: {
    backgroundColor: "#555"
  },
  sideswipe: {},
  h1: {
    fontSize: 30
  },
  roundsList: {
    backgroundColor: "red"
  },
});