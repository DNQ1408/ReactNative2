/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TextInput
} from 'react-native';

import ColorButton from "./ColorButton"
import { gray } from 'ansi-colors';

export default class App extends Component {
state = {
  colors : [ "#8FB8DE", "#8FB8DE", "#9A94BC", "#9A94BC","#8FB8DE", "#8FB8DE", "#9A94BC", "#9A94BC"  ],
  name : ["Meter", "Meter", "Decimeter","Decimeter","Centimeter","Centimeter", "Milimeter", "Milimeter"],
  titleLeft : [],
  titleRight : []
}



_onButtonPressed = id => {
  id % 2 == 0
  ? this._onButtonPressedLeft(id)
  : this._onButtonPressedRight(id);
}
_translate = (titleLeft, titleRight, text) =>{
  if
}



_10times = text =>{
  let number = parseFloat(text);
  number2 = number * 10;
  return number2;
}
_100times = text =>{
  let number = parseFloat(text);
  return number2 = number * 100;
  
}
_1000times = text =>{
  let number = parseFloat(text);
  return number2 = number * 1000;
}

_onButtonPressedLeft = id =>{
  this.setState({titleLeft: [this.state.name[id],id]})
}

_onButtonPressedRight = id =>{
 this.setState({titleRight: [this.state.name[id],id]})
}
_getText(event){
  let text = this.state.text;
}
  render() {
    const buttons = this.state.colors.map((color, index) => (
      <ColorButton
        key={index}
        onButtonPressed={this._onButtonPressed}
        id={index}
        bgColor={color}
        name={this.state.name[index]}

      />
    ));

    const { width, height } = Dimensions.get("window");

    return (
      <View style={styles.container}>
        <View style={styles.box}>

        <Text>{this.state.titleLeft[0]}</Text>
        <Text>{this.state.titleRight[0]}</Text>

        <View style={styles.inputBoard}>
          <TextInput
           style={styles.textInput}
           onChangeText={(text) => this.setState({text})}/>
        </View>

        <View style={styles.inputBoard}>
          <TextInput
           style={styles.textInput}
           onChangeText={(text) => this.setState({text})}
           value = { this.state.text}
           />
        </View>

        </View>
        <View
          style={[
            styles.gameBoard,
            {
              width: Math.min(width, height),
              height: Math.min(width, height)
            }
          ]}
        >
          {buttons}
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  gameBoard: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  title: {
    fontSize: 40
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor : "gray"
  },
  box: {
    flex: 1,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  inputBoard: {
    width: "20%",
    height: "20%"
  }
});
