import React from 'react';
import { StackNavigator } from 'react-navigation';
import loginPage from'./screens/loginPage'
import myLeague from'./screens/MyLeague'
import addLeague from'./screens/addLeague'
import league from'./screens/league'

export default RootStackNavigator = StackNavigator(
  { /////OMRI YA ZAIN!!!!

    Login: {
      screen: loginPage,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    MyLeague: {
      screen: myLeague,
      navigationOptions: {
        title: 'MY League',
        headerStyle: { backgroundColor: '#388E3C' },
        headerTitleStyle: { color: '#FFFFFF' },
        headerTintColor: '#FFFFFF'
      }
    },
    AddLeague: {
      screen:addLeague,
      navigationOptions: {
        title: 'Add League',
        headerStyle: { backgroundColor: '#388E3C' },
        headerTitleStyle: { color: '#FFFFFF' },
        headerTintColor: '#FFFFFF'
      }
    },
    League:{
      screen:league,
      navigationOptions: {
        headerStyle: { backgroundColor: '#388E3C' },
        headerTitleStyle: { color: '#FFFFFF' },
        headerTintColor: '#FFFFFF'
      }
    }
  },
  {
    initialRouteName: 'MyLeague'
  },
)