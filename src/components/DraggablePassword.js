import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions
} from "react-native";

const screenWidth = Dimensions.get('screen').width;
const windowWidth = Dimensions.get('window').width;
export default class Draggable extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
      offsetX:0
    };
  }

  componentWillMount() {
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);

    this.panResponder = PanResponder.create({
      
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          this.state.pan.setOffset({
            x: this._val.x,
            y:this._val.y
        
          })
          this.state.pan.setValue({ x:0, y:0})
        },
        onPanResponderMove: Animated.event([ 
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ]),
        onPanResponderRelease: (e, gesture) => {
          switch(this.isDropArea(gesture)) {
            case(1):{console.log(this.state.pan)
              return(
                this.state.pan.setOffset({
                  x: 0,
                  y:0
                  
                }),
                this.state.pan.setValue({x:Dimensions.get('window').width/8-Dimensions.get('window').width/2,y:0.77*Dimensions.get('screen').height})
                )
              }
            case(2):{
              return(
                this.state.pan.setOffset({
                  x: 0,
                  y:0
                  
                }),
                this.state.pan.setValue({x:Dimensions.get('window').width/8-Dimensions.get('window').width/4,y:0.77*Dimensions.get('screen').height})
              )}
            case(3):{
              return(
                this.state.pan.setOffset({
                  x: 0,
                  y:0
                  
                }),
                this.state.pan.setValue({x:Dimensions.get('window').width/8,y:0.77*Dimensions.get('screen').height})

              )}
            case(4):{
              return(
                this.state.pan.setOffset({
                  x: 0,
                  y:0
                  
                }),
                this.state.pan.setValue({x:Dimensions.get('window').width/8+Dimensions.get('window').width/4,y:0.77*Dimensions.get('screen').height})

              )}
              default:{
            Animated.spring(            //Step 1
              this.state.pan,         //Step 2
              {toValue:{x:0,y:0}}     //Step 3
          ).start();
          }
          } 
          
        }
        /* onPanResponderRelease: (e, gesture) => {
          if (this.isDropArea(gesture)) {
            Animated.timing(this.state.opacity, {
              toValue: 0,
              duration: 1000
            }).start(() =>
              this.setState({
                showDraggable: false
              })
            );
          } 
        } */
      });
  }

  isDropArea(gesture) {
    switch(true){
      case (gesture.moveX < 0.25*Dimensions.get('window').width && gesture.moveY>100):
        return ( 1 )
      case (gesture.moveX < 0.5*Dimensions.get('window').width && gesture.moveY>100):
        return (2)
      case (gesture.moveX < 0.75*Dimensions.get('window').width && gesture.moveY>100):
        return (3)
      case (gesture.moveX < 1*Dimensions.get('window').width && gesture.moveY>100):
        return (4)
      default:
        break
        
        
      
  }}
 
  render() {
    return (
      <View style={{ width:0.2* windowWidth, alignItems: "center" }}>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable) {
      return (
        <View style={{ position: "absolute" }}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.passwordContainer, {opacity:this.state.opacity, width:Dimensions.get('window').width/4}]}
          >
            <Text style={styles.h2}>{this.props.password}</Text>
          </Animated.View>
        </View>
      );
    }
  }
}


let styles = StyleSheet.create({
  passwordContainer: {
    height: 30,
    
    zIndex:10,
    marginHorizontal:5,
    justifyContent:"center",
    alignItems:"center"
  },
  h2:{
    fontFamily:'orbitron-regular',
    width:135,
    height:20,
    backgroundColor:"#FFF",
    borderRadius: 10,
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"
  }
});