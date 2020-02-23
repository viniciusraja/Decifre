import React from 'react';

import { View ,Text,  ScrollView, StyleSheet,Animated, TouchableOpacity, FlatList, Dimensions, ActivityIndicator} from 'react-native';
import { ScreenOrientation } from 'expo';

import Round from "../components/Round"
import RoundsHistory from "../components/RoundsHistory"
import SideSwipe from 'react-native-sideswipe'; // 1.3.0


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
            answer1:"",
            answer2:"",
            answer3:"",

          },
          {
            round: "2",
            password1: "",
            password2: "",
            password3: "",
            teamGuess1: "",
            teamGuess2: "",
            teamGuess3: "",
            answer1:"",
            answer2:"",
            answer3:"",
            
          },
          {
            round: "3",
            password1: "",
            password2: "",
            password3: "",
            teamGuess1: "",
            teamGuess2: "",
            teamGuess3: "",
            answer1:"",
            answer2:"",
            answer3:"",
            
          },
          {
            round: "4",
            password1: "",
            password2: "",
            password3: "",
            teamGuess1: "",
            teamGuess2: "",
            teamGuess3: "",
            answer1:"",
            answer2:"",
            answer3:"",
            
          },
          {
            round: "5",
            password1: "",
            password2: "",
            password3: "",
            teamGuess1: "",
            teamGuess2: "",
            teamGuess3: "",
            answer1:"",
            answer2:"",
            answer3:"",
            
          },
          {
            round: "6",
            password1: "",
            password2: "",
            password3: "",
            teamGuess1: "",
            teamGuess2: "",
            teamGuess3: "",
            answer1:"",
            answer2:"",
            answer3:"",
            
          },
          {
            round: "7",
            password1: "",
            password2: "",
            password3: "",
            teamGuess1: "",
            teamGuess2: "",
            teamGuess3: "",
            answer1:"",
            answer2:"",
            answer3:"",
            
          },
          {
            round: "8",
            password1: "",
            password2: "",
            password3: "",
            teamGuess1: "",
            teamGuess2: "",
            teamGuess3: "",
            answer1:"",
            answer2:"",
            answer3:"",
            
          },
        ];
        
        this.state = {
          currentIndex: 0,
          sreenRotated:false,
          width:0,
        };
      }
     
      componentDidMount = async () => {
        await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE)
        this.setState({ screenRotated: true })
        
      }
      
      componentWillUnmount() {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT)
      }
      
      handleLayout = ({ nativeEvent }) => {
        this.setState({ width: nativeEvent.layout.width });
      };
      
      render() {
        const offset = ( this.state.width-Round.WIDTH) / 2;
        
        return( !this.state.screenRotated
          ? <View style={[styles.waitScreen, { justifyContent: 'center', alignItems:'center' }]}>
              <ActivityIndicator color="blue" />
            </View>
          : 
    <View style={styles.container} onLayout={this.handleLayout}>
      <Text>{this.state.width}</Text>
        <View style={styles.round}  >
        <Animated.FlatList 
        data={this.DATA}
        keyExtractor={item => item.round}
        horizontal={true}
        renderItem={({ item }) =>{
          return(
          <Round
          id={item.round}
         
        /*   password1={item.password1}
          password2={item.password2}
          password3={item.password3}
          teamGuess1={item.teamGuess1}
          teamGuess2={item.teamGuess2}
          teamGuess3={item.teamGuess3}
          answer1={item.answer1}
          answer2={item.answer2}
          answer3={item.answer3} */
          />
        )}}
        
          />)
        </View>
        <RoundsHistory></RoundsHistory>
    </View>
    )}
}



const styles = StyleSheet.create({
container:{
  backgroundColor:"red",


},
round:{
  backgroundColor:"#555",
},
sideswipe: {
},
h1: {
  fontSize:30,
},
roundsList:{
  
  backgroundColor:"red",
}

})