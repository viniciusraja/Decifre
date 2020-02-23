import React from 'react';

import { View ,Text,  ScrollView, StyleSheet, TouchableOpacity, FlatList, Dimensions, ActivityIndicator} from 'react-native';
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
        this.setState({ width: Dimensions.get('window').height+6 })
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
        <View style={styles.round}  >
      <Text style={styles.h1}>{this.state.width}</Text>
        <SideSwipe 
        
        index={this.state.index}
        itemWidth={Round.WIDTH}
        shouldCapture={() => true}
        threshold={Round.WIDTH/2}
        extractKey={item => item.round}
        style={[styles.sideswipe, this.state.width]}
        data={this.DATA}
        contentOffset={offset}
        onIndexChange={index =>this.setState(() => ({ currentIndex: index }))}
        renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
          <Round
          password1={item.password1}
          password2={item.password2}
          password3={item.password3}
          teamGuess1={item.teamGuess1}
          teamGuess2={item.teamGuess2}
          teamGuess3={item.teamGuess3}
          answer1={item.answer1}
          answer2={item.answer2}
          answer3={item.answer3}
            {...item}
            roundCard={item}
            index={itemIndex}
            currentIndex={currentIndex}
            animatedValue={animatedValue}
          />
        )}
        
          />
        </View>
        <RoundsHistory></RoundsHistory>
    </View>
    )}
}



const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"black",


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