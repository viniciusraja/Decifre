import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import DraggablePassword from "./DraggablePassword";

export default class DroppableRoundsHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetX1: 0,
      offsetX2: 0,
      offsetX3: 0
    };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.draggableItems}>
      <DraggablePassword style={styles.draggableItem} id={1} password={"Gelo"} />
      <DraggablePassword style={styles.draggableItem} id={2} password={"brinco"} />
      <DraggablePassword style={styles.draggableItem} id={3} password={"Pamonha"} />
        </View>
     
        <View style={styles.dropZoneItems}>
          <View style={styles.dropZoneItem}>
            <Text style={styles.h1}>1</Text>
          </View>
          <View style={styles.dropZoneItem}>
            <Text style={styles.h1}>2</Text>
          </View>
          <View style={styles.dropZoneItem}>
            <Text style={styles.h1}>3</Text>
          </View>
          <View style={styles.dropZoneItem}>
            <Text style={styles.h1}>4</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems:"center",
  },
  draggableItems: {
    height:30,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ballContainer: {
    height:30,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dropZoneItems: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    height: "90%",
  
  },
  dropZoneItem: {
    height: "100%",
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#888",
    borderRightWidth:1
  },
  h1: {
    fontFamily:'orbitron-regular',
    textAlign: "center",
    color: "#fff",
    fontSize: 100,
    opacity: 0.2
  }
});
