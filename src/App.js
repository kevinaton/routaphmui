import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";

// Cityies and about
import Cagayan from "./components/Cities/CagayanDeOroCity";
import Cebu from "./components/Cities/Cebu";
import About from "./components/About";

// Cagayan de oro routes
import RD from "./components/RouteCagayandeoro/rd";
import RC from "./components/RouteCagayandeoro/rc";

// Cebu Routes
import C03B from "./components/RouteCebu/03b.js"
import C03L from "./components/RouteCebu/03l.js"
import C03Q from "./components/RouteCebu/03q.js"

function App() {

  // List of city with route
  const cityList = [
    {name:'Cagayan de Oro City', path:'city/cagayandeorocity'},
    {name:'Cebu City', path:'city/cebucity'},
    {name:'About', path:'about', index:2}
  ];

  // List of routes in CDO
  const cdoRoute = [
    {name:'RD', path:'route/cagayandeoro/rd', src:''},
    {name:'RC', path:'route/cagayandeoro/rc', src:''},
  ];

  // List of routes in cebu
  const cebuRoute = [
    {name:'03B', path:'route/cebu/04b', src:''},
    {name:'03L', path:'route/cebu/03L', src:''},
    {name:'03Q', path:'route/cebu/03L', src:''},
  ]

  return (
    <Box sx={{ height:'100%', overflow:'hidden'}} flex={1}>
      <Navbar prop={{ city:cityList, cdo:cdoRoute, cebu:cebuRoute }} />
      <Box sx={{ height:'100%', overflow:'hidden' }} flex={1}>
        <Routes>

          {/* City and About us route */}
          <Route path="city/cagayandeorocity" element={<Cagayan />} />
          <Route path="city/cebucity" element={<Cebu />} />
          <Route path="about" element={<About />} />

          {/* Cagayan de oro Route */}
          <Route path="route/cagayandeoro/rd" element={<RD />} />
          <Route path="route/cagayandeoro/rc" element={<RC />} />
          
          {/* Cebu Route */}
          <Route path="route/cagayandeoro/rd" element={<C03B />} />
          <Route path="route/cagayandeoro/rd" element={<C03L />} />
          <Route path="route/cagayandeoro/rd" element={<C03Q />} />

          
          <Route path="*" element={<Navigate to="city/cagayandeorocity" replace />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
