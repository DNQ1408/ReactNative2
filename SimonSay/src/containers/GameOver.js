import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';

class GameOver extends Component {
  state = {  }

  _onPress = () => {
    this.props.state.isPlaying = true;
  }

  render() {
    return (
        <View>
          <Text>Your final score is {this.props.finalScore}</Text>
          <TouchableOpacity onPress={this._onPress}>
            <View
                style={{
                    width: 140,
                    height: 40,
                    backgroundColor: "#333333",
                    borderRadius: 5
                }}>
            <Text> Play again </Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  }
}

export default GameOver;