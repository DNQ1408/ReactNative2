import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class GameOver extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GAME OVER</Text>
        <Text style={styles.scoreband}
        >Score: {this.props.score}</Text>
        <Button onPress={this.props.onReplay} title="Replay!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 40
  },
  scoreband: {
    fontSize: 35
  }
});

export default GameOver;
