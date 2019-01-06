import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import authConstants from './constants';

let initialState = {
  login: {
    data:       {},
    isLoggedIn: false,
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  }
};

const loginRequest = (state, action) => update(state, {
  login: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: 'Loading...'}
  }
});
const loginSuccess = (state, action) => update(state, {
  login: {
    data:       {$set: action.payload.data},
    isLoggedIn: {$set: true},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Login success'}
  }
});
const loginError = (state, action) => update(state, {
  login: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload.message}
  }
});

export default handleActions({
  [authConstants.REQUEST_LOGIN]: loginRequest,
  [authConstants.SUCCESS_LOGIN]: loginSuccess,
  [authConstants.FAILED_LOGIN]: loginError,
}, initialState);
