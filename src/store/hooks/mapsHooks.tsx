import { useSelector, useDispatch } from 'react-redux';
import {
  getMapLayers
} from '../actions/mapActions';

export const useMapState = () => useSelector(
  (state: { mapReducer: any }) => state.mapReducer
);

export const useMapDispatch = () => {
  const dispatch = useDispatch();
  return {
    getMapLayers: (trigger: any, tiles: any) => {
      dispatch(getMapLayers(trigger, tiles));
    }
  }
}