/**
 * This page reads and write to Parse
 */

// External libs
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableHighlight, TouchableOpacity, ListView} from 'react-native';
import Parse from 'parse/react-native';
import SpeechBubble from 'react-native-speech-bubble';

// Custom style
import SB from '../styles/speechBubble.js';// Style Constants


const WriteToParsePage = React.createClass({
  getInitialState: function() {
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return {
      showSpeechBubble: true,
      msgList:          this.ds.cloneWithRows(['Loading...']),
      content:          "",
    };
  },

  componentDidMount() {},

  displayHateSpeech : function() {
    var hateSpeechQuery = new Parse.Query("HateSpeech");

    hateSpeechQuery.find().then(
      (contents) => {
        var contentsArr = [];

        contents.forEach((content) => {
          contentsArr.push(content.get("content"));
        })

        this.setState({msgList : this.ds.cloneWithRows(contentsArr) });
      }, 
      (error) => {
        console.log(error);
    });
  },

  saveMsg : function() {
    var HateSpeech = Parse.Object.extend("HateSpeech");
    var hateSpeech = new HateSpeech();
    var self       = this;

    hateSpeech.save({content: this.state.content}, {
      success : (savedObject) => {
        self.state.content = "";
      },
      error : () => {}
    });
  },

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

    this.displayHateSpeech();// Display hate speech

    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.msgList}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
        <Text>Say how much you hate terrorism :</Text>
        <TextInput
          placeholder="Un terroriste est quelqu'un de violent, et qui génère beaucoup de tristesse et de haine."
          multiline={true}
          numberOfLines={3}
          style={styles.inputStyle}
          onChangeText={(content) => this.setState({content})}
          value={this.state.content}
        />
        <TouchableHighlight onPress={this.saveMsg}>
          <Text numberOfLines={1}> Save </Text>
        </TouchableHighlight>

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
