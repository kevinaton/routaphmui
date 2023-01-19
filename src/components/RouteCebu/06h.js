import { Paper } from "@mui/material";
import * as React from "react";

const paperStyle = {
  height: "93vh", 
  overflow:"hidden"
};

const cebu = () => {
  return (
    <Paper sx={paperStyle} flex={1}>
      <iframe 
        style={{height:'100%', width:'100%', position:'relative', overflow:'hidden'}}
        src="https://www.google.com/maps/d/u/0/embed?mid=1o0I1zxBkwkZ7pytjwfQ_Yz8WT3Jphxs&ehbc=2E312F"
      >
      </iframe>
    </Paper>
  );
};

export default cebu;
