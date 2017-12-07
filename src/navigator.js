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
        headerStyle: { backgroundColor: 'green' },
        headerTitleStyle: { color: '#e2ac56' },
      }
    },
    AddLeague: {
      screen:addLeague,
      navigationOptions: {
        title: 'Add League',
        headerStyle: { backgroundColor: 'green' },
        headerTitleStyle: { color: '#e2ac56' },
      }
    },
    League:{
      screen:league,
      navigationOptions: {
        headerStyle: { backgroundColor: 'green' },
        headerTitleStyle: { color: '#e2ac56' },
      }
    }
  },
  {
    initialRouteName: 'MyLeague'
  },
)