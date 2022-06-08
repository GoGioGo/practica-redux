import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';


import mapReducer from './mapReducer';


const appReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  map: mapReducer,
});

export type RootState = ReturnType<typeof appReducer>;
export default appReducer;