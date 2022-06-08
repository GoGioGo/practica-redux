import { useSelector, useDispatch } from 'react-redux';
import {
  getMapLayers
} from '../actions/mapActions';

export const useMapState = () => useSelector(
  (state: { map: any }) => state.map
);

export const useMapDispatch = () => {
  const dispatch = useDispatch();
  return {
    getMapLayers: (trigger: any, tiles: any) => {
      dispatch(getMapLayers(trigger, tiles));
    }
  }
}