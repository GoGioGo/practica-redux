import { useAppUserDispatch } from '../store/hooks/appUserHook';
/*import { useMapDispatch } from '../store/hooks/mapsHooks';
import { useEffect, useRef } from 'react';
import { SELECT_ALL_FILTERS } from '../constants/constants';
import { useMapState } from '../store/hooks/mapsHooks'
import { tileStyles } from '../map/mapStyles';
import { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

let map: any;

function Aumentar() {
    let si = 0, no = 0;
    const mapContainer = useRef<any>(null);
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

    const loadData = (tile: any, name?: string) => {
        let headers = new Headers();
        let token = 'GUEST';
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
        return new Promise((resolve) => {
            (fetch('https://confdevbc.mhfd.org/map', {
                method: 'POST',
                headers,
                body: JSON.stringify({ table: tile })
            }).then(resp => resp.json())
                .then(data => { return (data) }))
                .then(tiles => {
                    resolve(true);
                    if (!name) getMapLayers(tile, tiles);
                })
        })
    }

    const changes = () => {
        replaceAppUser(a);
        const promesas: Promise<any>[] = [];
        SELECT_ALL_FILTERS.forEach((layer) => {
            if (typeof layer === 'object') {
                layer.tiles.forEach((tiles: string) => {
                    promesas.push(loadData(tiles, layer.name));
                })
            } else {
                promesas.push(loadData(layer));
            }
        })
    }

    const selectCheckboxes = (selectedItems: Array<any>) => {

        const deleteLayers = selectedLayers.filter((layer: any) => !selectedItems.includes(layer as string));
        deleteLayers.forEach((layer: any) => {
            removeTilesHandler(layer);

        });
        console.log('selectedItems===>>  ', selectedItems);
        updateSelectedLayers(selectedItems);
    }

    const removeTilesHandler = (selectedLayer: any) => {
        if (typeof selectedLayer === 'object') {
            selectedLayer.tiles.forEach((subKey: string) => {
                hideLayers(subKey);
            });
        } else {
            hideLayers(selectedLayer);
        }
    }
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
        console.log('llego hasta aqui...', selectedLayers)
        let i = 0;
        selectedLayers.forEach((element: any) => {
            console.log('llego hasta aqui ', i, 'veces')
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

    useEffect(() => {
        console.log('selectedLayers', selectedLayers)
        map = new Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-104.94239335213717, 39.775551711914],
            zoom: 12,
            accessToken: 'pk.eyJ1IjoibWlsZWhpZ2hmZCIsImEiOiJjazRqZjg1YWQwZTN2M2RudmhuNXZtdWFyIn0.oU_jVFAr808WPbcVOFnzbg'
        })
    }, [])

    return <>
        <div ref={mapContainer} id="mapa" style={{ width: 800, height: 800 }}></div>
        <div>
            <div>
                <button onClick={() => {
                    changes();
                }}>Aumentar</button>
            </div>
            <div>
                <button onClick={() => {
                    loadSource();
                }}>ver</button>
            </div>
            <div>
                <button onClick={() => {
                    mostrarLayers();
                }}>mostrarLayers Iniciales</button>
            </div>
        </div>
    </>
}
export default Aumentar*/
