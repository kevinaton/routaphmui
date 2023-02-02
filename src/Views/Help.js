/* eslint-disable react/no-unescaped-entities */
import React from "react";
import gMapMenu from "../assets/mapmenu.png";
import gMapEnlarge from "../assets/gmapExpand.png";
import { Box, Container, Typography } from "@mui/material";

const boxSpace = {
  mb:4
}

const imgFormat = {
  width:'100%',
  maxWidth:800
}

const About = () => {
  return (
    <Container sx={{p:5}} maxWidth="xl">
      <Box sx={boxSpace}>
        <Typography sx={{display:'none'}} variant="h4" component="h1">Help</Typography>
        <Typography variant="h4" component="h3">How to use routa.ph</Typography>
        <Typography variant="body1" component="p">
          Here's a simple step on how to use routa.ph:
        </Typography>
        
        <Box component="ol">
          <Box component="li">Select a City</Box>
          <Box mt={2} component="li">Select the google map menu button to see the list of Routes. See reference below.</Box>
          <Box
            component="img"
            src={gMapMenu}
            alt="gmap menu"
            sx={imgFormat}
            loading="lazy"
          />
          <Box mt={2} component="li">Click the expand button to transfer the routes to your Google map app. (Note: Make sure you already have the GMap App)</Box>
          <Box
            component="img"
            src={gMapEnlarge}
            alt="gmap fullscreen"
            sx={imgFormat}
            loading="lazy"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default About;
