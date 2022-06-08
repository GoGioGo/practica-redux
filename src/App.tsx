import './App.css';
import { Provider } from 'react-redux';
import store from './storee';
import { useEffect, useRef } from 'react'
import { mapService } from './map/map'
function App() {
  const mapContainer = useRef(null);
  useEffect(() => {
    let map = new mapService(mapContainer);
  }, [])
  return (
    <Provider store={store}>
      <div className="App">
        Hola Gio
        <div ref={mapContainer}></div>
      </div>
    </Provider>
  );
}

export default App;
