/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer }  from 'react-navigation';

import Home from './app/components/Home/index'
import Dashboard from './app/components/Dashboard/index'
import UserMenu from './app/components/UserMenu/index'
import Arrays from './app/components/Arrays/index'
import Strings from './app/components/Strings/index'
import Pointers from './app/components/Pointers/index'
import Functions from './app/components/Functions/index'
import OOPS from './app/components/OOPS/index'
import Signup from './app/components/Home/Signup'


class App extends Component {
  
  render() {
    return (
      <View>        
      </View>
    );
  }
}
const RootStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null,
    },
  },
  UserMenu: {
    screen: UserMenu,
    navigationOptions: {
      header: null,
    },
  },
  Arrays: {
    screen: Arrays,
    navigationOptions: {
      header: null,
    },
  },
  Strings: {
    screen: Strings,
    navigationOptions: {
      header: null,
    },
  },
  Functions: {
    screen: Functions,
    navigationOptions: {
      header: null,
    },
  },
  Pointers: {
    screen: Pointers,
    navigationOptions: {
      header: null,
    },
  },
  OOPS: {
    screen: OOPS,
    navigationOptions: {
      header: null,
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: null,
    },
  } 

  
  
});

const App1 = createAppContainer(RootStack);

export default App1;

