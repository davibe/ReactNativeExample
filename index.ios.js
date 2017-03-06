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

import {Provider} from 'refnux'

import storeGet from './store/storeGet'
import Scene1 from './components/Scene1'
import navigatorSet from './store/navigatorSet'

const store = storeGet()
const dispatch = store.dispatch

class ReactNativeExample extends Component {
  render() {
    return (
      <Provider store={store} >
        <Navigator
          initialRoute={{ title: 'Awesome Scene', index: 0 }}
          renderScene={(route, navigator) => {
              dispatch(navigatorSet(navigator))
              return (< Scene1 navigator= { navigator } />)
            }
          }

        />
      </Provider>  
    );
  }
}

AppRegistry.registerComponent('ReactNativeExample', () => ReactNativeExample);
