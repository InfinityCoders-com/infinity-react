import { createAction } from 'redux-actions';
import authConstants from './constants';

export const requestLogin = createAction(authConstants.REQUEST_LOGIN);
export const successLogin = createAction(authConstants.SUCCESS_LOGIN);
export const failedLogin = createAction(authConstants.FAILED_LOGIN);

export const requestLogout = createAction(authConstants.REQUEST_LOGOUT);
export const successLogout = createAction(authConstants.SUCCESS_LOGOUT);
export const failedLogout = createAction(authConstants.FAILED_LOGOUT);