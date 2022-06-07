import { combineReducers } from 'redux';
import appUserReducer from './appUserReducer';

export const reducers = {
  appUser: appUserReducer,
};

export default combineReducers(reducers);
