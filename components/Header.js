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


const BackButton = connect(
  (state, dispatch, props) =>

    <TouchableHighlight /* touchable hilight element */
      underlayColor="transparent"
      onPress={() => { state.navigator.pop() }}
    >
      <View /* wrap icon and text in a unique touchable view */
        style={{
          flex: 0,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Icon /* the back icon */
          name="ios-arrow-back"
          style={{
            fontSize: 28,
            color: '#ddd'
          }}
        />
        <Text /* the back text */
          style={{
            color: '#ddd',
            padding: 5,
            textAlign: 'center',
            fontSize: 18,
            lineHeight: 18,
          }}
        >
          Back
        </Text>
      </View>
    </TouchableHighlight>
)


const Header = ({ title, backHidden = false }) =>
  <View /* wrapper */
    style={{
      height: 60,
      paddingTop: 20,
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#922',
    }}
  >
    <View /* left button */
      style={{
        width: 75,
        padding: 10
      }}
    >
      {backHidden ? null : (<BackButton />)}
    </View>

    <Text /* the title */
      style={{
        color: 'white',
        fontSize: 20
      }}
    >{title}</Text>

    <View /* right button */
      style={{
        width: 75,
        padding: 10
      }}
    ></View>
  </View>

export default Header