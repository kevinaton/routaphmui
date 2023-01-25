import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import * as React from "react";
import MasterList from "../assets/masterList"

const CityLayout = (data) => {

  return (
    <Container sx={{mt:4, pb:5}} maxWidth="xl">
      <Typography variant="h4" component="h1">{data.data.name}</Typography>
      <Grid container spacing={3} sx={{ mt:5 }}>
      {
        MasterList[data.data.id].submenu.map((data, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} alignItems="left" justify="center">
          <Card sx={{ mt:1 }}>
            <CardContent sx={{ height:100 }}>
              <Typography 
                variant="h5"
                component="h2"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                }}
              >{data.title}</Typography>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                }}
              >{ data.locations.length >> 0 ? data.locations : 'No landmarks added yet'}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button href={ '/' + data.path } sx={{marginLeft: "auto"}} size="small">View Route</Button>
            </CardActions>
          </Card>
          </Grid>
        ))
      }
      </Grid>
    </Container>
  );
};

export default CityLayout;
