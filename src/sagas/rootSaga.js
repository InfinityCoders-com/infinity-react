import { call, put, takeLatest } from 'redux-saga/effects';
import authConstants from '../modules/Auth/constants';

function* requestLogin(action){
  console.log(action, '************************');
  yield put({type: authConstants.SUCCESS_LOGIN, payload: {data: action.payload}});
} 

export function* watchActions () {
  //Watch user action 
  yield takeLatest(authConstants.REQUEST_LOGIN, requestLogin)
}

export default function* rootSaga () {
  yield [
    watchActions()
  ];
}
