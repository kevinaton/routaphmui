import { Paper, Typography } from "@mui/material";
import * as React from "react";

const paperStyle = {
  height: "93vh", 
  overflow:"hidden"
};

const Cagayan = () => {
  return (
    <Paper sx={paperStyle} flex={1}>
      <Typography>Welcome to cagayan de oro</Typography>
    </Paper>
  );
};

export default Cagayan;
