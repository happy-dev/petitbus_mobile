/**
 * Entry point of PetitBus mobile App
 */
import React, { Component } from 'react';
import { AppRegistry, DrawerLayoutAndroid, StyleSheet, Text, View, ListView, TouchableOpacity } from 'react-native';
import initializeParse from './src/initializeParse';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import NavBar from './src/NavBar';
import WriteToParsePage from './src/WriteToParsePage';


// Initializing Parse
initializeParse();


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
        renderNavigationView={() => navigationView}>

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
    console.log("Pressed !!");
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A3642',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  menu: {
    flex: 1,
    backgroundColor: '#2A3642',
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
