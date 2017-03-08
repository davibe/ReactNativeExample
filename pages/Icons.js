import React, { Component } from 'react';
import { connect } from 'refnux'

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
  flexWrap: 'wrap'
}
const Page = ({ iconNames = Object.keys(Icons) }) =>
  <View style={styleBackground}>

    <Header title='FontAwesome icons' />

    <ScrollView>
      <View style={stylePanel}>
        {
          iconNames.map(
            (value, index) => <Item value={value} key={index} />
          )
        }
      </View>
    </ScrollView>

  </View>


class IncrementalRendering extends React.Component {
  constructor(props, context) {
    super(props, context)
    const iconNames = Object.keys(Icons)
    this.state = {
      iconNames: []
    }
  }
  render() {
    return (<Page iconNames={this.state.iconNames} />)
  }
  componentDidMount() {
    const iconNames = Object.keys(Icons)
    const incr = []
    const interval = setInterval(() => {
      if (iconNames.length == 0) {
        console.log('stop')
        clearInterval(interval)
        return
      }
      this.setState({
        iconNames: this.state.iconNames.concat(iconNames.splice(0, 100))
      })
    }, 200)
  }
}


export { IncrementalRendering }
export default Page