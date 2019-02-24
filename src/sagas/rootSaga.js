import { put, takeLatest } from 'redux-saga/effects';
import authConstants from '../modules/Auth/constants';
import { watchAppActions } from '../modules/App/saga.js';

function* requestLogin(action){
  yield put({type: authConstants.SUCCESS_LOGIN, payload: {data: action.payload}});
} 

export function* watchActions () {
  yield takeLatest(authConstants.REQUEST_LOGIN, requestLogin)
}

export default function* rootSaga () {
  yield [
    watchAppActions(),
    watchActions()
  ];
}
