import React from "react";
import { View, StyleSheet, TextInput, Text, Picker } from "react-native";


export default class Round extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: this.props.pos,
      password1: this.props.password1,
      password2: this.props.password2,
      password3: this.props.password3,
      color: this.props.color
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.h1}>Round 1</Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#aaa"
  },
  card: {
    justifyContent: "space-evenly",
    backgroundColor: "#ddd",
    height: 200,
    width: 400,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  password: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  input: {
    height: 40,
    width: "70%",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: 10
  },
  guessBox: {
    backgroundColor: "#fff",
    height: 40,
    width: 40
  },
  correctAnswer: {
    backgroundColor: "#fff"
  }
});
