import { useSelector, useDispatch } from 'react-redux';
import { replaceAppUser, resetAppUser } from '../actions/appUserAction';
import { User } from '../../constants/user';

export const useAppUserState = () => useSelector(
  (rootState: { appUser: any }) => rootState.appUser
);

export const useAppUserDispatch = () => {
  const dispatch = useDispatch();
  const replaceAppUserFn: any = replaceAppUser;
  return {
    replaceAppUser: (appUser: User) => {
      dispatch(replaceAppUserFn(appUser));
    },
  };
};
