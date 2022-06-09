import * as mapboxgl from 'mapbox-gl'
// import { Map } from 'mapbox-gl';
// import React from 'react';
// import { SELECT_ALL_FILTERS } from '../constants/constants'
// import { tileStyles } from '../map/mapStyles';

// export class mapService {
//     token = 'pk.eyJ1IjoibWlsZWhpZ2hmZCIsImEiOiJjazRqZjg1YWQwZTN2M2RudmhuNXZtdWFyIn0.oU_jVFAr808WPbcVOFnzbg';
//     map
//     constructor(id: /* useRef<typeof HTMLDivElement | null>  */ any) {
//         this.map = new Map({
//             container: id,
//             style: 'mapbox://styles/mapbox/streets-v11',
//             center: [-77.08368301391602, 38.89009754221234],
//             zoom: 12,
//             accessToken: 'pk.eyJ1IjoibWlsZWhpZ2hmZCIsImEiOiJjazRqZjg1YWQwZTN2M2RudmhuNXZtdWFyIn0.oU_jVFAr808WPbcVOFnzbg'
//         })

//     };


    // addLayersSource(key: string, tiles: any) {

    //     console.log('llego hasta el addSorce')
    //     this.map.addSource(key, {
    //         type: 'vector',
    //         tiles: tiles
    //     });
    //     console.log('paso el addSorce')

    //     this.addTilesLayers(key);
    // }

    // loadSource() {

    //     SELECT_ALL_FILTERS.forEach(layer => {
    //         if (typeof layer === 'object') {
    //             if (layer.tiles) {
    //                 layer.tiles.forEach(subkey => {
    //                     const tiles = layers[layer.name] as any;
    //                     if (tiles) {
    //                         //addLayersSource(subkey, tiles[subkey]);
    //                     }
    //                 })
    //             }
    //         } else {
    //             console.log(layer, layers[layer])
    //             this.addLayersSource(layer, layers[layer]);
    //         }
    //     })
    // }

    // addTilesLayers(key: string) {
    //     const styles = { ...tileStyles as any };
    //     console.log('styles   ====>>', styles);
    //     styles[key].forEach((style: any, index: number) => {
    //         if (style.source_name) {
    //             this.map.addLayer({
    //                 id: key + '_' + index,
    //                 source: style.source_name,
    //                 ...style
    //             });
    //         } else {
    //             this.map.addLayer({
    //                 id: key + '_' + index,
    //                 source: key,
    //                 ...style
    //             });
    //         }
    //     })
    // }
//};