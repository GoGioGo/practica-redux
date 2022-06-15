import { Provider } from 'react-redux';
import store from './store';
import { useEffect, useRef } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import { SELECT_ALL_FILTERS } from './constants/constants'
import { tileStyles } from './map/mapStyles';
import MapLayout from './map/map';
function App() {

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
      <div>
        <MapLayout />
      </div>
    </Provider>
  );
}
export default App;
