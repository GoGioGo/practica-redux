import * as mapboxgl from 'mapbox-gl'
import { Map } from 'mapbox-gl';
import React from 'react';

export class mapService {
    token = 'pk.eyJ1IjoibWlsZWhpZ2hmZCIsImEiOiJjazRqZjg1YWQwZTN2M2RudmhuNXZtdWFyIn0.oU_jVFAr808WPbcVOFnzbg';
    map;
    constructor(id: /* useRef<typeof HTMLDivElement | null>  */ any) {
        this.map = new Map({
            container: id.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-77.08368301391602, 38.89009754221234],
            zoom: 12,
            accessToken: 'pk.eyJ1IjoibWlsZWhpZ2hmZCIsImEiOiJjazRqZjg1YWQwZTN2M2RudmhuNXZtdWFyIn0.oU_jVFAr808WPbcVOFnzbg'
        })
    };
};