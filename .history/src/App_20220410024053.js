
import './App.css';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'

function App() {

  const Map = () => {
    return (
      <>
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: 23.684994, lng: 90.356331}}
        />
      </>
    )
  }

  const Wrapped = withScriptjs(withGoogleMap(Map));

  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <Wrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_GOOGLE_MAP_API
          }``}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
