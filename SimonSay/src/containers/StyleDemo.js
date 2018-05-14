import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  Dimensions
} from "react-native";

class StyleDemo extends Component {
  state = {};
  render() {
    const { width, height } = Dimensions.get("window"); // get screen width & height

    return (
      <View style={styles.container}>
        <View style={[styles.square, { backgroundColor: "red" }]} />
        <View style={[styles.square, { backgroundColor: "blue" }]} />
        <View style={[styles.square, { backgroundColor: "blue" }]} />
        <View style={[styles.square, { backgroundColor: "red" }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigcontainer : {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
},
container : {
    width: "70%",
    height: "70%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 20,
},
square : {
    margin: "2%",
    width : "46%", 
    height : "46%"
}
});

export default StyleDemo;
