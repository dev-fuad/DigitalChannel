import {cleanup, fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {WelcomeScreen} from '../../../app/modules/welcome';
import reducer from '../../../app/store/reducers/UserReducer';

const store = createStore(reducer);

describe('WelcomeScreen', () => {
  let screen;
  beforeEach(() => {
    screen = render(
      <Provider store={store}>
        <WelcomeScreen />
      </Provider>,
    );
  });

  afterEach(cleanup);

  it('should have an input', () => {
    const input = screen.getByPlaceholderText('Enter your name');
    expect(input).toBeDefined();
  });

  it('should update name on text change', () => {
    const input = screen.getByPlaceholderText('Enter your name');
    fireEvent.changeText(input, 'Chris');
    const name = store.getState().name;
    expect(name).toBe('Chris');
  });

  it('should match snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
