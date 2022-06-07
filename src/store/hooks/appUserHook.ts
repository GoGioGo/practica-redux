import { useSelector, useDispatch } from 'react-redux';
import { replaceAppUser } from '../actions';
import { resetAppUser } from '../actions';
import { User } from '../../constants/user';

export const useAppUserState = () => useSelector(
  (rootState: { appUser: any }) => rootState.appUser
);

export const useAppUserDispatch = () => {
  const dispatch = useDispatch();
  return {
    setAppUserState: (appUser: User) => {
      dispatch(replaceAppUser(appUser));
    },
  };
};
