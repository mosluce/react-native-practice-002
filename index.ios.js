/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import LaunchScreen from './components/LaunchScreen';
import FirstView from './components/FirstView';

class Project extends Component {
  
  renderScene(route, navigator) {
    
      switch(route.name) {
        case 'first':
          return (<FirstView />);
        default:
          return (<LaunchScreen name={route.name} navigator={navigator} />);
      }
  }
  
  render() {
    return (
      <Navigator 
        initialRoute={{name: 'launch', index: 0}}
        renderScene={this.renderScene.bind(this)}
        />
    );
  }
}

AppRegistry.registerComponent('Project', () => Project);
