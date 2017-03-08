import React, { Component } from 'react';
import { connect } from 'refnux'

// components
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  Button,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-fontawesome'

// components
import Header from '../components/Header'
import Map from '../components/Map'
import StateDebug from '../components/StateDebug'

// actions
import counterIncrement from '../store/counterIncrement'


const styleButton = {
  color: 'red',
  backgroundColor: '#363'
}
const styleBackground = {
  flex: 1,
  backgroundColor: 'white'
}
const stylePanel = {
  backgroundColor: '#efefef',
  borderTopWidth: .5,
  borderTopColor: '#ccc',
  borderBottomWidth: .5,
  borderBottomColor: '#ccc'
}
const styleMap = {
  height: '40%'
}
const Page = connect(
  (state, dispatch) =>

    <View style={styleBackground}>

      <Header title='Map' />

      <Map style={styleMap}></Map>

      <View style={stylePanel}>
        <Button
          style={styleButton}
          onPress={
            () => state.navigator.push({ title: 'foo' })
          }
          title="Tap me to load the next scene"
          color="#841584"
          accessibilityLabel="Tap me to load the next scenen"
        ></Button>
      </View>

      <ScrollView>
        <StateDebug />
      </ScrollView>

    </View>
)



export default Page