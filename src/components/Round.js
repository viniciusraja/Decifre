import React from "react";
import { View, StyleSheet, TextInput, Text, Dimensions, TouchableOpacity} from "react-native";
import { Feather } from "expo-vector-icons";
import ScrollPicker from 'react-native-wheel-scroll-picker';

import {connect} from 'react-redux'
import {addPassword, addGuessAnswer} from '../ducks/actions/gameSheet'

 class Round extends React.Component {
  static WIDTH =  (Dimensions.get('window').screenHeight-270)
  constructor(props) {
    super(props);
    this.state = {
      roundNumber:'',
      password1: '',
      password2: '',
      password3: '',
      guessAnswer1:1,
      guessAnswer2:1,
      guessAnswer3:1,
      
    };
    
  }
  
  
  
  
  render() {
    const index= (this.props.teamA.length)||0
    
    return (
      <>
        <View style={styles.roundCard}>
          <View style={styles.header}>
            <Text style={styles.h1}>{this.props.teamA.roundNumber}</Text>
            <Text style={styles.correctAnswer}>{this.props.teamA.roundNumber}</Text>
          </View>

          <View style={styles.password}>
            <TextInput
              style={styles.input}
              placeholder="Digite a Dica para sua Equipe"
              placeholderTextColor="grey"
              onChangeText={password1 => this.setState({ password1 })}
              value={this.player}
            />
            <View style={styles.guessBox}>
            <ScrollPicker
                  dataSource={['?',1,2,3,4]}
                  selectedIndex={0}
                  renderItem={(data, index, isSelected) => {
                    console.log(data)
                    console.log(index)
                    console.log(isSelected)
                  }}
                  onValueChange={(data, selectedIndex) => {
                    console.log(data)
                    this.setState({guessAnswer1:data})
                    
                  }}
                  wrapperHeight={30}
                  wrapperWidth={30}
                  wrapperBackground={'#FFFFFF'}
                  itemHeight={30}
                  highlightColor={'#fff'}
                  highlightBorderWidth={0}
                  activeItemColor={'#222121'}
                  itemColor={'#B4B4B4'}
                  />
            </View>
          </View>

          <View style={styles.password}>
            <TextInput
              style={styles.input}
              placeholder="Digite a Dica para sua Equipe"
              placeholderTextColor="grey"
              onChangeText={password2 => this.setState({ password2 })}
              value={this.player}
              />
            <View style={styles.guessBox}>
            <ScrollPicker
                  dataSource={['?',1,2,3,4]}
                  selectedIndex={0}
                  renderItem={(data, index, isSelected) => {
                    console.log(data)
                    console.log(index)
                    console.log(isSelected)
                  }}
                  onValueChange={(data, selectedIndex) => {
                    console.log(data)
                    this.setState({guessAnswer2:data})
                    
                  }}
                  wrapperHeight={30}
                  wrapperWidth={30}
                  wrapperBackground={'#FFFFFF'}
                  itemHeight={30}
                  highlightColor={'#fff'}
                  highlightBorderWidth={0}
                  activeItemColor={'#222121'}
                  itemColor={'#B4B4B4'}
                  />

            </View>
          </View>
          <View style={styles.password}>
            <TextInput
              style={styles.input}
              placeholder="Digite a Dica para sua Equipe"
              placeholderTextColor="grey"
              onChangeText={password3 => this.setState({ password3 })}
              value={this.player}
              />
            <View style={styles.guessBox}>
            <ScrollPicker
                  dataSource={['?',1,2,3,4]}
                  selectedIndex={0}
                  renderItem={(data, index, isSelected) => {
                    console.log(data)
                    console.log(index)
                    console.log(isSelected)
                  }}
                  onValueChange={(data, selectedIndex) => {
                    console.log(data)
                    this.setState({guessAnswer3:data})
                    
                  }}
                  wrapperHeight={30}
                  wrapperWidth={30}
                  wrapperBackground={'#FFFFFF'}
                  itemHeight={30}
                  highlightColor={'#fff'}
                  highlightBorderWidth={0}
                  activeItemColor={'#222121'}
                  itemColor={'#B4B4B4'}
                  />

            </View>
          </View>
            <TouchableOpacity style={styles.iconCheck} onPress={() =>{ this.props.addGuess({roundNumber:(index+1), guessAnswer1:this.state.guessAnswer1, guessAnswer2:this.state.guessAnswer2, guessAnswer3:this.state.guessAnswer3})}}>
            <Feather
              
              name="check"
              size={30}
              color="green"
              
              />
            </TouchableOpacity>
        </View>
    </>
    )
  }
}

const styles = StyleSheet.create({
  
  roundCard: {
    justifyContent: "space-evenly",
    backgroundColor: "#ddd",
    height: 220,
    width: 320,
    padding:0,
    paddingHorizontal:10,
    borderRadius: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  password: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input: {
    height: 30,
    width: "70%",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: 15
  },
  guessBox: {
    backgroundColor: "#fff",
    height: 30,
    width: 60,
    borderRadius:15,
  },
  correctAnswer: {
    backgroundColor: "#fff",
    width:60,
    borderRadius:15,
    textAlign:'center'
  },
  iconCheck:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    alignContent:'flex-end',
    paddingRight:10
  },
  h1:{
    height:20,
    width:100
  }
});


const mapStateToProps = state => ({
  teamA: state.teamAReducer.teamAList
});

const mapDispatchToProps = dispatch => {
  return {
    add: ( round) => dispatch(addPassword( round)),
    addGuess: ( round) => dispatch(addGuessAnswer( round))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Round);
