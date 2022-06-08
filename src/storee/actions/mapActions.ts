import * as types from '../types/mapTypes'
import store from '..';

export const getMapLayers = (trigger: any, tiles: any) => ({
    type: types.GET_MAP_LAYERS,
    data: { trigger, tiles }
});
