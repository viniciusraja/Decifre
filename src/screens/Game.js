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
import { CarouselComponent } from "../components/CarouselComponent";


export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      sreenRotated: false,
      width: 0
    };
    
  };

  componentDidMount = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE)
    this.setState({ screenRotated: true })
  }

  componentWillUnmount() {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT)
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
        <CarouselComponent/>
        <RoundsHistory/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#333",

  },
  round: {
    backgroundColor: "#555"
  },
  h1: {
    fontSize: 30
  },
  
});