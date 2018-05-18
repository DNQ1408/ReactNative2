import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Animated
} from "react-native";

import Sound from 'react-native-sound';

import ColorButton from "../components/ColorButton";

class GamePlay extends Component {
  state = {
    colors: ["#8FB8DE", "#9A94BC", "#9B5094", "#6A605C"],
    requirement: [],
    answers: [],
    opacity: [
      new Animated.Value(1),
      new Animated.Value(1),
      new Animated.Value(1),
      new Animated.Value(1)
      ],
    buttonDisabled : false,
    sound: [
    new Sound('pling1.mp3', Sound.MAIN_BUNDLE, (erro) => {
      if (erro) {console.log('sound 1 erro', erro)}
    }),
    new Sound('pling2.mp3', Sound.MAIN_BUNDLE, (erro) => {
      if (erro) {console.log('sound 2 erro', erro)}        
    }),
    new Sound('pling3.mp3', Sound.MAIN_BUNDLE, (erro) => {
      if (erro) {console.log('sound 3 erro', erro)} 
    }),
    new Sound('pling4.mp3', Sound.MAIN_BUNDLE, (erro) => {
      if (erro) {console.log('sound 4 erro', erro)}        
    })
    ]
  };  

  componentDidMount() {
    Sound.setCategory('Playback');
    this._increaseDifficulty();
  }

  _increaseDifficulty = () => {
    this.setState(
      {
        requirement: this.state.requirement.concat(Math.floor(Math.random() * 4)),
        answers: [],
        buttonDisabled: true
      },
      () => {
        this._flashButton(0);
      }
    );
  }

  _playsound = index => {
    this.state.sound[index].stop(() => this.state.sound[index].play());  
    console.log('Playing Sound', index);
  }

  _flashButton = index => {
    this._playsound(index);
    index < this.state.requirement.length
    ? Animated.sequence([
      Animated.timing(                 
        this.state.opacity[this.state.requirement[index]],          
        {
          toValue: 0,                 
          duration: 250,            
        }),
        Animated.delay(250),
        Animated.timing(                 
          this.state.opacity[this.state.requirement[index]],          
          {
            toValue: 1,                 
            duration: 250,            
          }),
    ]).start(() => this._flashButton(index + 1))
    : this.setState({ buttonDisabled: false }); 
  }

  _onButtonPressed = id => {
    this._playsound(id);
    id === this.state.requirement[this.state.answers.length]
      ? this._progress(this.state.answers.concat(id))
      : this.props.onGameOver(this.state.requirement.length - 1);
  };

  _progress = answers => {
    answers.length === this.state.requirement.length
      ? this._increaseDifficulty()
      : this.setState({ answers });
  };

  render() {
    const buttons = this.state.colors.map((color, index) => (
      <ColorButton
        key={index}
        onButtonPressed={this._onButtonPressed}
        id={index}
        bgColor={color}
        opacity={this.state.opacity[index]}
        disabled = {this.state.buttonDisabled}
      />
    ));
    const { width, height } = Dimensions.get("window");

    return (
      <View style={styles.container}>
        <Text style={styles.title}
        >Score: {this.state.requirement.length - 1}</Text>
        <Text>{this.state.requirement}</Text>
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
  }
});

export default GamePlay;
