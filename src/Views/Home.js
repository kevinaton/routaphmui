import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Box } from '@mui/system';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const zoom = 6

const center = {
  lat: 12.037028832474519,
  lng: 122.91838000532566
};

const markerOnLoad = marker => {
  console.log('marker: ', marker)
};

const markers = [
  {name:'Cagayan de Oro City', position:{lat: 8.468116915462604, lng: 124.64139117461927}},
  {name:'Cebu City', position:{lat: 10.39344668412612, lng: 123.77195816886562}},
];

function Home() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDfOebxIElD6W5NhOHVSgnF85v61drGRDk'
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // only example for getting and using the map instance
    map.setZoom(zoom)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(map)
  }, [map])

  return isLoaded ? (
    <Box sx={{width:"100%", height:"92vh"}}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {
          markers.map((mark) => (
            <Marker
              key={mark.name}
              onLoad={markerOnLoad}
              position={mark.position}
            />
          ))
        }
      </GoogleMap>
    </Box>
  ) : <></>
}

export default React.memo(Home)