import * as TYPES from '../types';
import { User } from '../../constants/user';

export const replaceAppUser = (appUser : User) => {
  return (dispatch : Function) => {
      dispatch({ type: TYPES.REPLACE_USER, appUser });
  }
};

export const resetAppUser = () => {
  return (dispatch: Function) => {
    dispatch({
      type: TYPES.RESET_APP_USER
    })
  }
};
