import React, { useEffect } from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { Autocomplete, Box, Card, CardActions, CardContent, Divider, Grid, IconButton, InputAdornment, Link, TextField, Typography } from '@mui/material';
import data from "../assets/masterList.json"
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import youHere from '../assets/youHere.png'

const {MasterList} = data

// Defining you are here icon
const youHereIcon = {
  url:youHere,
  scaledSize: { width:24, height:34.143451143451145 }
}

// These are the list of options for the search field
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

  // Search functionality, it will provide the list of routes that is searched.
  const [searchValue, setSearchValue] = React.useState('')
  const [result, setResults] = React.useState([])
  const [isDisplayResult, setDisplayResult] = React.useState(false)

  const searchHandler = (event, value) => {
    if (value != "") {
      setSearchValue(value)
      
      // Search for city
      const searchCity = MasterList[0].submenu.filter(
        (item) => item.name.toLowerCase().includes(value.toLowerCase())
      );

      // Search for route
      const searchRoute = MasterList.slice(1).map(
        (item) => item.submenu.filter(
          (subitem)=>subitem.name.toLowerCase() === value.toLowerCase()
        )
      );

      // Search Locations
      const searchLocations = []
      MasterList.slice(1).forEach(item => {
        item.submenu.forEach(subitem => {
          const filteredLocations = subitem.locations.filter(location =>
            location.toLowerCase().includes(value.toLowerCase())
          );

          if(filteredLocations.length > 0) {
            searchLocations.push({
              name: subitem.name,
              path: subitem.path,
              mapSrc: subitem.mapSrc,
              title: subitem.title,
              locations: subitem.locations
            })
          }
        })
      })
            
      const rSearchRoute = searchRoute.reduce((acc, item) => [...acc, ...item], []);
      const setResult = [...searchCity, ...rSearchRoute ,...searchLocations]

      setResults([...new Set(setResult)])
    } 
  }

  const checkSearchInput = (value) => {
    if(value.length == 0) {
      setDisplayResult(false)
    }
  }

  // Set display of map and results
  React.useEffect(()=>{
    if(result.length >> 0) {
      console.log(result)
      setDisplayResult(true)
    } else {
      setDisplayResult(false)
    }
  }, [result])

  // Display the results in a gird cards layout
  const resultDisplay = (data) => {
    // data.locations || data.submenu ? data.locations?.join(', ') || data.submenu?.map(e=>e.title).join(', ') : 'No landmarks added yet'

    if(data.locations){
      return data.locations?.join(', ')
    }
    if(data.submenu){
      return data.submenu.map(e=>e.title).join(', ')
    }
    if(data.details) {
      return data.details
    }
    else {
      return 'No data'
    }
  }

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
    <Box sx={{width:"100%", height:"100%", flexGrow: 1}}>
      <Grid sx={{p:3}} container spacing="2">
        <Grid item xs={12} sm={12} md={5}>
          <Typography sx={{display:{xs:'none', sm:'block'}}} variant="h5" component="h1">Welcome to routa.ph</Typography>
          <Typography>Search or click a marked city below.</Typography>
        </Grid>
        <Grid item sx={{mt:{xs:2, sm:2, md:0}}} xs={12} sm={12} md={7}>
          <Autocomplete
            id="free-solo-2-demo"
            freeSolo={true}
            disableClearable
            value={searchValue} 
            onChange={searchHandler}
            onInputChange={(value, reason)=>checkSearchInput(value,reason)}
            options={searchLists}
            renderInput={(params) => (        
                <TextField
                  {...params}
                  label="Search a city, location, route name,"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                    endAdornment: (
                      <InputAdornment position="end">
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
      <Box sx={{ width:"100%", height:"83vh", display: isDisplayResult ? "none" : "block" }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <MarkerF
            icon={youHereIcon}
            title="Current Location"
            position={currentPosition}
            zIndex="100"
          />
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
        </GoogleMap>
      </Box>
      <Box sx={{ p:3, display: isDisplayResult ? "block" : "none"}}>
      <Divider></Divider>
      <Typography variant="body1" sx={{mt:2}}>Here are the results:</Typography>
      <Grid container spacing={2} sx={{mt:1, mb:5}}>
        {
          // data.data.id must be equal to city's id route
          result.map((data, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} alignItems="left" justify="center">
            <Card variant="outlined">
              <CardContent sx={{ height:100 }}>
                <Link
                  underline='none'
                  variant='h5'
                  color="primary"
                  href={'/' + data.path}
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                  }}
                >{data.title ? data.title : data.name}</Link>
                <Typography
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >{resultDisplay(data)}</Typography>
              </CardContent>
              <CardActions disableSpacing>
              </CardActions>
            </Card>
            </Grid>
          ))
        }
      </Grid>
    </Box>
    </Box>
  ) : <></>
}

export default React.memo(Home)