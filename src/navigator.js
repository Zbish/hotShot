import React from 'react';
import { StackNavigator } from 'react-navigation';
import loginPage from'./screens/loginPage'
import myLiga from'./screens/myLiga'
import addliga from'./screens/addLiga'
import liga from'./screens/liga'

export default RootStackNavigator = StackNavigator(
  { /////OMRI YA ZAIN!!!!
    Login: {
      screen: loginPage,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    MyLiga: {
      screen: myLiga
    },
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