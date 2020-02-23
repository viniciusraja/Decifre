import React from "react";
import { View, StyleSheet, TextInput, Text, Dimensions, Animated} from "react-native";



export default class Round extends React.Component {
  static WIDTH =  (Dimensions.get('window').height-400)
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

  handleLayout = ({ nativeEvent }) => {
    this.setState({ width: nativeEvent.layout.width });
  };

  render() {
    const { animatedValue, roundCard, index } = this.props;
    return (
      <View style={styles.container} onLayout={this.handleLayout}>
        <Animated.View
         style={[
          styles.roundCard,
          {
            transform: [
              {
                scale: animatedValue.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [0.7, 1, 0.7],
                  extrapolate: 'clamp',
                }),
              },
            
            ],
          },
        ]}
        
        >
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
        </Animated.View>
      </View>
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
    paddingHorizontal: 10,
    borderRadius: 20,
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
