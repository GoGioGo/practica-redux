import { combineReducers } from 'redux';
import appUserReducer from './appUserReducer';

export const reducers = {
  appUserReducer,
};

export default combineReducers(reducers);
