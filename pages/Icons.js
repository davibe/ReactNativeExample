import React, { Component } from 'react';
import { connect } from 'refnux'

// components
import {
  AppRegistry,
  View,
  ScrollView,
  Alert,
  TouchableHighlight,
  Text,
  ListView
} from 'react-native';
import Icon from 'react-native-fontawesome'
import { Icons } from 'react-native-fontawesome'


import Header from '../components/Header'


const styleIconContainer = {
  width: 50,
  paddingTop: 10,
  paddingBottom: 10,
  borderBottomWidth: 1,
  borderColor: '#aaa'
}
const styleIcon = {
  textAlign: 'center',
  fontSize: 30,
  color: '#444'
}
const Item = connect(
  (state, dispatch, props) =>
    <TouchableHighlight
      underlayColor="#999"
      onPress={() => {
        state.navigator.push({
          destination: 'IconDetail',
          iconName: props.value
        })
      }}
    >
      <View
        style={styleIconContainer}
      >
        <Icon // http://fontawesome.io/icons/
          style={styleIcon}
        >{props.value}</Icon>
      </View>
    </TouchableHighlight>
)


const stylePanel = {
  backgroundColor: '#efefef',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap'
}
const Row = ({ iconNames }) =>
  <View style={stylePanel}>
    {
      iconNames.map(
        (value, index) => <Item value={value} key={index} />
      )
    }
  </View>


const styleBackground = {
  flex: 1,
  backgroundColor: 'white'
}
const getDataSource = () => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const iconNames = Object.keys(Icons)
  const rows = []
  while (iconNames.length > 0) {
    rows.push(iconNames.splice(0, 7))
  }
  const dataSource = ds.cloneWithRows(rows)
  return dataSource
}
const dataSource = getDataSource()
const Page = ({ iconNames = Object.keys(Icons) }) =>
  <View style={styleBackground}>

    <Header title='FontAwesome icons' />

    <ListView
      dataSource={dataSource}
      renderRow={
        (iconNames) => <Row iconNames={iconNames} />
      }
    />
  </View>


export default Page