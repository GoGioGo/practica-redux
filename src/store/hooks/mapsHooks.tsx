import { useSelector, useDispatch } from 'react-redux';
import {
  getMapLayers, updateSelectedLayers
} from '../actions/mapActions';

export const useMapState = () => useSelector(
  (state: { mapReducer: any }) => state.mapReducer
);

export const useMapDispatch = () => {
  const dispatch = useDispatch();
  const updateSelectedLayersFn: any = updateSelectedLayers
  return {
    getMapLayers: (trigger: any, tiles: any) => {
      dispatch(getMapLayers(trigger, tiles));
    },
    updateSelectedLayers: (selectedLayer: any) => {
      dispatch(updateSelectedLayersFn(selectedLayer))
    },
  }
}