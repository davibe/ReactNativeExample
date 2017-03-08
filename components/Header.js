import React, { Component } from 'react'
import { connect } from 'refnux'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
    

const styleTouchable = {
  position: 'absolute',
  left: 0, top: 0, bottom: 0,
  padding: 10,
  paddingTop: 25,
  // backgroundColor: 'green'
}
const styleWrapper = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
}
const styleText = {
  color: '#ddd',
  padding: 5,
  textAlign: 'center',
  fontSize: 18,
  lineHeight: 18,
}
const Back = connect(
  (state, dispatch) =>
    <TouchableHighlight
      underlayColor="transparent"  
      style={styleTouchable}
      onPress={() => { state.navigator.pop() }}
    >
      <View
        style={styleWrapper}
      >
        <Icon
          name="ios-arrow-back"
          size={28}
          color="#ddd" />
        <Text
          style={styleText}
        >
          Back
        </Text>
      </View>
    </TouchableHighlight>
)

const styleHeader = {
  height: 60,
  backgroundColor: '#922',
}
const styleHeaderTitle = {
  color: 'white',
  fontSize: 20,
  paddingTop: 25,
  padding: 10,
  textAlign: 'center',
  // backgroundColor: 'red'
}
const Header = ({ title, backHidden = false }) =>
  <View style={styleHeader}>
    <StatusBar
      barStyle="light-content"
    />
    <Text style={styleHeaderTitle}>
      {title}
    </Text>
    {backHidden ? null : (<Back />)}
  </View>


export default Header