import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import appConstants from './constants';

let initialState = {
  menu: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  }
};

const userLoginRequest = (state, action) => update(state, {
  menu: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const userLoginSuccess = (state, action) => update(state, {
  menu: {
    data:       {$set: action.payload},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: ''}
  }
});
const userLoginError = (state, action) => update(state, {
  menu: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});

export default handleActions({
  [appConstants.REQUEST_MENU_LIST]: userLoginRequest,
  [appConstants.SUCCESS_MENU_LIST]: userLoginSuccess,
  [appConstants.ERROR_MENU_LIST]:   userLoginError,
}, initialState);
