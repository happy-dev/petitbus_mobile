/**
 * Entry point of PetitBus mobile App
 */

// External libs
import React, { Component } from 'react';
import { AppRegistry, DrawerLayoutAndroid, StyleSheet, Text, View, ListView, TouchableOpacity } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

// Custom libs
import initializeParse from './src/libs/initializeParse';

// Custom components
import NavBar from './src/components/NavBar';

// Custom pages
import WriteToParsePage from './src/pages/WriteToParsePage';

// Custom style
import SC from './src/styles/constants.js';// Style Constants


// Initializing Parse
initializeParse();


// Creating page architecture
var PetitbusMobile = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({// DataSource
      rowHasChanged : (r1, r2) => r1 !== r2,
    });

    return {
      dataSource: ds.cloneWithRows(['Parse form', 'Carte']),
    };
  },


  render: function() {
    var navigationView = (
      <View style={styles.menu}>
        <ListView
          style={styles.menuListView}
          dataSource={this.state.dataSource}
          renderRow={(menuData) => {
            var to= <TouchableOpacity 
                      onPress={this._onPressMenu}>
                      <Text style={styles.menuListViewItem}>{menuData}</Text>
                    </TouchableOpacity>
            return to;
          }}
        />
      </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        style={{flex: 1}}
      >

        <ScrollableTabView
          initialPage={0}
          tabBarPosition="bottom"
          renderTabBar={() => <NavBar />}
        >
          <WriteToParsePage tabLabel="http"/>
          <View tabLabel="map">
            <Text>Map Page !</Text>
          </View>
          <View tabLabel="textsms">
            <Text>Push Notif Page !</Text>
          </View>
        </ScrollableTabView>
      </DrawerLayoutAndroid>
    );
  },


  _onPressMenu: function() {
  },
});


// Style constants
const styles = StyleSheet.create({
  // MENU
  menu: {
    flex: 1,
    backgroundColor: SC.backgroundBlue,
  },
  menuListView : {
    padding:  15,
  },
  menuListViewItem : {
    color:            'white',
    fontSize:         25,
    paddingTop:       10,
    paddingBottom:    10,
  },
});


AppRegistry.registerComponent('petitbus_mobile', () => PetitbusMobile);
