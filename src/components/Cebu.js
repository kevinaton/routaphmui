import { Paper } from "@mui/material";
import * as React from "react";

const paperStyle = {
  height: "93vh", 
  overflow:"hidden"
};

const Cebu = () => {
  return (
    <Paper sx={paperStyle} flex={1}>
      <iframe 
        style={{height:'100%', width:'100%', position:'relative', overflow:'hidden'}}
        src="https://www.google.com/maps/d/u/0/embed?mid=1VxPR9vi1WxjKjcHgrvSjd8p1XTDFRLU&ehbc=2E312F"
      >
      </iframe>
    </Paper>
  );
};

export default Cebu;
