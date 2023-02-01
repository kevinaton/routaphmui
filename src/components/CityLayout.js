import { Box, Card, CardActions, CardContent, Grid, Link, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import * as React from "react";
import MasterList from "../assets/masterList"

const paperStyle = {
  height: "86vh", 
  overflow:"hidden",
  display:""
};

const CityLayout = (data) => {
   
  if(data.data.mapSrc == undefined){
    paperStyle.display = "none"
  }

  return (
  <Paper sx={{pb:5}}>
    <Box sx={paperStyle} flex={1}>
      <iframe 
        style={{height:'100%', width:'100%', position:'relative', overflow:'hidden'}}
        src={data.data.mapSrc}
      >
      </iframe>
    </Box>
    <Container sx={{mt:4, pb:5}} maxWidth="xl">
      <Typography variant="h4" component="h1">{data.data.name}</Typography>
      <Grid container spacing={2} sx={{mt:3}}>
      {
        // data.data.id must be equal to city's id route
        MasterList[data.data.id].submenu.map((data, index) => (
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
              >{data.title}</Link>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                }}
              >{ data.locations.length >> 0 ? data.locations.join(', ') : 'No landmarks added yet'}</Typography>
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>
          </Card>
          </Grid>
        ))
      }
      </Grid>
    </Container>
  </Paper>
  );
};

export default CityLayout;
