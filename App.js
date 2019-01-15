import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Map from './screens/Map';
import Settings from './screens/Settings';


const FluidSideNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Map: {
      screen: Map,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  {
    initialRouteName: 'Home',
  }
);
const AppContainer = createAppContainer(FluidSideNavigator)

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
