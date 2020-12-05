/**
 * App.js
 * Author: Fuad Mohd. Firoz
 * Created: December 05, 2020
 *
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './navigation';
import store from './store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
