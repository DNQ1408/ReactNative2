/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import ColorButton from "./ColorButton";
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
    isPlaying: true,
    score: 0,
  };

  _setCondition = (score) => {
    this.setState({
      isPlaying: !this.state.isPlaying,
      score : score,
    })
  }


  render() {
    
    return (
    this.state.isPlaying
      ? <GamePlay _setCondition={this._setCondition}/> 
      : <GameOver _setCondition={this._setCondition} finalScore = {this.state.score}/>
    );
  }
}
