import { combineReducers } from 'redux';
import appUserReducer from './appUserReducer';
import mapReducer from './mapReducer';

export const reducers = {
  appUserReducer,
  mapReducer
};

export default combineReducers(reducers);
