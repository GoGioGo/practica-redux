import { Provider } from 'react-redux';
import store from './store';
// import { useEffect, useRef } from 'react'
// import { mapService } from './map/map';
import Aumentar from './components/aumentar';

function App() {
  


  // const mapContainer = useRef(null);
  // useEffect(() => {
  //   let map = new mapService(mapContainer);
  // }, [])
  return (
    <Provider store={store}>
      {/* <div ref={mapContainer}></div> */}
      <div>
        <Aumentar />
      </div>
    </Provider>
  );
}
export default App;
