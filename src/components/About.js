/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faDiscord , } from '@fortawesome/free-brands-svg-icons';
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import gcashImage from "../assets/gcash.JPG"
import bpiImage from "../assets/bpiqr.jpg"
import React from "react";

const boxSpace = {
  mb:4
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
}

const About = () => {
  const [gcashOpen, gcashSetOpen] = React.useState(false)
  const gcashOnOpen = () => gcashSetOpen(true)
  const gcashOnClose = () => gcashSetOpen(false)

  const [bpiOpen, bpiSetOpen] = React.useState(false)
  const bpiOnOpen = () => bpiSetOpen(true)
  const bpiOnClose = () => bpiSetOpen(false)

  return (
    <Container sx={{p:5}} maxWidth="xl">
      <Box sx={boxSpace}>
        <Typography variant="h4" component="h1">About Us</Typography>
        <Typography variant="body1" component="p">
          We build this app to help tourists and fellow filipinos on utilizing our public transport easily and safely. 
          We are focusing on areas outside Manila. This is to further promote the beautiful places in the Philippines.
        </Typography>
      </Box>

      <Box sx={boxSpace}>
        <Typography variant="h5" component="h2">Give us Feedback</Typography>
        <Typography>
          Your feedback would greatly help us improve the experience of Routa.ph. Click the button below to provide us your suggestions, feedback, opportunities, or partnerships.
        </Typography>
        <Button variant="contained" size="medium" color="primary" sx={{mt:2}} href="https://docs.google.com/forms/d/e/1FAIpQLScLMmvUEe2IsBpK0ciWGMmq4g90BZFjN1s7iqMj1JgKoxp0oQ/viewform?usp=sf_link">Give Feedback</Button>
      </Box>

      <Box sx={boxSpace}>
        <Typography variant="h5" component="h2">Become a contributor</Typography>
        <Typography>
          If you want to help us update the routes in your city, click the button below. We will provide rewards to those who are continuously contributing to the community.
        </Typography>
        <Button variant="contained" size="medium" color="primary" sx={{mt:2}} href="https://docs.google.com/forms/d/e/1FAIpQLScLMmvUEe2IsBpK0ciWGMmq4g90BZFjN1s7iqMj1JgKoxp0oQ/viewform?usp=sf_link">Become a Contributor</Button>
      </Box>

      <Box sx={boxSpace}>
        <Typography variant="h5" component="h2">Join our Community</Typography>
        <Typography>
          Share your ideas, provide some suggestions and feedback, become a contributor and get news and updates from the developers.
        </Typography>
        <Button variant="contained" size="medium" color="discordColor" href="https://discord.gg/8nC5y96q" sx={{mt:2}} startIcon={<FontAwesomeIcon icon={faDiscord} />}>Join Discord</Button>
      </Box>

      <Box sx={boxSpace}>
        <Typography variant="h5" component="h2">Donate</Typography>
        <Typography>
          For us to continue our free service, we're adding ads into our platform. If you want to donate any amount, you can send on the following:
        </Typography>
        <Button onClick={gcashOnOpen} variant="outlined" color="primary" sx={{mt:2, mr:2}}>GCash</Button>
        <Modal
          open={gcashOpen}
          onClose={gcashOnClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box 
            component="img"
            sx={modalStyle}
            alt="gcash qr"
            src={gcashImage}
          />
        </Modal>
        <Button onClick={bpiOnOpen} variant="outlined" color="primary" sx={{mt:2, mr:2}}>Bank</Button>
        <Modal
          open={bpiOpen}
          onClose={bpiOnClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box 
            component="img"
            sx={modalStyle}
            alt="gcash qr"
            src={bpiImage}
          />
        </Modal>
      </Box>
    </Container>
  );
};

export default About;
