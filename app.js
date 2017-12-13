import React, { Component } from 'react';
import { addNavigationHelpers } from "react-navigation";
import {connect, Provider} from 'react-redux';
import RootStackNavigator from './src/navigator';
import configureStore from './configureStore'
//no yellow massege in app 
// console.ignoredYellowBox = ['Warning: BackAndroid']
const store = configureStore()

const AppWithNavigationState = connect(state => {
  return {
    nav: state.nav,
  }
})(({dispatch, nav}) => (
  <RootStackNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
));

class App extends React.Component {
  constructor() {
      super();
  }

  render() {
      return (
          <Provider store={store}>
              <AppWithNavigationState />
          </Provider>
      )
  }
}

export default App;
