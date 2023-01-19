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
        src="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d15702.21155913857!2d123.88285787536259!3d10.2975629317825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x33a9996cf04797bb%3A0xb91b3e68c6622f48!2sSM%20City%20Cebu%2C%20Juan%20Luna%20Ave%20Ext%2C%20Cebu%20City%2C%20Cebu!3m2!1d10.3114191!2d123.91781639999999!4m5!1s0x33a9996957a7a081%3A0xca5960c0a7287652!2sA.%20Soriano%20Ave%2C%20Cebu%20City%2C%20Cebu!3m2!1d10.310769599999999!2d123.91428529999999!4m5!1s0x33a9996795ac9e63%3A0x116ca7a84f62a22e!2sG.%20Gaisano%20St%2C%20Cebu%20City%2C%20Cebu!3m2!1d10.3042699!2d123.9089765!4m5!1s0x33a9995dc1d1fa11%3A0xe69f66827dc6405a!2sCLH%2C%20T.%20Padilla%20cor%20M.J.%20Cuenco%20Street%2C%206000%2C%20Cebu%20City!3m2!1d10.3020334!2d123.9066593!4m5!1s0x33a9995ec61f7425%3A0xe08de3200e7015e9!2s59%20Sikatuna%20St%2C%20Cebu%20City%2C%20Cebu!3m2!1d10.2999765!2d123.90325589999999!4m5!1s0x33a99c424d0ac3cf%3A0xc5f06bc611f7ae25!2sL.%20Gabuya%20St%2C%20Cebu%20City%2C%20Cebu!3m2!1d10.2816639!2d123.86545179999999!5e0!3m2!1sen!2sph!4v1674142780230!5m2!1sen!2sph"
        allowfullscreen=""
        loading="lazy"
      >
      </iframe>
    </Paper>
  );
};

export default cebu;
