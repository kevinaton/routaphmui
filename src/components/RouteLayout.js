
import { Box, Chip, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import * as React from "react";

const paperStyle = {
  height: "86vh", 
  overflow:"hidden"
};

const areaList = (info) => {
  if(info.length >> 0) {
    return info.locations.map((area, index) => (
      <Chip key={index} sx={{mr:1, mb:1}} label={area} />
    ))
  } else {
    return <Typography color="grey">No data</Typography>
  }
}

const route = ({ data }) => {
  const info = data
  return (
  <Paper>
    <Box sx={paperStyle} flex={1}>
      <iframe 
        style={{height:'100%', width:'100%', position:'relative', overflow:'hidden'}}
        src={info.mapSrc}
      >
      </iframe>
    </Box>
    <Container sx={{mt:4, pb:5}} maxWidth="xl">
      <Typography variant="h4" component="h2">{info.title ?? ''}</Typography>
      <Typography variant="h6" component="h5">Jeepney Route</Typography>
      <Paper variant="outlined" sx={{mt:4, p:2}}>
          <Typography variant="body1" component="p" sx={{mb:2}}>Popular landmarks:</Typography>
          {areaList(info)}
        </Paper>
    </Container>
  </Paper>
  );
};

export default route;
