import { AnyAction } from 'redux';
import { User } from '../defaultStore';
import * as TYPES from '../types';

const appUserReducer = (state = new User(), action: AnyAction) => {
  switch (action?.type) {
    case TYPES.REPLACE_USER:
      return {
        ...action.appUser
      };
    case TYPES.RESET_APP_USER:
      return {
        ... new User()
      }
    default:
      return state;
  }
};

export default appUserReducer;
