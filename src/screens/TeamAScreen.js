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

import RoundsHistory from "../components/RoundsHistory";
import  CarouselComponent  from "../components/CarouselComponent";

import {connect} from 'react-redux'
import {addPassword, addGuessAnswer} from '../ducks/actions/gameSheet'

class TeamAScreen extends React.Component {
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
        <CarouselComponent style={styles.carousel}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
   
    backgroundColor: "#333",

  },
  carousel:{
    justifyContent:'center',
    alignItems:'center',
  },
  
  h1: {
    fontSize: 30
  },
  
});


const mapStateToProps = state => ({
  teamA: state.playerReducer.teamAList
});

const mapDispatchToProps = dispatch => {
  return {
    add: ( round) => dispatch(addPassword( round)),
    delete: ( round) => dispatch(addGuessAnswer( round))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamAScreen);