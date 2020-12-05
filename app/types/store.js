/**
 * store.js
 * Author: Fuad Mohd. Firoz
 * Created: December 06, 2020
 *
 * @flow
 */

import type {Store as ReduxStore, Dispatch as ReduxDispatch} from 'redux';

export type UserState = {+name: string};

export type UserAction = {type: 'UPDATE_NAME', +payload: string};

export type ReduxInitAction = {type: '@@INIT'};

export type State = UserState;

export type Action = ReduxInitAction | UserAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
