import { Chip, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import * as React from "react";

const paperStyle = {
  height: "86vh", 
  overflow:"hidden"
};

const locations = ["P Cabantan", "Waterfront Hotel", "San Carlos Seminar Complex", "PLDT", "Camelita Monastery", "St Joseph Parish", "The Persimmon","Hopodromo", "Carreta Cemetery", "Imus Ave", "Museo Sugbo", "Cpils","Tiburcio Padilla St", "Commission on Audit COA", "Cebu Technological University", "Vicente Gullas St", "Dionsio Jakosalem St", "Legaspi St","Progreso St", "Carbon Public Market", "Cebu City Hall", "La Nueva", "Metropolitan Cebu Water District", "Department of Foreign Affairs DFA", "Cebu Technological University", "Commission on Audit COA", "National Statistics Office NSO", "Cpils", "Museo Sugbo", "Imus Ave", "Carreta Cemetery", "Hopodromo", "The Persimmon", "P Cabantan"]

const cebu03b = () => {
  return (
    <Box>
      <Box sx={paperStyle} flex={1}>
        <iframe 
          style={{height:'100%', width:'100%', position:'relative', overflow:'hidden'}}
          src="https://www.google.com/maps/d/u/2/embed?mid=1AaK5NM8Z75cElP0WsX32dsmgRXcRLNE&ehbc=2E312F"
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
