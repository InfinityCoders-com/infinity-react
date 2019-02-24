import { put, takeLatest } from 'redux-saga/effects';
import appConstants from './constants';
import { menu } from '../../config'

function* requestMenuList(action) {
  yield put({type: appConstants.SUCCESS_MENU_LIST, payload: menu});
}

export function* watchAppActions () {
  yield takeLatest(appConstants.REQUEST_MENU_LIST, requestMenuList);
}
