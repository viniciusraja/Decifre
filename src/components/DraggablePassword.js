import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated
} from "react-native";

export default class Draggable extends Component {  
  constructor(){
    super();
    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1)
    };
  }


  componentWillMount() {    // Add a listener for the delta value change
   
// Add a listener for the delta value change
this._val = { x:0, y:0 }
this.state.pan.addListener((value) => this._val = value);    // Initialize PanResponder with move handling
this.panResponder = PanResponder.create({
  onStartShouldSetPanResponder: (e, gesture) => true,
  onPanResponderMove: Animated.event([
    null, { dx: this.state.pan.x, dy: this.state.pan.y }
  ]),
  // adjusting delta value


   onPanResponderRelease: (e, gesture) => {
    if (this.isDropArea(gesture)) {
      console.log("entrou no if")
      Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 1000
    }).start(() =>
      this.setState({
         showDraggable: false
      })
    )
  } else {
    Animated.spring(this.state.pan, {
      toValue: { x: 0, y: 0 },
      friction: 7
    }).start();
  }
}

});
this.state.pan.setValue({ x:0, y:0})

}



isDropArea(gesture) {
  console.log(gesture.moveY)

  return gesture.moveY > 149;
}


  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    return (
        <Animated.View
        {...this.panResponder.panHandlers}
        style={[panStyle, styles.circle]}
        >
        <Text>princesa</Text>
        </Animated.View>
    );
  }
}

let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
  circle: {
    backgroundColor: "skyblue",
    width: 100,
    height: 25,
    borderRadius: CIRCLE_RADIUS,
    zIndex:5
  }
});