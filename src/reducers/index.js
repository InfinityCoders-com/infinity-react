import {combineReducers} from 'redux';
import authReducer from '../modules/Auth/reducer';
import appReducer from '../modules/App/reducer';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    ...asyncReducers,
    appData: appReducer,
    auth: authReducer
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
