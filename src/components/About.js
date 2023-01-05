/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faDiscord , } from '@fortawesome/free-brands-svg-icons';
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const boxSpace = {
  mb:4
}

const About = () => {
  return (
    <Box sx={{p:5}}>
      <Box sx={boxSpace}>
        <Typography variant="h4" component="h1">About Us</Typography>
        <Typography variant="body1" component="p">
          We build this app to help tourists and fellow filipinos on utilizing our public transport easily and safely. 
          We are focusing on areas outside Manila. This is to further promote the beautiful places in the Philippines.
        </Typography>
      </Box>

      <Box sx={boxSpace}>
        <Typography variant="h5" component="h2">Become a contributor</Typography>
        <Typography>
          If you want to help us update the routes in your city, click the button below. We will provide rewards to those who are continuously contributing to the community.
        </Typography>
        <Button variant="contained" color="secondary" sx={{mt:2}}>Become a Contributor</Button>
      </Box>

      <Box sx={boxSpace}>
        <Typography variant="h5" component="h2">Join our Community</Typography>
        <Typography>
          Share your ideas, provide some suggestions and feedback, become a contributor and get news and updates from the developers.
        </Typography>
        <Button variant="contained" color="secondary" sx={{mt:2}} startIcon={<FontAwesomeIcon icon={faDiscord} />}>Join Discord</Button>
      </Box>

      <Box sx={boxSpace}>
        <Typography variant="h5" component="h2">Donate</Typography>
        <Typography>
          For us to continue our free service, we're adding ads into our platform. If you want to donate any amount, you can send on the following:
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
