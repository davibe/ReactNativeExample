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

import Header from './../components/Header'
import Map from './../components/Map'
import StateDebug from './../components/StateDebug'

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

      <Header title='Index' backHidden={true} />

      <View style={stylePanel}>
        <Button
          style={styleButton}
          onPress={
            () => state.navigator.push({ destination: 'Icons' })
          }
          title="FontAwesome icons"
          color="#922"
        />
      </View>
      <View style={stylePanel}>
        <Button
          style={styleButton}
          onPress={
            () => state.navigator.push({ destination: 'IconDetail', iconName: 'bicycle' })
          }
          title="Bike Icon"
          color="#922"
        />
      </View>
      <View style={stylePanel}>
        <Button
          style={styleButton}
          onPress={
            () => state.navigator.push({ destination: 'Map' })
          }
          title="Scene1"
          color="#922"
        />
      </View>

      <ScrollView>
        <StateDebug />
      </ScrollView>

    </View>
)



export default Page