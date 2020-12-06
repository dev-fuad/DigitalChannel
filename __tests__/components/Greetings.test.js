import {act, cleanup, render} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Greeting} from '../../app/components';
import {updateName} from '../../app/store/actions/UserActions';
import reducer from '../../app/store/reducers/UserReducer';

const store = createStore(reducer);
store.dispatch(updateName('Chris'));

describe('Greeting', () => {
  afterEach(cleanup);

  it('should show current name', () => {
    const {getByText} = render(
      <Provider store={store}>
        <Greeting />
      </Provider>,
    );
    const chris = getByText(/Chris/);
    expect(chris).toBeDefined();
  });

  it('should show updated name', () => {
    act(async () => {
      store.dispatch(updateName('Dave'));
      const {findByText} = render(
        <Provider store={store}>
          <Greeting />
        </Provider>,
      );
      const chris = await findByText(/Dave/);
      expect(chris).toBeDefined();
    });
  });

  it('should match snapshot', () => {
    const {toJSON} = render(
      <Provider store={store}>
        <Greeting />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
