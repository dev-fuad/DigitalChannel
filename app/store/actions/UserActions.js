/**
 * UserActions.js
 * Author: Fuad Mohd. Firoz
 * Created: December 06, 2020
 *
 * @flow
 */

import type {UserAction} from '../../types/store';

export const updateUser = (name: string): UserAction => {
  return {type: 'UPDATE_NAME', payload: name};
};
