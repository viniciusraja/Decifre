import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { ScreenOrientation } from "expo";

import  GameRoundComponent  from "../components/GameRoundComponent";

import { SwitchToggle } from '@dooboo-ui/native';

import {connect} from 'react-redux'
import {addPassword, addGuessAnswer} from '../ducks/actions/gameSheet'

class TeamAScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      sreenRotated: false,
      width: 0,
      switchOn:false,
    };
    
    this.switchModal = this.switchModal.bind(this);
    
  };

  componentDidMount = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE)
    this.setState({ screenRotated: true })
  }

  componentWillUnmount() {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT)
  }

  switchModal(){
    this.setState({switchOn:!this.state.switchOn})
  }


  render() {
    return !this.state.screenRotated ? (
      <View
        style={
          
          {flex:1, justifyContent: "center", alignItems: "center" }
        }
      >
        <ActivityIndicator color="#000" size={50}/>
      </View>
    ) : (
      <View style={styles.container} >
<SwitchToggle
        /* buttonText={this.state.switchOn ? 'Hour' : 'Day'}
        backTextRight={this.state.switchOn ? '' : 'Hour'}
        backTextLeft={this.state.switchOn ? 'Day' : ''} */
        type={1}
        buttonStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
        }}
        rightContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        leftContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
        buttonTextStyle={{ fontSize: 10 }}
        textRightStyle={{ fontSize: 10 }}
        textLeftStyle={{ fontSize: 10 }}
        containerStyle={{
          marginTop: 16,
          width: 50,
          height: 25,
          borderRadius: 30,
          padding: 2,
        }}
        backgroundColorOn="#fff"
        backgroundColorOff="#fff"
        circleStyle={{
          width: 20,
          height: 20,
          borderRadius: 27.5,
          backgroundColor: 'blue', // rgb(102,134,205)
        }}
        switchOn={this.state.switchOn}
        onPress={() => this.switchModal()}
        circleColorOff="#e5e1e0"
        circleColorOn="#e5e1e0"
        duration={600}
      />
        <GameRoundComponent style={styles.carousel} switchOn={this.state.switchOn} switchModal={this.switchModal} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#333",
    justifyContent:'flex-end',
    alignItems:'flex-end'

  },
  carousel:{
    justifyContent:'center',
    alignItems:'center',
  },
  h1:{
    fontSize: 30
  }
});


export default (TeamAScreen);