import React, { Component } from 'react';
import { connect } from 'refnux'

import {
  Text
} from 'react-native';

import counterIncrement from '../store/counterIncrement'


const filter = (key, v) => {
  if (!key) { return v }
  try {
    JSON.stringify(v)
    return v
  } catch (e) { }
  return '__not_serializable__'
}

const StateDebug = connect(
  (state, dispatch) =>
    <Text onPress={() => {
      dispatch(counterIncrement)
    }}>
      {JSON.stringify(state, filter, 2)}
    </Text>
)

export default StateDebug