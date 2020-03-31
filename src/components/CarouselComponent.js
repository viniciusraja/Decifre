import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import Modal from "react-native-modal";

import RoundCard from "./RoundCard";
import DroppableRoundsHistory from "./DroppableRoundsHistory";
import { connect } from "react-redux";
class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roundNumber: "1"
    };
  }

  _renderItem = ({ item, index }) => {
    return (
      <RoundCard
        style={{ alignItems: "center" }}
        roundNumber={item.roundNumber}
      />
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
          sliderWidth={590}
          itemWidth={320}
          layout={"tinder"}
          onSnapToItem={() => {
            this.setState({ roundNumber: this._carousel.currentIndex + 1 });
          }}
        />
        <Modal
          style={styles.interceptionContainer}
          transparent={true}
          isVisible={this.props.switchOn}
          //onSwipeComplete={()=>this.props.switchModal()}
          //swipeDirection="down"
          animationIn={"slideInUp"}
          animationInTiming={1000}
          backdropOpacity={0.2}
          onRequestClose={()=>this.props.switchModal()}
        >

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

export default connect(mapStateToProps, mapDispatchToProps)(CarouselComponent);
