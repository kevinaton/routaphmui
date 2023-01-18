import { Paper, Typography } from "@mui/material";
import * as React from "react";

const paperStyle = {
  height: "93vh", 
  overflow:"hidden"
};

const Cebu = () => {
  return (
    <Paper sx={paperStyle} flex={1}>
      <Typography>Welcome to Cebu</Typography>
    </Paper>
  );
};

export default Cebu;
