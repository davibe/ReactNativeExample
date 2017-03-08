/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import { Provider, connect } from 'refnux'
import storeGet from './store/storeGet'

// scenes
import MapPage from './scenes/MapPage'
import Icons from './scenes/Icons'
import IconDetail from './scenes/IconDetail'
import Index from './scenes/Index'

// actions
import navigatorSet from './store/navigatorSet'


const Navi = connect(
  (state, dispatch, props) =>
    <Navigator
      initialRoute={{ scene: 'Index' }}
      renderScene={(route, navigator) => {
        if (!state.navigator) {
          dispatch(navigatorSet(navigator))
        }
        if (route.scene == 'Icons') {
          return (<Icons />)
        }
        if (route.scene == 'IconDetail') {
          return (<IconDetail {...route.props} />)
        }
        if (route.scene == 'Map') {
          return (<MapPage />)
        }
        if (route.scene == 'Index') {
          return (<Index />)
        }
        return (<Text>Scene not found</Text>)
      }}
    />
)


const ReactNativeExample = () =>
  <Provider store={storeGet()}>
    <Navi />
  </Provider>


AppRegistry.registerComponent('ReactNativeExample', () => ReactNativeExample);
