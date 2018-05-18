/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import GamePlay from "./containers/GamePlay";
import GameOver from "./containers/GameOver";
import StyleDemo from "./containers/StyleDemo";

// Component
// Props
// State

// Function component
const Text2 = props => (
  <View>
    <Text>
      {props.children}
      {props.username}
    </Text>
  </View>
);

// Class component
export default class App extends Component {
  state = {
    isPlaying: true
  };

  _onGameOver = score =>
    this.setState({
      isPlaying: false,
      score
    });

  _onReplay = () => this.setState({ isPlaying: true });

  render() {
    return this.state.isPlaying ? (
      <GamePlay onGameOver={this._onGameOver} />
    ) : (
      <GameOver score={this.state.score} onReplay={this._onReplay} />
    );
  }
}
