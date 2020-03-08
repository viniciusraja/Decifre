import React from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { ScreenOrientation } from "expo";

import  CarouselComponent  from "../components/CarouselComponent";
import  TeamAInterception  from "../components/TeamAInterception";

import Modal from "react-native-modal";
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
        style={[
          styles.waitScreen,
          { justifyContent: "center", alignItems: "center" }
        ]}
      >
        <ActivityIndicator color="blue" />
      </View>
    ) : (
      <View style={styles.container}>
<View></View>
<SwitchToggle
        buttonText={this.state.switchOn ? 'Hour' : 'Day'}
        backTextRight={this.state.switchOn ? '' : 'Hour'}
        backTextLeft={this.state.switchOn ? 'Day' : ''}
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
          width: 100,
          height: 30,
          borderRadius: 30,
          padding: 5,
        }}
        backgroundColorOn="#fff"
        backgroundColorOff="#fff"
        circleStyle={{
          width: 50,
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
           <Modal
            style={styles.interceptionContainer}
            transparent={true}
            isVisible={this.state.switchOn}
            onBackdropPress={() => this.setState({ switchOn: false })}
           // onSwipeComplete={() => this.setState({ switchOn: false })}
            //swipeDirection="down"
            animationIn={"slideInUp"}
            animationInTiming={1000}
            backdropOpacity={0.2}
          >
            <TeamAInterception
              switchModal={this.switchModal.bind(this)} switchOn={this.state.switchOn}
            />
          </Modal>
        <CarouselComponent style={styles.carousel}/>
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
  interceptionContainer:{
    margin:0,
    flex:1,
    alignItems:'flex-end',
    justifyContent:'flex-end',
    alignSelf:'flex-end'
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