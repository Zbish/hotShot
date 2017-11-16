import React from 'react';
import { StackNavigator } from 'react-navigation';
import home from'./LoginPage'
import glimps from'./MyLiga'
import addliga from'./AddLiga'
import liga from'./Liga'


export default class RootNavigator extends React.Component {
  constructor(props) {
    super(props);
}
  render() {
    return <RootStackNavigator />
  }
}
const RootStackNavigator = StackNavigator(
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
);