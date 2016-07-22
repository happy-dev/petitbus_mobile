/**
 * This page reads and write to Parse
 */

// External libs
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, } from 'react-native';
import Parse from 'parse/react-native';
import SpeechBubble from 'react-native-speech-bubble';

// Custom style
import SB from '../styles/speechBubble.js';// Style Constants


const WriteToParsePage = React.createClass({
  getInitialState: function() {
    return {
      showSpeechBubble: true,
    };
  },

  componentDidMount() {},

  render: function() {
    var speechBubble = (
      <SpeechBubble
        speaker="Le Dieu du Petitbus"
        speeches={[ 'Bienvenue sur l\'appli PetitBus.', 
                    'C\'est ici que tu vas apprendre à utiliser l\'application']}
        style={SB.speechbubble}
        speakerStyle={SB.speakerStyle}
        speakerTextStyle={SB.speakerTextStyle}
        speechBubbleStyle={SB.speechBubbleStyle}
        speechBubbleTextStyle={SB.speechBubbleTextStyle}
        typeWriterStyle={SB.typeWriterStyle}
        nextStyle={SB.nextStyle}
        allowSpeechReplay={false}
        onSpeechReplay={() => {
          this.setState({showSpeechBubble: false});
        }}
      />
    );
    var ifSpeechBubble = this.state.showSpeechBubble ? speechBubble : null;

    return (
      <View style={{flex: 1}}>
        <Text>Say how much you hate terrorism :</Text>
        <TextInput
          placeholder="Un terroriste est quelqu'un de violent, et qui génère beaucoup de tristesse et de haine."
          multiline={true}
          numberOfLines={3}
          style={styles.inputStyle}
        />

        {ifSpeechBubble}
      </View>
    );
  },
});


const styles = StyleSheet.create({
  inputStyle : {
    paddingLeft:        10,
    paddingRight:       10,
    paddingTop:         10,
    paddingBottom:      10,
  },
});


export default WriteToParsePage;
