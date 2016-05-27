import React, { Component, } from 'react'
import {
  View,
  Text,
} from 'react-native'

class LaunchScreen extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
    
    console.log(props);
  }
  
  componentDidMount() {
    const navigator = this.props.navigator;
    
    setTimeout(function() {
      navigator.push({
        name: 'first'
      });
    }, 3000);
  }
  
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(244,168,37,1)",
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: "bold",
            fontFamily: "Heiti TC",
          }}>
          Hello Day 2 (play with "Deco")
        </Text>
      </View>
    )
  }
}

export default LaunchScreen