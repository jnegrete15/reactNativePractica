import 'react-native-gesture-handler';
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/modules/Login/login'
import List from './src/modules/Login/flatList'

const LoginNavigator = createStackNavigator({
  Login:{
    screen: Login,
    navigationOptions: {
      title: 'Programación móvil',
      headerTitleAlign: 'center',
      headerTintColor: 'blue',
    }
  },
  List: {
    screen: List,
    navigationOptions: {
      title: 'Ejemplo de FlatList',
      headerTitleAlign: 'center',
      headerTintColor: 'blue',
    }
  }
})

export default createAppContainer(LoginNavigator)