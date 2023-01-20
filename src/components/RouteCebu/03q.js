import { Chip, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import * as React from "react";

const paperStyle = {
  height: "86vh", 
  overflow:"hidden"
};

const locations = ["Ayala Center Cebu", "Landers Superstore Cebu", "Juan Luna Ave", "SM City Cebu"]

const cebu03b = () => {
  return (
    <Box>
      <Box sx={paperStyle} flex={1}>
        <iframe 
          style={{height:'100%', width:'100%', position:'relative', overflow:'hidden'}}
          src="https://www.google.com/maps/d/u/0/embed?mid=1Y0aM-XBv-1lZTQPkq1C0kny1ohm8-XQ&ehbc=2E312F"
        >
        </iframe>
      </Box>
      <Container sx={{mt:4, pb:5}} maxWidth="xl">
        <Typography variant="h4" component="h2">03B Route Mabolo to Carbon</Typography>
        <Typography variant="h6" component="h5">Jeepney Route</Typography>
        <Paper elevation={2} sx={{mt:4, p:2}}>
          <Typography variant="body1" component="p" sx={{mb:2}}>Popular landmarks on this route:</Typography>
          {
            locations.map((area) => (
              <Chip key="area" sx={{mr:1, mb:1}} label={area} />
            ))
          }
        </Paper>
      </Container>
    </Box>
  );
};

export default cebu03b;
