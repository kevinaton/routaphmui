import React, { useEffect } from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { Box } from '@mui/system';
import { Autocomplete, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import data from "../assets/masterList.json"
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

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

const center = {
  lat: 12.037028832474519,
  lng: 122.91838000532566
};

const markers = MasterList[0].submenu

const currentPosition = {
  lat:0, lng:0
}

function Home() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      currentPosition.lat = position.coords.latitude
      currentPosition.lng = position.coords.longitude
    });
  })

  // Set value for search
  const [search, setSearch] = React.useState(null)
  const [result, setResults] = React.useState([])
  const [isDisplayResult, setDisplayResult] = React.useState(false)

  const searchHandler = (value) => {
    let loweredCase = value.toLowerCase()
    setResults(
      MasterList.filter(searched => {
        setSearch(value)
        return searched.name.toLowerCase().includes(loweredCase)
      })
    )
  }

  const checkSearchInput = (value) => {
    if(value.length == 0) {
      setDisplayResult(false)
    }
  }

  // Set display of map and results
  React.useEffect(()=>{
    console.log(result)
    if(result.length >> 0) {
      setDisplayResult(true)
    } else {
      setDisplayResult(false)
    }
  }, [result])

  // React.useEffect(()=>{
  //   console.log(isDisplayResult)
  // }, [isDisplayResult])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDfOebxIElD6W5NhOHVSgnF85v61drGRDk'
  })

  const [map, setMap] = React.useState(null)
  const onLoad = React.useCallback(function callback(map) {
    // only example for getting and using the map instance
    map.setZoom(6)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(map)
  }, [map])

  let navigate = useNavigate();
  const markerClick = (path) => {
    navigate(path);
  }

  return isLoaded ? (
    <Box sx={{width:"100%", flexGrow: 1, height:"93vh"}}>
      <Grid sx={{p:3}} container spacing="2">
        <Grid item xs={12} md={4}>
          <Typography sx={{display:{xs:'none', sm:'block'}}} variant="h5" component="h1">Welcome to routa.ph</Typography>
          <Typography>Click a marker below or search for City, route</Typography>
        </Grid>
        <Grid item sx={{mt:{xs:2, sm:2, md:0}}} xs={12} md={8}>

        <Autocomplete
          freeSolo={true}
          id="free-solo-2-demo"
          disableClearable
          value={search} 
          onChange={(event, value)=> searchHandler(value)}
          onInputChange={(event, value, reason)=>checkSearchInput(value,reason)}
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
        </Grid>
      </Grid>
      <Box style={{ width:"100%", height:"100%", display: isDisplayResult ? "none" : "block" }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {
            markers.map((mark) => (
              <MarkerF
                key={mark.name}
                title={mark.name}
                onClick={() => markerClick(mark.path)}
                position={mark.position}
                zIndex="999"
              />
            ))
          }
          <MarkerF
            title="Current Location"
            zIndex="1"
            label="You're here"
            position={currentPosition}
          />
        </GoogleMap>
      </Box>
    </Box>
  ) : <></>
}

export default React.memo(Home)