import { Paper } from "@mui/material";
import * as React from "react";

const paperStyle = {
  height: "93vh", 
  overflow:"hidden"
};

const cebu03b = () => {
  return (
    <Paper sx={paperStyle} flex={1}>
      <iframe 
        style={{height:'100%', width:'100%', position:'relative', overflow:'hidden'}}
        src="https://www.google.com/maps/d/u/0/embed?mid=1dg0ZX3aBr0m_TWwI50zyxHK6RY9EaiI&ehbc=2E312F"
      >
      </iframe>
    </Paper>
  );
};

export default cebu03b;
