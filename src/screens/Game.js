import React from 'react';

import { View ,Text,  ScrollView, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { ScreenOrientation } from 'expo';

import Round from "../components/Round"

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
          roundsArray: [],
        };
    }
    componentDidMount() {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE)
      }
      componentWillUnmount() {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT)
      }

    
  render() {
    return( 
    <View style={styles.container}>
        <View style={styles.round}>
        <FlatList
              style={styles.roundsList}
              data={this.DATA}
              horizontal={true}
              renderItem={({ item }) => {
                return (
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
                   
                  />
                );
              }}
              keyExtractor={item => item.round}
              extraData={this.DATA}
            />
        </View>
    </View>
    )}
}



const styles = StyleSheet.create({
container:{
  flex:1,
},
round:{
  
  backgroundColor:"blue",
},
roundsList:{
  
  backgroundColor:"red",
}

})