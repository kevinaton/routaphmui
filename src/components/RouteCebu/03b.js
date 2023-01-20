import { Box, Chip, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import * as React from "react";

const paperStyle = {
  height: "86vh", 
  overflow:"hidden"
};

const locations = [ 'Sindulan St', 'St Joseph Parish', 'The Persimmon', 'Hopodromo', 'Carreta Cemetery', 'University of San Carlos North Campus','Fooda Saversmart', 'Horizons 101', 'Mango Square Mall', 'Fuente Osmeña Circle', 'Crown Regency Suites', 'Abellana Sports Complex', 'Social Security System SSS', 'GV Tower Hotel', 'Metro Colon', 'University of san jose recoletos', 'Cebu City Hall', 'La Nueva', 'Metropolitan Cebu Water District', 'Dept of Foreign Affairs DFA', 'Cebu Technological University', 'National Statistics Office NSO', 'Cpils', 'Museo Sugbo', 'Carreta Cemetery', 'Hopodromo', 'The Persimmon', 'St Joseph Parish', 'Sindulan St' ]

const cebu03b = () => {
  return (
    <Paper>
      <Box sx={paperStyle} flex={1}>
        <iframe 
          style={{height:'100%', width:'100%', position:'relative', overflow:'hidden'}}
          src="https://www.google.com/maps/d/u/2/embed?mid=17WFs8gvTCDMxae9xT0BbClFJlCpXe7s&ehbc=2E312F"
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
    </Paper>
  );
};

export default cebu03b;
