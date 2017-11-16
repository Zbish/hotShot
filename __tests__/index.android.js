import 'react-native';
import React from 'react';
import App from '../App';
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
//import configureStore from '../configureStore'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
const middlewares = []

const mockStore = configureMockStore(middlewares)
//const store = configureStore()

it('renders correctly', () => {
  const store = mockStore({ people: [] })

  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
expect(1).toBe(1)
  // console.log(tree.root.children.)
});
