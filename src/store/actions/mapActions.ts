import * as TYPES from '../types/'
import store from '..';

export const getMapLayers = (trigger: any, tiles: any) => ({
    type: TYPES.GET_MAP_LAYERS,
    data: { trigger, tiles }
});
