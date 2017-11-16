import React from 'react';
import { StackNavigator } from 'react-navigation';
import home from'./LoginPage'
import glimps from'./MyLiga'
import addliga from'./AddLiga'
import liga from'./Liga'

export default RootStackNavigator = StackNavigator(
  {
    Login: {
      screen: home,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
  },
  {
    MyLiga: {
      screen: glimps
    }
  },
  {
    AddLiga: {
      screen: addliga,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
  },
  {
    Liga: {
      screen: liga,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'MyLiga'
  }
)