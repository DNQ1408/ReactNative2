import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import StyleDemo from './StyleDemo'
import ColorButton from '../ColorButton'

class GamePlay extends Component {
    state = {
        colors: ["#8FB8DE", "#9A94BC", "#9B5094", "#6A605C"],
        requirement: [],
        answers: [],
        isPlaying: true,
    };

    componentDidMount() {
        this._createRandomRequirement();
    }

    _createRandomRequirement = () =>
        this.setState({
            requirement: [Math.floor(Math.random() * 4)],
            answers: []
        });

    _nextRequirement = id => {
        this._clearAnswers(id);
    }
    _checkAnswerCorrect = id => {
        id == this.state.requirement[this.state.answers.length]
            ? this._nextRequirement(id)
            : this._gameOver();
    }
    _nextInput = id => {
        this._addAnswer(id);
    }
    _addAnswer = id => {
        this.setState({
            answers: this.state.answers.concat(id),
        });
    }
    _clearAnswers = id => {
        this.setState(
            {
                answers: [],
                requirement: this.state.requirement.concat(Math.floor(Math.random() * 4)),
            },
        );
    };

    _checkAnswerLength = id => {
        this.state.answers.length == this.state.requirement.length - 1
            ? this._checkAnswerCorrect(id)
            : this._nextInput(id);
    }

    _onButtonPressed = id => {
        this._checkAnswerLength(id);
    };

    _gameOver = () => {
        this.props.state.isPlaying = false;
        this.props.setCondition(this.state.requirement.length - 1)
    }

    render() {
        const buttons = this.state.colors.map((color, index) => (
            <ColorButton
                key={index}
                onButtonPressed={this._onButtonPressed}
                id={index}
                bgColor={color}
            />
        ));
        return (
            <View style={styles.bigContainer}>
                <Text>GamePlay Scene</Text>
                <Text>Requirement: {this.state.requirement}</Text>
                <Text>Answers: {this.state.answers}</Text>
                <View style={styles.buttonContainer}>
                    {buttons}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    playContainer: {
        width: "70%",
        height: "70%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 20,
    },

    buttonContainer: {
        width: "90%",
        height: "90%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
})

export default GamePlay;