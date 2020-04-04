import React from "react";
import { StyleSheet, TouchableOpacity, View,Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import Modal from "react-native-modal";

import RoundCard from "./RoundCard";
import DroppableRoundsHistory from "./DroppableRoundsHistory";
import { connect } from "react-redux";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
let roundNumber=''
class GameRoundComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roundNumber: 1
    };
  };

  updateIndex=(index)=>{
    this.setState({roundNumber:(index+1)})
  }
  _renderItem = ({ item, index }) => {
    
    return (
      <View>
      <RoundCard
        style={{ alignItems: "center" }}
        roundNumber={index+1}
      />
        </View>
    );
  };

  render() {
    return (
      <>
      <View style={{ flex: 1 }}>
        <Carousel
          contentContainerCustomStyle={{ alignItems: "center"}}
          ref={c => {
            this._carousel = c;
          }}
          data={this.props.teamA.teamA}
          renderItem={this._renderItem}
          sliderWidth={Dimensions.get('screen').width}
          itemWidth={400}
          layout={"stack"}
          lockScrollWhileSnapping={false}
          onSnapToItem={(index)=>{this.updateIndex(index)}}
        />

        <Modal
          style={styles.interceptionContainer}
          transparent={true}
          isVisible={this.props.switchOn}
          //onSwipeComplete={()=>this.props.switchModal()}
          //swipeDirection="down"
          animationIn={"slideInUp"}
          animationInTiming={600}
          backdropOpacity={0.1}
          onRequestClose={()=>this.props.switchModal()}
        >
          <TouchableOpacity onPress={()=>this.props.switchModal()} style={{height:40,width:70}} />

          <View style={styles.roundsHistory}>
          <DroppableRoundsHistory
            roundNumber={this.state.roundNumber}
            />
          </View>
            
        </Modal>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  roundsHistory:{
    height:"85%",
    backgroundColor: "#333",
    alignContent: "center",
    justifyContent: "flex-end"
  },
  interceptionContainer:{
    margin:0,
    alignItems:'flex-end',
    justifyContent:'flex-end',
    alignSelf:'flex-end'
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

export default connect(mapStateToProps, mapDispatchToProps)(GameRoundComponent);
