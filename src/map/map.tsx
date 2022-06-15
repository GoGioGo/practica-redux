import { useAppUserDispatch } from '../store/hooks/appUserHook';
import { useMapDispatch } from '../store/hooks/mapsHooks';
import { useEffect, useRef, useState } from 'react';
import { SELECT_ALL_FILTERS } from '../constants/constants';
import { useMapState } from '../store/hooks/mapsHooks'
import { tileStyles } from '../map/mapStyles';
import { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { resolve } from 'path';

let map: any;
const MapLayout = () => {
    const lynames = ['district_boundary', 'streams', 'problems'];
    const [loading, setLoading] = useState(false);
    const mapContainer = useRef<HTMLDivElement>(null)

    const { layers, selectedLayers } = useMapState();

    let birthday = new Date(1995, 11, 17)
    let a = {
        activated: true,
        organization: 'kio',
        firstName: 'Sergio',
        lastName: 'Condori',
        name: 'Gio',
        designation: 'adm',
        _id: '1',
        email: 'gio',
        city: 'LaPaz',
        county: 'Bolivia',
        serviceArea: 'uno',
        photo: 'uno',
        phone: 'uno',
        title: 'uno',
        zipCode: 'uno',
        status: 'uno',
        coordinates: {
            latitude: 3,
            longitude: 4
        },
        zoomarea: 'uno',
        polygon: [],
        createdAt: birthday
    }
    const { replaceAppUser } = useAppUserDispatch();

    const { getMapLayers, updateSelectedLayers } = useMapDispatch();


    const hideLayers = (key: string) => {
        const styles = { ...tileStyles as any };
        styles[key].forEach((style: any, index: number) => {
            if (map.getLayer(key + '_' + index)) {
                map.setLayoutProperty(key + '_' + index, 'visibility', 'none');
            }
        });
    };

    const addLayersSource = (key: string, tiles: Array<String>) => {
        map.addSource(key, {
            type: 'vector',
            tiles: tiles
        });
        addTilesLayers(key);
    }

    const loadSource = () => {
        SELECT_ALL_FILTERS.forEach(layer => {
            if (typeof layer === 'object') {
                if (layer.tiles) {
                    layer.tiles.forEach(subkey => {
                        const tiles = layers[layer.name] as any;
                        if (tiles) {
                            addLayersSource(subkey, tiles[subkey]);
                        }
                    })
                }
            } else {
                addLayersSource(layer, layers[layer]);
            }
        });

    }

    const mostrarLayers = () => {
        let i = 0;
        selectedLayers.forEach((element: any) => {
            if (typeof element === 'object') {
                element.tiles.forEach((subkey: string) => {
                    showLayers(subkey);
                });
            } else {
                showLayers(element);
            }
        });
    }
    const showLayers = (key: string) => {
        const styles = { ...tileStyles as any };
        styles[key].forEach((style: any, index: number) => {
            if (map.getLayer(key + '_' + index)) {
                map.setLayoutProperty(key + '_' + index, 'visibility', 'visible');
            }
        });
    };


    const addTilesLayers = (key: string) => {
        const styles = { ...tileStyles as any };

        styles[key].forEach((style: any, index: number) => {


            if (style.source_name) {
                map.addLayer({
                    id: key + '_' + index,
                    source: style.source_name,
                    ...style
                });
            } else {
                map.addLayer({
                    id: key + '_' + index,
                    source: key,
                    ...style
                });
            }
            map.setLayoutProperty(key + '_' + index, 'visibility', 'none');
        })
    }

    const loadInitialLayer = () => {
        lynames.forEach((layer) => {
            LoadSource(layer)
                .then(result => {
                    map.addSource(layer, {
                        type: 'vector',
                        tiles: result
                    });
                    cargarLayers(layer);
                })
            verifiedLoadSource(layer)
                .then(data => {
                    if (data) {
                        const styles = { ...tileStyles as any };
                        styles[layer].forEach((style: any, index: number) => {
                            if (style.source_name) {
                                map.addLayer({
                                    id: layer + '_' + index,
                                    source: style.source_name,
                                    ...style
                                });
                            } else {
                                map.addLayer({
                                    id: layer + '_' + index,
                                    source: layer,
                                    ...style
                                });
                            }
                        })
                    }
                })
        })
    }
    const verifiedLoadSource = (layer: any) => {
        return new Promise(resolve => {
            if (map.getSource(layer)) {
                resolve(true);
            }
        })
    }

    const LoadSource = (layer: any) => {
        let headers = new Headers();
        let token = 'GUEST';
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);

        return new Promise(resolve => {
            (fetch('https://confdevbc.mhfd.org/map', {
                method: 'POST',
                headers,
                body: JSON.stringify({ table: layer })
            })
                .then(resp => resp.json())
                .then(data => {
                    resolve(data)
                }))
        })
    }


    const cargarLayers = (key: any) => {
        console.log('dentro de la carga el layer es = ', key)
        const styles = { ...tileStyles as any };
        console.log('styles[key] ====>>  ', styles[key])
        styles[key].forEach((style: any, index: number) => {
            console.log('style', style, 'index', index);
            if (style.source_name) {
                map.addLayer({
                    id: key + '_' + index,
                    source: style.source_name,
                    ...style
                });
            } else {
                map.addLayer({
                    id: key + '_' + index,
                    source: key,
                    ...style
                });
            }
            map.setLayoutProperty(key + '_' + index, 'visibility', 'none');
        })

    }

    const isMapLoaded = () => {
        return new Promise(resolve => {
            map.on('load', () => {
                resolve(true);
            })

        })
    }

    useEffect(() => {
        map = new Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-104.94239335213717, 39.775551711914],
            zoom: 9,
            accessToken: 'pk.eyJ1IjoibWlsZWhpZ2hmZCIsImEiOiJjazRqZjg1YWQwZTN2M2RudmhuNXZtdWFyIn0.oU_jVFAr808WPbcVOFnzbg'
        })
        isMapLoaded()
            .then(data => {
                loadInitialLayer();
                mostrarLayers();
            })
    }, [])
    return <>
        <div ref={mapContainer} style={{ width: 1000, height: 800 }}>
        </div>
        <div>
            <div>
                <button onClick={() => {
                    mostrarLayers();
                }}>mostrarLayers Iniciales</button>
            </div>
        </div>
    </>
}
export default MapLayout;