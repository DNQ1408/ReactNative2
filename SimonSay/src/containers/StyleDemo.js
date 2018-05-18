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
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20
  },
  square: {
    width: "50%",
    height: "50%"
  }
});

export default StyleDemo;
