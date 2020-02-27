import React from "react";
import { View, StyleSheet, TextInput, Text, Dimensions, Animated} from "react-native";


export default class Round extends React.Component {
  static WIDTH =  (Dimensions.get('window').screenHeight-270)
  constructor(props) {
    super(props);
    this.state = {
      pos: this.props.pos,
      password1: this.props.password1,
      password2: this.props.password2,
      password3: this.props.password3,
      width:592,
    };

    
  }



  
  render() {
    return (
      <>
        <View style={styles.roundCard}>
          <View style={styles.header}>
            <Text style={styles.h1}>{this.state.width}</Text>
            <Text style={styles.correctAnswer}>4 . 2. 1</Text>
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
            <View style={styles.guessBox}></View>
          </View>
          <View style={styles.password}>
            <TextInput
              style={styles.input}
              placeholder="Digite a Dica para sua Equipe"
              placeholderTextColor="grey"
              onChangeText={password3 => this.setState({ password3 })}
              value={this.player}
            />
            <View style={styles.guessBox}></View>
          </View>
        </View>
    </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#555",
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },
  roundCard: {
    justifyContent: "space-evenly",
    backgroundColor: "#ddd",
    height: 200,
    width: 320,
    marginVertical:10,
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
    height: 40,
    width: "70%",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: 15
  },
  guessBox: {
    backgroundColor: "#fff",
    height: 40,
    width: 60,
    borderRadius:15,
  },
  correctAnswer: {
    backgroundColor: "#fff",
    width:60,
    borderRadius:15,
    textAlign:'center'
  }
});
