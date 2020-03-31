import React from "react";
import { View, StyleSheet, TextInput, Text, Dimensions, TouchableOpacity} from "react-native";
import { Feather } from "expo-vector-icons";
import ScrollPicker from 'react-native-wheel-scroll-picker';

import {connect} from 'react-redux'
import {addPassword, addGuessAnswer} from '../ducks/actions/gameSheet'

 class RoundCard extends React.Component {
  static WIDTH =  (Dimensions.get('window').screenHeight-270)
  constructor(props) {
    super(props);
    this.state = {
      roundNumber:'',
      codeId1:'',
      codeId2:'',
      codeId3:'',
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
            <Text style={styles.h1}>{this.props.roundNumber}</Text>
            <Text style={styles.correctAnswer}></Text>
          </View>

          <View style={styles.password}>
            <TextInput
              style={styles.input}
              placeholder="Digite a Dica para sua Equipe"
              placeholderTextColor="grey"
              onChangeText={password1 => this.setState({ password1 })}
              value={this.player}
              maxLength={20}
              onEndEditing={() =>{ this.props.add({roundNumber:this.props.roundNumber, codeId1:this.state.codeId1, codeId2:this.state.codeId2, codeId3:this.state.codeId3, password1:this.state.password1, password2:this.state.password2, password3:this.state.password3})}}
            />
            <View style={styles.guessBox}>
            <ScrollPicker
                  dataSource={['?',1,2,3,4]}
                  selectedIndex={0}
                  renderItem={(data, index, isSelected) => {
                  }}
                  onValueChange={(data, selectedIndex) => {
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
              maxLength={20}
              onEndEditing={() =>{ this.props.add({roundNumber:this.props.roundNumber, codeId1:this.state.codeId1, codeId2:this.state.codeId2, codeId3:this.state.codeId3, password1:this.state.password1, password2:this.state.password2, password3:this.state.password3})}}
              />
            <View style={styles.guessBox}>
            <ScrollPicker
                  dataSource={['?',1,2,3,4]}
                  selectedIndex={0}
                  renderItem={(data, index, isSelected) => {
                  }}
                  onValueChange={(data, selectedIndex) => {
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
              maxLength={20}
              onEndEditing={() =>{ this.props.add({roundNumber:this.props.roundNumber, codeId1:this.state.codeId1, codeId2:this.state.codeId2, codeId3:this.state.codeId3, password1:this.state.password1, password2:this.state.password2, password3:this.state.password3})}}
              />
            <View style={styles.guessBox}>
            <ScrollPicker
                  dataSource={['?',1,2,3,4]}
                  selectedIndex={0}
                  renderItem={(data, index, isSelected) => {
                   
                  }}
                  onValueChange={(data, selectedIndex) => {
                   
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
            <TouchableOpacity style={styles.iconCheck} onPress={() =>{ this.props.addGuess({roundNumber:this.props.roundNumber, guessAnswer1:this.state.guessAnswer1, guessAnswer2:this.state.guessAnswer2, guessAnswer3:this.state.guessAnswer3})}}>
            <Feather
              name="check"
              size={28}
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
    height: 190,
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
    width: 200,
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
    alignSelf:"flex-end",
    paddingRight:10,
    width:35
  },
  h1:{
    height:20,
    width:100
  }
});


const mapStateToProps = state => ({
  teamA: state.teamAReducer
});

const mapDispatchToProps = dispatch => {
  return {
    add: ( round) => dispatch(addPassword( round)),
    addGuess: ( round) => dispatch(addGuessAnswer( round))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoundCard);
