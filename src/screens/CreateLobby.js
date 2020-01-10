import React from "react";
import { Text, View } from "react-native";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-gesture-handler";
import Header from '../components/Header'


class CreateLobby extends React.Component {
  constructor() {
    super();
    this.state = {
      room: "",
    };
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(room) {
    this.setState({
      [name]: room
    });
  }

  render() {
    return (
      <LinearGradient
        colors={["#480875", "#000000", "#03aacc"]}
        starts={[0.6, 0.2]}
        ends={[0.7, 0.7]}
        style={{ flex: 1 }}
      > 
       
        <View style={styles.container}>
          <View style={styles.buttons}>
            <TextInput
              style={styles.input}
              placeholder="Digite o Nome da Sala"
              placeholderTextColor="grey"
              onChangeText={room => this.setState({ room })}
              value={this.state.room}
            />
            <TouchableOpacity style={styles.button}  onPress={()=>this.props.navigation.navigate('CreateTeams')}>
              <Text style={styles.h1}> CRIAR SALA </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    width: "100%",
    marginTop: 20,
    alignContent: "center",
    alignItems: "center"
  },
  button: {
    width: 160,
    height: 45,
    backgroundColor: "#fff",
    margin: 15,
    padding: 10,
    borderRadius: 15,
    alignContent: "center",
    justifyContent: "center",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.68,
    elevation: 5
  },
  h1: {
    fontSize: 20,
    textAlign: "center"
  },
  input: {
    textAlign: "center",
    fontSize: 25,
    width: 300,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5
  }
});
export default CreateLobby;
