import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Box } from '@mui/system';
import { Autocomplete, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import data from "../assets/masterList.json"
import { Search } from '@mui/icons-material';

const {MasterList} = data

var tempLists = []
MasterList.map((data)=>{
  data.submenu.map((subdata)=>{
    tempLists.push(subdata.name)
    subdata.locations?.map((location)=>{
      tempLists.push(location)
    })
  })
});
var searchLists = [...new Set(tempLists)]

const containerStyle = {
  width: '100%',
  height: '100%'
};

const zoom = 6

const center = {
  lat: 12.037028832474519,
  lng: 122.91838000532566
};

const markers = [
  {name:'Cagayan de Oro City', position:{lat: 8.468116915462604, lng: 124.64139117461927}},
  {name:'Cebu City', position:{lat: 10.39344668412612, lng: 123.77195816886562}},
];

// const markerOnLoad = marker => {
//   console.log('marker: ', marker)
// };

const SearchBar = () => (
  <Autocomplete
    freeSolo={true}
    id="free-solo-2-demo"
    disableClearable
    options={searchLists}
    renderInput={(params) => (        
        <TextField
          {...params}
          label="Search a city, location, route name,"
          InputProps={{
            ...params.InputProps,
            type: 'search',
            endAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <Search />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
    )}
  ></Autocomplete>
);

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
    <Box sx={{width:"100%", flexGrow: 1, height:"93vh"}}>
      <Grid sx={{p:3}} container spacing="2">
        <Grid item xs={12} md={4}>
          <Typography variant="h5" component="h1">Welcome to routa.ph</Typography>
          <Typography>Click a marker below or search for City, route</Typography>
        </Grid>
        <Grid item sx={{mt:{xs:2, sm:2, md:0}}} xs={12} md={8}>
          <SearchBar />
        </Grid>
      </Grid>
      <GoogleMap
        sx={{height:"92vh"}}
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
              position={mark.position}
            />
          ))
        }
      </GoogleMap>
    </Box>
  ) : <></>
}

export default React.memo(Home)