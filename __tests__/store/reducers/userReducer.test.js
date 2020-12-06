import {updateName} from '../../../app/store/actions/UserActions';
import userReducer from '../../../app/store/reducers/UserReducer';

describe('UserReducer', () => {
  it('should initiate the state with default value', () => {
    const newState = userReducer(undefined, {type: '@@INIT'});
    expect(newState.name).toEqual('');
  });

  it('should update the name in state', () => {
    const newState = userReducer(undefined, updateName('Henry'));
    expect(newState.name).toEqual('Henry');
  });

  it('should return same state if action type does not match', () => {
    const newState = userReducer(
      {name: ''},
      {
        type: 'WRONG_ACTION_TYPE',
        payload: 'Henry',
      },
    );
    expect(newState.name).toEqual('');
  });
});
