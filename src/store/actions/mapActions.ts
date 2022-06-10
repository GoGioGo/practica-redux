import * as TYPES from '../types/'
import store from '..';

export const getMapLayers = (trigger: any, tiles: any) => ({
    type: TYPES.GET_MAP_LAYERS,
    data: { trigger, tiles }
});

export const getMapWithSublayers = (trigger: any, tiles: any, name: any) => ({
    type: TYPES.GET_MAP_WITH_SUBLAYERS,
    data: { trigger, tiles, name }
});

export const updateSelectedLayers = (selectedLayer: any) => {
    return (dispatch: Function) => {
        dispatch({ type: TYPES.SELECTED_LAYERS, selectedLayer });
    }
}
