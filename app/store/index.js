/**
 * index.js
 * Author: Fuad Mohd. Firoz
 * Created: December 06, 2020
 *
 * @flow
 */

import {createStore} from 'redux';
import type {Store} from '../types/store';
import reducer from './reducers/UserReducer';

const store: Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.(),
);

export default store;
