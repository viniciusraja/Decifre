import React from "react";
import { Text, View } from "react-native";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-gesture-handler";

class Instructions extends React.Component {

  render() {
    return (
      <LinearGradient
      colors={[ "#458299","#23414D"]}
      start={[0, 0]}
      end={[0, 0.8]}
        style={{ flex: 1}}
      >
        <View style={styles.container}>
              <Text style={styles.h1}> Como Jogar</Text>
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
  
  h1: {
    fontSize: 60,
    textAlign: "center",
    color:'#fff'
  },
  
});
export default Instructions;
