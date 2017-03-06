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
const styleHeaderBack = {
  position: 'absolute',
  left: 0, top: 0, bottom: 0,
  color: '#ddd',
  fontSize: 18,
  paddingTop: 25,
  textAlign: 'center',
  padding: 10,
  // backgroundColor: 'green'
}


const Back = connect(
  (state, dispatch) =>
    <Text
      style={styleHeaderBack}
      onPress={() => { state.navigator.pop() }}
    >
      {'< Back'}
    </Text>
)

const Header = (props) =>
  <View style={styleHeader}>
    <StatusBar
      barStyle="light-content"
    /> 
    <Text style={styleHeaderTitle}>
      {props.title}
    </Text>
    <Back />
  </View>


export default Header