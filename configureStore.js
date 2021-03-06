// configureStore.js

import { createStore, combineReducers } from 'redux'
import rootReducer from './src/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import RootStackNavigator from './src/navigator';
import {StackNavigator } from "react-navigation";

export default function configureStore() {
  const navReducer = (state, action) => {
    const nextState = RootStackNavigator.router.getStateForAction(action, state);
    return nextState || state;
  };

  const appReducer = combineReducers({
    nav: navReducer,
    ...rootReducer
  });

  let store = createStore(appReducer, composeWithDevTools())
  return store
}