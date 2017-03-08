import React, { Component } from 'react';

// components
import {
  AppRegistry,
  View,
  ScrollView,
  Alert,
  TouchableHighlight,
  Text
} from 'react-native';
import Icon from 'react-native-fontawesome'
import { Icons } from 'react-native-fontawesome'


import Header from '../components/Header'


const styleBackground = {
  flex: 1,
  backgroundColor: 'white'
}
const stylePanel = {
  backgroundColor: '#efefef',
  borderTopWidth: .5,
  borderTopColor: '#ccc',
  borderBottomWidth: .5,
  borderBottomColor: '#ccc',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  padding: 10
}
const styleIcon = {
  textAlign: 'center',
  fontSize: 200,
  color: '#444',
  padding: 20,
}
const Page = ({ iconName }) =>
  <View style={styleBackground}>

    <Header title="Icon Detail" />

    <ScrollView>

      <Icon // http://fontawesome.io/icons/
        style={styleIcon}
      >{iconName}</Icon>

      <View style={stylePanel}>
        <Text>{iconName}</Text>
      </View>
    </ScrollView>

  </View>


export default Page