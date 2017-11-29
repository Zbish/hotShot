import React from 'react';
import { StackNavigator } from 'react-navigation';
import loginPage from'./screens/loginPage'
import myLiga from'./screens/myLiga'
import addliga from'./screens/addLiga'
import league from'./screens/league'

export default RootStackNavigator = StackNavigator(
  { /////OMRI YA ZAIN!!!!

    Login: {
      screen: loginPage,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    MyLiga: {
      screen: myLiga,
      navigationOptions: {
        title: 'MY LIGA',
        headerStyle: { backgroundColor: 'green' },
        headerTitleStyle: { color: '#e2ac56' },
      }
    },
    AddLiga: {
      screen: addliga,
      navigationOptions: {
        title: 'Add Liga',
        headerStyle: { backgroundColor: 'green' },
        headerTitleStyle: { color: '#e2ac56' },
      }
    },
    Liga:{
      screen:league,
      navigationOptions: {
        headerStyle: { backgroundColor: 'green' },
        headerTitleStyle: { color: '#e2ac56' },
      }
    }
  },
  {
    initialRouteName: 'MyLiga'
  },
)