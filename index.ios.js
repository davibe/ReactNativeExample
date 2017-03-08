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
import MapPage from './pages/MapPage'
import Icons from './pages/Icons'
import IconDetail from './pages/IconDetail'
import Index from './pages/Index'
import navigatorSet from './store/navigatorSet'


const Navi = connect(
  (state, dispatch, props) =>
    <Navigator
      initialRoute={{ destination: 'Index' }}
      renderScene={(route, navigator) => {
        if (!state.navigator) {
          dispatch(navigatorSet(navigator))
        }
        if (route.destination == 'Icons') {
          return (<Icons />)
        }
        if (route.destination == 'IconDetail') {
          return (<IconDetail iconName={route.iconName} />)
        }
        if (route.destination == 'Map') {
          return (<MapPage />)
        }
        return (<Index />)
      }}
    />
)


const ReactNativeExample = () =>
  <Provider store={storeGet()}>
    <Navi />
  </Provider>


AppRegistry.registerComponent('ReactNativeExample', () => ReactNativeExample);
