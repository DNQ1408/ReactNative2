import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

class ColorButton extends Component {
  state = {};

  _onPress = () => {
    this.props.onButtonPressed(this.props.id);
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this._onPress}
        style={[styles.container]}>
        <View
          style={[styles.button, { backgroundColor: this.props.bgColor,}]}
        >
        <Text>
            {this.props.name}
        </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: "20%",
  },
  button: {
    flex: 1,
    borderRadius: 1,
    borderWidth: 0.1,
  }
});

export default ColorButton;
