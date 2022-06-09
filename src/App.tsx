import { Provider } from 'react-redux';
import store from './store';
// import { useEffect, useRef } from 'react'
//import { mapService } from './map/map';
import Aumentar from './components/aumentar';
import { useEffect, useRef } from 'react'
import { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { SELECT_ALL_FILTERS } from './constants/constants'
//import { useMapState } from './store/hooks/mapsHooks'
import { tileStyles } from './map/mapStyles';

// let map: any;
// let mapa = "mapa"
function App() {

  // const { layers } = useMapState();

  //const mapContainer = useRef<any>(null);

  // const addLayersSource = (key: string, tiles: Array<String>) => {
  //   if (!map.getSource(key)) {
  //     map.addSource(key, {
  //       type: 'vector',
  //       tiles: tiles
  //     });
  //     addTilesLayers(key);
  //   }
  // }

  // const loadSource = () => {
  //   SELECT_ALL_FILTERS.forEach(layer => {
  //     if (typeof layer === 'object') {
  //       if (layer.tiles) {
  //         layer.tiles.forEach(subkey => {
  //           const tiles = layers[layer.name] as any;
  //           if (tiles) {
  //             addLayersSource(subkey, tiles[subkey]);
  //           }
  //         })
  //       }
  //     } else {
  //       addLayersSource(layer, layers[layer]);
  //     }
  //   })
  // }

  // const addTilesLayers = (key: string) => {
  //   const styles = { ...tileStyles as any };
  //   styles[key].forEach((style: any, index: number) => {
  //     if (style.source_name) {
  //       map.addLayer({
  //         id: key + '_' + index,
  //         source: style.source_name,
  //         ...style
  //       });
  //     } else {
  //       map.addLayer({
  //         id: key + '_' + index,
  //         source: key,
  //         ...style
  //       });
  //     }
  //   })
  // }

  // useEffect(() => {
  //   let x: any = "mapContainer";
  //   map = new Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [-77.08368301391602, 38.89009754221234],
  //     zoom: 12,
  //     accessToken: 'pk.eyJ1IjoibWlsZWhpZ2hmZCIsImEiOiJjazRqZjg1YWQwZTN2M2RudmhuNXZtdWFyIn0.oU_jVFAr808WPbcVOFnzbg'
  //   })

  //}, [])

  return (
    <Provider store={store}>
      {/* <div ref={mapContainer} id="mapa" style={{ width: 800, height: 800 }}></div> */}
      <div>
        <Aumentar />
      </div>
      {/* <div>
        <button onClick={() => loadSource()}>cargar</button>
      </div> */}
    </Provider>
  );
}
export default App;
