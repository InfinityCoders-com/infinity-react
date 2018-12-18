import {call, put} from 'redux-saga/effects';
import * as actions from './index';

export function* loginRequest (action) {
  yield put(actions.userLoginSuccess(action.payload)); 
}
