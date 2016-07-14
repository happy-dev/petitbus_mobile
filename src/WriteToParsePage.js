import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import Parse from 'parse/react-native';


const WriteToParsePage = React.createClass({
  componentDidMount() {
    console.log("Parse page loaded");
  },

  render() {
    return <View>
      <Text>Parse Page ! </Text>
    </View>
  },
});

export default WriteToParsePage;
