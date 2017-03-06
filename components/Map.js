import React, { Component } from 'react';
import { connect } from 'refnux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  // MapView,
  TouchableHighlight
} from 'react-native';

// Make react-native-maps work in rn-0.42
// https://github.com/airbnb/react-native-maps/blob/master/docs/installation.md (option 3)
import MapView from 'react-native-maps'

import { mapRegionChange } from '../store/map'


const styleMapOverlay = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent'
}
const styleMapOverlayText = {
  textAlign: 'center',
  fontWeight: '200',
  textShadowColor: '#000',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 5,
  color: '#f22',
  fontSize: 40,
}


const MapOverlay = (props) =>
  <View
    pointerEvents="none"
    style={styleMapOverlay}
  >
    <Text style={styleMapOverlayText}>+</Text>
  </View>


const Map = connect(
  (state, dispatch, props) =>
    <View style={props.style}>
      <MapView
        style={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute' }}
        initialRegion={state.mapRegionCurrent}
        region={state.mapRegionCurrent}
        onRegionChangeComplete={
          (region) => dispatch(mapRegionChange(region, 'map'))
        }
      />
      <MapOverlay />
    </View>
)

export default Map