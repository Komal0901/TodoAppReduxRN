import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';

import StackNavigator from './src/Navigation/StackNavigator';
import store from './src/Redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
};

export default App;
