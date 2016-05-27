import React, { Component, } from 'react'
import {
  View,
  Text,
} from 'react-native'

class FirstView extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "rgb(184,233,134)"
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'normal',
            fontFamily: 'Helvetica Neue',
          }}>
          I am FirstView
        </Text>
      </View>
    )
  }
}

export default FirstView