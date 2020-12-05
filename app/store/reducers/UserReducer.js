/**
 * index.js
 * Author: Fuad Mohd. Firoz
 * Created: December 06, 2020
 *
 * @flow
 */

import type {UserState, Action} from '../../types/store';

const INITIAL_STATE = {
  name: '',
};

const userReducer = (
  state: UserState = INITIAL_STATE,
  action: Action,
): UserState => {
  if (action.type === 'UPDATE_NAME') {
    return {name: action.payload};
  }
  return state;
};

export default userReducer;
