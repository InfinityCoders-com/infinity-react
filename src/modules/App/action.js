import { createAction } from 'redux-actions';
import appConstants from './constants';

export const requestMenuList = createAction(appConstants.REQUEST_MENU_LIST);